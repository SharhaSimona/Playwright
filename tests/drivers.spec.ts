import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { goto } from '../src/navigation';
import { DriversPage } from '../src/pages/drivers.page';
import { users } from '../src/users';

test('Drivers page test', async ({ page }) => {
    test.beforeEach( async ({ page }) => {
      const loginPage = new LoginPage(page);
      await goto(loginPage);
      await loginPage.login(users.testUser);
    
    })
    
    const driversPage = new DriversPage(page);
    
    await goto(driversPage);
    await driversPage.header.chevron.click();
  });
