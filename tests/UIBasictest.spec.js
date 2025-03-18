import {test, expect} from '@playwright/test';

test('open homepage', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("Open the homepage");
    
    //verify title
    const pageTitle = await page.title();
    expect(pageTitle).toBe('LoginPage Practise | Rahul Shetty Academy');
    console.log('Title:', pageTitle);

    //verify the URL
    const pageURL = page.url();
    expect(pageURL).toBe('https://rahulshettyacademy.com/loginpagePractise/');
    console.log('URL:', pageURL);

    //enter username
    await page.getByRole('textbox', {name: 'username'}).fill('rahulshettyacademy');
    console.log('Username entered');

    //enter password
    await page.getByRole('textbox', {name: 'password'}).fill('learning');
    console.log('Password entered');

    //
   

});

