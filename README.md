# testcafe-frontend
# TestCafe Front End Homework

This is a practice with TestCafe that has some tests that validates the UI(User Interface) of the page [saucedemo](https://www.saucedemo.com/)

## Pre-requisites

This project needs to have a previous installation of [node](https://nodejs.org/es/)


## Installation

Use npm and install the dependencies

```bash
pip install 
```

## Usage

There are 2 ways to run the tests headless and not headless mode. 

For not headless mode
```bash
npm run test-chrome
```
For headless Mode 
```bash
npm run test-chrome-headless
```
Also you can see all the different browsers where you can run the test
```bash
npm run test-firefox
npm run test-firefox-headless
npm run test-ie
npm run test-edge
npm run test-opera
npm run test-safari
```

## Expected Results
Once you execute the test you will see an output similar like this
```
 Checkout feature tests
 √ Continue with missing mail information
 √ Fill user information
 √ Final order items
 √ Complete purchase

 Inventory and Shoping feature tests
 √ Logout from product page
 √ Navigate to the shopping cart
 √ Add a single item to the shopping cart
 √ Add multiple items to the shopping cart

 Login feature tests
 √ Login with a valid user
 √ Login with an invalid user

```

## Contributios
Pull requests are welcome. Feel free to add comments to have better implementations

## Build Tools
TestCafe and Javascript
