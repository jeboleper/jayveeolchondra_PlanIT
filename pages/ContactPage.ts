import { Page, expect, Locator } from '@playwright/test';

export class ContactPage {
  constructor(private page: Page) {}

  
  async clickSubmit() {

    await this.page
    .locator('a', { hasText: 'Submit' })
    .click();

  }

  async expectErrorMessagesVisible() {

    await expect(
      this.page
      .locator("text=Email is required"), 'Should show Email is required message')
      .toBeVisible();

  }

  async fillMandatoryFields(foreName: string, surName: string, email: string, message: string) {
    
    await this.page
      .locator('#forename')
      .fill(foreName);

    await this.page
      .locator('#surname')
      .fill(surName);

    await this.page
      .locator('#email')
      .fill(email);

    await this.page
      .locator('#message')
      .fill(message);
  }

  async expectNoErrors() {

    await expect(this.page.locator(".alert-danger")).toHaveCount(0);

  }

  async expectSuccessMessage() {

    await expect(this.page
      .locator("text=Sending feedback"), 'Should show sending feedback message')
      .toBeVisible();
   
    //can enhance, to replace name and apply to most scenarios
    await expect(this.page
      .locator("text=Thanks Jayvee"), 'Should show thank you message')
      .toBeVisible({ timeout: 15000 }); //change from 10000ms to 15000ms for headed test
 
  }
}
