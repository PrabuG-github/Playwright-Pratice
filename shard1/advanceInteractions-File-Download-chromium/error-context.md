# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advanceInteractions.spec.ts >> File Download
- Location: tests\advanceInteractions.spec.ts:128:5

# Error details

```
TimeoutError: page.waitForEvent: Timeout 10000ms exceeded while waiting for event "download"
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Page snapshot

```yaml
- generic [aria-hidden] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7] [cursor=pointer]:
        - /url: http://www.automationtesting.in
      - heading [level=1] [ref=e10]: Automation Demo Site
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link [ref=e16] [cursor=pointer]:
            - /url: Index.html
            - text: Home
        - listitem [ref=e17]:
          - link [ref=e18] [cursor=pointer]:
            - /url: Register.html
            - text: Register
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: WebTable.html
            - text: WebTable
        - listitem [ref=e21]:
          - link [ref=e22] [cursor=pointer]:
            - /url: SwitchTo.html
            - text: SwitchTo
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link [ref=e25] [cursor=pointer]:
            - /url: Widgets.html
            - text: Widgets
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link [ref=e28] [cursor=pointer]:
            - /url: Interactions.html
            - text: Interactions
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link [ref=e31] [cursor=pointer]:
            - /url: SwitchTo.html
            - text: Video
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link [ref=e34] [cursor=pointer]:
            - /url: WYSIWYG.html
            - text: WYSIWYG
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: "#"
            - text: More
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link [ref=e40] [cursor=pointer]:
            - /url: http://practice.automationtesting.in/
            - text: Practice Site
    - insertion [ref=e42]:
      - generic [ref=e45]:
        - heading [level=2] [ref=e47]: Discover more
        - link [ref=e48] [cursor=pointer]:
          - generic [ref=e49]: Compare SSDs
        - link [ref=e53] [cursor=pointer]:
          - generic [ref=e54]: Upgrade Tech
        - link [ref=e58] [cursor=pointer]:
          - generic [ref=e59]: Data
  - generic [ref=e63]:
    - generic [ref=e66]:
      - heading [level=2] [ref=e67]: File Download Demo for Automation
      - link [ref=e69] [cursor=pointer]:
        - /url: https://github.com//sakinala/AutomationTesting/raw/master/samplefile.pdf
        - text: Download
      - generic [ref=e70]:
        - generic [ref=e71]: Generated Text File to Download
        - generic [ref=e72]:
          - paragraph [ref=e73]: By default Download link will be hidden.
          - paragraph [ref=e74]:
            - text: You need to enter
            - link [ref=e75] [cursor=pointer]:
              - /url: "#"
              - text: data
            - text: in the textarea and click on 'Generate File' button to activate download link.
            - link [ref=e78] [cursor=pointer]: Compare SSDs
          - paragraph [ref=e82]:
            - link [ref=e83] [cursor=pointer]:
              - /url: "#"
              - text: Data
            - text: entered in the below textarea will be download with file name 'info.txt'.
          - generic [ref=e86]:
            - generic [ref=e87]: "Enter Data:"
            - textbox [ref=e88]
            - generic [ref=e89]: 1000 characters remaining
          - button [disabled] [ref=e90]: Generate File
      - generic [ref=e91]:
        - generic [ref=e92]: Generated PDF File to Download
        - generic [ref=e93]:
          - paragraph [ref=e94]: By default Download link will be hidden.
          - paragraph [ref=e95]:
            - text: You need to enter data in the textarea and click on 'Generate File' button to activate download link.
            - link [ref=e96] [cursor=pointer]: Compare SSDs
          - paragraph [ref=e100]: Data entered in the below textarea will be download with file name 'info.pdf'.
          - generic [ref=e101]:
            - generic [ref=e102]: "Enter Data:"
            - textbox [ref=e103]
            - generic [ref=e104]: 1000 characters remaining
          - button [disabled] [ref=e105]: Generate File
    - generic [ref=e107]:
      - insertion [ref=e110]:
        - generic [ref=e113]:
          - heading [level=2] [ref=e115]: Discover more
          - link [ref=e116] [cursor=pointer]:
            - generic [ref=e117]: data
          - link [ref=e121] [cursor=pointer]:
            - generic [ref=e122]: Store Big Data
          - link [ref=e126] [cursor=pointer]:
            - generic [ref=e127]: Explore Data
      - insertion [ref=e133]:
        - generic [ref=e136]:
          - heading [level=2] [ref=e138]: Discover more
          - link [ref=e139] [cursor=pointer]:
            - generic [ref=e140]: Browse Reference
          - link [ref=e144] [cursor=pointer]:
            - generic [ref=e145]: Source Robotics
          - link [ref=e149] [cursor=pointer]:
            - generic [ref=e150]: Learn to Code
      - insertion [ref=e156]:
        - generic [ref=e159]:
          - heading [level=2] [ref=e161]: Discover more
          - link [ref=e162] [cursor=pointer]:
            - generic [ref=e163]: Try Office Apps
          - link [ref=e167] [cursor=pointer]:
            - generic [ref=e168]: Try Cloud Tools
          - link [ref=e172] [cursor=pointer]:
            - generic [ref=e173]: Try Dev Tools
    - iframe [ref=e178]
    - generic [ref=e181]:
      - generic [ref=e182]:
        - text: "\"@ 2016\""
        - link [ref=e183] [cursor=pointer]:
          - /url: "#"
          - text: Automation Testing
        - text: "\"All Rights Reserved.\""
      - generic [ref=e184]:
        - link [ref=e185] [cursor=pointer]:
          - /url: https://www.facebook.com/automationtesting2016/
          - generic [ref=e186]: 
        - link [ref=e187] [cursor=pointer]:
          - /url: https://twitter.com/krishnasakinala
          - generic [ref=e188]: 
        - link [ref=e189] [cursor=pointer]:
          - /url: https://www.linkedin.com/nhome/?trk=hb_signin
          - generic [ref=e190]: 
        - link [ref=e191] [cursor=pointer]:
          - /url: https://plus.google.com/105286300926085335367
          - generic [ref=e192]: 
        - link [ref=e193] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
          - generic [ref=e194]: 
```

# Test source

```ts
  35  | 
  36  | test("get all frames", async({page})=>
  37  | {
  38  |     await page.goto("https://practice-automation.com/iframes/");
  39  | 
  40  |     const frames = page.frames();
  41  | 
  42  |     for(const frame of frames)
  43  |     {
  44  |         console.log(await frame.title());
  45  | 
  46  | 
  47  | 
  48  |         if(await frame.name()=== "bottom-iframe")
  49  |         {
  50  | 
  51  |             const text = frame.getByText("Development Partners");
  52  | 
  53  |             await expect(text).toBeVisible();
  54  | 
  55  |             console.log("verified")
  56  |         }
  57  |     }
  58  | 
  59  | 
  60  | });
  61  | 
  62  | 
  63  | 
  64  | 
  65  | test("handle popup and multiple tabs", async({page})=>
  66  | {
  67  |     await page.goto("https://testautomationpractice.blogspot.com/");
  68  | 
  69  |     const [newPage] = await Promise.all(
  70  |         [
  71  | 
  72  |         page.waitForEvent("popup"),// listener should not use await 
  73  | 
  74  |         await page.getByText("New Tab").click()
  75  |     ]
  76  | 
  77  | );
  78  | 
  79  | 
  80  |     await newPage.waitForLoadState("domcontentloaded");
  81  | 
  82  |     await expect( newPage.getByText("SDET-QA Blog")).toBeVisible();
  83  | 
  84  | 
  85  |     await page.bringToFront();
  86  | 
  87  |     await page.waitForTimeout(5000);
  88  |     await newPage.close();
  89  | });
  90  | 
  91  | 
  92  | test("alerts",async({page})=>
  93  | {
  94  |     await page.goto("https://testautomationpractice.blogspot.com/");
  95  |   
  96  |     page.on("dialog",async(dialog)=>{
  97  |         console.log(dialog.message());
  98  |         await dialog.accept();
  99  |     })
  100 | 
  101 | 
  102 | 
  103 | 
  104 |     
  105 | 
  106 |     await page.locator("#alertBtn").click();
  107 | 
  108 |     await page.waitForTimeout(5000)
  109 | 
  110 | })
  111 | 
  112 | 
  113 | test("file Upload", async({page})=>
  114 | {
  115 |     await page.goto("https://testautomationpractice.blogspot.com/");
  116 | 
  117 |     const fileUpload =  page.locator("#singleFileInput");
  118 | 
  119 |     await fileUpload.hover();
  120 |     
  121 |     await fileUpload.setInputFiles(path.join(__dirname, "../readmaterials/locators.txt"));
  122 | 
  123 |     await page.waitForTimeout(10000);
  124 | 
  125 | });
  126 | 
  127 | 
  128 | test("File Download", async({page})=>
  129 | {
  130 |     await page.goto("https://demo.automationtesting.in/FileDownload.html");
  131 | 
  132 | 
  133 | 
  134 |     const [download] = await Promise.all([
> 135 |         page.waitForEvent('download'),//listener
      |              ^ TimeoutError: page.waitForEvent: Timeout 10000ms exceeded while waiting for event "download"
  136 |         await page.getByText("Download",{exact:true}).nth(0).click()
  137 |     ])
  138 | 
  139 |     console.log(await download.path());
  140 | 
  141 |     await download.saveAs(path.join(__dirname,"./filedownloads/"))
  142 | 
  143 |     expect(await download.failure()).toBeNull();
  144 | })
  145 | 
  146 | test('Keyboard and Mouse operations', async ({ page }) => {
  147 |   // Keyboard key presses & shortcuts
  148 | //   await page.goto('https://the-internet.herokuapp.com/key_presses');
  149 | //   await page.locator('#target').click();
  150 | 
  151 |   
  152 | //   await page.keyboard.press('Shift+KeyB');
  153 |   
  154 | //   await expect(page.locator('#result')).toContainText('B');
  155 | 
  156 |   // Drag and Drop (High-Level Locator API)
  157 | //   await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  158 | //   await page.locator('#column-a').dragTo(page.locator('#column-b'));
  159 | 
  160 |   await page.goto("https://demo.automationtesting.in/FileDownload.html");
  161 |   // Low-level mouse simulation
  162 |   await page.mouse.move(100, 200);
  163 |   await page.mouse.down();
  164 |   await page.mouse.move(300, 200);
  165 |   await page.mouse.up();
  166 | });
  167 | 
  168 | 
  169 | test('Visual artifact capture', async ({ page }) => {
  170 |   await page.goto('https://playwright.dev');
  171 | 
  172 |   // Full-page screenshot
  173 |   await page.screenshot({ path: 'screenshots/homepage-full.png', fullPage: true });
  174 | 
  175 |   // Element-level screenshot
  176 |   const heroBtn = page.getByRole('link', { name: 'Get started' });
  177 |   await heroBtn.screenshot({ path: 'screenshots/hero-btn.png' });
  178 | });
  179 | 
  180 | 
  181 | test('Mocking API responses', async ({ page }) => {
  182 | 
  183 |   // Mock API call to return customized JSON
  184 | 
  185 | 
  186 |   await page.route('*/**/api/v1/fruits', async (route) => {
  187 | 
  188 | 
  189 |     const mockFruits = [
  190 |       { name: 'Mocked Mango', id: 101 },
  191 |       { name: 'Mocked Strawberry', id: 102 },
  192 |     ];
  193 | 
  194 | 
  195 | 
  196 |     await route.fulfill({
  197 |       status: 200,
  198 |       contentType: 'application/json',
  199 |       body: JSON.stringify(mockFruits),
  200 |     });
  201 |   });
  202 | 
  203 | 
  204 |  
  205 | 
  206 |   await page.goto('https://demo.playwright.dev/api-mocking');
  207 |   await expect(page.getByText('Mocked Mango')).toBeVisible();
  208 |   await page.waitForTimeout(10000)
  209 | });
  210 | 
  211 | test('Aborting network requests (e.g. block images)', async ({ page }) => {
  212 |   // Abort heavy assets to speed up tests
  213 |   await page.route('**/*.{png,jpg,jpeg,webp}', (route) => route.abort());
  214 |   await page.goto('https://playwright.dev');
  215 | });
  216 | 
  217 | 
  218 | test("chaining Locators", async({page})=>
  219 | {
  220 |     await page.goto("https://www.automationexercise.com/");
  221 | 
  222 | 
  223 |     const productName = page.locator(".product-image-wrapper").filter({hasText:"Winter Top"});
  224 |     const text = await page.locator(".product-image-wrapper").filter({hasText:"Winter Top"}).locator("h2").allInnerTexts();
  225 | 
  226 |     console.log(text);
  227 | 
  228 | 
  229 |      console.log(await productName.getByRole('heading', { name: 'Rs. 600' }).first().innerText());
  230 | 
  231 | 
  232 | }   )
```