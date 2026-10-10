import {test,expect} from "@playwright/test";

test("My first test Case",async({page})=>{
    
   await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveTitle(/Automation/i);

   // await expect(page.getByRole("button",{name:"stop"})).toBeVisible();



    await page.getByRole("textbox",{name:"name"}).fill("Prabu G");

    await page.locator("#btn1").click();

    await page.getByText("Male").nth(0).click();

    await page.locator("//button[@id='btn2']").click();

    await page.getByPlaceholder("Enter EMail").pressSequentially("prabu@gmail.com",{delay:100});

    await page.getByText("Sunday").click()
    await page.getByText("Sunday").uncheck();

    await page.getByText("Point Me").hover();


    const checkbox =   page.locator("#country");

    await checkbox.selectOption("India");

    await page.waitForTimeout(5000);


} );


// async keyword is used to define a function that returns a promise.

//await keyword is used to wait for a promise to resolve.

// promise - object represents the eventual result of an asynchronous operation.

// 

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Prabu G');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('Prabu@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('123456789');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByLabel('Country:').selectOption('japan');
  await page.getByLabel('Colors:').selectOption('white');
  await page.getByLabel('Sorted List:').selectOption('cheetah');
  await page.locator('#section1').getByRole('button', { name: 'Submit' }).click();
  await page.locator('#section2').getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Point Me' }).click();
  await page.getByRole('button', { name: 'START' }).click();
 // await page.getByRole('button', { name: 'STOP' }).click();


  await page.waitForTimeout(5000);

  await page.waitForLoadState("domcontentloaded");

  const stopButton = page.getByRole('button', { name: 'STOP' });

  await expect( stopButton).toHaveCount(10);


  const count = 5 //fetching values from DB

 await  expect(count).tob

 await page.dragAndDrop("#drop","#draggable");




});