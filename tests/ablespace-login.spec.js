const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('user can log in, open Caseload, and verify student details', async ({ page }) => {

  // Set total test timeout to 60 seconds
  test.setTimeout(60000);
    
  const email = process.env.TEST_EMAIL;
  const password = process.env.TEST_PASSWORD;
  const baseURL = process.env.BASE_URL || 'https://staging.ablespace.io';

  // Ensure credentials are configured.
  if (!email || !password) {
    throw new Error(
      'Set TEST_EMAIL and TEST_PASSWORD in your .env file.'
    );
  }

  // Step 1: Open the application.
  await page.goto(baseURL);

  await page.pause();

  // Step 2: Log in with the existing test account.
  await page.getByLabel(/email/i).fill(email);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();

  await page.getByLabel('Password', { exact: true }).fill(password);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();

  await page.getByTestId('dismiss-stay-logged-in').click();

  await expect(page.getByRole('link', { name: /caseload/i })).toBeVisible();

  await page.getByRole('link', { name: /caseload/i }).click();

  await expect(
    page.getByRole('heading', { name: /caseload/i })
  ).toBeVisible();

  await expect(
    page.getByRole('row').getByText('QA Student01', { exact: true })
  ).toBeVisible();

  await page.getByRole('row').getByText('QA Student01', { exact: true }).click();

  await expect(
    page.getByText('Hopkins School', { exact: true })
  ).toBeVisible();
})
