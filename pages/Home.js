export class Home{
    constructor(page)
    {
        this.page = page;
        this.title = page.locator("//div[@class='app_logo']"); 
        this.product_title = page.locator("(//div[@class='inventory_item_name'])[1]");
        this.product_add_to_cart_button = page.locator("(//button[@name='add-to-cart-sauce-labs-backpack'])[1]");
        this.hamburger_button = page.locator("//button[@id='react-burger-menu-btn']");
        this.all_items_menu = page.locator("//a[text()='All Items']");
        this.about_menu = page.locator("//a[text()='About']");
        this.logout_menu = page.locator("//a[text()='Logout']");
        this.reset_app_state = page.locator("//a[text()='Reset App State']");
    }
    async clickToFirstProduct()
    {
        await this.product_title.click();
    }
}