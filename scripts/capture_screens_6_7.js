import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureAll() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });

  // Screen 6: Live Assessment Test Sheet
  console.log('Capturing Screen 6...');
  try {
    const testUrl = 'https://pge-talentpool.web.app/assessment.html?id=PGE-084&name=Kandidat%20Terverifikasi&role=Business%20Development%20Specialist&tests=bigfive,disc,cognitive';
    await page.goto(testUrl, { waitUntil: 'networkidle2', timeout: 25000 });
    await new Promise(r => setTimeout(r, 1500));
    await page.evaluate(() => {
      window.scrollTo(0, 150);
      const logoBrand = document.querySelector('.logo-text, .brand-header');
      if (logoBrand) logoBrand.style.filter = 'blur(6px)';
    });
    const s6 = path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-6.png');
    await page.screenshot({ path: s6 });
    console.log('✓ Saved screen-6.png');
  } catch (e) {
    console.error('Err s6:', e.message);
  }

  // Screen 7: Dashboard Hasil & Analitik
  console.log('Capturing Screen 7...');
  try {
    await page.goto('https://pge-talentpool.web.app/assessment-portal.html', { waitUntil: 'networkidle2', timeout: 25000 });
    await new Promise(r => setTimeout(r, 1500));

    await page.evaluate(() => {
      // Switch to results tab button
      const btnResults = document.getElementById('btnModeResults');
      if (btnResults) btnResults.click();

      // Populate state with completed mock talents
      if (window.state) {
        window.state.filterStage = 'ALL_WITH_ARCHIVED';
        window.state.filterRole = '';
        window.state.filterSearch = '';
        window.state.talents = [
          { id: 'PGE-084', name: 'Kandidat Terverifikasi A', role: 'Business Development Specialist', stage: 'Interview', location: 'Surakarta' },
          { id: 'PGE-065', name: 'Kandidat Terverifikasi B', role: 'Frontend & Systems Specialist', stage: 'Offering', location: 'Yogyakarta' },
          { id: 'PGE-064', name: 'Kandidat Terverifikasi C', role: 'Marketplace Operations Lead', stage: 'Active', location: 'Semarang' },
          { id: 'PGE-062', name: 'Kandidat Terverifikasi D', role: 'Data & Growth Analyst', stage: 'Active', location: 'Surakarta' }
        ];
        window.state.assessments = {
          'PGE-084': {
            status: 'completed',
            completedAt: new Date().toISOString(),
            scores: {
              extraversion: { percentage: 78, level: 'Tinggi' },
              agreeableness: { percentage: 84, level: 'Tinggi' },
              conscientiousness: { percentage: 94, level: 'Sangat Tinggi' },
              emotionalStability: { percentage: 86, level: 'Tinggi' },
              intellect: { percentage: 90, level: 'Sangat Tinggi' }
            },
            disc: { profilePattern: 'D/I (Pioneer & Strategist)', primaryName: 'Dominance & Influence' },
            cognitive: { score: 14, total: 15, percentage: 93.3 }
          },
          'PGE-065': {
            status: 'completed',
            completedAt: new Date().toISOString(),
            scores: {
              extraversion: { percentage: 65, level: 'Sedang' },
              agreeableness: { percentage: 80, level: 'Tinggi' },
              conscientiousness: { percentage: 96, level: 'Sangat Tinggi' },
              emotionalStability: { percentage: 90, level: 'Sangat Tinggi' },
              intellect: { percentage: 95, level: 'Sangat Tinggi' }
            },
            disc: { profilePattern: 'C/S (Analyst & Specialist)', primaryName: 'Compliance & Steadiness' },
            cognitive: { score: 15, total: 15, percentage: 100 }
          },
          'PGE-064': {
            status: 'completed',
            completedAt: new Date().toISOString(),
            scores: {
              extraversion: { percentage: 88, level: 'Sangat Tinggi' },
              agreeableness: { percentage: 76, level: 'Tinggi' },
              conscientiousness: { percentage: 85, level: 'Tinggi' },
              emotionalStability: { percentage: 80, level: 'Tinggi' },
              intellect: { percentage: 82, level: 'Tinggi' }
            },
            disc: { profilePattern: 'D/I (Driver & Influencer)', primaryName: 'Dominance & Influence' },
            cognitive: { score: 13, total: 15, percentage: 86.7 }
          }
        };

        if (window.renderCandidates) window.renderCandidates();
        if (window.updateResultsKpis) window.updateResultsKpis();
      }

      const logoBrand = document.querySelector('.logo-text, .header-brand');
      if (logoBrand) logoBrand.style.filter = 'blur(6px)';
    });

    await new Promise(r => setTimeout(r, 1000));
    const s7 = path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-7.png');
    await page.screenshot({ path: s7 });
    console.log('✓ Saved screen-7.png');
  } catch (e) {
    console.error('Err s7:', e.message);
  }

  // Copy to dist
  const distDir = path.join(rootDir, 'dist/screenshots/enterprise-hr-governance');
  if (fs.existsSync(distDir)) {
    if (fs.existsSync(path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-6.png'))) {
      fs.copyFileSync(path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-6.png'), path.join(distDir, 'screen-6.png'));
    }
    if (fs.existsSync(path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-7.png'))) {
      fs.copyFileSync(path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-7.png'), path.join(distDir, 'screen-7.png'));
    }
    console.log('✓ Synced to dist');
  }

  await browser.close();
}

captureAll().catch(console.error);
