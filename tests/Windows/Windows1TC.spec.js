import { Browser, BrowserContext,test, expect, chromium } from '@playwright/test'

test('Verify that one window is opened1', async ({page}) => {



    await page.goto('https://automationfc.github.io/basic-form/index.html');
    console.log("selenium: "+ await page.title());
    await page.locator("//a[text()='GOOGLE']").isVisible();
    await page.locator("//a[text()='GOOGLE']").click();

    const browser = await chromium.launch();
    const context = await browser.newContext();
    
    const [newWindow] = await Promise.all([

        context.waitForEvent("page"),

        
       // await page.waitForTimeout(10000),

    ]);
    console.log(await newWindow.title());

    
    
   // console.log("google: "+ await page.title());
    


})