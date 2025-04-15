import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { generateRandomEmail } from '../utils/helpers';

test.describe('Contact Form Tests', () => {
  
//////////////////////////////////////////////////////
// Test case 1:                                     //
// 1. From the home page go to contact page         //
// 2. Click submit button                           //
// 3. Verify error messages                         //
// 4. Populate mandatory fields                     //
// 5. Validate errors are gone                      //
//////////////////////////////////////////////////////

  test('Test Case 1 - Home Page to Contact Page, Verify Messages', async ({ page }) => {
    const home = new HomePage(page);
    const contact = new ContactPage(page);

    await page.goto('/');
    await home.navigateToContactPage();

    await contact.clickSubmit();
    await contact.expectErrorMessagesVisible();

    await contact.fillMandatoryFields('Jayvee', 'Olchondra', generateRandomEmail(), 'You are Hired! Start next week');
    await contact.expectNoErrors();
  });

//////////////////////////////////////////////////////////////
// Test case 2:                                             //
// 1. From the home page go to contact page                 //
// 2. Populate mandatory fields                             //
// 3. Click submit button                                   //
// 4. Validate successful submission message                //
// Note: Run this test 5 times to ensure 100% pass rate     //
//////////////////////////////////////////////////////////////

  for (let i = 0; i < 5; i++) {
    test(`Test Case 2 - Fillup fields and Successful Submission (${i + 1}/5)`, async ({ page }) => {

      const home = new HomePage(page);
      const contact = new ContactPage(page);

      await page.goto('/');
      await home.navigateToContactPage();

      await contact.fillMandatoryFields('Jayvee', 'Olchondra', generateRandomEmail(), 'You are hired!');
      await contact.clickSubmit();

      await contact.expectSuccessMessage();
    });
  }
});