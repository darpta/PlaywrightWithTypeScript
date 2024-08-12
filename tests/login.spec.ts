import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { PulpitPage } from '../pages/pulpit.page';

test.describe('User loginto Demobank', () => {
  let loginPage: LoginPage; // deklarujemy zmienna

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPage(page); // inicjalizujemy zmienna loginPage i mozemy ja wykorzystac w testach
  });

  test('successful login with correct credentials', async ({ page }) => {
    // Arrange
    const expectedUserName = 'Jan Demobankowy';

    // Act
    await loginPage.login(); 

    // Assert
    const pulpitPage = new PulpitPage(page);
    await expect(pulpitPage.userNameText).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short username', async ({ page }) => {
    // Arrange
    const expectedErrorMessage = 'identyfikator ma min. 8 znaków';

    // Act
    await loginPage.login_with_too_short_username();

    // Assert
    await expect(loginPage.loginError).toHaveText(expectedErrorMessage);
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    // Arrange
    const expectedErrorMessage = 'hasło ma min. 8 znaków';

    // Act
    await loginPage.login_with_too_short_password();

    // Assert
    await expect(loginPage.passwordError).toHaveText(expectedErrorMessage);
  });
});
