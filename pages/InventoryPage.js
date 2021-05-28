import {
    Selector as selector,
    ClientFunction as clientFunction,
    t,
} from 'testcafe';

/** Contains specific locator of a page */
class InventoryPage {
    /** Selectors for Cart Page*/
    constructor() {
        this.currentURL = clientFunction(() => window.location.href);
        this.burgerMenuButton = selector('#react-burger-menu-btn');
        this.logoutOption = selector('#logout_sidebar_link');
        this.cartButton = selector('.shopping_cart_link');
        this.shoppingCartBadge = selector('.shopping_cart_badge');
        this.backpackAddToCartButton = selector(
            '#add-to-cart-sauce-labs-backpack'
        );
        this.bikeLightAddToCartButton = selector(
            '#add-to-cart-sauce-labs-bike-light'
        );
        this.boltTShirtAddToCartButton = selector(
            '#add-to-cart-sauce-labs-bolt-t-shirt'
        );
        this.inventoryButtonForAnyItem = selector('.btn_inventory');
        this.itemTitle = selector('.inventory_item_name');
        this.fleeceJacketAddToCartButton = selector(
            '#add-to-cart-sauce-labs-fleece-jacket'
        );
        this.onesieAddToCartButton = selector('#add-to-cart-sauce-labs-onesie');
        this.allTheThingsTShirt = selector(
            '#add-to-cart-test.allthethings()-t-shirt-(red)'
        );
        this.inventoryItemPrice = selector('.inventory_item_price');
        this.title = selector('.title');
    }

    /** Select all products on the Inventory Page and return it
   * @return {Array} Returns all the products on the Inventory Page
   */
    async clickAllProducts() {
        const productListSelected = [];
        for (let i = 0; i < (await this.inventoryButtonForAnyItem.count); i++) {
            await t.click(this.inventoryButtonForAnyItem.nth(i));
            productListSelected.push(await this.itemTitle.nth(i).innerText);
        }
        return productListSelected;
    }
}

export default new InventoryPage();
