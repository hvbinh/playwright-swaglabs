export class Login
{ 
    constructor(page)
    {
        this.page = page;
        this.username_textbox = page.locator("//input[@id='user-name']");
        this.password_textbox = page.locator("//input[@id='password']");
        this.login_button = page.locator("//input[@id='login-button']");
        this.username_error_message = page.locator("//h3[@data-test='error']");
    }
    async gotoURL(url)
    {
        await this.page.goto(url);
    }
    async inputToUsernameTextbox(username)
    {
        await this.username_textbox.fill(username);
        
    }
    async inputToPasswordTextbox(username)
    {
        await this.password_textbox.fill(username);
    }
    async clickToLoginButton()
    {
        await this.login_button.click();
        
    }
    usernameErrorMessage()
    {
        return this.username_error_message.innerText();
    }
}