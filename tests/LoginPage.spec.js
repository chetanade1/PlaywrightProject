import {test, expect} from '@playwright/test';

test('open homepage', async({page}) => {

    //Navigate to the homepage
    await page.goto('https://demowebshop.tricentis.com/login');
    
    //Verify the title
    const pageTitle = await page.title();   
    expect(pageTitle).toBe('Demo Web Shop. Login');
    console.log('Title:', pageTitle);

    //enter email
    await page.fill('input[id="Email"]', 'chetanade45@gmail.com');
    console.log('Email entered');

    //enter password
    await page.fill('input[id="Password"]', 'test@123');
    console.log('Password entered');

    //click on login
    await page.click('input[value="Log in"]');
    console.log('Login clicked');


    page.close();   

});