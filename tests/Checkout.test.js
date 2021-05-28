import inventoryPage from '../pages/InventoryPage';
import cartPage from '../pages/CartPage';
import checkoutPage from '../pages/CheckoutPage';
import checkoutCompletePage from '../pages/CheckoutCompletePage';
import {regularUser} from '../utils/RolesHelper';
import {
    URLS,
    USER_INFORMATION,
    MESSAGES,
    PAGES,
} from '../data/Constants';

fixture('Checkout feature tests').page(`${URLS.LOGIN_PAGE}`);

test('Continue with missing mail information', async (t) => {
    // Arrange
    await t.useRole(regularUser);
    await t
        .click(inventoryPage.backpackAddToCartButton)
        .click(inventoryPage.bikeLightAddToCartButton)
        .click(inventoryPage.cartButton)
        .click(cartPage.checkoutButton);

    // Act
    await checkoutPage.fillInformation(
        USER_INFORMATION.NAME,
        USER_INFORMATION.LAST_NAME,
        null
    );

    // Assert
    await t
        .expect(await checkoutPage.errorMessage.innerText)
        .eql(MESSAGES.ERROR_MESSAGES.POSTAL_CODE_REQUIRED);
});

test('Fill user information', async (t) => {
    // Arrange
    await t.useRole(regularUser)
        .click(inventoryPage.backpackAddToCartButton)
        .click(inventoryPage.bikeLightAddToCartButton)
        .click(inventoryPage.cartButton)
        .click(cartPage.checkoutButton);

    // Act
    await checkoutPage.fillInformation(
        USER_INFORMATION.NAME,
        USER_INFORMATION.LAST_NAME,
        USER_INFORMATION.POST_CODE
    );

    // Assert
    await t
        .expect(await inventoryPage.currentURL())
        .eql(URLS.CHECKOUT_OVERVIEW_PAGE);
    await t
        .expect(await checkoutPage.title.innerText)
        .eql(PAGES.CHECKOUT_OVERVIEW.TITLE);
});

test('Final order items', async (t) => {
    // Arrange
    await t.useRole(regularUser);
    const productsSelected = await inventoryPage.clickAllProducts();

    // Act
    await t.click(inventoryPage.cartButton)
        .click(cartPage.checkoutButton);
    await checkoutPage.fillInformation(
        USER_INFORMATION.NAME,
        USER_INFORMATION.LAST_NAME,
        USER_INFORMATION.POST_CODE
    );

    // Assert
    const productsOnCheckout = await checkoutPage.getProductsOnCheckoutCart();
    await t.expect(await productsSelected).eql(await productsOnCheckout);
});

test('Complete purchase', async (t) => {
    // Arrange
    await t.useRole(regularUser);
    await inventoryPage.clickAllProducts();
    await t.click(inventoryPage.cartButton)
        .click(cartPage.checkoutButton);
    await checkoutPage.fillInformation(
        USER_INFORMATION.NAME,
        USER_INFORMATION.LAST_NAME,
        USER_INFORMATION.POST_CODE
    );

    // Act
    await t.click(checkoutPage.finish);

    // Assert
    await t.expect(await inventoryPage.currentURL())
        .eql(URLS.CHECKOUT_COMPLETE);
    await t
        .expect(await checkoutCompletePage.completeOrderMessage.innerText)
        .eql(PAGES.CHECKOUT_COMPLETE.ORDER_MESSAGE);
    await t
        .expect(await checkoutCompletePage.completeOrderDescription.innerText)
        .eql(PAGES.CHECKOUT_COMPLETE.ORDER_MESSAGE_DESCRIPTION);
    await t
        .expect(
            await checkoutCompletePage.completeOrderImage.getAttribute('src'))
        .eql(PAGES.CHECKOUT_COMPLETE.IMAGE_PATH);
});
