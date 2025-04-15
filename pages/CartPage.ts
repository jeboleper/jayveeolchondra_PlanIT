import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyPrices(productName: string, expectedPrice: string) {
    const row = this
      .page
      .locator(`tr:has-text('${productName}')`);
    await expect(
      row
      .locator('td')
      .nth(1))
      .toHaveText(expectedPrice);
    
    //Log Expected Price
    console.log(`Expected Price is : ${expectedPrice}`);

  }

  async verifySubtotal(productName: string, quantity: number, unitPrice: number) {
    const row = this.page.locator(`tr:has-text('${productName}')`);
    const expectedSubtotal = (quantity * unitPrice).toFixed(2);
    
    //log Subtotal value
    console.log(`Expected Subtotal is : ${expectedSubtotal}`);

    await expect(
      row
      .locator('td')
      .nth(3))
      .toHaveText(`$${expectedSubtotal}`);
  }

  // expect to have a Promise of number return
  // used parseFloat to convert the String result "Total: {amount}" into float 
  // use replace to replace the text "Total:" into blank or 0
  async getGrandTotalAmount(): Promise<number> {
    const totalElement = this.page.locator('strong.total');
    const totalText = await totalElement.textContent();

    //log Total Amount value before parse
    console.log(`${totalText}`);
    return parseFloat(
      totalText?.replace('Total:', '')
      .trim() || '0');

  }
}
