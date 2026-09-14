import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { App } from '../src/app/App';
import { createSupportPlan } from '../src/features/support-plan/model';
import { SUPPORT_PLAN_STORAGE_KEY } from '../src/shared/storage/supportPlanStorage';

const original = createSupportPlan(
  {
    goal: 'Original guide goal',
    broadContext: 'When I choose to start',
    primaryAction: 'change_environment',
    fallbackAction: 'short_activity',
  },
  'save_local',
);
const originalRaw = JSON.stringify(original);
type User = ReturnType<typeof userEvent.setup>;

function seedOriginal() {
  window.localStorage.setItem(SUPPORT_PLAN_STORAGE_KEY, originalRaw);
}

async function editToData(user: User) {
  await user.click(screen.getByRole('button', { name: 'Edit my plan' }));
  await user.click(screen.getByTestId('primary-pause'));
  await user.click(screen.getByRole('button', { name: 'Continue' }));
  await user.click(screen.getByTestId('fallback-no_fallback'));
  await user.click(screen.getByRole('button', { name: 'Continue' }));
}

async function demoToData(user: User) {
  await user.click(screen.getByRole('button', { name: /Focus/ }));
  for (let step = 0; step < 4; step++) {
    await user.click(screen.getByRole('button', { name: 'Continue' }));
  }
}

async function finish(user: User, fallback = false) {
  for (let step = 0; step < 3; step++) {
    await user.click(screen.getByRole('button', { name: 'Continue' }));
  }
  await user.click(
    screen.getByRole('button', {
      name: fallback ? 'Try my fallback' : "I'm done",
    }),
  );
  await user.click(screen.getByRole('button', { name: 'Finish' }));
}

function expectOriginal() {
  expect(
    screen.getByRole('heading', { name: 'Your saved guide is ready.' }),
  ).toBeVisible();
  expect(
    screen.getByText('Original guide goal', { exact: true }),
  ).toBeVisible();
  expect(screen.getByText('Change environment', { exact: true })).toBeVisible();
  expect(window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY)).toBe(
    originalRaw,
  );
}

describe('temporary edits preserve the saved guide', () => {
  it.each(['finish', 'exit', 'discard', 'leave'] as const)(
    '%s clears only temporary changes and restores the original after remount',
    async (ending) => {
      seedOriginal();
      const user = userEvent.setup();
      const app = render(<App />);
      await editToData(user);
      const save = vi.spyOn(window.localStorage, 'setItem');
      const remove = vi.spyOn(window.localStorage, 'removeItem');
      if (ending === 'discard') {
        await user.click(screen.getByTestId('persistence-discard'));
      } else if (ending === 'leave') {
        await user.click(screen.getByRole('button', { name: 'Leave guide' }));
      } else {
        await user.click(screen.getByTestId('persistence-use-once'));
        expect(window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY)).toBe(
          originalRaw,
        );
        if (ending === 'finish') await finish(user);
        else await user.click(screen.getByRole('button', { name: 'Exit' }));
      }
      expect(save).not.toHaveBeenCalled();
      expect(remove).not.toHaveBeenCalled();
      expect(screen.getByRole('status')).toHaveTextContent(
        'Your saved plan is unchanged.',
      );
      expect(document.getElementById('main-content')).toHaveFocus();
      expectOriginal();
      app.unmount();
      render(<App />);
      expectOriginal();
    },
  );

  it('restores the original if the app is reloaded during temporary use', async () => {
    seedOriginal();
    const user = userEvent.setup();
    const app = render(<App />);
    await editToData(user);
    await user.click(screen.getByTestId('persistence-use-once'));
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(
      screen.getByText('Pause for a moment', { exact: true }),
    ).toBeVisible();
    app.unmount();
    render(<App />);
    expectOriginal();
  });

  it('preserves the original after a failed replacement save, then permits temporary use', async () => {
    seedOriginal();
    const user = userEvent.setup();
    render(<App />);
    await editToData(user);
    vi.spyOn(window.localStorage, 'setItem').mockImplementation(() => {
      throw new DOMException('Full', 'QuotaExceededError');
    });
    await user.click(screen.getByTestId('persistence-save-local'));
    expect(screen.getByRole('alert')).toHaveTextContent(
      'could not save this plan',
    );
    expect(screen.getByRole('alert')).toHaveFocus();
    expect(window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY)).toBe(
      originalRaw,
    );
    await user.click(screen.getByTestId('persistence-use-once'));
    await finish(user);
    expectOriginal();
  });
});

describe('storage failure recovery', () => {
  it.each(['access', 'read'] as const)(
    'keeps Use once operational when storage %s throws',
    async (failure) => {
      seedOriginal();
      const backing = window.localStorage;
      const fail = () => {
        throw new DOMException('Unavailable', 'SecurityError');
      };
      const denied =
        failure === 'access'
          ? vi.spyOn(window, 'localStorage', 'get').mockImplementation(fail)
          : vi.spyOn(backing, 'getItem').mockImplementation(fail);
      const save = vi.spyOn(backing, 'setItem');
      const remove = vi.spyOn(backing, 'removeItem');
      const user = userEvent.setup();
      render(<App />);
      expect(
        screen.getByRole('heading', {
          name: 'Browser storage is unavailable.',
        }),
      ).toBeVisible();
      expect(screen.getByRole('alert')).not.toHaveTextContent('malformed');
      await user.click(
        screen.getByRole('button', { name: 'Continue without saving' }),
      );
      await demoToData(user);
      expect(screen.getByTestId('persistence-save-local')).toBeDisabled();
      await user.click(screen.getByTestId('persistence-use-once'));
      await finish(user, true);
      expect(
        screen.getByText('Your use-once guide was cleared.'),
      ).toBeVisible();
      expect(save).not.toHaveBeenCalled();
      expect(remove).not.toHaveBeenCalled();
      denied.mockRestore();
      expect(backing.getItem(SUPPORT_PLAN_STORAGE_KEY)).toBe(originalRaw);
      await user.click(
        screen.getByRole('button', { name: 'Review browser storage' }),
      );
      await user.click(
        screen.getByRole('button', { name: 'Try reading again' }),
      );
      expectOriginal();
    },
  );

  it.each(['saved', 'malformed', 'unsupported'] as const)(
    'does not claim successful deletion from %s state when removeItem throws, and permits retry',
    async (state) => {
      const raw =
        state === 'saved'
          ? originalRaw
          : state === 'malformed'
            ? '{bad data'
            : JSON.stringify({ ...original, schemaVersion: 2 });
      window.localStorage.setItem(SUPPORT_PLAN_STORAGE_KEY, raw);
      const user = userEvent.setup();
      render(<App />);
      const removal = vi
        .spyOn(window.localStorage, 'removeItem')
        .mockImplementation(() => {
          throw new DOMException('Unavailable', 'SecurityError');
        });
      await user.click(
        screen.getByRole('button', {
          name:
            state === 'saved'
              ? 'Clear my data'
              : 'Clear local data and restart',
        }),
      );
      expect(
        screen.getByRole('heading', {
          name: 'Removal could not be confirmed.',
        }),
      ).toBeVisible();
      expect(screen.getByRole('alert')).toHaveTextContent(
        'could not confirm removal from browser storage',
      );
      expect(
        screen.queryByText('Your locally saved data was cleared.'),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('The unreadable local data was cleared.'),
      ).not.toBeInTheDocument();
      expect(window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY)).toBe(raw);
      expect(document.getElementById('main-content')).toHaveFocus();
      removal.mockRestore();
      await user.click(
        screen.getByRole('button', { name: 'Try removal again' }),
      );
      expect(
        screen.getByText('Your locally saved data was cleared.'),
      ).toBeVisible();
      expect(window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY)).toBeNull();
    },
  );

  it('does not claim deletion if the confirmation read fails after removal', async () => {
    seedOriginal();
    const user = userEvent.setup();
    render(<App />);
    vi.spyOn(window.localStorage, 'getItem').mockImplementationOnce(() => {
      throw new DOMException('Unavailable', 'SecurityError');
    });
    await user.click(screen.getByRole('button', { name: 'Clear my data' }));
    expect(screen.getByRole('alert')).toHaveTextContent(
      'could not confirm removal',
    );
    expect(
      screen.queryByText('Your locally saved data was cleared.'),
    ).not.toBeInTheDocument();
    await user.click(
      screen.getByRole('button', { name: 'Continue without saving' }),
    );
    await demoToData(user);
    expect(screen.getByTestId('persistence-save-local')).toBeDisabled();
    await user.click(screen.getByTestId('persistence-use-once'));
    await user.click(screen.getByRole('button', { name: 'Exit' }));
    expect(
      screen.getByText('Your use-once guide was cleared when you exited.'),
    ).toBeVisible();
    expect(
      screen.getByText(/could not confirm removal from browser storage/),
    ).toBeVisible();
  });

  it('can use once alongside unsupported data without overwriting or deleting it', async () => {
    const raw = JSON.stringify({ ...original, schemaVersion: 2 });
    window.localStorage.setItem(SUPPORT_PLAN_STORAGE_KEY, raw);
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByRole('alert')).toHaveTextContent('unsupported version');
    await user.click(
      screen.getByRole('button', { name: 'Continue without saving' }),
    );
    await demoToData(user);
    expect(screen.getByTestId('persistence-save-local')).toBeDisabled();
    await user.click(screen.getByTestId('persistence-use-once'));
    await finish(user, true);
    expect(window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY)).toBe(raw);
  });
});
