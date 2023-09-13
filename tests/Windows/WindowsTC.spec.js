import { Browser, BrowserContext,test, expect, chromium } from '@playwright/test'

test('Verify that handel one window', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://automationfc.github.io/basic-form/index.html');
    console.log("selenium: "+ await page.title());
    await page.locator("//a[text()='GOOGLE']").isVisible();
    await page.locator("//a[text()='GOOGLE']").click();
    
    const [newWindow] = await Promise.all([
        context.waitForEvent("page")
       // await page.waitForTimeout(10000),
    ]);
    await newWindow.locator("//textarea[@name='q']").fill("selenium");
    await newWindow.locator("//textarea[@name='q']").press('Enter');
    console.log(await newWindow.title());
    
    console.log("selenium: "+ await page.title());
    
    await page.locator("//a[text()='TIKI']").isVisible();
    await page.locator("//a[text()='TIKI']").click();

    await page.waitForTimeout(6000);

    
    
   // console.log("google: "+ await page.title());
    


})