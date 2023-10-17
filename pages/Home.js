export class Home{
    constructor(page)
    {
        this.page = page;
        this.title = page.locator("//div[@class='app_logo']"); 
        this.product_title = page.locator("(//div[contains(@class,'inventory_item_name ')])[1]");
        this.product_add_to_cart_button = page.locator("//button[@name='add-to-cart-sauce-labs-backpack']");
        this.hamburger_button = page.locator("//button[@id='react-burger-menu-btn']");
        this.all_items_menu = page.locator("//a[text()='All Items']");
        this.about_menu = page.locator("//a[text()='About']");
        this.logout_menu = page.locator("//a[text()='Logout']");
        this.reset_app_state = page.locator("//a[text()='Reset App State']");
        this.product_description = page.locator("(//div[@class='inventory_item_desc'])[1]");
        this.product_price = page.locator("(//div[contains(@class,'inventory_item_price')])[1]");
        this.shopping_cart_badge = page.locator("//span[@class='shopping_cart_badge']");
    }
    async clickToFirstProduct()
    {
        await this.product_title.click();
    }
    getTitleText()
    {
        return this.product_title.innerText();
    }
    getDescription()
    {
        return this.product_description.innerText();
    }
    getPrice()
    {
        return this.product_price.innerText();
    }
    async clickToAddToCartButton()
    {
        await this.product_add_to_cart_button.click();
    }
    getShoppingCartBadgeNumber()
    {
        return this.shopping_cart_badge.innerText();
    }
}