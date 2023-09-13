import {test, expect} from '@playwright/test';
import { logger } from '../../common/WinstonLog';

test('Verify that the alert', async ({page})=>{
    await page.goto("https://automationfc.github.io/basic-form/");
    await page.locator("//button[text()='Click for JS Confirm']").click();
    
    page.on('dialog', async dialog =>{
        await dialog.accept();
    });

    let text = await page.locator("//p[@id='result']").innerText();
    console.log(text);

    await page.waitForTimeout(5000);
})
