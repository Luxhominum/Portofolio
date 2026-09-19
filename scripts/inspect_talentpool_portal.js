import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  console.log('Navigating to assessment-portal.html...');
  await page.goto('https://pge-talentpool.web.app/assessment-portal.html', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));

  const pageInfo = await page.evaluate(() => {
    const text = document.body.innerText;
    const buttons = Array.from(document.querySelectorAll('button, a, [role="tab"], .tab, nav div')).map(el => ({
      tag: el.tagName,
      text: el.innerText ? el.innerText.trim() : '',
      id: el.id,
      classes: el.className
    }));
    return { textSnippet: text.substring(0, 500), buttons };
  });

  console.log('Page info buttons:', pageInfo.buttons.filter(b => b.text.length > 0));

  // Let's click on "Dashboard Hasil & Analitik"
  const clicked = await page.evaluate(() => {
    const els = Array.from(document.querySelectorAll('*'));
    for (const el of els) {
      if (el.innerText && el.innerText.includes('Dashboard Hasil & Analitik')) {
        el.click();
        return true;
      }
    }
    return false;
  });

  console.log('Clicked Dashboard Hasil & Analitik:', clicked);
  await new Promise(r => setTimeout(r, 2000));

  // Let's see if there are radar charts or pentagon charts or canvases
  const charts = await page.evaluate(() => {
    const canvases = Array.from(document.querySelectorAll('canvas, svg')).map(c => ({
      tag: c.tagName,
      width: c.clientWidth,
      height: c.clientHeight,
      id: c.id,
      classes: c.className
    }));
    return {
      bodyText: document.body.innerText.substring(0, 800),
      canvases
    };
  });
  console.log('After clicking tab:', charts);

  // Take screenshot of this view to inspect
  await page.screenshot({ path: path.join(rootDir, 'public/screenshots/enterprise-hr-governance/test-pentagon-view.png') });
  console.log('Saved test-pentagon-view.png');

  // Let's also check if there are candidates with test results or "Lihat Hasil" / "Detail Hasil"
  const detailButtons = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('button, a, tr, div')).filter(el => {
      const t = el.innerText || '';
      return t.includes('Detail') || t.includes('Lihat') || t.includes('Hasil') || t.includes('Analisis') || t.includes('Skor');
    }).map(el => ({ tag: el.tagName, text: el.innerText.trim() }));
  });
  console.log('Detail / Result elements:', detailButtons.slice(0, 10));

  await browser.close();
}

run().catch(console.error);
