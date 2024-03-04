import { test, expect } from '@playwright/test';

test.describe('Pulpit test', () => {
    test.skip('test', async ({ page }) => {
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

    test('test login', async ({ page }) => {
        await page.goto('https://test-mobileapp.betri.fo/app/');
        await page.locator('a').nth(1).click();
        await page.getByLabel('Username or email').click();
        await page.getByLabel('Username or email').fill('041265981');
        await page.getByText('Username or email Password').click();
        await page.getByLabel('Password').fill('Mokr5ZunkK66');
        await page.getByRole('button', { name: 'Sign In' }).click();

        await page.locator('navigation-panel').getByText('Mín brúkari').click();
        await page.getByRole('button', { name: 'Rita út' }).click();
    });

});