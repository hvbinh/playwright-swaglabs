import { test, expect, chromium } from '@playwright/test';
import { logger } from '../../common/WinstonLog';

let browser, context, page;

test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();

})

test('Verify that frame works correctly', async () => {


    logger.info('Go to url')
    await page.goto("https://skills.kynaenglish.vn/");
    await page.waitForTimeout(3000);

    logger.info("Switch to iframe")
    const iframeChat = await page.frameLocator("//iframe[@id='cs_chat_iframe']");

    logger.info("Click to chat bar");
    const chatBar = await iframeChat.locator("//div[@class='border_overlay meshim_widget_widgets_BorderOverlay']");
    await chatBar.isVisible();
    await chatBar.click();
    await iframeChat.locator("//input[@ng-model='login.username']").fill("user test");
    await expect(await iframeChat.locator("//div[@class='ng-binding']").innerText()).toBe("Xin thông báo thời gian hỗ trợ mới của Kyna.vn bắt đầu từ 9h00-18h00, thứ 2 đến thứ 6 hàng tuần. Quý khách vui lòng để lại số điện thoại kèm lời nhắn, chúng tôi sẽ liên hệ trong thời gian sớm nhất. Xin cảm ơn.");

    await page.mainFrame();
    await expect(await page.locator("(//div[@class='title']/parent::div[@class='parent-category'])[1]").innerText()).toBe("Tất cả khóa học");
    await page.waitForTimeout(3000);


})