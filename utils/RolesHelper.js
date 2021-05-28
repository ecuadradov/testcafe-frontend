import {Role as role} from 'testcafe';
import loginPage from '../pages/LoginPage';
import {URLS, CREDENTIALS} from '../data/Constants';

export const regularUser = role(URLS.LOGIN_PAGE, async ()=>{
    await loginPage.submitLoginForm(
        CREDENTIALS.VALID_USER.USERNAME,
        CREDENTIALS.VALID_USER.PASSWORD);
}, {preserveUrl: true});

export const notRegisterUser = role(URLS.LOGIN_PAGE, async ()=>{
    await loginPage.submitLoginForm(
        CREDENTIALS.INVALID_USER.USERNAME,
        CREDENTIALS.INVALID_USER.PASSWORD);
}, {preserveUrl: true});
