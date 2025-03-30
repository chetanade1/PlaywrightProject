const {test , expect} =require("@playwright/test")

test('handle the inner frames', async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    console.log("browser opened");

    const frame3 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3.html"});
    await frame3.locator("//input[@name=('mytext3')]").fill("chetan ade");

    //nested frames
    const childframe = await frame3.childFrames();
    childframe[0].locator('//*[@id="i6"]/div[3]/div').check();



    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();

})