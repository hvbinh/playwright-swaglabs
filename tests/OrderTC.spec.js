import {test, expect} from '@playwright/test'
import { logger } from '../common/WinstonLog';
import { PageGenerator } from '../common/PageGenerator';
import { GlobalConstant } from '../common/GlobalConstant';

test('Verify that order process works correctly',async({page})=>{
    const login = PageGenerator.getLoginPage(page);
    
    logger.info('Go to https://www.saucedemo.com/');
    await login.gotoURL(GlobalConstant.URL);

    logger.info('Input to username textbox');
    await login.inputToUsernameTextbox(GlobalConstant.STANDARD_USER);

    logger.info('Input to password textbox');
    await login.inputToPasswordTextbox(GlobalConstant.PASSWORD);

    logger.info('Click to login button');
    await login.clickToLoginButton();

    const home = PageGenerator.getHomePage(page);
    logger.info('Click to first product');
    await home.clickToFirstProduct();
    const productDetail = PageGenerator.getProductDetailPage(page);
    logger.info('Click add to cart button');
    await productDetail.clickAddToCartButton();

    logger.info('Verify number in cart badge = 1');
    await expect(await productDetail.getShoppingCartBadgeNumber()).toBe("1");

const cart = PageGenerator.getCartPage(page);
    logger.info('Click to shopping cart icon');
    await cart.clickToShoppingCartButton();

    logger.info('Click to Checkout button');
    await cart.clickToCheckoutButton();

    const checkout = PageGenerator.getCheckoutPage(page);
    logger.info('Input to first name textbox')
    await checkout.inputToFirstNameTextbox('user');

    logger.info('Input to last name textbox');
    await checkout.inputToLastNameTextbox('test');

    logger.info('Input to postal code textbox');
    await checkout.inputToPostalCode('700000');

    logger.info('Click to continue button');
    await checkout.clickToContinueButton();

    logger.info('Click to finish button');
    await checkout.clickToFinishButton();
    
    logger.info('Verify that: thank you for your order text shows');
    await expect(await checkout.getCompleteText()).toBe('Thank you for your order!');

    logger.info('Click to back home button');
    await checkout.clickToBackHomeButton();

    logger.info('Verify title displays correctly');
    await expect(page).toHaveTitle('Swag Labs');

    console.log('test');



})
