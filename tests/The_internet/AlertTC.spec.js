import { test, expect } from '@playwright/test';

test('Verify alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator("//a[text()='JavaScript Alerts']").click();
    await page.locator("//button[text()='Click for JS Confirm']").click();
    await page.waitForTimeout(3000);


    // page.on('dialog', dialog =>{
    //     //console.log(dialog.message());
    //      dialog.accept();
    // });

    // expect(await page.locator("//p[@id='result']").innerText()).toBe("You clicked: Ok");
    // await page.waitForTimeout(3000);

    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        //dialog.accept('').catch(() => { });
        dialog.accept();
    });
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator("//p[@id='result']").innerText()).toBe("You clicked: Ok");

})

