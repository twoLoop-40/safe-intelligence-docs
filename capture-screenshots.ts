import { chromium } from 'playwright-core';
import path from 'path';

const __dirname = path.resolve('/Users/joonho/Projects/SafeIntelligence/safe-intelligence-docs');

const BASE_URL = 'https://safe-intelligence.vercel.app';
const ASSETS_DIR = path.resolve(__dirname, 'assets');
const EMAIL = 'jh.lee@spira-t.com';
const PASSWORD = 'Two@loops41';

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForPageReady(page: any, extraWaitMs = 3000) {
  try {
    await page.waitForLoadState('networkidle', { timeout: 15000 });
  } catch {
    // networkidle can timeout on long-polling pages, that's ok
  }
  await delay(extraWaitMs);
}

async function main() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
  });
  const page = await context.newPage();

  try {
    // 1. Login page (before logging in)
    console.log('1/8: Capturing login page...');
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' });
    await delay(2000);
    await page.screenshot({
      path: path.join(ASSETS_DIR, 'login.png'),
      fullPage: false,
    });
    console.log('   -> login.png saved');

    // 2. Perform login (uses #email and #password id selectors from Login.tsx)
    console.log('   Logging in...');
    await page.fill('#email', EMAIL);
    await page.fill('#password', PASSWORD);
    await page.click('button[type="submit"]');

    // Wait for navigation after login
    await page.waitForURL('**/overview**', { timeout: 30000 }).catch(() => {
      console.log('   (URL did not navigate to /overview, checking current URL...)');
    });
    await waitForPageReady(page, 5000);

    console.log(`   Current URL after login: ${page.url()}`);

    // 2. Overview/Summary Report page
    console.log('2/8: Capturing overview page...');
    // Navigate explicitly in case we're not there
    if (!page.url().includes('/overview')) {
      await page.goto(`${BASE_URL}/overview`, { waitUntil: 'domcontentloaded' });
    }
    await waitForPageReady(page, 5000);
    await page.screenshot({
      path: path.join(ASSETS_DIR, 'overview.png'),
      fullPage: false,
    });
    console.log('   -> overview.png saved');

    // 3. Domain List page
    console.log('3/8: Capturing domains page...');
    await page.goto(`${BASE_URL}/domains`, { waitUntil: 'domcontentloaded' });
    await waitForPageReady(page, 4000);
    await page.screenshot({
      path: path.join(ASSETS_DIR, 'domains.png'),
      fullPage: false,
    });
    console.log('   -> domains.png saved');

    // 4. Domain Detail page (click first domain)
    console.log('4/8: Capturing domain detail page...');
    // Try clicking a domain link or table row
    const domainLink = page.locator('a[href*="/domains/"]').first();
    if (await domainLink.isVisible({ timeout: 5000 }).catch(() => false)) {
      await domainLink.click();
      await waitForPageReady(page, 4000);
    } else {
      // Fallback: try table row click
      const tableRow = page.locator('table tbody tr').first();
      if (await tableRow.isVisible({ timeout: 3000 }).catch(() => false)) {
        await tableRow.click();
        await waitForPageReady(page, 4000);
      } else {
        console.log('   (No clickable domain found, trying card grid...)');
        const card = page.locator('[class*="card"], [class*="cursor-pointer"]').first();
        if (await card.isVisible({ timeout: 3000 }).catch(() => false)) {
          await card.click();
          await waitForPageReady(page, 4000);
        }
      }
    }
    console.log(`   Domain detail URL: ${page.url()}`);
    await page.screenshot({
      path: path.join(ASSETS_DIR, 'domain-detail.png'),
      fullPage: false,
    });
    console.log('   -> domain-detail.png saved');

    // 5. Findings page
    console.log('5/8: Capturing findings page...');
    await page.goto(`${BASE_URL}/findings`, { waitUntil: 'domcontentloaded' });
    await waitForPageReady(page, 4000);
    await page.screenshot({
      path: path.join(ASSETS_DIR, 'findings.png'),
      fullPage: false,
    });
    console.log('   -> findings.png saved');

    // 6. Dark Web page
    console.log('6/8: Capturing dark web page...');
    await page.goto(`${BASE_URL}/dark-web`, { waitUntil: 'domcontentloaded' });
    await waitForPageReady(page, 4000);
    await page.screenshot({
      path: path.join(ASSETS_DIR, 'dark-web.png'),
      fullPage: false,
    });
    console.log('   -> dark-web.png saved');

    // 7. Pentest page
    console.log('7/8: Capturing pentest page...');
    await page.goto(`${BASE_URL}/pentest`, { waitUntil: 'domcontentloaded' });
    await waitForPageReady(page, 4000);
    await page.screenshot({
      path: path.join(ASSETS_DIR, 'pentest.png'),
      fullPage: false,
    });
    console.log('   -> pentest.png saved');

    // 8. Universal Search dialog (Cmd+K / Ctrl+K)
    console.log('8/8: Capturing universal search dialog...');
    // Go back to overview first for a clean background
    await page.goto(`${BASE_URL}/overview`, { waitUntil: 'domcontentloaded' });
    await waitForPageReady(page, 3000);
    // Open Cmd+K search (headless chromium on macOS: use Meta+k)
    await page.keyboard.press('Meta+k');
    await delay(1000);
    // Fallback: also try Ctrl+K in case Meta doesn't work in headless
    const searchDialog = page.locator('[role="dialog"], [cmdk-dialog], [data-testid*="search"]');
    if (!(await searchDialog.isVisible({ timeout: 2000 }).catch(() => false))) {
      console.log('   (Meta+k did not open dialog, trying Ctrl+k...)');
      await page.keyboard.press('Control+k');
      await delay(1000);
    }
    await delay(1500);
    await page.screenshot({
      path: path.join(ASSETS_DIR, 'universal-search.png'),
      fullPage: false,
    });
    console.log('   -> universal-search.png saved');

    console.log('\nAll 8 screenshots captured successfully!');
    console.log(`Saved to: ${ASSETS_DIR}`);

  } catch (error) {
    console.error('Error during screenshot capture:', error);
    // Take a debug screenshot
    await page.screenshot({
      path: path.join(ASSETS_DIR, 'debug-error.png'),
      fullPage: false,
    });
    console.log('Debug screenshot saved as debug-error.png');
    throw error;
  } finally {
    await browser.close();
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
