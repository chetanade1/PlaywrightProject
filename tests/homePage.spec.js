import { test, expect } from '@playwright/test';

test('verify homepage', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('https://www.google.com');

    // Verify the title
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Google');
    expect(await page.title()).toBe('Google');
    console.log('Title:', pageTitle);

    // Verify the URL   
    const pageURL = page.url();
    expect(pageURL).toBe('https://www.google.com/');            
    console.log('URL:', pageURL);

   await  page.close();   
 
});

test('verify amazon homepage', async ({ page }) => {
    // Navigate to the Amazon homepage
    await page.goto('https://www.amazon.com');

    // Verify the title
    const amazonTitle = await page.title();
    expect(amazonTitle).toContain('Amazon');
    console.log('Amazon Title:', amazonTitle);

    // Verify the URL
    const amazonURL = page.url();
    expect(amazonURL).toBe('https://www.amazon.com/');
    console.log('Amazon URL:', amazonURL);

    await page.close();

    // Perform login
    await page.goto('https://www.amazon.com/ap/signin');
    await page.fill('input[name="email"]', 'your-email@example.com');
    await page.click('input[id="continue"]');
    await page.fill('input[name="password"]', 'your-password');
    await page.click('input[id="signInSubmit"]');

    // Verify successful login by checking for a specific element
    await page.waitForSelector('#nav-link-accountList-nav-line-1');
    const accountName = await page.textContent('#nav-link-accountList-nav-line-1');
    expect(accountName).toContain('Your Account');
    console.log('Logged in as:', accountName);
});

test('Amazone sign in', async ({ page }) => {

    // Navigate to the Amazon homepage
    await page.goto('https://www.amazon.com');

    // Perform login
    await page.goto('https://www.amazon.com/ap/signin');
    await page.fill('input[name="email"]', 'your-email@example.com');
    await page.click('input[id="continue"]');
    await page.fill('input[name="password"]', 'your-password');
    await page.click('input[id="signInSubmit"]');

    // Verify successful login by checking for a specific element
    await page.waitForSelector('#nav-link-accountList-nav-line-1');
    const accountName = await page.textContent('#nav-link-accountList-nav-line-1');
    expect(accountName).toContain('Your Account');
    console.log('Logged in as:', accountName);

    await page.close();
}       
);