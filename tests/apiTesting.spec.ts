import test, { expect } from "@playwright/test"
import userData from "../jsonFiles/user.json"
import { User } from "../userObject/user";



test("1. GET request", async({request}) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");

    expect(response.status()).toBe(200);

    console.log(await response.json())
});

test("2. POST request", async({request}) => {

    const payload = {
        "title": "foo",
        "body": "bar",
        "userId": 1,
    };

    const response = await request.post("https://jsonplaceholder.typicode.com/posts.1", {
    data : payload,
    headers:{
        "accept" : "application/json",
        "authorization": "Bearer sgsggsgsgsssssssssssssssssssssssssasdghaghdgadgadgadgadgagdgadgadgadgagdagddgagdga"
    }
    });

    expect(response.status()).toBe(201);


    console.log(await response.json())

    //console.log(await response.headers());
    //console.log(await response.statusText());
}   )



test("3. put",async({request}) => {

    const payload = {
        "title": "POO",
        "body": "Prabu G",
        "userId": 1,
    };

    const response = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
        data : payload,

    });

    expect(response.status()).toBe(200);

    console.log(await response.json())
    

    
})



test("4. Patch",async({request}) => {

    const payload = {
        "title": "POO",
        "body": "Prabu G",
    };

    const response = await request.patch("https://jsonplaceholder.typicode.com/posts/1", {
        data : payload,

    });

    expect(response.status()).toBe(200);

    console.log(await response.json())


    
    
})

test("5. Delete",async({request}) => {


    const response = await request.delete("https://jsonplaceholder.typicode.com/posts/1");

    expect(response.status()).toBe(200);

    console.log(await response.json())

    console.log( await response.headers());


    expect(  response.headers()['date']).toContain("01 Nov 2026");

    
    
});


test("6. Delete header",async({request}) => {


    const response = await request.delete("/posts/1");

    expect(response.status()).toBe(200);

    console.log(await response.json())

    console.log( await response.headers());


    expect(  response.headers()['date']).toContain("01 Nov 2026");

    
    
});



test("update json values", async({request})=>
{

    userData.name = "Prabu G";
    userData.email = "prabu@gmail.com";
    userData.role = "Automation Engineer";

    console.log(userData);

});


test("update user using interface", async({request})=>
{
    

    const data : User = {
        name : "Prabu G",
        email : "Prabu@gmail.com",
        role : " Automation Engineer"
    }


    console.log(data);

});


test.describe("Environment Tests", () => {
    // tests/apiTesting.spec.ts
    test("testcaseName", async ({ page, browserName }) => {
        test.skip(browserName === "chromium", "Skipping on Chromium");

        // test code here
    });


        test("avoid stg", async({page})=>
        {
             console.log(process.env.ENV)
            test.fixme(process.env.ENV != "stg", "Skipping on stg");
           

        });
});








