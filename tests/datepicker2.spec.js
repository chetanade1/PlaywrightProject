const {test , expect}=require('@playwright/test')

test('handle date picker', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    console.log("browser opened");

    //await page.waitForSelector("//input[@id='txtDate']");

    await page.click("//input[@id='txtDate']");

    //date picked
    const datepick = await page.locator("//input[@id='txtDate']");
    await datepick.fill("11/03/2025");

    //wait for 5 sec
    await page.waitForTimeout(5000);

})