import {test, expect} from '@playwright/test';

test('Verify alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator("//a[text()='JavaScript Alerts']").click();
    await page.locator("//button[text()='Click for JS Confirm']").click();

    const ele = await page.$("#prompt");

    page.on('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await ele?.click();
    expect(await page.locator("//p[@id='result']").innerText()).toBe("You clicked: Ok");

})

