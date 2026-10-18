import {test,expect} from "../fixtures/firstFixture.ts";


test.describe("Regression Suite", () => {// used for grouping the testcases


    test.beforeAll("Setup All Tests", async()=>
    {
        console.log("Setting up for all tests /// before all");
    })

    test.afterAll("Teardown All Tests", async()=>
    {
        console.log("Tearing down for all tests /// after all");
    })







    test.beforeEach("Setup Each Test", async()=>
    {
        console.log("Setting up for each test // before each");
    })

    test.afterEach("Teardown Each Test", async()=>
    {
        console.log("Tearing down for each test // after each");
    })





    test("first Scenario", async () => {

        console.log("Executing First Scenario");

        test.step("fist Scenario step1", async()=>
        {
            console.log("First Scenario Step1");
        })

        test.step("Second step", async()=>
        {
            console.log("First Scenario Step2");
        })


        test.step("Third step", async()=>
        {
            console.log("First Scenario Step3");
        })
    });


    test("Second Test", async () => {
        console.log("Second test");

        test.step("Second Test step1", async()=>
        {
            console.log("Second test step1");
        })

        test.step("Second Test step2", async()=>
        {
            console.log("Second test step2");
        })

        test.step("Second test step3", async()=>
        {
            console.log("Second test step3");
        })
    })


});





//using fixture

test("login with fixture", async ({ loginemail ,page}) => {
    console.log(`[Test] loginemail: ${loginemail}`);
   // console.log(`[Test] loginpassword: ${loginpassword}`);
});


test("test login",async({loginpassword})=>{

    console.log(`${loginpassword}`)
    
})
