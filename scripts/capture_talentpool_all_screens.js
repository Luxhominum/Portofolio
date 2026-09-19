import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureAllTalentScreens() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });

  // --------------------------------------------------------------------------
  // SCREEN 7: Dashboard Hasil & Analitik (Leaderboard & Results Cards Table)
  // --------------------------------------------------------------------------
  console.log('Capturing Screen 7 (Dashboard Hasil & Analitik)...');
  await page.goto('https://pge-talentpool.web.app/assessment-portal.html', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));

  await page.evaluate(() => {
    // Reset filters
    window.state.filterRole = '';
    window.state.filterSearch = '';
    window.state.filterDisc = '';
    window.state.filterStage = 'ALL_WITH_ARCHIVED';

    const talents = [
      { id: 'PGE-084', name: 'Kandidat Terverifikasi A', role: 'Business Development Specialist', stage: 'Interview', location: 'Surakarta' },
      { id: 'PGE-065', name: 'Kandidat Terverifikasi B', role: 'Frontend & Systems Specialist', stage: 'Offering', location: 'Yogyakarta' },
      { id: 'PGE-064', name: 'Kandidat Terverifikasi C', role: 'Marketplace Operations Lead', stage: 'Active', location: 'Semarang' },
      { id: 'PGE-062', name: 'Kandidat Terverifikasi D', role: 'Data & Growth Analyst', stage: 'Active', location: 'Surakarta' }
    ];

    const assessments = {
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
        disc: { profilePattern: 'D/I (Pioneer & Strategist)', primaryName: 'Dominance & Influence', tally: { change: { D: '+18', I: '+15', S: '+7', C: '+12' } }, desc: 'Inisiatif eksekusi tinggi & kepemimpinan strategis.' },
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
        disc: { profilePattern: 'C/S (Analyst & Specialist)', primaryName: 'Compliance & Steadiness', tally: { change: { D: '+8', I: '+10', S: '+16', C: '+18' } }, desc: 'Ketelitian analitis & kepatuhan arsitektur tinggi.' },
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
        disc: { profilePattern: 'D/I (Driver & Influencer)', primaryName: 'Dominance & Influence', tally: { change: { D: '+16', I: '+17', S: '+9', C: '+8' } }, desc: 'Orientasi hasil cepat & komunikasi persuasif.' },
        cognitive: { score: 13, total: 15, percentage: 86.7 }
      },
      'PGE-062': {
        status: 'completed',
        completedAt: new Date().toISOString(),
        scores: {
          extraversion: { percentage: 72, level: 'Tinggi' },
          agreeableness: { percentage: 88, level: 'Sangat Tinggi' },
          conscientiousness: { percentage: 88, level: 'Tinggi' },
          emotionalStability: { percentage: 82, level: 'Tinggi' },
          intellect: { percentage: 85, level: 'Tinggi' }
        },
        disc: { profilePattern: 'S/C (Strategist & Specialist)', primaryName: 'Steadiness & Compliance', tally: { change: { D: '+10', I: '+11', S: '+15', C: '+14' } }, desc: 'Stabilitas proses & analisa data terstruktur.' },
        cognitive: { score: 13, total: 15, percentage: 86.7 }
      }
    };

    window.state.talents = talents;
    window.state.assessments = assessments;

    // Switch to results mode
    window.switchPortalMode('results');

    // Apply company privacy blur on logo
    const logoBrand = document.querySelector('.logo-text, .header-brand');
    if (logoBrand) logoBrand.style.filter = 'blur(6px)';
  });

  await new Promise(r => setTimeout(r, 1200));

  const screen7Path = path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-7.png');
  await page.screenshot({ path: screen7Path });
  console.log('✓ Captured Screen 7 (Results Dashboard)');

  // Sync to dist
  const distDir = path.join(rootDir, 'dist/screenshots/enterprise-hr-governance');
  if (fs.existsSync(distDir)) {
    fs.copyFileSync(screen7Path, path.join(distDir, 'screen-7.png'));
  }

  await browser.close();
}

captureAllTalentScreens().catch(console.error);
