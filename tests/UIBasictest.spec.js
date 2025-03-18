import {test, expect} from '@playwright/test';

test('open homepage', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/loginpagepractice/");
   

});

