/* eslint max-len: ["error", { "ignoreStrings": true }]*/
export const URLS = {
    LOGIN_PAGE: 'https://www.saucedemo.com/',
    INVENTORY_PAGE: 'https://www.saucedemo.com/inventory.html',
    CART_PAGE: 'https://www.saucedemo.com/cart.html',
    CHECKOUT_OVERVIEW_PAGE: 'https://www.saucedemo.com/checkout-step-two.html',
    CHECKOUT_COMPLETE: 'https://www.saucedemo.com/checkout-complete.html',
};

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: 'standard_user',
        PASSWORD: 'secret_sauce',
    },
    INVALID_USER: {
        USERNAME: 'random_user',
        PASSWORD: 'secret_sauce',
    },
};

export const USER_INFORMATION = {
    NAME: 'Erick',
    LAST_NAME: 'Cuadrado',
    POST_CODE: '11111',
};

export const PAGES = {
    INVENTORY: {
        TITLE: 'PRODUCTS',
    },
    CART: {
        TITLE: 'YOUR CART',
    },
    CHECKOUT_OVERVIEW: {
        TITLE: 'CHECKOUT: OVERVIEW',
    },
    CHECKOUT_COMPLETE: {
        ORDER_MESSAGE: 'THANK YOU FOR YOUR ORDER',
        ORDER_MESSAGE_DESCRIPTION:
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
        IMAGE_PATH: '/static/media/pony-express.46394a5d.png',
    },
};

export const MESSAGES = {
    ERROR_MESSAGES: {
        INVALID_LOGIN:
      'Epic sadface: Username and password do not match any user in this service',
        POSTAL_CODE_REQUIRED: 'Error: Postal Code is required',
    },
};
