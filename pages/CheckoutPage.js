import {Selector as selector, t} from 'testcafe';

/** Contains specific locator of a page */
class CheckoutPage {
    /** Selectors for Cart Page*/
    constructor() {
        this.firstNameField = selector('#first-name');
        this.lastNameField = selector('#last-name');
        this.postalCodeField = selector('#postal-code');
        this.continueButton = selector('#continue');
        this.errorMessage = selector('.error-message-container');
        this.itemName = selector('.inventory_item_name');
        this.finish = selector('#finish');
        this.title = selector('.title');
        this.itemName = selector('.inventory_item_name');
    }

    /** Function that get all products on the Checkout Page
   * @return {Array} Returns all the products on the Checkout Page
   */
    async getProductsOnCheckoutCart() {
        const productsOnCart = [];
        for (let i = 0; i < (await this.itemName.count); i++) {
            productsOnCart.push(await this.itemName.nth(i).innerText);
        }
        return productsOnCart;
    }

    /** Fills name, last name and postal code information into the form
     * @param {string} firstName Name to send on the form
     * @param {string} lastName LastName to send on the form
     * @param {string} postalCode Zip code to send on the form
    */
    async fillInformation(firstName, lastName, postalCode) {
        if (firstName != null) {
            await t.typeText(this.firstNameField, firstName, {
                replace: true,
            });
        }
        if (lastName != null) {
            await t.typeText(this.lastNameField, lastName, {
                replace: true,
            });
        }
        if (postalCode != null) {
            await t.typeText(this.postalCodeField, postalCode, {
                replace: true,
            });
        }
        await t.click(this.continueButton);
    }
}

export default new CheckoutPage();
