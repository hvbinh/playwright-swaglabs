import {test, expect} from '@playwright/test';
import { logger } from '../../common/WinstonLog';

test('Verify alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator("//a[text()='JavaScript Alerts']").click();
    await page.locator("//button[text()='Click for JS Alert']").click();

    // logger.info('Click ok on dialog');
    // page.on('dialog', async dialog =>{
    //     await dialog.accept();
    // });
    // await expect(await page.locator("//p[@id='result']").innerText()).toBe('You successfully clicked an alert');

    // logger.info('Click ok on dialog');
    // await page.locator("//button[text()='Click for JS Confirm']").click();
    // page.on('dialog',async dialog =>{
    //     await dialog.accept();
    // });
    // await expect(await page.locator("//p[@id='result']").innerText()).toBe('You clicked: Ok');
    

    // logger.info('Click cancel on dialog');
    // await page.locator("//button[text()='Click for JS Confirm']").click();
    // page.on('dialog',async dialog=>{
    //     await dialog.dismiss();
    // });
    // await expect(await page.locator("//p[@id='result']").innerText()).toBe('You clicked: Cancel');

    await page.locator("//button[text()='Click for JS Prompt']").click();
    page.on('dialog', async dialog =>{
        await dialog.setValue('hello');
        await dialog.accept();
    });
    await page.waitForTimeout(8000);





})

