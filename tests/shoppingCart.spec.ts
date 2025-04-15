import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { CartPage } from '../pages/CartPage';
import { products } from '../data/products';

///////////////////////////////////////////////////////////////
// Test case 3:                                              //
// 1. Buy 2 Stuffed Frog, 5 Fluffy Bunny, 3 Valentine Bear   //
// 2. Go to the cart page                                    //
// 3. Verify the subtotal for each product is correct        //
// 4. Verify the price for each product                      //
// 5. Verify that total = sum(sub totals)                    //
///////////////////////////////////////////////////////////////

test('Test Case 3 - Shopping Cart Calculations', async ({ page }) => {
  const home = new HomePage(page);
  const shop = new ShopPage(page);
  const cart = new CartPage(page);

  await page.goto('/');
  await home.navigateToShopPage();

  // manual selection, with given parameters of Product name and Buy times
  // //product 2, quantity
  // await shop.buyItem('Stuffed Frog', 2);
  // //product 4
  // await shop.buyItem('Fluffy Bunny', 5);
  // //product 7
  // await shop.buyItem('Valentine Bear', 3);
  
  // reusable approach base on data/products object data to be reusable with less update
  for (const [productName, { quantity }] of Object.entries(products)) {
    await shop.buyItem(productName, quantity);
  }

  //Go to Cart Page
  await shop.goToCart();

  for (const [productName, { price, quantity }] of Object.entries(products)) {
    const priceStr = `$${price.toFixed(2)}`;
    await cart.verifyPrices(productName, priceStr);
    await cart.verifySubtotal(productName, quantity, price);
  }

  // manually using parameters of product name and amount
  // //Verify Prices for each Product -- can be enhanced by keeping the price amount to a variable, so it can be reusable in case of price change
  // await cart.verifyPrices('Stuffed Frog', '$10.99');
  // await cart.verifyPrices('Fluffy Bunny', '$9.99');
  // await cart.verifyPrices('Valentine Bear', '$14.99');

  // //Verify subtotal for each product is correct  (Price * Quantity = Subtotal)
  // await cart.verifySubtotal('Stuffed Frog', 2, 10.99);
  // await cart.verifySubtotal('Fluffy Bunny', 5, 9.99);
  // await cart.verifySubtotal('Valentine Bear', 3, 14.99);

  //Verify that total = sum(sub totals) 
  //const total = 2 * 10.99 + 5 * 9.99 + 3 * 14.99;
  // Calculate expected total from product data

  //used data/products to get total
  const expectedTotal = Object.values(products)
    .reduce((sum, { price, quantity }) => sum + price * quantity, 0);

  // Optionally format to two decimals
  console.log(`Expected Total: $${expectedTotal.toFixed(2)}`);

  await cart.getGrandTotalAmount();

});
