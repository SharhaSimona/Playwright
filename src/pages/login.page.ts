import { Base } from "./base";
import { User } from "../users";

export class LoginPage extends Base{
    readonly emailField = this.getByType('email');
    readonly passwordField = this.getByType('password');
    readonly loginButton = this.page.getByRole('button', {name: 'Log in'});
    readonly wrongCredentialsMessage = this.getByText('Wrong Email or password');

    async login() {
        await this.page.goto('https://dev.omni-dispatch.com/login');

        await this.emailField.fill('test@gmail.com');
        await this.passwordField.fill('12345678');
        await this.loginButton.click();
    }
}
    export class NegativeLoginPage extends Base{
        readonly emailField = this.getByType('email');
        readonly passwordField = this.getByType('password');
        readonly loginButton = this.page.getByRole('button', {name: 'Log in'});
        readonly wrongCredentialsMessage = this.getByText('Wrong Email or password');
   
        async negativeLogin() {
        await this.page.goto('https://dev.omni-dispatch.com/login');

        await this.emailField.fill('gmail.com');
        await this.passwordField.fill('000000');
        await this.loginButton.click();
    }
}