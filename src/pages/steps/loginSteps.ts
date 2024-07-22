import { test, expect } from "@playwright/test";
import { goto } from "../../navigation";
import { LoginPage } from "../LoginPage";
import { DriversPage } from "../DriversPage";
import { step } from "../../helpers/step";

export class LoginSteps {
    @step ('Login user')
    async login(loginPage: LoginPage, driversPage: DriversPage) {
        await goto(loginPage);
        await loginPage.login(process.env.EMAIL, process.env.PASSWORD)
        await loginPage.waitForLoadState();
        await goto(driversPage);
        await expect(driversPage.header.userName).toBeVisible(); 
    }
}
