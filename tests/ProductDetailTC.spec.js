import {test, expect} from '@playwright/test'
import { Login } from '../pages/Login'
import { logger } from '../common/WinstonLog';
import { PageGenerator } from '../common/PageGenerator';


test('Verify that product detail page displays correctly',async ({page})=>{
    const login = PageGenerator.getLoginPage(page);
    

    logger.info('Go to https://www.saucedemo.com/');
    await login.gotoURL('https://www.saucedemo.com/');

    logger.info('Input to username textbox');
    await login.inputToUsernameTextbox('standard_user');

    logger.info('Input to password textbox');
    await login.inputToPasswordTextbox('secret_sauce');

    logger.info('Click to login button');
    await login.clickToLoginButton();

    const home = PageGenerator.getHomePage(page);
    logger.info('Click to first product');
    await home.clickToFirstProduct();

    const productDetail = PageGenerator.getProductDetailPage(page);
    logger.info('Verify product detail displays correctly');
    const text = await productDetail.getProductTitle();
    await expect(text).toBe('Sauce Labs Backpack');

    logger.info("done");

    
})