import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureScreen7() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });

  await page.goto('https://pge-talentpool.web.app/assessment-portal.html', { waitUntil: 'networkidle2' });
  await page.waitForFunction(() => window.state && window.state.talents && window.state.talents.length > 0, { timeout: 15000 }).catch(() => {});

  await page.evaluate(() => {
    if (!window.state) window.state = { talents: [], assessments: {} };
    if (!window.state.talents || window.state.talents.length === 0) {
      window.state.talents = [
        { id: 'PGE-084', name: 'Kandidat Terverifikasi A', role: 'Business Development Specialist', stage: 'Interview', location: 'Surakarta' },
        { id: 'PGE-065', name: 'Kandidat Terverifikasi B', role: 'Frontend & Systems Specialist', stage: 'Offering', location: 'Yogyakarta' },
        { id: 'PGE-064', name: 'Kandidat Terverifikasi C', role: 'Marketplace Operations Lead', stage: 'Active', location: 'Semarang' },
        { id: 'PGE-062', name: 'Kandidat Terverifikasi D', role: 'Data & Growth Analyst', stage: 'Active', location: 'Surakarta' }
      ];
    }

    window.state.talents.forEach((t, i) => {
      const cogScore = [14, 15, 13, 13][i % 4];
      const patterns = ['D/I (Pioneer & Strategist)', 'C/S (Analyst & Specialist)', 'D/I (Driver & Influencer)', 'S/C (Strategist & Specialist)'];
      const discNames = ['Dominance & Influence', 'Compliance & Steadiness', 'Dominance & Influence', 'Steadiness & Compliance'];

      const ass = {
        status: 'completed',
        completedAt: new Date(Date.now() - i * 3600000).toISOString(),
        scores: {
          extraversion: { percentage: 75 + (i * 4) % 20, level: 'Tinggi' },
          agreeableness: { percentage: 80 + (i * 3) % 15, level: 'Tinggi' },
          conscientiousness: { percentage: 90 + (i * 2) % 10, level: 'Sangat Tinggi' },
          emotionalStability: { percentage: 85 + (i * 3) % 10, level: 'Tinggi' },
          intellect: { percentage: 88 + (i * 4) % 12, level: 'Sangat Tinggi' }
        },
        disc: {
          profilePattern: patterns[i % 4],
          primaryName: discNames[i % 4],
          tally: { change: { D: '+16', I: '+14', S: '+8', C: '+12' } },
          desc: 'Inisiatif eksekusi tinggi dan kepemimpinan sistematis.'
        },
        cognitive: {
          score: cogScore,
          total: 15,
          percentage: Math.round((cogScore / 15) * 1000) / 10
        }
      };

      window.state.assessments = window.state.assessments || {};
      window.state.assessments[t.id] = ass;
      t.assessment = ass;
    });

    window.switchPortalMode('results');

    // Blur company branding
    const logoBrand = document.querySelector('.logo-text, .header-brand');
    if (logoBrand) logoBrand.style.filter = 'blur(6px)';

    // Blur names slightly for privacy
    const names = document.querySelectorAll('.candidate-name');
    names.forEach(n => { n.style.filter = 'blur(4px)'; });
  });

  await new Promise(r => setTimeout(r, 1200));

  const s7 = path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-7.png');
  await page.screenshot({ path: s7 });
  console.log('✓ Saved screen-7.png');

  const distDir = path.join(rootDir, 'dist/screenshots/enterprise-hr-governance');
  if (fs.existsSync(distDir)) {
    fs.copyFileSync(s7, path.join(distDir, 'screen-7.png'));
  }

  await browser.close();
}

captureScreen7().catch(console.error);
