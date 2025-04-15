import { Page, expect } from '@playwright/test';

export class ShopPage {
  constructor(private page: Page) {}

  async buyItem(productName: string, quantity: number) {
    for (let i = 0; i < quantity; i++) {
 
      const buyButton = 
        this.page
        .locator(`.product:has-text("${productName}") >> text=Buy`);
      
      await buyButton
        .first()
        .click();

    }
  }

  async goToCart() {
    await this.page
      .getByRole('link', { name: 'Cart' })
      .click();
  }
}