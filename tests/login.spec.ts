import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';

test.describe('User loginto Demobank', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('successful login with correct credentials', async ({ page }) => {
    // Arrange
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;
    // const userId = 'testerLO';
    // const userPassword = '10987654';
    const expectedUserName = 'Jan Demobankowy';

    // Act
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();

    // Assert
    await expect(page.getByTestId('user-name')).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short username', async ({ page }) => {
    // Arrange
    const userWrongID = 'tester';
    const expectedErrorMessage = 'identyfikator ma min. 8 znaków';

    // Act
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userWrongID);
    await loginPage.passwordInput.click();

    // Assert
    await expect(loginPage.loginError).toHaveText(expectedErrorMessage);
  });

  test.only('unsuccessful login with too short password', async ({ page }) => {
    // Arrange
    const userId = loginData.userId;
    const userWrongPassword = 'darek';
    const expectedErrorMessage = 'hasło ma min. 8 znaków';

    // Act
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userWrongPassword);
    await loginPage.passwordInput.blur(); //wyjscie z elementu przez blur()

    // Assert
    await expect(loginPage.passwordError).toHaveText(expectedErrorMessage);
  });
});
