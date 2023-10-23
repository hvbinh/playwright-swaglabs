import { test, expect,chromium } from '@playwright/test';
import { logger } from '../../common/WinstonLog';

let browser, context, page;

test.beforeAll(async()=>{
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
})

test('Verify that upload successfully', async ()=>{
    
    logger.info('Go to url')
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    
    logger.info("Upload file")
    await page.locator("//input[@type='file']").setInputFiles("files/flower.jpeg");

    logger.info("Click to start button");
    await page.locator("(//button[@class='btn btn-primary start'])[1]").click();

    logger.info("Verify that delete button displays after uploading a file successfully");
    await expect(page.locator("(//button[@class='btn btn-danger delete'])[2]")).toBeVisible();
    

})