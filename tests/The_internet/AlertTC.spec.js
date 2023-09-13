import {test, expect} from '@playwright/test';

test('Verify alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator("//a[text()='JavaScript Alerts']").click();
    await page.locator("//button[text()='Click for JS Confirm']").click();
    page.on('dialog', async dialog =>{
        await dialog.accept();
    });
    expect(await page.locator("//p[@id='result']").innerText()).toBe("You clicked: Ok");

})

