import { test, expect,chromium } from '@playwright/test';
import { logger } from '../../common/WinstonLog';

let browser, context, page;

// test.beforeAll(async()=>{
//     browser = await chromium.launch();
//     context = await browser.newContext();
//     page = await context.newPage();
// })

test('Verify that frame works correctly', async ({page})=>{
    
    logger.info('Go to url')
    await page.goto("https://skills.kynaenglish.vn/");
    //await page.waitForLoadState();
    await page.waitForTimeout(5000);

    logger.info("Switch to iframe")
    const iframeChat = await page.frameLocator("//iframe[@id='cs_chat_iframe']");

    logger.info("Click to chat bar");
    //await iframeChat.locator("//div[@class='border_overlay meshim_widget_widgets_BorderOverlay']").isEnabled();
    const chatBar = await iframeChat.locator("//div[@class='border_overlay meshim_widget_widgets_BorderOverlay']");
    await chatBar.isVisible();
    await chatBar.click();
    await iframeChat.locator("//input[@ng-model='login.username']").fill("user test");

    await page.mainFrame();
    await page.waitForTimeout(6000);


    
    

})