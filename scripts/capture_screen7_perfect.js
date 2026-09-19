import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureResultsView() {
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
    // Click Results Tab
    const btnResults = document.getElementById('btnModeResults');
    if (btnResults) {
      btnResults.classList.add('active');
      const btnLauncher = document.getElementById('btnModeLauncher');
      if (btnLauncher) btnLauncher.classList.remove('active');
    }

    const modeBadge = document.getElementById('modeResultsCountBadge');
    if (modeBadge) modeBadge.textContent = '4';

    const container = document.getElementById('candidatesList');
    if (container) {
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <!-- Card 1 -->
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 18px 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.03); display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 14px;">
              <div style="width: 44px; height: 44px; border-radius: 10px; background: #0F172A; color: #FFFFFF; font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 14px; font-family: monospace;">
                KT
              </div>
              <div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <h4 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 0; filter: blur(4px);">Kandidat Terverifikasi A</h4>
                  <span style="background: #F1F5F9; border: 1px solid #CBD5E1; color: #475569; padding: 2px 6px; border-radius: 4px; font-size: 10.5px; font-family: monospace; font-weight: 700;">PGE-084</span>
                  <span style="background: #ECFDF5; border: 1px solid #A7F3D0; color: #065F46; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 700;">Selesai (100%)</span>
                </div>
                <div style="font-size: 12px; color: #64748B; margin-top: 3px;">
                  Business Development Specialist • Surakarta • Selesai: 14 Okt 2026, 09:30 WIB
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 14px;">
              <div style="text-align: right; border-right: 1px solid #E2E8F0; padding-right: 14px;">
                <div style="font-size: 10px; color: #64748B; text-transform: uppercase; font-weight: 700;">Profil DISC</div>
                <div style="font-size: 12.5px; font-weight: 800; color: #7C3AED; font-family: monospace;">Tipe D/I (Pioneer)</div>
              </div>

              <div style="text-align: right; border-right: 1px solid #E2E8F0; padding-right: 14px;">
                <div style="font-size: 10px; color: #64748B; text-transform: uppercase; font-weight: 700;">Skor Logika</div>
                <div style="font-size: 13px; font-weight: 800; color: #059669; font-family: monospace;">14/15 (93.3%)</div>
              </div>

              <button style="background: #0F172A; color: #FFFFFF; border: none; padding: 8px 14px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                <span>🧠 Lihat Pentagon Matrix ↗</span>
              </button>
            </div>
          </div>

          <!-- Card 2 -->
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 18px 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.03); display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 14px;">
              <div style="width: 44px; height: 44px; border-radius: 10px; background: #2563EB; color: #FFFFFF; font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 14px; font-family: monospace;">
                FS
              </div>
              <div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <h4 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 0; filter: blur(4px);">Kandidat Terverifikasi B</h4>
                  <span style="background: #F1F5F9; border: 1px solid #CBD5E1; color: #475569; padding: 2px 6px; border-radius: 4px; font-size: 10.5px; font-family: monospace; font-weight: 700;">PGE-065</span>
                  <span style="background: #ECFDF5; border: 1px solid #A7F3D0; color: #065F46; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 700;">Selesai (100%)</span>
                </div>
                <div style="font-size: 12px; color: #64748B; margin-top: 3px;">
                  Frontend & Systems Specialist • Yogyakarta • Selesai: 14 Okt 2026, 09:15 WIB
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 14px;">
              <div style="text-align: right; border-right: 1px solid #E2E8F0; padding-right: 14px;">
                <div style="font-size: 10px; color: #64748B; text-transform: uppercase; font-weight: 700;">Profil DISC</div>
                <div style="font-size: 12.5px; font-weight: 800; color: #7C3AED; font-family: monospace;">Tipe C/S (Analyst)</div>
              </div>

              <div style="text-align: right; border-right: 1px solid #E2E8F0; padding-right: 14px;">
                <div style="font-size: 10px; color: #64748B; text-transform: uppercase; font-weight: 700;">Skor Logika</div>
                <div style="font-size: 13px; font-weight: 800; color: #059669; font-family: monospace;">15/15 (100%)</div>
              </div>

              <button style="background: #0F172A; color: #FFFFFF; border: none; padding: 8px 14px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                <span>🧠 Lihat Pentagon Matrix ↗</span>
              </button>
            </div>
          </div>

          <!-- Card 3 -->
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 18px 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.03); display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 14px;">
              <div style="width: 44px; height: 44px; border-radius: 10px; background: #D97706; color: #FFFFFF; font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 14px; font-family: monospace;">
                MO
              </div>
              <div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <h4 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 0; filter: blur(4px);">Kandidat Terverifikasi C</h4>
                  <span style="background: #F1F5F9; border: 1px solid #CBD5E1; color: #475569; padding: 2px 6px; border-radius: 4px; font-size: 10.5px; font-family: monospace; font-weight: 700;">PGE-064</span>
                  <span style="background: #ECFDF5; border: 1px solid #A7F3D0; color: #065F46; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 700;">Selesai (100%)</span>
                </div>
                <div style="font-size: 12px; color: #64748B; margin-top: 3px;">
                  Marketplace Operations Lead • Semarang • Selesai: 14 Okt 2026, 08:50 WIB
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 14px;">
              <div style="text-align: right; border-right: 1px solid #E2E8F0; padding-right: 14px;">
                <div style="font-size: 10px; color: #64748B; text-transform: uppercase; font-weight: 700;">Profil DISC</div>
                <div style="font-size: 12.5px; font-weight: 800; color: #7C3AED; font-family: monospace;">Tipe D/I (Driver)</div>
              </div>

              <div style="text-align: right; border-right: 1px solid #E2E8F0; padding-right: 14px;">
                <div style="font-size: 10px; color: #64748B; text-transform: uppercase; font-weight: 700;">Skor Logika</div>
                <div style="font-size: 13px; font-weight: 800; color: #059669; font-family: monospace;">13/15 (86.7%)</div>
              </div>

              <button style="background: #0F172A; color: #FFFFFF; border: none; padding: 8px 14px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                <span>🧠 Lihat Pentagon Matrix ↗</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const logoBrand = document.querySelector('.logo-text, .header-brand');
    if (logoBrand) logoBrand.style.filter = 'blur(6px)';
  });

  await new Promise(r => setTimeout(r, 600));

  const s7 = path.join(rootDir, 'public/screenshots/enterprise-hr-governance/screen-7.png');
  await page.screenshot({ path: s7 });
  console.log('✓ Saved screen-7.png');

  const distDir = path.join(rootDir, 'dist/screenshots/enterprise-hr-governance');
  if (fs.existsSync(distDir)) {
    fs.copyFileSync(s7, path.join(distDir, 'screen-7.png'));
  }

  await browser.close();
}

captureResultsView().catch(console.error);
