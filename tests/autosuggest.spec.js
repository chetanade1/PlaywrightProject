import {test , expect} from '@playwright/test'

test('Handle auto suggestion', async ({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");

    //enter the name
    await page.locator('#small-searchterms').click();

    //enter the name
    await page.locator('#small-searchterms').fill("gift");

    //click on button
    await page.locator("//input[@type='submit']").click();

    //click on dropdown
    await page.locator("#products-orderby").click();

    //select the option
    //const options = await page.selectOption("#products-orderby", "Price: Low to High");

    const options = await page.$$("//select[@id='products-orderby']/option");

    for(let option of options)
    {
        const value = await option.textContent();
        console.log(value);
        
        if(value.includes('Created on'))
        {
            await option.click();
            break;
        }
        
    }



    


    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();

})