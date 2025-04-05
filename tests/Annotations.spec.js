/*
Annotation	                     Syntax	                                            Description
skip	                test.skip([condition], [description])	            Skips a test or test suite.
only	                test.only([name], async () => { ... })	            Runs only this test or suite.
describe.skip	        test.describe.skip([name], () => { ... })	        Skips the entire group of tests.
describe.only	        test.describe.only([name], () => { ... })	        Runs only this describe block.
fixme	                test.fixme([condition], [description])	            Marks a test as needing a fix (skips it).
fail	                test.fail([condition], [description])	            Marks a test as expected to fail.
slow	                test.slow([condition], [description])	            Marks a test as slow (increases timeout).
use	                    test.use({ option: value })	                        Overrides test configuration per test.
info().annotations	    test.info().annotations	                            Returns annotation metadata inside a test.
tag	                    test('@smoke') + CLI filter --grep @smoke	        Not built-in, but commonly used with grep.

*/

import {test , expect, chromium} from '@playwright/test'

//Skip
test('test1', async ({page, browserName}) => {
    console.log("this is a test1......");
    if(browserName=="chromium")
    {
        test.skip();
    }
})

test('test2', async ({page}) => {
    console.log("this is a test2......");
})

//fixme

test("test 3", async ({page}) =>{
    test.fixme();
    console.log("this is test 4.....")
})

//fail
test("test 5", async({page}) => {
    test.fail();
    console.log("this is test 5....");
    expect(1).toBe(2);
})

//slow
test.only("test 7", async ({page}) => {
    test.slow();
    console.log("this is test 7.....");
    await page.goto("https://www.amazon.com");


})

