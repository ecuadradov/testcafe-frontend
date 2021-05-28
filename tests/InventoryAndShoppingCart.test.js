import inventoryPage from '../pages/InventoryPage';
import cartPage from '../pages/CartPage';
import {regularUser} from '../utils/RolesHelper';
import {URLS, PAGES} from '../data/Constants';

fixture('Inventory and Shoping feature tests').page(`${URLS.LOGIN_PAGE}`);

test('Logout from product page', async (t) => {
    // Arrange
    await t.useRole(regularUser);

    // Act
    await t
        .click(inventoryPage.burgerMenuButton)
        .click(inventoryPage.logoutOption);

    // Assert
    await t.expect(await inventoryPage.currentURL()).eql(URLS.LOGIN_PAGE);
});

test('Navigate to the shopping cart', async (t) => {
    // Arrange
    await t.useRole(regularUser);

    // Act
    await t.click(inventoryPage.cartButton);

    // Assert
    await t.expect(await inventoryPage.currentURL()).eql(URLS.CART_PAGE);
    await t.expect(await cartPage.title.innerText).eql(PAGES.CART.TITLE);
});

test('Add a single item to the shopping cart', async (t) => {
    // Arrange
    await t.useRole(regularUser);

    // Act
    await t.click(inventoryPage.backpackAddToCartButton);
    const backpackItem = await inventoryPage.itemTitle.innerText;
    const numberOfItemsOnCart = await inventoryPage.shoppingCartBadge.innerText;
    await t.click(inventoryPage.cartButton);

    // Assert
    await t
        .expect(parseInt(numberOfItemsOnCart, 10))
        .eql(await cartPage.cartQuantity.count);
    await t.expect(backpackItem).eql(await cartPage.itemName.innerText);
});

test('Add multiple items to the shopping cart', async (t) => {
    // Arrange
    await t.useRole(regularUser);

    // Act
    const productSelected = await inventoryPage.clickAllProducts();
    const numberOfItemsOnCart = await inventoryPage.shoppingCartBadge.innerText;
    await t.click(inventoryPage.cartButton);

    // Assert
    const productsOnCart = cartPage.getProductsOnCart();
    await t
        .expect(parseInt(numberOfItemsOnCart, 10))
        .eql(await cartPage.cartQuantity.count);
    await t.expect(await productSelected).eql(await productsOnCart);
});
