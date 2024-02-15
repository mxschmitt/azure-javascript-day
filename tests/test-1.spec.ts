import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('Locators');
  await page.getByRole('link', { name: 'Locators', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Quick Gauide' })).toBeVisible();
});