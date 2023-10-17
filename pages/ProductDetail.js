export class ProductDetail{
    constructor(page)
    {
        this.page = page;
        this.product_title = page.locator("//div[contains(@class,'inventory_details_name')]");
        this.product_description = page.locator("//div[contains(@class,'inventory_details_desc large_size')]");
        this.product_price = page.locator("//div[contains(@class,'inventory_details_price')]");
        this.add_to_cart_button = page.locator("//button[text()='Add to cart']");
        this.remove_button = page.locator("//button[@name='remove-sauce-labs-backpack']");
        this.shopping_cart_badge = page.locator("//span[@class='shopping_cart_badge']");
        this.shopping_cart_empty = page.locator("//a[@class='shopping_cart_link']");
        
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
    getShoppingCartBadgeNumber()
    {
        return this.shopping_cart_badge.innerText();
    }
    async clickToRemoveButton()
    {
        await this.remove_button.click();
    }
    getShoppingCartEmpty()
    {
        return this.shopping_cart_empty.innerText();
    }

}