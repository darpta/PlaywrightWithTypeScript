import { test, expect } from '@playwright/test';

test.describe('Pulpit test', () => {
  test.skip('test login with CPR', async ({ page }) => {
    await page.goto('https://test-mobileapp.betri.fo/app/');
    await page.locator("//span[text()='Rita inn']").click();
    // await page.getByPlaceholder('Rita inn').click();
    await page.getByPlaceholder('Skriva títt P-tal').fill('100173999');
    await page.getByRole('button', { name: 'Rita inn við app' }).click();
    await page.goto('https://test-mobileapp.betri.fo/app/no-access/intro');
    await page.goto('https://test-mobileapp.betri.fo/app/access-verified/home');
    await page.locator('navigation-panel').getByText('Mín brúkari').click();
    await page.getByRole('button', { name: 'Rita út' }).click();
  });

  test.only('test login with credentials', async ({ page }) => {
    // Arrange
    const url = 'https://test-mobileapp.betri.fo/app/';
    const userId = '041265981';
    const userPassword = 'Mokr5ZunkK66';

    // Act
    await page.goto(url);
    await page.locator('a').nth(1).click();
    await page.getByLabel('Username or email').fill(userId);
    await page.getByLabel('Password').fill(userPassword);
    await page.getByRole('button', { name: 'Sign In' }).click();

    //Assert
    await expect(page).toHaveURL(/access-verified/);
  });
});

/*
const accessUrl = 'https://test-mobileapp.betri.fo/app/access-verified/home';

// Assert
await expect(page).toHaveURL(accessUrl)

other to test:
    // await page.locator('navigation-panel').getByText('Mín brúkari').click();
    // await page.getByRole('button', { name: 'Rita út' }).click();
*/
