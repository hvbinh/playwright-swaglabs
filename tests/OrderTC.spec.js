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

})