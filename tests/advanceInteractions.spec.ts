import test, { expect } from "@playwright/test";
import path from "path";

test("Iframes", async({page})=>
{
await page.goto("https://demo.automationtesting.in/Frames.html");


const frame =  page.frameLocator("#singleframe");//

await frame.getByRole("textbox").fill("Prabu G");

const frame1 = page.frame("SingleFrame");

const Frames = page.frames();//array of frames

for(const frame of Frames)
{

    if (frame.name() === "SingleFrame")
    {
        
    }
    console.log(await frame.title());

}   



await page.waitForTimeout(5000);

});


test("get all frames", async({page})=>
{
    await page.goto("https://practice-automation.com/iframes/");

    const frames = page.frames();

    for(const frame of frames)
    {
        console.log(await frame.title());



        if(await frame.name()=== "bottom-iframe")
        {

            const text = frame.getByText("Development Partners");

            await expect(text).toBeVisible();

            console.log("verified")
        }
    }


});




test("handle popup and multiple tabs", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const [newPage] = await Promise.all(
        [

        page.waitForEvent("popup"),// listener should not use await 

        await page.getByText("New Tab").click()
    ]

);


    await newPage.waitForLoadState("domcontentloaded");

    await expect( newPage.getByText("SDET-QA Blog")).toBeVisible();


    await page.bringToFront();

    await page.waitForTimeout(5000);
    await newPage.close();
});


test("alerts",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
  
    page.on("dialog",async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept();
    })




    

    await page.locator("#alertBtn").click();

    await page.waitForTimeout(5000)

})


test("file Upload", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const fileUpload =  page.locator("#singleFileInput");

    await fileUpload.hover();
    
    await fileUpload.setInputFiles(path.join(__dirname, "../readmaterials/locators.txt"));

    await page.waitForTimeout(10000);

});


test("File Download", async({page})=>
{
    await page.goto("https://demo.automationtesting.in/FileDownload.html");



    const [download] = await Promise.all([
        page.waitForEvent('download'),//listener
        await page.getByText("Download",{exact:true}).nth(0).click()
    ])

    console.log(await download.path());

    await download.saveAs(path.join(__dirname,"./filedownloads/"))

    expect(await download.failure()).toBeNull();
})

test('Keyboard and Mouse operations', async ({ page }) => {
  // Keyboard key presses & shortcuts
//   await page.goto('https://the-internet.herokuapp.com/key_presses');
//   await page.locator('#target').click();

  
//   await page.keyboard.press('Shift+KeyB');
  
//   await expect(page.locator('#result')).toContainText('B');

  // Drag and Drop (High-Level Locator API)
//   await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
//   await page.locator('#column-a').dragTo(page.locator('#column-b'));

  await page.goto("https://demo.automationtesting.in/FileDownload.html");
  // Low-level mouse simulation
  await page.mouse.move(100, 200);
  await page.mouse.down();
  await page.mouse.move(300, 200);
  await page.mouse.up();
});


test('Visual artifact capture', async ({ page }) => {
  await page.goto('https://playwright.dev');

  // Full-page screenshot
  await page.screenshot({ path: 'screenshots/homepage-full.png', fullPage: true });

  // Element-level screenshot
  const heroBtn = page.getByRole('link', { name: 'Get started' });
  await heroBtn.screenshot({ path: 'screenshots/hero-btn.png' });
});


test('Mocking API responses', async ({ page }) => {

  // Mock API call to return customized JSON


  await page.route('*/**/api/v1/fruits', async (route) => {


    const mockFruits = [
      { name: 'Mocked Mango', id: 101 },
      { name: 'Mocked Strawberry', id: 102 },
    ];



    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockFruits),
    });
  });


 

  await page.goto('https://demo.playwright.dev/api-mocking');
  await expect(page.getByText('Mocked Mango')).toBeVisible();
  await page.waitForTimeout(10000)
});

test('Aborting network requests (e.g. block images)', async ({ page }) => {
  // Abort heavy assets to speed up tests
  await page.route('**/*.{png,jpg,jpeg,webp}', (route) => route.abort());
  await page.goto('https://playwright.dev');
});


test("chaining Locators", async({page})=>
{
    await page.goto("https://www.automationexercise.com/");


    const productName = page.locator(".product-image-wrapper").filter({hasText:"Winter Top"});
    const text = await page.locator(".product-image-wrapper").filter({hasText:"Winter Top"}).locator("h2").allInnerTexts();

    console.log(text);


     console.log(await productName.getByRole('heading', { name: 'Rs. 600' }).first().innerText());


}   )