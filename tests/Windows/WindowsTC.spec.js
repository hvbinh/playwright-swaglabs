import { Browser, BrowserContext,test, expect, chromium } from '@playwright/test'

let browser, context, page;

test.beforeAll(async()=>{
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
})
test('Verify that handel one window', async () => {

    await page.goto('https://automationfc.github.io/basic-form/index.html');
    console.log("selenium: "+ await page.title());
    await page.locator("//a[text()='GOOGLE']").isVisible();
    await page.locator("//a[text()='GOOGLE']").click();
    

    const newWindow = await context.waitForEvent("page");
    await newWindow.locator("//textarea[@name='q']").fill("selenium");
    await newWindow.locator("//textarea[@name='q']").press('Enter');
    console.log(await newWindow.title());
    
    console.log("selenium: "+ await page.title());
    
    await page.bringToFront();
    await page.waitForTimeout(3000);
    await page.locator("//a[text()='TIKI']").isVisible();
    await page.locator("//a[text()='TIKI']").click();
    await page.bringToFront();
    await page.waitForTimeout(3000);

    
    
   // console.log("google: "+ await page.title());
    


})