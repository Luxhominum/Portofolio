import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureRealApps() {
  console.log('🚀 Launching Chromium to capture REAL applications...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  // ----------------------------------------------------
  // REAL APP 1: https://jadwal-liturgi.web.app
  // ----------------------------------------------------
  console.log('📸 Navigating to REAL APP: https://jadwal-liturgi.web.app...');
  try {
    await page.goto('https://jadwal-liturgi.web.app', { waitUntil: 'networkidle2', timeout: 20000 });
    
    // Screen 1: Home / Warta & Portal
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/community-scheduling/screen-1.png') });
    console.log('✓ Captured Real Screen 1 (Warta & Portal)');

    // Screen 2: Penjadwalan
    const navButtons = await page.$$('nav button, button');
    for (const b of navButtons) {
      const text = await (await b.getProperty('innerText')).jsonValue();
      if (text && text.includes('Penjadwalan')) {
        await b.click();
        await new Promise(r => setTimeout(r, 1200));
        await page.screenshot({ path: path.join(rootDir, 'public/screenshots/community-scheduling/screen-2.png') });
        console.log('✓ Captured Real Screen 2 (Ruang Kerja Penjadwalan)');
        break;
      }
    }

    // Screen 3: Monitoring & ACC
    for (const b of navButtons) {
      const text = await (await b.getProperty('innerText')).jsonValue();
      if (text && text.includes('Monitoring')) {
        await b.click();
        await new Promise(r => setTimeout(r, 1200));
        await page.screenshot({ path: path.join(rootDir, 'public/screenshots/community-scheduling/screen-3.png') });
        console.log('✓ Captured Real Screen 3 (Monitoring & ACC)');
        break;
      }
    }

    // Screen 4: Kelola Petugas
    for (const b of navButtons) {
      const text = await (await b.getProperty('innerText')).jsonValue();
      if (text && text.includes('Kelola Petugas')) {
        await b.click();
        await new Promise(r => setTimeout(r, 1200));
        await page.screenshot({ path: path.join(rootDir, 'public/screenshots/community-scheduling/screen-4.png') });
        console.log('✓ Captured Real Screen 4 (Kelola Petugas & Wilayah)');
        break;
      }
    }

    // Screen 5: Studi Kasus & Aturan
    for (const b of navButtons) {
      const text = await (await b.getProperty('innerText')).jsonValue();
      if (text && text.includes('Studi Kasus')) {
        await b.click();
        await new Promise(r => setTimeout(r, 1200));
        await page.screenshot({ path: path.join(rootDir, 'public/screenshots/community-scheduling/screen-5.png') });
        console.log('✓ Captured Real Screen 5 (Studi Kasus & Aturan Validasi)');
        break;
      }
    }
  } catch (err) {
    console.error('Error on jadwal-liturgi:', err.message);
  }

  // ----------------------------------------------------
  // REAL APP 2: Methodology Decision Tool
  // ----------------------------------------------------
  console.log('📸 Navigating to REAL APP: waterfall-agile-decision-tool/index.html...');
  try {
    const decisionToolPath = 'file:///C:/Users/User/.gemini/antigravity/scratch/waterfall-agile-decision-tool/index.html';
    await page.goto(decisionToolPath, { waitUntil: 'load' });
    await new Promise(r => setTimeout(r, 800));

    // Screen 1: Top Hero & Preset Controls
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/methodology-iq/screen-1.png') });
    console.log('✓ Captured Real Screen 1 (Decision Tool Header & Setup)');

    // Screen 2: Multi-criteria Evaluation & Sliders
    await page.evaluate(() => window.scrollTo(0, 500));
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/methodology-iq/screen-2.png') });
    console.log('✓ Captured Real Screen 2 (Evaluation Sliders & Inputs)');

    // Screen 3: Comparative Radar Chart Section
    await page.evaluate(() => window.scrollTo(0, 1100));
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/methodology-iq/screen-3.png') });
    console.log('✓ Captured Real Screen 3 (Radar Chart Projection)');

    // Screen 4: Results & Method Breakdown
    await page.evaluate(() => window.scrollTo(0, 1700));
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/methodology-iq/screen-4.png') });
    console.log('✓ Captured Real Screen 4 (Methodology Score Breakdown)');

    // Screen 5: Research Methodology Summary
    await page.evaluate(() => window.scrollTo(0, 2300));
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(rootDir, 'public/screenshots/methodology-iq/screen-5.png') });
    console.log('✓ Captured Real Screen 5 (Thesing et al. Empirical Matrix)');
  } catch (err) {
    console.error('Error on methodology tool:', err.message);
  }

  await browser.close();
  console.log('🎉 Real App Screenshots Capture Complete!');
}

captureRealApps().catch(console.error);
