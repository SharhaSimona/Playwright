import { goto } from "../../navigation";
import { step } from "../../helpers/step";
import { BaseSteps } from "./baseSteps";
import { users } from "../../users";
import { test, expect } from "@playwright/test";
import { LoginPage } from "../LoginPage";
import { DriversPage } from "../DriversPage";


export class LoginSteps extends BaseSteps{
    @step ('Login user')
    async login() {
        await goto(this.app.loginPage);
        await this.app.loginPage.validate;
        await this.app.loginPage.login(users.testUser);
        await this.app.loginPage.waitForLoadState();
        await goto(this.app.driversPage);
        await this.app.driversPage.validate();
        // await expect(this.app.driversPage.header.userName).toBeVisible(); 
    }
}
