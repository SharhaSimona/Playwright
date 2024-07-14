import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { users } from '../src/users';
import { goto } from '../src/navigation';
import { ChatsPage } from '../src/pages/ChatsPage';

test.describe('validation login tests', () => {
  test.beforeEach( async ({ page }) => {
    const loginPage = new LoginPage(page);
    await goto(loginPage);
    await loginPage.validate();
  })

  test('Positiv login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(users.testUser);
    const chatsPage = new ChatsPage(page);
    await chatsPage.validate(); 
    await expect(chatsPage.header.avatarButton).toHaveText(users.testUser.name);
  });

  test('Negative login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.emailField.fill(users.testUser.email);
    await loginPage.passwordField.fill('1234');
    await loginPage.loginButton.click();
    await expect(loginPage.validationError).toBeVisible();
  });
});
