import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
dotenv.config({ path: path.resolve(__dirname, '.env') });

const baseURL = process.env['BASE_URL']|| 'http://localhost:3000';

const RPconfig={
  apiKey: process.env['RP_API_KEY'] || '',
  endpoint: "https://demo.reportportal.io/api/v1",
  project: "playwrightautomationwithharsh_personal",
  launch:"Playwright Automation with Harsh",
  attributes: [
    { key: 'tag', value: 'playwright' },
    { key: 'tag', value: 'e2e' },
    { key: 'tag', value: 'automation' },
    {key: 'date', value: new Date().toISOString().split('T')[0]},
  ],
  description: "Playwright automation project with Harsh",
  mode: 'DEFAULT',
  includeTestSteps: true,
  includeLogs: true,
  includeAttachments: true,
  debug: true,
  launchAttributes: [
    { key: 'browser', value: 'chromium' },
    { key: 'os', value: process.platform },
    { key: 'osVersion', value: process.version },
  ],   
};

export default defineConfig({
  timeout:60000,
  //globalSetup: require.resolve('./utils/globalSetup'),
  //globalTeardown: require.resolve('./utils/globalTeardown'),
  use:{
    baseURL,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot:{mode:'on',fullPage:true},
    launchOptions:{
      headless: false, // Set to true for headless mode
      args:['--start-maximized'],
  },
},
 projects:[
  {
    name:'chromium',
    use: {...devices['Desktop Chrome']},
}
 ],
 fullyParallel: true,
 expect:{
  timeout: 60000,
 },
 reporter:[
  ['html', { open: 'never', outputFolder: 'test-results/html-report' }],
  ['line'],
  ['allure-playwright', {
    detail:true,
    outputFolder: 'test-results/allure-results',
    suiteTitle: true,
  },],
  ['@reportportal/agent-js-playwright', RPconfig],
  
 ],
 testDir:'./tests',
 testMatch:'**/*.spec.ts',
 tsconfig: 'tsconfig.json',
globalTimeout: 120000, // 2 minutes
snapshotDir: 'test-results/snapshots',
maxFailures: 0,
  outputDir:'test-results/test-results',
  quiet:false,
  reportSlowTests:{
    max: 5,
    threshold: 10000, // 10 seconds
  },
  retries:process.env['CI'] ? 2 : 0, // Retry tests only in CI environment
  workers: process.env['CI'] ? 10 : 0, // Use 10 workers in CI, otherwise use default
});