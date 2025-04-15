import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://jupiter.cloud.planittesting.com/',
    trace: 'on-first-retry', // can change to on to always record trace
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  retries: 0,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  timeout: 60000
});