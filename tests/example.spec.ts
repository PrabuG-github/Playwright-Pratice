import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


// //
// • Browser: Browser: An instance of Chromium, Firefox, or WebKit launched as an OS process.
// • BrowserContext: BrowserContext: An isolated incognito profile within the browser. Each context has its own cookies, local storage, cache, and session tokens. Tests run in separate contexts to ensure zero state pollution.
// • Page: Page: A single browser tab or window living within a specific context.
