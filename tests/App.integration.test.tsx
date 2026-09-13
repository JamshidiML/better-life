import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { App } from '../src/app/App';
import { SUPPORT_PLAN_STORAGE_KEY } from '../src/shared/storage/supportPlanStorage';

async function chooseBasicPlan(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('button', { name: 'Guide me' }));
  await user.click(screen.getByRole('button', { name: 'Stay focused' }));
  await user.click(screen.getByRole('button', { name: 'Continue' }));
  await user.click(
    screen.getByRole('button', { name: 'When I feel distracted' }),
  );
  await user.click(screen.getByRole('button', { name: 'Continue' }));
  await user.click(screen.getByTestId('primary-change_environment'));
  await user.click(screen.getByRole('button', { name: 'Continue' }));
  await user.click(screen.getByTestId('fallback-short_activity'));
  await user.click(screen.getByRole('button', { name: 'Continue' }));
}

describe('VS-01 application integration', () => {
  it('completes the five-decision journey and clears use-once state at finish', async () => {
    const user = userEvent.setup();
    render(<App />);
    await chooseBasicPlan(user);
    await user.click(screen.getByTestId('persistence-use-once'));

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(
      screen.getByText(/You said you want to: Stay focused/),
    ).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: 'Try my fallback' }));
    await user.click(screen.getByRole('button', { name: 'Finish' }));

    expect(screen.getByText('Your use-once guide was cleared.')).toBeVisible();
    expect(window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY)).toBeNull();
  });

  it('supports a skipped primary action and no fallback', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Guide me' }));
    await user.click(
      screen.getByRole('button', { name: 'Reduce distraction' }),
    );
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(
      screen.getByRole('button', { name: 'When using my phone' }),
    );
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByTestId('primary-continue_without_action'));
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByTestId('fallback-no_fallback'));
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByTestId('persistence-use-once'));

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByText('Continue without an action.')).toBeVisible();
  });

  it('saves locally, restores, edits, and clears the plan', async () => {
    const user = userEvent.setup();
    const first = render(<App />);
    await chooseBasicPlan(user);
    await user.click(screen.getByTestId('persistence-save-local'));
    expect(
      window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY),
    ).not.toBeNull();
    first.unmount();

    render(<App />);
    expect(
      screen.getByRole('heading', {
        name: 'Your saved guide is ready.',
      }),
    ).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Edit my plan' }));
    await user.click(screen.getByTestId('primary-pause'));
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByTestId('fallback-no_fallback'));
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByTestId('persistence-save-local'));

    const updated = JSON.parse(
      window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY) ?? '{}',
    ) as { primaryAction?: string };
    expect(updated.primaryAction).toBe('pause');

    await user.click(screen.getByRole('button', { name: 'Exit' }));
    await user.click(screen.getByRole('button', { name: 'Clear my data' }));
    expect(window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY)).toBeNull();
  });

  it('discards the current plan immediately', async () => {
    const user = userEvent.setup();
    render(<App />);
    await chooseBasicPlan(user);
    await user.click(screen.getByTestId('persistence-discard'));
    expect(screen.getByText('Your plan was discarded.')).toBeVisible();
    expect(window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY)).toBeNull();
  });

  it('keeps the journey usable when browser-local saving fails', async () => {
    const user = userEvent.setup();
    render(<App />);
    await chooseBasicPlan(user);
    vi.spyOn(window.localStorage, 'setItem').mockImplementationOnce(() => {
      throw new Error('storage unavailable');
    });

    await user.click(screen.getByTestId('persistence-save-local'));
    expect(
      screen.getByText(
        'This browser could not update local storage. Choose Use once or Discard instead.',
      ),
    ).toBeVisible();
    await user.click(screen.getByTestId('persistence-use-once'));
    expect(
      screen.getByRole('heading', {
        name: 'Give yourself a moment before deciding what to do next.',
      }),
    ).toBeVisible();
  });

  it('offers a neutral reset when saved local state is invalid', async () => {
    window.localStorage.setItem(SUPPORT_PLAN_STORAGE_KEY, '{not valid');
    const user = userEvent.setup();
    render(<App />);
    expect(
      screen.getByRole('heading', {
        name: 'Your saved guide could not be loaded.',
      }),
    ).toBeVisible();
    await user.click(
      screen.getByRole('button', { name: 'Clear local data and restart' }),
    );
    expect(
      screen.getByText('The unreadable local data was cleared.'),
    ).toBeVisible();
  });
});
