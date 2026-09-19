import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureRealPGEDashboard() {
  console.log('🚀 Launching Chromium to capture REAL Unlocked PGE Dashboard...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  await page.evaluateOnNewDocument(() => {
    sessionStorage.setItem('pge_auth_token', '8b06b8dc0e2292ff3de64a28c7364cd5081c998f833959accd548563ab5666ad');
    sessionStorage.setItem('pge_last_activity_ts', String(Date.now()));
  });

  console.log('📸 Navigating to https://pge-dashboard-online.vercel.app/...');
  await page.goto('https://pge-dashboard-online.vercel.app/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  
  // Wait 3.5 seconds for data & charts to fully render
  await new Promise(r => setTimeout(r, 3500));

  // Remove overlay if any remains
  await page.evaluate(() => {
    const gate = document.getElementById('pgePasswordGateOverlay');
    if (gate) gate.remove();
    const loader = document.getElementById('pgeInitialLoader');
    if (loader) loader.remove();
  });

  await new Promise(r => setTimeout(r, 1000));

  // 1. Executive Summary & KPIs (Screen 1)
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-1.png') });
  console.log('✓ Captured PGE Real Screen 1 (Executive Summary & KPIs)');

  // 2. YoY Sales Growth & Multi-Year Trends (Screen 2)
  await page.evaluate(() => window.scrollTo(0, 520));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-2.png') });
  console.log('✓ Captured PGE Real Screen 2 (YoY Sales Growth & Trend Charts)');

  // 3. Volume & Production Capacity Matrix (Screen 3)
  await page.evaluate(() => window.scrollTo(0, 1150));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-3.png') });
  console.log('✓ Captured PGE Real Screen 3 (Volume & Production Capacity Matrix)');

  // 4. Category Margins & Platform Share (Screen 4)
  await page.evaluate(() => window.scrollTo(0, 1750));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-4.png') });
  console.log('✓ Captured PGE Real Screen 4 (Category Margins & Platform Comparison)');

  // 5. SKU Level Performance Table & Granular Filter (Screen 5)
  await page.evaluate(() => window.scrollTo(0, 2350));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-5.png') });
  console.log('✓ Captured PGE Real Screen 5 (SKU Performance Table & Filter Grid)');

  await browser.close();
  console.log('🎉 PGE Dashboard Online 100% Real Live Screenshots Re-Captured Successfully!');
}

captureRealPGEDashboard().catch(console.error);
