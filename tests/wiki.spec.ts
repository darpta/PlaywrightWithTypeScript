import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('https://pl.wikipedia.org');
  await page.locator('//*[@id="pt-login-2"]/a').click();
  await page.locator('//*[@id="wpName1"]').fill('RobotTests');
  //await page.getByTestId('password-input').click();
  await page.locator('//*[@id="wpPassword1"]').fill('RobotFramework');
  await page.locator('//*[@id="wpRemember"]').click();
  await page.locator('//*[@id="wpLoginAttempt"]').click();
  await page.locator('//*[@id="p-search"]/a/span[1]').blur();
  await page.locator('//*[@id="searchform"]/div/div/div[1]/input').fill('Teoria wielkiego podrywu');
  await page.locator('//*[@id="searchform"]/div/button').click();

  //await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
});