import {Selector as selector, t} from 'testcafe';

/** Contains specific locator of a page */
class LoginPage {
    /** Selectors for Cart Page*/
    constructor() {
        this.usernameField = selector('#user-name');
        this.passwordField = selector('#password');
        this.loginButton = selector('#login-button');
        this.errorMessage = selector('.error-message-container');
    }

    /** Login into the landing page
     * @param {string} username user to login
     * @param {string} password password to login
     */
    async submitLoginForm(username, password) {
        await t
            .typeText(this.usernameField, username, {
                replace: true,
            })
            .typeText(this.passwordField, password, {
                replace: true,
            })
            .click(this.loginButton);
    }
}

export default new LoginPage();
