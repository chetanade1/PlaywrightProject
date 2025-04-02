const {test, expect} =require('@playwright/test')

test('handle date picker', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("browser opened");

    //select date from date picker
    //await page.locator("#datepicker").fill("03/15/2024");

    //with logic
    const year = '2023';
    const month = 'March'
    const day = '5';

    await page.locator('#datepicker').click();

    while(true)
    {
        const currentyear = await page.locator(".ui-datepicker-year").textContent();
        const currentmonth = await page.locator(".ui-datepicker-month").textContent();

        if(currentyear==year && currentmonth==month)
        {
            break;
        }
        await page.locator("[title='Prev']").click();
    }

    /*
    const dates = await page.$$("//a[@class='ui-state-default']");

    for(const dt of dates)
    {
        if(await dt.textContent()==day)
        {
            await dt.click();
            break;
        }
    }
    */
   await page.locator(`//a[@class='ui-state-default'][text()='${day}']`).click();

   console.log("date picked")

    //wait for 5 sec
    await page.waitForTimeout(5000);

})