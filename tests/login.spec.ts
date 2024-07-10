import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { users } from '../src/users';
import { goto } from '../src/navigation';

test.describe('validation login tests', () => {
  test.beforeEach( async ({ page }) => {
    const loginPage = new LoginPage(page);
    await goto(loginPage);
    await loginPage.validate(); 
  })
  test('Positiv login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(users.testUser);
  });

  test('Negative login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.emailField.fill(users.testUser.email);
    await loginPage.passwordField.fill('0000');
    await loginPage.loginButton.click();
  });
});