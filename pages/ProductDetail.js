export class ProductDetail{
    constructor(page)
    {
        this.page = page;
        this.product_title = page.locator("//div[contains(@class,'inventory_details_name')]");
        this.product_description = page.locator("//div[contains(@class,'inventory_details_desc large_size')]");
        this.product_price = page.locator("//div[contains(@class,'inventory_details_price')]");
        this.add_to_cart_button = page.locator("//button[text()='Add to cart']");
        this.shopping_cart_badge = page.locator("//span[@class='shopping_cart_badge']");
    }
    getProductTitle()
    {
        return this.product_title.innerText();
    }
    async clickAddToCartButton()
    {
        await this.add_to_cart_button.click();
    }
    getShoppingCartBadgeNumber()
    {
        return this.shopping_cart_badge.innerText();
    }
    getProductDescription()
    {
        return this.product_description.innerText();
    }
    getProductPrice()
    {
        return this.product_price.innerText();
    }
}