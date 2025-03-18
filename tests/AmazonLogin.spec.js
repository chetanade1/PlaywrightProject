
import { test, expect } from '@playwright/test';

test('Amazone sign in', async ({ page }) => {

    // Navigate to the Amazon homepage
    await page.goto('https://www.amazon.com');

    // Perform login
    await page.goto('https://www.amazon.com/ap/signin');
    await page.fill('input[name="email"]', 'chetanade5@gmail.com');
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