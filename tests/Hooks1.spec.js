/*
Playwright hooks

beforeEach - this hook is executed before each individual test.
afterEach - This hook is executed after each individual test.

beforeAll - this hook executed once before any of the tests start running.
afterAll - This hook executed once after any of the tests have been run.

*/
import {test , expect} from '@playwright/test'

test("hooks", async ({page}) =>
{

    await page.goto("https://www.demoblaze.com/index.html");
    console.log("open browser");

    



})