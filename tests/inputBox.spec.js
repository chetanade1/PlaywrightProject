const {test , expect} = require('@playwright/test');
/**
 * Chetan Ade
 */

    const TargetURL = 'https://testautomationpractice.blogspot.com/';
    const pageTitle = 'Automation Testing Practice';
    const pageURL = 'https://testautomationpractice.blogspot.com/';
    const welcomeMsg = 'GUI Elements';
    const name = 'Chetan Ade';
    const email = 'chetanade456@gmail.com'
    const phone = '1234567890'
    const address = 'Pune';


test('Verify the input box', async({page}) => {

    //Opne the Homepage
    await page.goto(TargetURL);
    console.log('Homepage opened');

    //Verify the title
    const pagetitle = await page.title();
    await expect(pagetitle).toBe(pageTitle);

    //Verify the URL
    const pageURL = page.url();
    await expect(pageURL).toBe(TargetURL);

    //Verify welcome msg
    const welcomeMsg1 = await page.locator("//a[text()='GUI Elements']");
    await expect(welcomeMsg1).toBeVisible();
    console.log('Welcome message:', welcomeMsg);

    //Enter the Name in the input box
    await page.locator("//input[@id = 'name']").fill(name);
    console.log('Name entered');

    //Enter the Email address in the input box
    await page.locator('#email').fill(email);
    console.log('Email entered');

    //Enter the phone number in the input box
    await page.locator('#phone').fill(phone);
    console.log('Phone number entered');

    //Enter the address in the input box
    await page.locator("//textarea[@id='textarea']").fill(address);
    console.log('Address entered');

    //select male gender radio button
    await page.locator("//input[@id = 'male' and @name = 'gender']").check();
    console.log("male gender selected");

    //to be checked
    await expect(page.locator("//input[@id = 'male' and @name = 'gender']")).toBeChecked();
    await expect(page.locator("//input[@id = 'male' and @name = 'gender']").isChecked()).toBeTruthy();
    console.log("gender is checked");



    //Wait for 5 seconds
    await page.waitForTimeout(5000);

    //Close the browser
    await page.close();
})