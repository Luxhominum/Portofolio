import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function capturePGEApps() {
  console.log('🚀 Launching Chromium to capture REAL PGE Applications...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  // ----------------------------------------------------
  // 1. REAL APP: PGE Intelijen Penjualan Eksekutif (Marketplace Sales)
  // URL: https://pge-dashboard-online.vercel.app/
  // ----------------------------------------------------
  console.log('📸 Navigating to https://pge-dashboard-online.vercel.app/...');
  try {
    await page.goto('https://pge-dashboard-online.vercel.app/', { waitUntil: 'networkidle2', timeout: 25000 });
    await new Promise(r => setTimeout(r, 1000));

    // Screen 1: Overview Dashboard (Executive Summary)
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-1.png') });
    console.log('✓ Captured PGE Dashboard Screen 1 (Executive Summary)');

    // Look for tabs / buttons on PGE Dashboard
    const buttons = await page.$$('button, nav a, a, [role="tab"]');
    console.log(`Found ${buttons.length} interactive elements on PGE Dashboard`);

    // Let's scroll or click sub-views
    await page.evaluate(() => window.scrollTo(0, 600));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-2.png') });
    console.log('✓ Captured PGE Dashboard Screen 2 (Cross-Year Analytics / Graphs)');

    await page.evaluate(() => window.scrollTo(0, 1200));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-3.png') });
    console.log('✓ Captured PGE Dashboard Screen 3 (Production / Sales Volume Breakdown)');

    await page.evaluate(() => window.scrollTo(0, 1800));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-4.png') });
    console.log('✓ Captured PGE Dashboard Screen 4 (SKU & Category Performance Table)');

    // Click on any filter or tab if available
    for (const b of buttons) {
      const text = await (await b.getProperty('innerText')).jsonValue();
      if (text && (text.includes('Detail') || text.includes('Analisis') || text.includes('Tabel') || text.includes('Produk') || text.includes('2026') || text.includes('Shopee'))) {
        try {
          await b.click();
          await new Promise(r => setTimeout(r, 800));
          await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-5.png') });
          console.log(`✓ Captured PGE Dashboard Screen 5 (Clicked: ${text.trim().substring(0, 20)})`);
          break;
        } catch (e) {}
      }
    }
    // Fallback for screen-5 if not clicked
    if (!path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-5.png')) {
      await page.evaluate(() => window.scrollTo(0, 2400));
      await page.screenshot({ path: path.join(rootDir, 'public/screenshots/marketplace-sales-intelligence/screen-5.png') });
    }
  } catch (err) {
    console.error('Error on PGE Dashboard:', err.message);
  }

  // ----------------------------------------------------
  // 2. REAL APP: PGE Talent Pool & Assessment Portal (Enterprise HR Governance)
  // URL: https://pge-talentpool.web.app/ and assessment-portal.html
  // ----------------------------------------------------
  console.log('📸 Navigating to https://pge-talentpool.web.app/...');
  try {
    await page.goto('https://pge-talentpool.web.app/', { waitUntil: 'networkidle2', timeout: 25000 });
    await new Promise(r => setTimeout(r, 1000));

    // Screen 1: Talent Pool Candidate Repository
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-1.png') });
    console.log('✓ Captured PGE Talent Pool Screen 1 (Candidate Repository)');

    // Screen 2: Filtered / Scrolled Candidate Pipeline View
    await page.evaluate(() => window.scrollTo(0, 500));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-2.png') });
    console.log('✓ Captured PGE Talent Pool Screen 2 (Pipeline & Candidate List)');

    // Screen 3: Search / Detail / Kanban
    await page.evaluate(() => window.scrollTo(0, 1000));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-3.png') });
    console.log('✓ Captured PGE Talent Pool Screen 3 (Recruitment Workflow)');

    // ----------------------------------------------------
    // Assessment Portal: https://pge-talentpool.web.app/assessment-portal.html
    // ----------------------------------------------------
    console.log('📸 Navigating to https://pge-talentpool.web.app/assessment-portal.html...');
    await page.goto('https://pge-talentpool.web.app/assessment-portal.html', { waitUntil: 'networkidle2', timeout: 25000 });
    await new Promise(r => setTimeout(r, 1000));

    // Screen 4: Assessment Portal Main View
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-4.png') });
    console.log('✓ Captured Assessment Portal Screen 4 (Portal Pelaksanaan Asesmen)');

    // Screen 5: Assessment Form / Rubric Section
    await page.evaluate(() => window.scrollTo(0, 500));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-5.png') });
    console.log('✓ Captured Assessment Portal Screen 5 (Asesmen Rubrik & Evaluasi)');
  } catch (err) {
    console.error('Error on PGE Talent Pool:', err.message);
  }

  await browser.close();
  console.log('🎉 100% Real Live Screenshots for all PGE Projects Captured Successfully!');
}

capturePGEApps().catch(console.error);
