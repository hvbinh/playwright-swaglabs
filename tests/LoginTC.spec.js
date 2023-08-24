import {test, expect} from '@playwright/test'
import { Login } from '../pages/Login'
import { logger } from '../common/WinstonLog';
import { PageGenerator } from '../common/PageGenerator';
import { GlobalConstant } from '../common/GlobalConstant';


test('Verify that login successfully',async ({page})=>{
    const login = PageGenerator.getLoginPage(page);

    logger.info('Go to https://www.saucedemo.com/');
    await login.gotoURL(GlobalConstant.URL);

    logger.info('Input to username textbox');
    await login.inputToUsernameTextbox(GlobalConstant.STANDARD_USER);

    logger.info('Input to password textbox');
    await login.inputToPasswordTextbox(GlobalConstant.PASSWORD);

    logger.info('Click to login button');
    await login.clickToLoginButton();

    logger.info('Verify title displays correctly');
    await expect(page).toHaveTitle('Swag Labs');
})
test('Verify that error message shows when login with empty user password',async ({page})=>{
    const login = PageGenerator.getLoginPage(page);

    logger.info('Go to https://www.saucedemo.com/');
    await login.gotoURL(GlobalConstant.URL);

    logger.info('Let username textbox is empty');
    await login.inputToUsernameTextbox('');

    logger.info('Let password textbox is empty');
    await login.inputToPasswordTextbox('');

    logger.info('Click to login button');
    await login.clickToLoginButton();

    logger.info('Verify username error message displays');
    await expect(await login.usernameErrorMessage()).toBe('Epic sadface: Username is required');
})
test('Verify that error message shows when login with empty password',async ({page})=>{
    const login = PageGenerator.getLoginPage(page);

    logger.info('Go to https://www.saucedemo.com/');
    await login.gotoURL(GlobalConstant.URL);

    logger.info('Let username textbox is empty');
    await login.inputToUsernameTextbox(GlobalConstant.STANDARD_USER);

    logger.info('Let password textbox is empty');
    await login.inputToPasswordTextbox('');

    logger.info('Click to login button');
    await login.clickToLoginButton();

    logger.info('Verify username error message displays');
    await expect(await login.usernameErrorMessage()).toBe('Epic sadface: Password is required');
})
test('Verify that error message shows when user, password do not exist in the system',async ({page})=>{
    const login = PageGenerator.getLoginPage(page);

    logger.info('Go to https://www.saucedemo.com/');
    await login.gotoURL(GlobalConstant.URL);

    logger.info('Let username textbox is empty');
    await login.inputToUsernameTextbox('standard_user111');

    logger.info('Let password textbox is empty');
    await login.inputToPasswordTextbox('abc');

    logger.info('Click to login button');
    await login.clickToLoginButton();

    logger.info('Verify username error message displays');
    await expect(await login.usernameErrorMessage()).toBe('Epic sadface: Username and password do not match any user in this service');
})