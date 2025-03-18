import {test, expect} from '@playwright/test';

test('open homepage', async({page}) => {

    //Navigate to the homepage
    await page.goto('https://demowebshop.tricentis.com/login');

    //Verify the title
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Demo Web Shop. Login');
    console.log('Title:', pageTitle);

    //Verify the welcomepage
    const welcomepage = page.locator('//h1[normalize-space()="Welcome, Please Sign In!"]');
    await expect(welcomepage).toBeVisible();
    console.log('Welcome, Please Sign In!');

    //Verify the URL        
    const pageURL = page.url(); 
    expect(pageURL).toBe('https://demowebshop.tricentis.com/login');
    console.log('URL:', pageURL);

    //click on register
    await page.click('//a[text()="Register"]');
    console.log('Register clicked');

    //Verify the title
    const pageTitle1 = page.locator('//div[@class="page-title"]/h1[text()="Register"]');
    await expect(pageTitle1).toBeVisible();
    console.log('Title:', pageTitle1);

    //click on gender
    await page.click('//input[@id="gender-male"]');
    console.log("gender selected");

    //Enter firstname
    await page.fill('//input[@id="FirstName"]', 'Chetan');
    console.log('First name entered');

    //Enter lastname
    await page.fill('//input[@id="LastName"]', 'Ade');
    console.log('Last name entered');

    //Enter email
    await page.fill('//input[@id="Email"]', 'chetanade45@gmail.com');
    console.log('Email entered');

    //Enter password
    await page.fill('//input[@id="Password"]', "test@123");
    console.log('Password entered');

    //Enter confirm password
    await page.fill('//input[@id="ConfirmPassword"]', "test@123");
    console.log('Confirm password entered');

    //click on register button
    await page.click('//input[@id="register-button"]');
    console.log('Register button clicked');

    await page.close();
})