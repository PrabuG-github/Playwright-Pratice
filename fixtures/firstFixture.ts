import {test as base,expect} from '@playwright/test';

type MyFixtures = {
    loginemail:string,
    loginpassword:string
}



const test = base.extend<MyFixtures>({
    loginemail: async ({}, use) => {
        const email = 'testuser@example.com';
        console.log(`[Fixture] loginemail initialized: ${email}`);
        
        await use(email);
        
        console.log(`[Fixture] loginemail cleaned up`);
        
    },

    loginpassword: async ({}, use) => {
        const password = 'Password@123';
        console.log(`[Fixture] loginpassword initialized`);
        
        await use(password);


        console.log(`[Fixture] loginpassword cleaned up`);
    },
});


export {test,expect}