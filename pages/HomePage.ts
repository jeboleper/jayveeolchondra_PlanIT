import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigateToContactPage() {
    
    await this
    .page
    .getByRole('link', { name: 'Contact' })
    .click();

  }

  async navigateToShopPage() {
    
    //contain 2 link element for shop, selecting first
    await this
    .page
    .getByRole('link', { name: 'Shop' })
    .first()
    .click();

  }
}