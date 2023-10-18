export class Cart{
    constructor(page)
    {
        this.page = page;
        this.checkout_button = page.locator("//button[@name='checkout']");
        this.shopping_cart_badge = page.locator("//span[@class='shopping_cart_badge']");
        this.product_title = page.locator("//div[contains(@class,'inventory_item_name')]");
        this.product_description = page.locator("//div[@class='inventory_item_desc']");
        this.product_price = page.locator("//div[@class='inventory_item_price']");
        this.product_quantity = page.locator("//div[@class='cart_quantity']");
        
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
    getProductTitle()
    {
        return this.product_title.innerText();
    }
    getProductDescription()
    {
        return this.product_description.innerText();
    }
    getProductPrice()
    {
        return this.product_price.innerText();
    }
    getProductQuantity()
    {
        return this.product_quantity.innerText();
    }
}