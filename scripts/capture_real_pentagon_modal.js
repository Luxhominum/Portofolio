import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureModal() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });

  await page.goto('https://pge-talentpool.web.app/assessment-portal.html', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));

  await page.evaluate(() => {
    // 1. Pentagon Dimensions Data (Real App Structure)
    const dimensions = {
      extraversion: { percentage: 78, level: 'Tinggi' },
      agreeableness: { percentage: 84, level: 'Tinggi' },
      conscientiousness: { percentage: 94, level: 'Sangat Tinggi' },
      emotionalStability: { percentage: 86, level: 'Tinggi' },
      intellect: { percentage: 90, level: 'Sangat Tinggi' }
    };

    const disc = {
      profilePattern: 'D/I (Pioneer & Strategist)',
      primaryName: 'Dominance & Influence High-Drive',
      tally: {
        change: { D: '+18', I: '+15', S: '+7', C: '+12' }
      },
      desc: 'Kandidat memiliki inisiatif eksekusi yang kuat, orientasi pemecahan masalah objektif, serta fleksibilitas kepemimpinan tim.'
    };

    const cognitive = {
      score: 14,
      total: 15,
      percentage: 93.3,
      categories: {
        'Deret Angka': { correct: 3, total: 3 },
        'Aritmatika Dasar': { correct: 3, total: 3 },
        'Logika Komersial': { correct: 4, total: 4 },
        'Analisis Data': { correct: 3, total: 3 },
        'Penalaran Kritis': { correct: 1, total: 1 },
        'Silogisme': { correct: 0, total: 1 }
      }
    };

    // Update modal elements
    document.getElementById('resModalCandidateName').textContent = 'Kandidat Terverifikasi';
    document.getElementById('resModalCandidateId').textContent = 'PGE-084';
    document.getElementById('resModalCandidateMeta').textContent = 'Posisi: Business Development & Systems Specialist • Selesai: Baru saja (100% Submitted)';

    // Render 1. Pentagon Matrix (Big Five)
    const bigFiveCardHtml = `
      <div class="report-card" style="background: white; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <div class="report-card-title" style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #0F172A; font-size: 14px; margin-bottom: 12px;">
          <span>🧠</span> <span>Pentagon Matrix: IPIP Big Five Personality</span>
        </div>
        ${window.renderPentagonMatrixSvg(dimensions)}
        <div style="margin-top: 14px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; font-size: 11px;">
          ${Object.entries(dimensions).map(([k, d]) => `
            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 6px 8px; border-radius: 6px; text-align: center;">
              <div style="color: #64748B; font-size: 9.5px; text-transform: capitalize; font-weight: 600;">${k}</div>
              <div style="font-weight: 800; color: #1E40AF; font-size: 12px; margin-top: 2px;">${d.percentage}%</div>
              <div style="color: #475569; font-size: 9px;">${d.level}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Render 2. DISC Line Graph
    const discCardHtml = `
      <div class="report-card" style="background: white; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <div class="report-card-title" style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #0F172A; font-size: 14px; margin-bottom: 12px;">
          <span>🧩</span> <span>DISC Element Line Graph (D-I-S-C)</span>
        </div>
        ${window.renderDiscLineGraphSvg(disc)}
        <div style="margin-top: 12px; padding: 10px 12px; background: #F5F3FF; border: 1px solid #DDD6FE; border-radius: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span style="font-size: 12px; font-weight: 700; color: #7C3AED;">
              Pola Profil: Tipe ${disc.profilePattern}
            </span>
            <span style="font-size: 11px; font-weight: 700; color: #6D28D9; font-family: monospace;">
              D:${disc.tally.change.D} I:${disc.tally.change.I} S:${disc.tally.change.S} C:${disc.tally.change.C}
            </span>
          </div>
          <div style="font-size: 11.5px; color: #5B21B6; line-height: 1.45;">
            ${disc.desc}
          </div>
        </div>
      </div>
    `;

    // Render 3. Cognitive Aspect Bars
    const cogCardHtml = `
      <div class="report-card" style="background: white; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); grid-column: 1 / -1;">
        <div class="report-card-title" style="display: flex; justify-content: space-between; align-items: center; font-weight: 700; color: #0F172A; font-size: 14px; margin-bottom: 10px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>📊</span> <span>Aspek Logika, Kognitif &amp; Bisnis Praktis</span>
          </div>
          <span style="font-family: monospace; font-size: 13px; font-weight: 800; color: #059669; background: #ECFDF5; padding: 3px 8px; border-radius: 6px; border: 1px solid #A7F3D0;">
            Skor Akhir: ${cognitive.score} / ${cognitive.total} (${cognitive.percentage}%)
          </span>
        </div>
        ${window.renderCognitiveAspectsBarsHtml(cognitive)}
      </div>
    `;

    const body = document.getElementById('resModalBody');
    body.innerHTML = `
      <div class="report-grid-3col" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        ${bigFiveCardHtml}
        ${discCardHtml}
        ${cogCardHtml}
      </div>
    `;

    const backdrop = document.getElementById('assessmentResultModalBackdrop');
    backdrop.style.display = 'flex';
    backdrop.style.alignItems = 'center';
    backdrop.style.justifyContent = 'center';
    backdrop.style.position = 'fixed';
    backdrop.style.inset = '0';
    backdrop.style.zIndex = '9999';
    backdrop.style.backgroundColor = 'rgba(15, 23, 42, 0.65)';
    backdrop.style.backdropFilter = 'blur(4px)';

    const card = backdrop.querySelector('.assessment-modal-card');
    if (card) {
      card.style.maxHeight = '94vh';
      card.style.width = '94%';
      card.style.maxWidth = '1180px';
      card.style.overflowY = 'auto';
      card.style.background = '#FFFFFF';
      card.style.borderRadius = '16px';
      card.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
    }

    // Apply company privacy blur on background if any
    const logoBrand = document.querySelector('.logo-text, .header-brand');
    if (logoBrand) logoBrand.style.filter = 'blur(6px)';
  });

  await new Promise(r => setTimeout(r, 1200));

  const targetPath = path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-5.png');
  const distPath = path.join(rootDir, 'dist/screenshots/enterprise-hr-governance/screen-5.png');

  await page.screenshot({ path: targetPath });
  console.log('✓ Captured Pentagon Matrix Modal to screen-5.png');

  if (fs.existsSync(path.dirname(distPath))) {
    fs.copyFileSync(targetPath, distPath);
    console.log('✓ Synced to dist/screenshots/enterprise-hr-governance/screen-5.png');
  }

  await browser.close();
}

captureModal().catch(console.error);
