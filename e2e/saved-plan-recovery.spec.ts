import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const KEY = 'better-life.vs01.support-plan';
const original = {
  schemaVersion: 1,
  goal: 'Original synthetic goal',
  broadContext: 'When I choose to start',
  primaryAction: 'change_environment',
  fallbackAction: 'short_activity',
  persistenceMode: 'save_local',
};
const originalRaw = JSON.stringify(original);

async function loadOriginal(page: Page) {
  await page.goto('/');
  await page.evaluate(({ key, raw }) => localStorage.setItem(key, raw), {
    key: KEY,
    raw: originalRaw,
  });
  await page.reload();
}

async function editToData(page: Page) {
  await page.getByRole('button', { name: 'Edit my plan' }).click();
  await page.getByTestId('primary-pause').click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByTestId('fallback-no_fallback').click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
}

async function demoToData(page: Page) {
  await page.getByRole('button', { name: /Focus/ }).click();
  for (let step = 0; step < 4; step++) {
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
  }
}

async function completeSpiral(page: Page, fallback = false) {
  for (let step = 0; step < 3; step++) {
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
  }
  await page
    .getByRole('button', { name: fallback ? 'Try my fallback' : "I'm done" })
    .click();
}

async function expectOriginal(page: Page) {
  await expect(
    page.getByRole('heading', { name: 'Your saved guide is ready.' }),
  ).toBeVisible();
  await expect(
    page.getByText('Change environment', { exact: true }),
  ).toBeVisible();
  expect(await page.evaluate((key) => localStorage.getItem(key), KEY)).toBe(
    originalRaw,
  );
}

for (const ending of ['finish', 'exit', 'discard'] as const) {
  test(`saved edit -> ${ending} preserves the original bytes and reload restores them`, async ({
    page,
  }) => {
    await loadOriginal(page);
    await editToData(page);
    await expect(page.getByTestId('persistence-use-once')).toContainText(
      'unchanged saved plan',
    );
    await expect(page.getByTestId('persistence-discard')).toContainText(
      'temporary changes',
    );
    if (ending === 'discard') {
      await page.getByTestId('persistence-discard').click();
    } else {
      await page.getByTestId('persistence-use-once').click();
      expect(await page.evaluate((key) => localStorage.getItem(key), KEY)).toBe(
        originalRaw,
      );
      if (ending === 'finish') {
        await completeSpiral(page);
        await page.getByRole('button', { name: 'Finish', exact: true }).click();
      } else {
        await page.getByRole('button', { name: 'Exit', exact: true }).click();
      }
    }
    await expect(page.getByRole('status')).toContainText(
      'Your saved plan is unchanged.',
    );
    await expect(page.locator('#main-content')).toBeFocused();
    await expectOriginal(page);
    await page.reload();
    await expectOriginal(page);
  });
}

test('reload during temporary use restores the original, not the edited action', async ({
  page,
}) => {
  await loadOriginal(page);
  await editToData(page);
  await page.getByTestId('persistence-use-once').click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await expect(
    page.getByText('Pause for a moment', { exact: true }),
  ).toBeVisible();
  await page.reload();
  await expectOriginal(page);
});

for (const operation of ['access', 'getItem'] as const) {
  test(`${operation} failure keeps the complete Use once journey operational`, async ({
    page,
  }) => {
    const errors: string[] = [];
    const externalRequests: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('request', (request) => {
      if (new URL(request.url()).origin !== 'http://127.0.0.1:4173')
        externalRequests.push(request.url());
    });
    await page.addInitScript((operation) => {
      const deny = () => {
        throw new DOMException('Synthetic denial', 'SecurityError');
      };
      if (operation === 'access') {
        Object.defineProperty(window, 'localStorage', {
          configurable: true,
          get: deny,
        });
      } else {
        Storage.prototype.getItem = deny;
      }
    }, operation);
    await page.goto('/');
    await expect(
      page.getByRole('heading', { name: 'Browser storage is unavailable.' }),
    ).toBeVisible();
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    await page.getByRole('button', { name: 'Continue without saving' }).click();
    await demoToData(page);
    await expect(page.getByTestId('persistence-save-local')).toBeDisabled();
    await page.getByTestId('persistence-use-once').click();
    await completeSpiral(page, true);
    await page.getByRole('button', { name: 'Finish', exact: true }).click();
    await expect(
      page.getByText('Your use-once guide was cleared.'),
    ).toBeVisible();
    await expect(
      page.getByText(/could not read browser storage/),
    ).toBeVisible();
    expect(errors).toEqual([]);
    expect(externalRequests).toEqual([]);
  });
}

test('failed save preserves the original and keyboard navigation can select Use once', async ({
  page,
}) => {
  await loadOriginal(page);
  await editToData(page);
  await page.evaluate(() => {
    Storage.prototype.setItem = () => {
      throw new DOMException('Synthetic quota', 'QuotaExceededError');
    };
  });
  await page.getByTestId('persistence-save-local').click();
  await expect(page.getByRole('alert')).toContainText(
    'could not save this plan',
  );
  await expect(page.getByRole('alert')).toBeFocused();
  expect(await page.evaluate((key) => localStorage.getItem(key), KEY)).toBe(
    originalRaw,
  );
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.keyboard.press('Shift+Tab');
  await page.keyboard.press('Shift+Tab');
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByTestId('persistence-use-once')).toBeFocused();
  await page.keyboard.press('Enter');
  await completeSpiral(page);
  await page.getByRole('button', { name: 'Finish', exact: true }).click();
  await expectOriginal(page);
});

test('failed deletion remains truthful, permits temporary use, and reload finds the original', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await loadOriginal(page);
  await page.evaluate(() => {
    Storage.prototype.removeItem = () => {
      throw new DOMException('Synthetic denial', 'SecurityError');
    };
  });
  await page.getByRole('button', { name: 'Clear my data' }).click();
  await expect(page.getByRole('alert')).toContainText(
    'could not confirm removal from browser storage',
  );
  await expect(
    page.getByText('Your locally saved data was cleared.'),
  ).toHaveCount(0);
  await expect(page.locator('#main-content')).toBeFocused();
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.getByRole('button', { name: 'Continue without saving' }).click();
  await demoToData(page);
  await expect(page.getByTestId('persistence-save-local')).toBeDisabled();
  await page.getByTestId('persistence-use-once').click();
  await completeSpiral(page, true);
  await page.getByRole('button', { name: 'Finish', exact: true }).click();
  await expect(
    page.getByText(/could not confirm removal from browser storage/),
  ).toBeVisible();
  expect(await page.evaluate((key) => localStorage.getItem(key), KEY)).toBe(
    originalRaw,
  );
  await page.reload();
  await expectOriginal(page);
  expect(errors).toEqual([]);
});

test('unsupported schema remains distinct and explicit reset clears only the guide', async ({
  page,
}) => {
  await page.goto('/');
  await page.evaluate(
    ({ key, plan }) => {
      localStorage.setItem(key, JSON.stringify({ ...plan, schemaVersion: 2 }));
      localStorage.setItem('unrelated', 'synthetic');
    },
    { key: KEY, plan: original },
  );
  await page.reload();
  await expect(page.getByRole('alert')).toContainText('unsupported version');
  await page
    .getByRole('button', { name: 'Clear local data and restart' })
    .click();
  await expect(
    page.getByText('The unreadable local data was cleared.'),
  ).toBeVisible();
  expect(
    await page.evaluate((key) => localStorage.getItem(key), KEY),
  ).toBeNull();
  expect(await page.evaluate(() => localStorage.getItem('unrelated'))).toBe(
    'synthetic',
  );
});

test('explicit Clear my data during temporary use deletes the saved plan', async ({
  page,
}) => {
  await loadOriginal(page);
  await editToData(page);
  await page.getByTestId('persistence-use-once').click();
  await completeSpiral(page);
  await page.getByRole('button', { name: 'Clear my data' }).click();
  await expect(
    page.getByText('Your locally saved data was cleared.'),
  ).toBeVisible();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Guide me' })).toBeVisible();
  expect(
    await page.evaluate((key) => localStorage.getItem(key), KEY),
  ).toBeNull();
});

for (const width of [375, 768, 1440]) {
  test(`revision UI evidence at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 375 ? 812 : 1000 });
    const capture = async (state: string) => {
      await page.evaluate(() => window.scrollTo(0, 0));
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      await page.screenshot({
        path: `vertical-slices/screenshots/vs01-revision-${state}-${width}.png`,
        fullPage: true,
      });
    };
    await loadOriginal(page);
    await editToData(page);
    await capture('temporary-edits');
    await page.evaluate(() => {
      Storage.prototype.setItem = () => {
        throw new DOMException('Synthetic quota', 'QuotaExceededError');
      };
    });
    await page.getByTestId('persistence-save-local').click();
    await expect(page.getByRole('alert')).toBeFocused();
    await capture('save-failed');
    await page.getByTestId('persistence-discard').click();
    await expectOriginal(page);
    await capture('saved-preserved');
    await page.evaluate(() => {
      Storage.prototype.removeItem = () => {
        throw new DOMException('Synthetic denial', 'SecurityError');
      };
    });
    await page.getByRole('button', { name: 'Clear my data' }).click();
    await expect(
      page.getByRole('heading', { name: 'Removal could not be confirmed.' }),
    ).toBeVisible();
    await capture('delete-failed');
    await page.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', {
        configurable: true,
        get() {
          throw new DOMException('Synthetic denial', 'SecurityError');
        },
      });
    });
    await page.reload();
    await expect(
      page.getByRole('heading', { name: 'Browser storage is unavailable.' }),
    ).toBeVisible();
    await capture('unavailable');
    await page.getByRole('button', { name: 'Continue without saving' }).click();
    await demoToData(page);
    await expect(page.getByTestId('persistence-save-local')).toBeDisabled();
    await capture('use-once-only');
  });
}
