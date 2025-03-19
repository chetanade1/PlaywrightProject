const {test , expect} = require('@playwright/test');

const TargetURL = 'https://testautomationpractice.blogspot.com/';

test('Verify the checkbox', async({page}) => {

    //Opne the Homepage
    await page.goto(TargetURL);
    console.log('Homepage opened');

    //check the days button
    await page.check('//input[@id="monday"]');
    console.log('Monday checked');  

    await page.waitForTimeout(5000);

    const checkboxLocators = [
        '//input[@id="monday"]',
        '//input[@id="friday"]',
        '//input[@id="sunday"]'
    ];

    for (const locator of checkboxLocators) {
        await page.check(locator);
        console.log('Checkbox checked');

    }

    

    //wait for 5 seconds
    await page.waitForTimeout(5000);



});
