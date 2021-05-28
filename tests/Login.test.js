import loginPage from '../pages/LoginPage';
import inventoryPage from '../pages/InventoryPage';
import {
    URLS,
    CREDENTIALS,
    MESSAGES,
    PAGES,
} from '../data/Constants';

fixture('Login feature tests').page(`${URLS.LOGIN_PAGE}`);

test('Login with a valid user', async (t) => {
    // Act block
    await loginPage.submitLoginForm(
        CREDENTIALS.VALID_USER.USERNAME,
        CREDENTIALS.VALID_USER.PASSWORD
    );

    // Assert block
    await t.expect(await inventoryPage.currentURL()).eql(URLS.INVENTORY_PAGE);
    await t.expect(inventoryPage.title.innerText).eql(PAGES.INVENTORY.TITLE);
});

test('Login with an invalid user', async (t) => {
    // Act block
    await loginPage.submitLoginForm(
        CREDENTIALS.INVALID_USER.USERNAME,
        CREDENTIALS.INVALID_USER.PASSWORD
    );

    // Assert
    await t
        .expect(await loginPage.errorMessage.innerText)
        .eql(MESSAGES.ERROR_MESSAGES.INVALID_LOGIN);
});


