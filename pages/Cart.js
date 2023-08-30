export class Cart{
    constructor(page)
    {
        this.page = page;
        this.checkout_button = page.locator("//button[@name='checkout']");
this.shopping_cart_badge = page.locator("//span[@class='shopping_cart_badge']");
    }
    async clickToCheckoutButton()
    {
        await this.checkout_button.click();
    }
    getShoppingCartBadgeNumber()
    {
        return this.shopping_cart_badge.innerText();
    }
    async clickToShoppingCartButton()
    {
        this.shopping_cart_badge.click();
    }
}