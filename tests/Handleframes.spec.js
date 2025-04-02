const {test , expect} =require("@playwright/test")

test('handle the frames', async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    console.log("browser opened");

    const frame1 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"});
    await frame1.locator("//input[@name=('mytext1')]").fill("chetan ade");


    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();

})