const {test, expect} =require('@playwright/test')

test('handle date picker', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("browser opened");

    //select date from date picker
    //await page.locator("#onwardCal").fill("31 march 2025");



})