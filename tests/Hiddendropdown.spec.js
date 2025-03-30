import  {test , expect} from '@playwright/test'

test('Handle hidden dropdown' , async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //Enter the username
    await page.locator("//input[@name='username']").fill('admin');
    await page.getByRole()

    //Enter the password
    await page.locator("//input[@name='password']").fill('admin123');

    //Click on submit
    await page.locator("//button[@type='submit']").click();

    //list the options
    await page.waitForSelector("//ul[@class='oxd-main-menu']");

    //enter the PIM in search box
    await page.locator("//input[@placeholder='Search']").fill("PIM");

    //select the PIM option
    const PIMoptions = await page.locator('.oxd-main-menu-item').filter({hasText : 'PIM'});
    await PIMoptions.click();

    // 5️⃣ Click the "Job Title" dropdown
    await page.click('label:has-text("Job Title") + div'); // Click dropdown

    // 6️⃣ Select "Automation Tester" from the dropdown list
    await page.locator('div[role="listbox"] >> text=Automation Tester').click();
 
    // 7️⃣ Verify the selection
    const selectedJobTitle = await page.locator('label:has-text("Job Title") + div').textContent();
    expect(selectedJobTitle).toContain("Automation Tester");
 
    console.log('✅ Successfully selected "Automation Tester" from Job Title in PIM page!');



    //wait for 5 sec
    await page.waitForTimeout(5000);

    //Close the browser
    await page.close();
})
