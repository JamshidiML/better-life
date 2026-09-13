import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const STORAGE_KEY = 'better-life.vs01.support-plan';

async function buildPlan(page: Page) {
  await page.getByRole('button', { name: 'Guide me' }).click();
  await page.getByRole('button', { name: 'Stay focused' }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'When I feel distracted' }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByTestId('primary-change_environment').click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByTestId('fallback-short_activity').click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
}

async function runSpiralToCompletion(page: Page) {
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Try my fallback' }).click();
  await expect(
    page.getByRole('heading', { name: 'You made a deliberate next choice.' }),
  ).toBeVisible();
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('E2E-01 Use once clears session state at finish', async ({ page }) => {
  await buildPlan(page);
  await page.getByTestId('persistence-use-once').click();
  await runSpiralToCompletion(page);
  await page.getByRole('button', { name: 'Finish' }).click();
  await expect(
    page.getByText('Your use-once guide was cleared.'),
  ).toBeVisible();
  await expect
    .poll(() => page.evaluate((key) => localStorage.getItem(key), STORAGE_KEY))
    .toBeNull();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Guide me' })).toBeVisible();
});

test('E2E-02 Save locally restores after reload', async ({ page }) => {
  await buildPlan(page);
  await page.getByTestId('persistence-save-local').click();
  await page.reload();
  await expect(
    page.getByRole('heading', {
      name: 'Your saved guide is ready.',
    }),
  ).toBeVisible();
  await expect(page.getByText('Stay focused', { exact: true })).toBeVisible();
});

test('E2E-03 Discard leaves no plan after reload', async ({ page }) => {
  await buildPlan(page);
  await page.getByTestId('persistence-discard').click();
  await expect(page.getByText('Your plan was discarded.')).toBeVisible();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Guide me' })).toBeVisible();
  await expect
    .poll(() => page.evaluate((key) => localStorage.getItem(key), STORAGE_KEY))
    .toBeNull();
});

test('E2E-04 Edit persists the updated action', async ({ page }) => {
  await buildPlan(page);
  await page.getByTestId('persistence-save-local').click();
  await page.reload();
  await page.getByRole('button', { name: 'Edit my plan' }).click();
  await page.getByTestId('primary-pause').click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByTestId('fallback-no_fallback').click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByTestId('persistence-save-local').click();
  await page.reload();
  await expect(
    page.getByText('Pause for a moment', { exact: true }),
  ).toBeVisible();
});

test('E2E-05 Clear everything returns to a clean state', async ({ page }) => {
  await buildPlan(page);
  await page.getByTestId('persistence-save-local').click();
  await page.reload();
  await page.getByRole('button', { name: 'Clear my data' }).click();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Guide me' })).toBeVisible();
  await expect
    .poll(() => page.evaluate((key) => localStorage.getItem(key), STORAGE_KEY))
    .toBeNull();
});

test('E2E-06 Invalid saved data has a recovery path', async ({ page }) => {
  await page.evaluate(({ key, value }) => localStorage.setItem(key, value), {
    key: STORAGE_KEY,
    value: '{malformed',
  });
  await page.reload();
  await expect(
    page.getByRole('heading', {
      name: 'Your saved guide could not be loaded.',
    }),
  ).toBeVisible();
  await page
    .getByRole('button', { name: 'Clear local data and restart' })
    .click();
  await expect(
    page.getByText('The unreadable local data was cleared.'),
  ).toBeVisible();
});

test('E2E-07 Critical journey is keyboard-operable', async ({ page }) => {
  await page.getByRole('button', { name: 'Guide me' }).press('Enter');
  await page.getByRole('button', { name: 'Reduce distraction' }).press('Enter');
  await page
    .getByRole('button', { name: 'Continue', exact: true })
    .press('Enter');
  await page
    .getByRole('button', { name: 'When using my phone' })
    .press('Enter');
  await page
    .getByRole('button', { name: 'Continue', exact: true })
    .press('Enter');
  await page.getByTestId('primary-continue_without_action').press('Enter');
  await page
    .getByRole('button', { name: 'Continue', exact: true })
    .press('Enter');
  await page.getByTestId('fallback-no_fallback').press('Enter');
  await page
    .getByRole('button', { name: 'Continue', exact: true })
    .press('Enter');
  await page.getByTestId('persistence-use-once').press('Enter');
  await expect(
    page.getByRole('heading', {
      name: 'Give yourself a moment before deciding what to do next.',
    }),
  ).toBeVisible();
});

test('runtime sends no plan data or requests outside the local app', async ({
  page,
}) => {
  const requests: Array<{ url: string; postData: string | null }> = [];
  page.on('request', (request) => {
    requests.push({ url: request.url(), postData: request.postData() });
  });

  await page.reload();
  await buildPlan(page);
  await page.getByTestId('persistence-use-once').click();
  await runSpiralToCompletion(page);

  const external = requests.filter(
    (request) => new URL(request.url).origin !== 'http://127.0.0.1:4173',
  );
  const serialized = JSON.stringify(requests);
  expect(external).toEqual([]);
  expect(serialized).not.toContain('Stay focused');
  expect(serialized).not.toContain('When I feel distracted');
});

test('welcome and saved-plan views have no detectable axe violations', async ({
  page,
}) => {
  const welcome = await new AxeBuilder({ page }).analyze();
  expect(welcome.violations).toEqual([]);

  await buildPlan(page);
  await page.getByTestId('persistence-save-local').click();
  await page.reload();
  const saved = await new AxeBuilder({ page }).analyze();
  expect(saved.violations).toEqual([]);
});
