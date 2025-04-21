
exports.LoginPage = class LoginPage {

    constructor(page)
    {
        this.page = page;
        this.loginLink = ".ico-login";
        this.EmailIdInput = "#Email";
        this.PasswordInput = "#Password";
        this.rememberMe = "#RememberMe";
        this.ForgotPass = "//a[text()='Forgot password?']";
        this.signBtn = "//input[@value= 'Log in']";

    }

    async gotoTheLoginPage()
    {
        await this.page.goto("https://demowebshop.tricentis.com/");
        console.log("open the browser");

    }

    async clickOnLoginLink()
    {
        await this.page.locator(this.loginLink).click();
        console.log("Login link clicked");
    }

    async enterTheEmailId(email)
    {
        await this.page.locator(this.EmailIdInput).fill(email);
        console.log("Email entered");
    }

    async enterThePassword(pass)
    {
        await this.page.locator(this.PasswordInput).fill(pass);
        console.log("password entered");
    }

    async checkTheRememberMeCheckBox()
    {
        await this.page.check(this.rememberMe);
        console.log("remember me checkbox clicked");
    }

    async clickOnForgetPasswordBtn()
    {
        await this.page.locator(this.clickOnForgetPasswordBtn).click();
        console.log("forgot password link clicked");
    }

    async clickOnLogInButton()
    {
        //await this.page.waitforselector(this.signBtn);
        await this.page.locator(this.signBtn).click();
        console.log("login button clicked")
    }
}