import {Selector as selector} from 'testcafe';

/** Contains specific locator of a page */
class CartPage {
    /** Selectors for Cart Page*/
    constructor() {
        this.cartQuantity = selector('.cart_quantity');
        this.checkoutButton = selector('#checkout');
        this.itemName = selector('.inventory_item_name');
        this.title = selector('.title');
    }

    /** Function that get all products on the Cart Page
   * @return {Array} Returns all the products on the Cart Page
   */
    async getProductsOnCart() {
        const productsOnCart = [];
        for (let i = 0; i < (await this.itemName.count); i++) {
            productsOnCart.push(await this.itemName.nth(i).innerText);
        }
        return productsOnCart;
    }
}

export default new CartPage();
