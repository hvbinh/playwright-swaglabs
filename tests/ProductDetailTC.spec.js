import {test, expect} from '@playwright/test';
import { logger } from '../common/WinstonLog';
import { PageGenerator } from '../common/PageGenerator';
import { GlobalConstant } from '../common/GlobalConstant';


test('Verify that product detail page displays correctly',async ({page})=>{
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
    logger.info("Save info of first product");
    const title = await home.getTitleText();
    const description = await home.getDescription();
    const price = await home.getPrice();

    logger.info('Click to first product');
    await home.clickToFirstProduct();

    const productDetail = PageGenerator.getProductDetailPage(page);
    logger.info('Verify product detail displays correctly');
    await expect(await productDetail.getProductTitle()).toBe('Sauce Labs Backpack');

    logger.info('Verify product title');
    await expect(await productDetail.getProductTitle()).toBe(title);

    logger.info('Verify product description');
    await expect(await productDetail.getProductDescription()).toBe(description);

    logger.info('Verify product price');
    await expect(await productDetail.getProductPrice()).toBe(price);
 
    
})
test('Verify that can click to Add to cart button',async ({page})=>{
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
    logger.info("Click to Add to cart button");
    home.clickToAddToCartButton();

    logger.info('Verify shopping cart badge is 1');
    await expect(await home.getShoppingCartBadgeNumber()).toBe("1");

    logger.info('Click to first product');
    await home.clickToFirstProduct();
    const productDetail = PageGenerator.getProductDetailPage(page);

    logger.info('Verify shopping cart badge is 1');
    await expect(await productDetail.getShoppingCartBadgeNumber()).toBe("1");

    logger.info('Click to remove button');
    await productDetail.clickToRemoveButton();

    logger.info('Verify shopping cart badge is empty');
    await expect(await productDetail.getShoppingCartEmpty()).toBe("");



})
