import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { PaymentPage } from '../pages/payment.page';
import { PulpitPage } from '../pages/pulpit.page';

test.describe('Payment tests', () => {
  let paymentPage: PaymentPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const loginPage = new LoginPage(page);
    //await loginPage.login(userId,userPassword)
    await loginPage.login();

    const pulpitPage = new PulpitPage(page)
    await pulpitPage.sideMenu.paymentButton.click()
    //paymentPage = new PaymentPage(page);
    // await page.getByRole('link', { name: 'Płatności' }).click();
  });

  test('simple payment', async ({ page }) => {
    // Arrange
    const transferReceiver = 'Jan Nowak';
    const transferAccount = '12 3456 7890 1234 5678 9012 34568';
    const transferAmount = '222';
    const expectedMessage = `Przelew wykonany! ${transferAmount},00PLN dla Jan Nowak`;

    // Act
    await paymentPage.transferReceiverInput.fill(transferReceiver);
    await paymentPage.transferToInput.fill(transferAccount);
    await paymentPage.transferAmountInput.fill(transferAmount);

    await paymentPage.transferButton.click();
    await paymentPage.actionCloseButton.click();

    // Assert
    await expect(paymentPage.messageText).toHaveText(expectedMessage);
  });
});
