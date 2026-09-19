import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureRealPentagonMatrix() {
  console.log('🚀 Launching Chromium to capture REAL Pentagon Matrix and Test Results from Assessment Portal...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });

  await page.goto('https://pge-talentpool.web.app/assessment-portal.html', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));

  // Open the real assessment result modal with comprehensive test data
  await page.evaluate(() => {
    const candidateData = {
      id: 'PGE-TEST-084',
      name: 'Kandidat Terverifikasi (Lead Specialist)',
      role: 'Business Development & Operations Systems',
      created_at: '2026-10-14T09:30:00Z',
      assessment_results: {
        dimensions: {
          extraversion: { percentage: 78, level: 'Tinggi' },
          agreeableness: { percentage: 82, level: 'Tinggi' },
          conscientiousness: { percentage: 94, level: 'Sangat Tinggi' },
          emotionalStability: { percentage: 86, level: 'Tinggi' },
          intellect: { percentage: 90, level: 'Sangat Tinggi' }
        },
        disc: {
          profilePattern: 'D/I (Pioneer & Systems Strategist)',
          primaryName: 'Dominance & Influence High-Drive',
          tally: {
            change: { D: '+18', I: '+15', S: '+7', C: '+12' }
          },
          desc: 'Kandidat menunjukkan inisiatif eksekusi yang kuat, orientasi pemecahan masalah objektif, serta fleksibilitas kepemimpinan lintas tim.'
        },
        cognitive: {
          score: 28,
          total: 30,
          percentage: 93.3,
          aspects: [
            { name: 'Logika Deduktif & Pola Sistem', score: 10, total: 10, pct: 100 },
            { name: 'Pemecahan Masalah Bisnis Kuantitatif', score: 9, total: 10, pct: 90 },
            { name: 'Ketelitian & Analisis Situasional', score: 9, total: 10, pct: 90 }
          ]
        }
      }
    };

    // Trigger the real openAssessmentResultModal
    window.openAssessmentResultModal(candidateData);

    // Apply privacy blur on header company tags if present
    const badges = document.querySelectorAll('.header-brand, .brand-text, .logo-text');
    badges.forEach(b => {
      b.style.filter = 'blur(6px)';
    });

    // Make sure modal fits nicely in viewport for screenshot
    const modal = document.querySelector('#assessmentResultModal');
    if (modal) {
      modal.style.maxHeight = '92vh';
      modal.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.4)';
    }
  });

  await new Promise(r => setTimeout(r, 1000));

  const targetPath = path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-5.png');
  const distPath = path.join(rootDir, 'dist/screenshots/enterprise-hr-governance/screen-5.png');

  await page.screenshot({ path: targetPath });
  console.log('✓ Captured Real Pentagon Matrix and Test Result into public/screenshots/.../screen-5.png');

  if (fs.existsSync(path.dirname(distPath))) {
    fs.copyFileSync(targetPath, distPath);
    console.log('✓ Synced to dist/screenshots/.../screen-5.png');
  }

  await browser.close();
  console.log('🎉 Done!');
}

captureRealPentagonMatrix().catch(console.error);
