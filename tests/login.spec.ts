import { test, expect } from '@playwright/test';
import { LoginPage, NegativeLoginPage } from "../src/pages/login.page"

test ('Positive Login test', async ({page}) => {
   const loginPage = new LoginPage(page);

   await loginPage.login();

});


test ('Negative Login test', async ({page}) => {
    const negativeLogin = new NegativeLoginPage(page)

    await negativeLogin.negativeLogin();
    
});