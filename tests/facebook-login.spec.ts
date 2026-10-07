import { test, expect } from '@playwright/test';

test('Facebook login page should load correctly', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  await expect(page).toHaveTitle(/Facebook/);

  await expect(
    page.getByRole('button', { name: /log in/i })
  ).toBeVisible();

  await expect(page.getByText(/forgot password/i)).toBeVisible();
});

test('Facebook forgot password page should open', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  await page.getByText(/forgot password/i).click();

  await expect(page).toHaveURL(/recover|login/);
});