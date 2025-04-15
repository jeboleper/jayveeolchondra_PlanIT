# jayveeolchondra_PlanIT
Playwright Typescript Technical Assessment

This project uses [Playwright](https://playwright.dev/) with the **Page Object Model (POM)** structure to automate and validate UI test cases on: https://jupiter.cloud.planittesting.com/

---

Project Structure:
| ├── pages/ # Page Object Models for each page 
│   ├── HomePage.ts 
│   ├── ContactPage.ts 
│   ├── ShopPage.ts 
│   └── CartPage.ts 
│ ├── tests/ # Test specs for each scenario 
│   ├── contactForm.spec.ts 
│   └── shoppingCart.spec.ts 
│ ├── utils/ # Utility/helper functions 
│   └── helpers.ts 
│ ├── data/ # Test data and constants 
│   └── products.ts 
│ ├── playwright.config.ts 
  └── README.md


Features

- Reusable Page Object Model (POM) for maintainable scripts
- Assertion validations for prices, subtotals, and total
- Logs and trace-friendly test execution
- Supports CI/CD integration (Jenkins-ready) -- currently installing
- Random email generation for unique test runs
- Data Driven approach
  >> Test Data Reference
     >> See data/products.ts for centralized product definitions (name, price, quantity). Easily modify content on this file when product prices or test coverage changes. Taking for consideration the case for typical Price changes


Resources
- Playwright POM Guide
    > https://playwright.dev/docs/pom
- Playwright Best Practices
    > https://playwright.dev/docs/best-practices
- Playwright Testing Tutorial - YouTube
    > https://www.youtube.com/watch?v=pq20Gd4LXeI
- Install Homebrew
    > https://brew.sh/
- Install Jenkins (macOS)
    > https://www.jenkins.io/download/lts/macos/


