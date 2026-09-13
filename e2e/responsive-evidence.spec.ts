import { expect, test } from '@playwright/test';

const viewports = [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 1000 },
] as const;

for (const viewport of viewports) {
  test(`responsive evidence ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await expect(page.getByRole('button', { name: 'Guide me' })).toBeVisible();
    await expect(page.locator('#main-content')).toBeFocused();
    await page.evaluate(() => window.scrollTo(0, 0));
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: `vertical-slices/screenshots/vs01-${viewport.name}.png`,
      fullPage: true,
    });
  });
}

test('flow evidence shows builder, Spiral, and saved state', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  await page.getByRole('button', { name: /Focus/ }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.screenshot({
    path: 'vertical-slices/screenshots/vs01-builder-action.png',
    fullPage: true,
  });

  await page.getByTestId('primary-change_environment').click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByTestId('fallback-short_activity').click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByTestId('persistence-save-local').click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.screenshot({
    path: 'vertical-slices/screenshots/vs01-protective-spiral.png',
    fullPage: true,
  });

  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Try my fallback' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();
  await page.screenshot({
    path: 'vertical-slices/screenshots/vs01-saved-plan.png',
    fullPage: true,
  });
});
