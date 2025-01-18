import { test, expect } from '@playwright/test';

test('Navigate from GitHub home to a specific repo', async ({ page }) => {
  await page.goto('https://github.com/abruzzi');

  await Promise.all([
    page.waitForURL('**/abruzzi?tab=repositories'),
    page.getByRole('link', { name: 'Repositories' }).click(),
  ]);

  await Promise.all([
    page.waitForURL('**/the-pragmatic-developer'),
    page.getByRole('link', { name: 'the-pragmatic-developer' }).click(),
  ]);

  await expect(
    page.getByRole('heading', { name: 'abruzzi/the-pragmatic-developer' })
  ).toBeVisible();
});