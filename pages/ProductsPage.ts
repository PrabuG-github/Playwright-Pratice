import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly title: Locator;
    readonly shoppingCartBadge: Locator;
    readonly inventoryItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.inventoryItems = page.locator('.inventory_item');
    }

    async verifyOnPage() {
        await expect(this.title).toHaveText('Products');
        await expect(this.page).toHaveURL(/.*inventory\.html/);
    }

    async addProductToCart(productName: string) {
        const productCard = this.inventoryItems.filter({ hasText: productName });
        await productCard.getByRole('button', { name: 'Add to cart' }).click();
    }

 async verifyCartCount(expectedCount: number) {
    
    await expect(this.shoppingCartBadge).toHaveText(String(expectedCount));
}

}
