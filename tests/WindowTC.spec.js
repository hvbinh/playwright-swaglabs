import {Browser, BrowserContext,test, expect, chromium} from '@playwright/test'
import { logger } from '../common/WinstonLog';
import { PageGenerator } from '../common/PageGenerator';
import { GlobalConstant } from '../common/GlobalConstant';

let browser, context, page;

test.beforeAll(async()=>{
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
})


test('Verify that handle windows correctly',async ()=>{
    const login = PageGenerator.getLoginPage(page);

    logger.info('Go to https://www.saucedemo.com/');
    await login.gotoURL(GlobalConstant.URL);

    logger.info('Input to username textbox');
    await login.inputToUsernameTextbox(GlobalConstant.STANDARD_USER);

    logger.info('Input to password textbox');
    await login.inputToPasswordTextbox(GlobalConstant.PASSWORD);

    logger.info('Click to login button');
    await login.clickToLoginButton();

    logger.info('Click to Tweeter icon at bottom page');
    const home = PageGenerator.getHomePage(page);
    await home.clickToTweeterIcon();
    
    const tweeter = await context.waitForEvent("page");
    console.log(await page.title());


    
})
