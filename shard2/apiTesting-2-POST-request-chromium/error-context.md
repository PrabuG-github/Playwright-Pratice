# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTesting.spec.ts >> 2. POST request
- Location: tests\apiTesting.spec.ts:15:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 404
```

# Test source

```ts
  1   | import test, { expect } from "@playwright/test"
  2   | import userData from "../jsonFiles/user.json"
  3   | import { User } from "../userObject/user";
  4   | 
  5   | 
  6   | 
  7   | test("1. GET request", async({request}) => {
  8   |     const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
  9   | 
  10  |     expect(response.status()).toBe(200);
  11  | 
  12  |     console.log(await response.json())
  13  | });
  14  | 
  15  | test("2. POST request", async({request}) => {
  16  | 
  17  |     const payload = {
  18  |         "title": "foo",
  19  |         "body": "bar",
  20  |         "userId": 1,
  21  |     };
  22  | 
  23  |     const response = await request.post("https://jsonplaceholder.typicode.com/posts.1", {
  24  |     data : payload,
  25  |     headers:{
  26  |         "accept" : "application/json",
  27  |         "authorization": "Bearer sgsggsgsgsssssssssssssssssssssssssasdghaghdgadgadgadgadgagdgadgadgadgagdagddgagdga"
  28  |     }
  29  |     });
  30  | 
> 31  |     expect(response.status()).toBe(201);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  32  | 
  33  | 
  34  |     console.log(await response.json())
  35  | 
  36  |     //console.log(await response.headers());
  37  |     //console.log(await response.statusText());
  38  | }   )
  39  | 
  40  | 
  41  | 
  42  | test("3. put",async({request}) => {
  43  | 
  44  |     const payload = {
  45  |         "title": "POO",
  46  |         "body": "Prabu G",
  47  |         "userId": 1,
  48  |     };
  49  | 
  50  |     const response = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
  51  |         data : payload,
  52  | 
  53  |     });
  54  | 
  55  |     expect(response.status()).toBe(200);
  56  | 
  57  |     console.log(await response.json())
  58  |     
  59  | 
  60  |     
  61  | })
  62  | 
  63  | 
  64  | 
  65  | test("4. Patch",async({request}) => {
  66  | 
  67  |     const payload = {
  68  |         "title": "POO",
  69  |         "body": "Prabu G",
  70  |     };
  71  | 
  72  |     const response = await request.patch("https://jsonplaceholder.typicode.com/posts/1", {
  73  |         data : payload,
  74  | 
  75  |     });
  76  | 
  77  |     expect(response.status()).toBe(200);
  78  | 
  79  |     console.log(await response.json())
  80  | 
  81  | 
  82  |     
  83  |     
  84  | })
  85  | 
  86  | test("5. Delete",async({request}) => {
  87  | 
  88  | 
  89  |     const response = await request.delete("https://jsonplaceholder.typicode.com/posts/1");
  90  | 
  91  |     expect(response.status()).toBe(200);
  92  | 
  93  |     console.log(await response.json())
  94  | 
  95  |     console.log( await response.headers());
  96  | 
  97  | 
  98  |     expect(  response.headers()['date']).toContain("01 Nov 2026");
  99  | 
  100 |     
  101 |     
  102 | });
  103 | 
  104 | 
  105 | test("6. Delete header",async({request}) => {
  106 | 
  107 | 
  108 |     const response = await request.delete("/posts/1");
  109 | 
  110 |     expect(response.status()).toBe(200);
  111 | 
  112 |     console.log(await response.json())
  113 | 
  114 |     console.log( await response.headers());
  115 | 
  116 | 
  117 |     expect(  response.headers()['date']).toContain("01 Nov 2026");
  118 | 
  119 |     
  120 |     
  121 | });
  122 | 
  123 | 
  124 | 
  125 | test("update json values", async({request})=>
  126 | {
  127 | 
  128 |     userData.name = "Prabu G";
  129 |     userData.email = "prabu@gmail.com";
  130 |     userData.role = "Automation Engineer";
  131 | 
```