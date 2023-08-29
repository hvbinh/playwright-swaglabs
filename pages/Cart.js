export class Cart{
    constructor(page)
    {
        this.page = page;
        this.checkout_button = page.locator("//button[@name='checkout']");
    }
}