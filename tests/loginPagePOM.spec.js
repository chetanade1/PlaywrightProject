import {test , expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test("login Pages", async ({page}) => {

    const login = new LoginPage(page);
     
    await login.gotoTheLoginPage();
    await login.clickOnLoginLink();
    await login.enterTheEmailId("chetanade5@gmail.com");
    await login.enterThePassword("test@123");
    await login.checkTheRememberMeCheckBox();
    await login.clickOnLogInButton();
})