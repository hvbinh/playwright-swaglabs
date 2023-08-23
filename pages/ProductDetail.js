export class ProductDetail{
    constructor(page)
    {
        this.page = page;
        this.product_title = page.locator("//div[contains(@class,'inventory_details_name')]");
        this.product_description = page.locator("//div[contains(@class,'inventory_details_desc large_size')]");
        this.product_price = page.locator("//div[contains(@class,'inventory_details_price')]");
        this.add_to_cart_button = page.locator("//button[text()='Add to cart']");
    }
    getProductTitle()
    {
        return this.product_title.innerText();
    }
}