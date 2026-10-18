import { test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';


test("demo", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

});

test("LockOut Test", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('locked_out_user', 'secret_sauce');

});