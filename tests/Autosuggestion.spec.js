import {test , expect} from '@playwright/test'

test('Handle auto suggestion', async ({page}) => {

    await page.goto("https://www.checkmybus.com/");
    console.log("opne the browser");

    //Verify the Title
    const title =  await page.title();
    await expect(title).toBe("Book Cheap Bus Tickets Online | CheckMyBus");
    console.log("Page title is :", title);

    //Click on origin place
    const originPlace = await page.locator('#origincityname');
    await originPlace.click();

    //Enter the location
    await page.locator('#origincityname').fill("India");
    console.log("Location entered");

    await page.waitForSelector("//div[@class='city-result']");

    const options = await page.$$("//div[@class='autocomplete hand' ]/div/span");

    for(let option of options)
    {
        const value = option.textContent();
        console.log(value);
    }
    







    //wait 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();

})