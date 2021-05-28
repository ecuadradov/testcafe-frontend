import {Selector as selector} from 'testcafe';

/** Contains specific locator of a page */
class CheckoutCompletePage {
    /** Selectors for Cart Page*/
    constructor() {
        this.completeOrderMessage = selector('.complete-header');
        this.completeOrderDescription = selector('.complete-text');
        this.completeOrderImage = selector('.pony_express');
    }
}

export default new CheckoutCompletePage();
