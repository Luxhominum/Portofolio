import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.goto('https://pge-talentpool.web.app/assessment-portal.html', { waitUntil: 'networkidle2' });

  const fnInfo = await page.evaluate(() => {
    return {
      openFn: window.openAssessmentResultModal.toString(),
      backdropEl: document.getElementById('assessmentResultModalBackdrop') ? document.getElementById('assessmentResultModalBackdrop').outerHTML : 'none'
    };
  });

  console.log('openFn:\n', fnInfo.openFn);
  console.log('\nbackdropEl:\n', fnInfo.backdropEl);

  await browser.close();
}

run().catch(console.error);
