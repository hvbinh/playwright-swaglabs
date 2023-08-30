export class Checkout{
    constructor(page)
    {
        this.page = page;
        this.firstname_textbox = page.locator("//input[@name='firstName']");
        this.lastsname_textbox = page.locator("//input[@name='lastName']");
        this.postalcode_textbox = page.locator("//input[@name='postalCode']");
        this.continue_button = page.locator("//input[@name='continue']");
        this.finish_button = page.locator("//button[@name='finish']");
        this.complete_text = page.locator("//h2[@class='complete-header']");
        this.back_home_button = page.locator("//button[@name='back-to-products']");
    }
    async inputToFirstNameTextbox(firstName)
    {
        await this.firstname_textbox.fill(firstName);
    }
    async inputToLastNameTextbox(lastName)
    {
        await this.lastsname_textbox.fill(lastName);
    }
    async inputToPostalCode(postalCode)
    {
        await this.postalcode_textbox.fill(postalCode);
    }
    async clickToContinueButton()
    {
        await this.continue_button.click();
    }
    async clickToFinishButton()
    {
        await this.finish_button.click();
    }
    getCompleteText()
    {
        return this.complete_text.innerText();
    }
    async clickToBackHomeButton()
    {
        await this.back_home_button.click();
    }
}