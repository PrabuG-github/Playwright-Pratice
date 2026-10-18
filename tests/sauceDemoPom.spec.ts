import { test, expect } from '../fixtures/pomFixtures';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('SauceDemo E-Commerce POM Suite', () => {

    test('1. Standard POM: Valid login and add items to cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        // 1. Navigate & Login
        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        // 2. Verify products dashboard loaded
        await productsPage.verifyOnPage();

        // 3. Add products to cart
        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.addProductToCart('Sauce Labs Bike Light');

        // 4. Verify cart badge displays 2
        await productsPage.verifyCartCount(2);
    });


    test("1. Standard POM: Valid login and add items to cart1", async ({ loginPage,productsPage }) => {


        await test.step("1. Navigate & Login", async () => {
        });

        await test.step("2. Verify products dashboard loaded", async () => {
            await productsPage.verifyOnPage();
        });

        await test.step("3. Add products to cart", async () => {
            await productsPage.addProductToCart('Sauce Labs Backpack');
            await productsPage.addProductToCart('Sauce Labs Bike Light');
        });

        await test.step("4. Verify cart badge displays 2", async () => {
            await productsPage.verifyCartCount(2);
        });
    });







    test('2. Fixture-based POM: Direct injection of Page Objects', async ({ loginPage, productsPage }) => {
        // Notice: No "new LoginPage(page)" needed! Playwright fixtures inject them automatically.
        // await loginPage.navigate();
        // await loginPage.login('standard_user', 'secret_sauce');

        await productsPage.verifyOnPage();
        await productsPage.addProductToCart('Sauce Labs Bolt T-Shirt');
        await productsPage.verifyCartCount(1);
    });

    test('3. Negative Test: Verify locked out user error message', async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login('locked_out_user', 'secret_sauce');
        await loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });

});
