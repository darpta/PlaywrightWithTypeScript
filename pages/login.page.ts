import { Page } from '@playwright/test';
import { loginData } from '../test-data/login.data';

const userId = loginData.userId;
const userPassword = loginData.userPassword;
const userWrongID = loginData.userWrongID;
const userWrongPassword = loginData.userWrongPassword;

export class LoginPage {
  constructor(private page: Page) {}

  loginInput = this.page.getByTestId('login-input');
  passwordInput = this.page.getByTestId('password-input');
  loginButton = this.page.getByTestId('login-button');

  loginError = this.page.getByTestId('error-login-id');
  passwordError = this.page.getByTestId('error-login-password');
  /*
  await jest dozwolone tylko w funkcjach asynchronicznych, trzeba dodac async
  Promise <void> - oznacza ze funkcja nic nie zwraca
  
  async login(userId: string, userPassword: string): Promise <void> { 
    await this.loginInput.fill(userId);
    await this.passwordInput.fill(userPassword);
    await this.loginButton.click();
  }
  */
  async login(): Promise <void> { 
    await this.loginInput.fill(userId);
    await this.passwordInput.fill(userPassword);
    await this.loginButton.click();
  }

  async login_with_too_short_username(): Promise <void> {
    await this.loginInput.fill(userWrongID);
    await this.passwordInput.click();
  }

  async login_with_too_short_password(): Promise <void> {
    await this.loginInput.fill(userId);
    await this.passwordInput.fill(userWrongPassword);
    await this.passwordInput.blur(); //wyjscie z elementu przez blur()
  }
}
