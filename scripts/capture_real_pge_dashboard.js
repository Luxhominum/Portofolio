import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureRealPGEDashboard() {
  console.log('🚀 Launching Chromium to capture REAL Unlocked PGE Dashboard with Privacy Blur...');
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

  // Remove overlay & apply privacy blur filter
  await page.evaluate(() => {
    const gate = document.getElementById('pgePasswordGateOverlay');
    if (gate) gate.remove();
    const loader = document.getElementById('pgeInitialLoader');
    if (loader) loader.remove();

    // Inject Blur CSS
    const style = document.createElement('style');
    style.innerHTML = `
      .sidebar-brand-box img, .sidebar-header img, .brand-logo, [class*="brand"], [class*="logo"], img[alt*="logo" i], header img, .sidebar-brand, .app-brand {
        filter: blur(5px) !important;
      }
    `;
    document.head.appendChild(style);

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let n;
    while (n = walker.nextNode()) {
      if (n.nodeValue && /(PGE|Pusat Grosir Eceran|Pertamina)/i.test(n.nodeValue)) {
        if (n.parentElement && n.parentElement.tagName !== 'SCRIPT' && n.parentElement.tagName !== 'STYLE') {
          n.parentElement.style.filter = 'blur(4.5px)';
        }
      }
    }
  });

  await new Promise(r => setTimeout(r, 1000));

  // 1. Executive Summary & KPIs (Screen 1)
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-1.png') });
  console.log('✓ Captured PGE Real Screen 1 (Executive Summary & KPIs - Blurred)');

  // 2. YoY Sales Growth & Multi-Year Trends (Screen 2)
  await page.evaluate(() => window.scrollTo(0, 520));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-2.png') });
  console.log('✓ Captured PGE Real Screen 2 (YoY Sales Growth & Trend Charts - Blurred)');

  // 3. Volume & Production Capacity Matrix (Screen 3)
  await page.evaluate(() => window.scrollTo(0, 1150));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-3.png') });
  console.log('✓ Captured PGE Real Screen 3 (Volume & Production Capacity Matrix - Blurred)');

  // 4. Category Margins & Platform Share (Screen 4)
  await page.evaluate(() => window.scrollTo(0, 1750));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-4.png') });
  console.log('✓ Captured PGE Real Screen 4 (Category Margins & Platform Comparison - Blurred)');

  // 5. SKU Level Performance Table & Granular Filter (Screen 5)
  await page.evaluate(() => window.scrollTo(0, 2350));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-5.png') });
  console.log('✓ Captured PGE Real Screen 5 (SKU Performance Table & Filter Grid - Blurred)');

  await browser.close();
  console.log('🎉 PGE Dashboard Online 100% Real Live Screenshots Re-Captured Successfully with Privacy Blur!');
}

captureRealPGEDashboard().catch(console.error);
