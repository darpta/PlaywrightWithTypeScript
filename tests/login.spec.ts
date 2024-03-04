import { test, expect } from '@playwright/test';

test.describe('User loginto Demobank', () => {
  const userId = 'testerLO';
  
  test.beforeEach(async ({ page }) => {
    const url = 'https://demo-bank.vercel.app/'; // const to stala zmienna
    await page.goto(url);
  });

  test('successful login with correct credentials', async ({ page }) => {
    // Arrange
    const userPassword = '10987654';
    const expectedUserName = 'Jan Demobankowy';

    // Act
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();

    // Assert
    await expect(page.getByTestId('user-name')).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short username', async ({ page }) => {
    // Arrange
    const userWrongID = 'tester';

    // Act
    await page.getByTestId('login-input').fill(userWrongID);
    await page.getByTestId('password-input').click();

    // Assert
    await expect(page.getByTestId('error-login-id')).toHaveText(
      'identyfikator ma min. 8 znaków',
    );
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    // Arrange
    const userWrongPassword = 'darek';

    // Act
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userWrongPassword);
    await page.getByTestId('password-input').blur(); //wyjscie z elementu przez blur()

    // Assert
    await expect(page.getByTestId('error-login-password')).toHaveText(
      'hasło ma min. 8 znaków',
    );
  });
});
