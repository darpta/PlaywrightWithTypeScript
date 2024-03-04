import { test, expect } from '@playwright/test';

test.describe('User loginto Demobank', () => {
  
  test('successful login with correct credentials', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    // await page.getByTestId('login-input').click(); //nie jest potrzebne bo fill() juz obsluguje click()
    await page.getByTestId('login-input').fill('darek123');
    await page.getByTestId('password-input').fill('darek123');
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy')
  });

  test('unsuccessful login with too short username', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('tester');
    await page.getByTestId('password-input').click();

    await expect(page.getByTestId('error-login-id')).toHaveText('identyfikator ma min. 8 znaków')
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('darek123');
    await page.getByTestId('password-input').fill('darek');
    await page.getByTestId('password-input').blur(); //wyjscie z elementu przez blur()

    await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków')
  });
});