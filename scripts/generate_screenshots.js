import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public', 'screenshots');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const TEMPLATES = [
  // ----------------------------------------------------
  // PROJECT 1: COMMUNITY SCHEDULING (Screens 1 to 5)
  // ----------------------------------------------------
  {
    projectId: 'community-scheduling',
    screenId: 'screen-1',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
  </style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <!-- Top App Navigation -->
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl backdrop-blur-md">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-lg">
        ✝
      </div>
      <div>
        <h1 class="text-base font-bold text-white tracking-tight flex items-center gap-2">
          <span>Portal Jadwal Petugas Liturgi & Komunitas Wilayah</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">v3.4 Production</span>
        </h1>
        <p class="text-xs text-slate-400">Paroki Santo Yohanes • 35 Komunitas Wilayah Terdaftar</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700 text-xs font-mono text-emerald-400 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Zero-Conflict Validator: ACTIVE
      </div>
      <div class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors cursor-pointer shadow-lg shadow-emerald-900/40">
        + Buat Jadwal Bulan Baru
      </div>
    </div>
  </div>

  <!-- KPI Summary Row -->
  <div class="grid grid-cols-4 gap-4 my-4">
    <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 shadow-lg">
      <div class="text-xs font-medium text-slate-400">Total Slot Misa Bulan Ini</div>
      <div class="text-2xl font-bold font-mono text-white mt-1">20 Sesi</div>
      <div class="text-[11px] text-emerald-400 font-medium mt-0.5">100% Slot Terisi Lengkap</div>
    </div>
    <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 shadow-lg">
      <div class="text-xs font-medium text-slate-400">Petugas Terjadwal</div>
      <div class="text-2xl font-bold font-mono text-emerald-400 mt-1">248 Relawan</div>
      <div class="text-[11px] text-slate-400 mt-0.5">Dari 35 Wilayah Berbeda</div>
    </div>
    <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 shadow-lg">
      <div class="text-xs font-medium text-slate-400">Indeks Pemerataan Rotasi</div>
      <div class="text-2xl font-bold font-mono text-blue-400 mt-1">98.6%</div>
      <div class="text-[11px] text-emerald-400 mt-0.5">Fair Distribution Ratio</div>
    </div>
    <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 shadow-lg">
      <div class="text-xs font-medium text-slate-400">Insiden Bentrok Ganda</div>
      <div class="text-2xl font-bold font-mono text-emerald-400 mt-1">0 Kasus</div>
      <div class="text-[11px] text-emerald-400 mt-0.5">Zero-Overlap Enforced</div>
    </div>
  </div>

  <!-- Main Calendar Interactive Slot Grid -->
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-2xl flex-1 flex flex-col justify-between">
    <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/80">
      <div class="flex items-center gap-3">
        <h2 class="text-sm font-bold text-white uppercase tracking-wider font-mono">
          Matriks Penugasan Misa — Minggu Biasa XXVIII (Oktober 2026)
        </h2>
        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
          STATUS: VERIFIED
        </span>
      </div>
      <div class="flex items-center gap-2 text-xs text-slate-400">
        <span class="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500"></span> Siap Bertugas
        <span class="w-3 h-3 rounded bg-blue-500/20 border border-blue-500 ml-2"></span> Koor Wilayah
      </div>
    </div>

    <div class="grid grid-cols-4 gap-3 text-xs">
      <!-- Slot 1 -->
      <div class="bg-slate-900/90 border border-slate-700 rounded-xl p-3.5 space-y-2.5 hover:border-emerald-500/60 transition-colors">
        <div class="flex justify-between items-center">
          <span class="font-bold text-white font-mono text-sm">Misa I (06:00 WIB)</span>
          <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold">OK</span>
        </div>
        <div class="p-2 bg-slate-800/80 rounded-lg border border-slate-700/60">
          <div class="text-[10px] text-slate-400">Wilayah Penanggung Jawab:</div>
          <div class="font-bold text-white text-xs">Wilayah 04 (St. Thomas)</div>
        </div>
        <div class="space-y-1 text-[11px] text-slate-300 font-mono">
          <div>• Lektor 1: Maria Stephanie</div>
          <div>• Lektor 2: Yohanes Handoko</div>
          <div>• Tatib: 8 Petugas Wilayah 04</div>
          <div class="text-blue-400 font-bold">• Koor: Cantate Choir W04</div>
        </div>
      </div>

      <!-- Slot 2 -->
      <div class="bg-slate-900/90 border border-slate-700 rounded-xl p-3.5 space-y-2.5 hover:border-emerald-500/60 transition-colors">
        <div class="flex justify-between items-center">
          <span class="font-bold text-white font-mono text-sm">Misa II (08:30 WIB)</span>
          <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold">OK</span>
        </div>
        <div class="p-2 bg-slate-800/80 rounded-lg border border-slate-700/60">
          <div class="text-[10px] text-slate-400">Wilayah Penanggung Jawab:</div>
          <div class="font-bold text-white text-xs">Wilayah 12 (St. Paulus)</div>
        </div>
        <div class="space-y-1 text-[11px] text-slate-300 font-mono">
          <div>• Lektor 1: Antonius Danu</div>
          <div>• Lektor 2: Fransiska Lita</div>
          <div>• Tatib: 10 Petugas Wilayah 12</div>
          <div class="text-blue-400 font-bold">• Koor: Gratia Choir W12</div>
        </div>
      </div>

      <!-- Slot 3 -->
      <div class="bg-slate-900/90 border border-slate-700 rounded-xl p-3.5 space-y-2.5 hover:border-emerald-500/60 transition-colors">
        <div class="flex justify-between items-center">
          <span class="font-bold text-white font-mono text-sm">Misa III (16:30 WIB)</span>
          <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold">OK</span>
        </div>
        <div class="p-2 bg-slate-800/80 rounded-lg border border-slate-700/60">
          <div class="text-[10px] text-slate-400">Wilayah Penanggung Jawab:</div>
          <div class="font-bold text-white text-xs">Wilayah 19 (St. Teresia)</div>
        </div>
        <div class="space-y-1 text-[11px] text-slate-300 font-mono">
          <div>• Lektor 1: Bernardus Rio</div>
          <div>• Lektor 2: Veronica Cindy</div>
          <div>• Tatib: 8 Petugas Wilayah 19</div>
          <div class="text-blue-400 font-bold">• Koor: Vox Angelica W19</div>
        </div>
      </div>

      <!-- Slot 4 -->
      <div class="bg-slate-900/90 border border-slate-700 rounded-xl p-3.5 space-y-2.5 hover:border-emerald-500/60 transition-colors">
        <div class="flex justify-between items-center">
          <span class="font-bold text-white font-mono text-sm">Misa IV (19:00 WIB)</span>
          <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold">OK</span>
        </div>
        <div class="p-2 bg-slate-800/80 rounded-lg border border-slate-700/60">
          <div class="text-[10px] text-slate-400">Wilayah Penanggung Jawab:</div>
          <div class="font-bold text-white text-xs">Wilayah 31 (St. Mikael)</div>
        </div>
        <div class="space-y-1 text-[11px] text-slate-300 font-mono">
          <div>• Lektor 1: Ignatius Surya</div>
          <div>• Lektor 2: Elisabeth Dian</div>
          <div>• Tatib: 12 Petugas Wilayah 31</div>
          <div class="text-blue-400 font-bold">• Koor: OMK Choir W31</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'community-scheduling',
    screenId: 'screen-2',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">🛡️</div>
      <div>
        <h1 class="text-base font-bold text-white">Zero-Conflict Real-time Engine Inspector</h1>
        <p class="text-xs text-slate-400">Mesin Diagnostik Algoritma Validasi 3 Lapis Penugasan</p>
      </div>
    </div>
    <div class="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
      ALL 3 TIERS PASSING
    </div>
  </div>

  <div class="grid grid-cols-3 gap-5 my-6 flex-1">
    <!-- Layer 1 -->
    <div class="bg-slate-800/90 border border-emerald-500/50 rounded-2xl p-5 flex flex-col justify-between shadow-lg relative overflow-hidden">
      <div class="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
      <div>
        <div class="flex items-center justify-between pb-2 border-b border-slate-700">
          <span class="text-xs font-mono font-bold text-emerald-400">TIER 1 VALIDATOR</span>
          <span class="text-xs text-emerald-400 font-bold">✓ 0 Overlap</span>
        </div>
        <h2 class="text-sm font-bold text-white mt-3">Validasi Bentrok Jam & Sesi Misa</h2>
        <p class="text-xs text-slate-300 mt-1 leading-relaxed">
          Memeriksa apakah ada relawan atau lektor yang didaftarkan pada dua slot misa yang berlangsung berdekatan atau bersamaan.
        </p>
      </div>
      <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-700 text-xs font-mono space-y-1 text-slate-300">
        <div class="text-slate-500">// Matriks Waktu & Relawan</div>
        <div>Indexed Petugas: 248 Aktif</div>
        <div>Overlap Ditemukan: 0 Kasus</div>
        <div class="text-emerald-400 font-bold">Status: Safe (No Double-Booking)</div>
      </div>
    </div>

    <!-- Layer 2 -->
    <div class="bg-slate-800/90 border border-emerald-500/50 rounded-2xl p-5 flex flex-col justify-between shadow-lg relative overflow-hidden">
      <div class="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
      <div>
        <div class="flex items-center justify-between pb-2 border-b border-slate-700">
          <span class="text-xs font-mono font-bold text-emerald-400">TIER 2 VALIDATOR</span>
          <span class="text-xs text-emerald-400 font-bold">✓ 100% Clean</span>
        </div>
        <h2 class="text-sm font-bold text-white mt-3">Pencegahan Bentrok Tim Koor vs Individu</h2>
        <p class="text-xs text-slate-300 mt-1 leading-relaxed">
          Mencegah anggota paduan suara (koor) ditugaskan secara simultan sebagai petugas tata tertib, lektor, atau pemazmur di misa yang sama.
        </p>
      </div>
      <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-700 text-xs font-mono space-y-1 text-slate-300">
        <div class="text-slate-500">// Cross-Role Conflict Check</div>
        <div>Koor Roster Check: 4 Tim Wilayah</div>
        <div>Individual Assignment: Clear</div>
        <div class="text-emerald-400 font-bold">Status: Role Separation Verified</div>
      </div>
    </div>

    <!-- Layer 3 -->
    <div class="bg-slate-800/90 border border-emerald-500/50 rounded-2xl p-5 flex flex-col justify-between shadow-lg relative overflow-hidden">
      <div class="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
      <div>
        <div class="flex items-center justify-between pb-2 border-b border-slate-700">
          <span class="text-xs font-mono font-bold text-emerald-400">TIER 3 VALIDATOR</span>
          <span class="text-xs text-emerald-400 font-bold">✓ Cooldown Pass</span>
        </div>
        <h2 class="text-sm font-bold text-white mt-3">Jeda Istirahat Wajib (Cooldown Period)</h2>
        <p class="text-xs text-slate-300 mt-1 leading-relaxed">
          Menjamin minimal jeda 2-3 minggu sebelum suatu kelompok wilayah atau individu dijadwalkan kembali, mencegah kelelahan petugas.
        </p>
      </div>
      <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-700 text-xs font-mono space-y-1 text-slate-300">
        <div class="text-slate-500">// Minimum Cooldown Engine</div>
        <div>Min Interval: 14 Hari</div>
        <div>Average Rest: 21 Hari</div>
        <div class="text-emerald-400 font-bold">Status: Zero Burnout Risk</div>
      </div>
    </div>
  </div>

  <div class="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between text-xs font-mono text-slate-400">
    <span>Algoritma Eksekusi: Deterministic Constraint Solver v3.1</span>
    <span class="text-emerald-400 font-bold">Total Waktu Kalkulasi Validasi: 42ms (Instant Real-time)</span>
  </div>
</body>
</html>`
  },
  {
    projectId: 'community-scheduling',
    screenId: 'screen-3',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">⚖️</div>
      <div>
        <h1 class="text-base font-bold text-white">Analitik Pemerataan Pelayanan 35 Komunitas Wilayah</h1>
        <p class="text-xs text-slate-400">Distribusi Kuota Penugasan Tahun Berjalan (Q1 - Q4 2026)</p>
      </div>
    </div>
    <div class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-blue-400 font-bold">
      Standar Deviasi Beban: &plusmn;0.3x (Sangat Seimbang)
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 my-4 flex-1">
    <div class="col-span-2 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider">
        Grafik Frekuensi Penugasan Berdasarkan Sektor Wilayah
      </h2>
      <div class="space-y-3 pt-2 text-xs">
        <div>
          <div class="flex justify-between text-xs mb-1 font-mono">
            <span class="text-slate-300">Sektor Barat (Wilayah 01 s/d 10)</span>
            <span class="text-emerald-400 font-bold">4.1x Penugasan / Wilayah (Target: 4x)</span>
          </div>
          <div class="w-full bg-slate-900 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div class="bg-emerald-500 h-full rounded-full w-[82%]"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs mb-1 font-mono">
            <span class="text-slate-300">Sektor Timur (Wilayah 11 s/d 20)</span>
            <span class="text-blue-400 font-bold">4.0x Penugasan / Wilayah (Target: 4x)</span>
          </div>
          <div class="w-full bg-slate-900 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div class="bg-blue-500 h-full rounded-full w-[80%]"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs mb-1 font-mono">
            <span class="text-slate-300">Sektor Selatan (Wilayah 21 s/d 30)</span>
            <span class="text-emerald-400 font-bold">4.2x Penugasan / Wilayah (Target: 4x)</span>
          </div>
          <div class="w-full bg-slate-900 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div class="bg-emerald-500 h-full rounded-full w-[84%]"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs mb-1 font-mono">
            <span class="text-slate-300">Sektor Utara (Wilayah 31 s/d 35)</span>
            <span class="text-indigo-400 font-bold">4.4x Penugasan / Wilayah (Target: 4x)</span>
          </div>
          <div class="w-full bg-slate-900 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div class="bg-indigo-500 h-full rounded-full w-[88%]"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <div>
        <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
          Metrik Transparansi
        </h2>
        <div class="mt-3 space-y-3 text-xs">
          <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60">
            <div class="text-[10px] text-slate-400">Tingkat Kepuasan Wilayah</div>
            <div class="text-xl font-bold font-mono text-emerald-400 mt-0.5">100% Setuju</div>
            <div class="text-[10px] text-slate-400 mt-0.5">Nol keluhan jadwal tidak adil</div>
          </div>
          <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60">
            <div class="text-[10px] text-slate-400">Total Jam Pelayanan Terealisasi</div>
            <div class="text-xl font-bold font-mono text-white mt-0.5">1,240 Jam</div>
            <div class="text-[10px] text-slate-400 mt-0.5">Terdata objektif di database</div>
          </div>
        </div>
      </div>
      <div class="text-[11px] font-mono text-slate-400 text-center">
        Pembaruan Data: Real-time Cloud Sync
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'community-scheduling',
    screenId: 'screen-4',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">📄</div>
      <div>
        <h1 class="text-base font-bold text-white">Multi-Format Publishing & Distribution Studio</h1>
        <p class="text-xs text-slate-400">Konversi Data Jadwal Menjadi Format Cetak Warta Fisik & Teks WhatsApp 1-Klik</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <button class="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs shadow-lg">📥 Download PDF A4</button>
      <button class="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-600 text-slate-200 text-xs font-semibold">📋 Salin Teks WA</button>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-5 my-4 flex-1">
    <!-- Format Warta Cetak -->
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <div>
        <div class="flex justify-between items-center pb-2 border-b border-slate-700 mb-3">
          <span class="text-xs font-bold font-mono text-purple-400">PRATINJAU LEMBAR WARTA GEREJA (CETAK A4)</span>
          <span class="text-[10px] font-mono text-slate-400">Ready to Print</span>
        </div>
        <div class="bg-white text-slate-900 p-4 rounded-xl font-serif shadow-inner space-y-2 text-xs">
          <div class="text-center font-bold pb-2 border-b border-slate-300">
            <div class="text-sm">JADWAL PETUGAS LITURGI BULAN OKTOBER 2026</div>
            <div class="text-[10px] text-slate-600 font-sans">PAROKI SANTO YOHANES PENGINJIL</div>
          </div>
          <table class="w-full text-left text-[11px] font-sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 text-slate-600 text-[10px]">
                <th class="py-1">MISA</th>
                <th>WILAYAH</th>
                <th>LEKTOR</th>
                <th>KOOR</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="py-1.5 font-bold">06:00 WIB</td>
                <td>Wilayah 04 (St. Thomas)</td>
                <td>Maria S. / Yohanes H.</td>
                <td>Cantate Choir</td>
              </tr>
              <tr>
                <td class="py-1.5 font-bold">08:30 WIB</td>
                <td>Wilayah 12 (St. Paulus)</td>
                <td>Antonius D. / Fransiska L.</td>
                <td>Gratia Choir</td>
              </tr>
              <tr>
                <td class="py-1.5 font-bold">17:00 WIB</td>
                <td>Wilayah 19 (St. Teresia)</td>
                <td>Bernardus R. / Veronica C.</td>
                <td>Vox Angelica</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="text-[11px] text-slate-400 font-mono mt-2">Ukuran Standar: A4 Portrait • Auto-Page Split Active</div>
    </div>

    <!-- Format WhatsApp Broadcast -->
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <div>
        <div class="flex justify-between items-center pb-2 border-b border-slate-700 mb-3">
          <span class="text-xs font-bold font-mono text-emerald-400">PRATINJAU PESAN SIARAN WHATSAPP</span>
          <span class="text-[10px] font-mono text-emerald-400">Formatted Markdown</span>
        </div>
        <div class="bg-slate-950 p-4 rounded-xl font-mono text-xs text-emerald-300 space-y-1.5 border border-slate-800">
          <div class="font-bold text-white">*PENGUMUMAN JADWAL TUGAS LITURGI*</div>
          <div class="text-slate-400">---------------------------------------</div>
          <div>Bapak/Ibu Koordinator Wilayah yang terkasih, berikut jadwal bertugas Misa Minggu, 11 Oktober 2026:</div>
          <div class="mt-2 text-white">• *Misa 06.00 WIB* : Wilayah 04 (St. Thomas)</div>
          <div class="text-white">• *Misa 08.30 WIB* : Wilayah 12 (St. Paulus)</div>
          <div class="text-white">• *Misa 17.00 WIB* : Wilayah 19 (St. Teresia)</div>
          <div class="mt-2 text-slate-300">Mohon konfirmasi kesiapan petugas tatib & lektor H-3. Terima kasih & Berkah Dalem.</div>
        </div>
      </div>
      <div class="text-[11px] text-slate-400 font-mono mt-2">1-Klik Salin ke Clipboard untuk 35 Grup Wilayah</div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'community-scheduling',
    screenId: 'screen-5',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">🔒</div>
      <div>
        <h1 class="text-base font-bold text-white">Audit Trail & Official Schedule Finalization Lock</h1>
        <p class="text-xs text-slate-400">Mekanisme Pengamanan Jadwal Resmi & Log Revisi Berbasis Hak Akses (RBAC)</p>
      </div>
    </div>
    <div class="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-bold flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
      OFFICIALLY LOCKED & SEALED
    </div>
  </div>

  <div class="grid grid-cols-3 gap-5 my-4 flex-1">
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-4">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
        Status Pengesahan Jadwal
      </h2>
      <div class="p-3.5 bg-slate-900/90 rounded-xl border border-slate-700 space-y-2">
        <div class="text-[10px] text-slate-400 font-mono">DIGITAL SIGNATURE HASH</div>
        <div class="font-mono text-xs text-emerald-400 font-bold break-all">sha256: 8f9b2c3a1d94e772e0b...</div>
        <div class="text-[11px] text-slate-300 pt-2 border-t border-slate-800">
          Disahkan oleh: <span class="text-white font-semibold">Sekretariat Paroki</span>
        </div>
        <div class="text-[11px] text-slate-400">Waktu: 28 September 2026, 14:30 WIB</div>
      </div>
      <div class="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300 leading-relaxed">
        ⚠️ Mode Read-Only Aktif: Perubahan jadwal hanya dapat dilakukan melalui pembukaan kunci resmi oleh Super Admin.
      </div>
    </div>

    <div class="col-span-2 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
        Riwayat Log Aktivitas & Revisi Jadwal (Audit Log)
      </h2>
      <div class="divide-y divide-slate-700/60 font-mono text-xs space-y-2 pt-1">
        <div class="pt-2 flex justify-between items-center text-slate-300">
          <div>
            <span class="text-emerald-400 font-bold">[FINAL_LOCK]</span> Jadwal Oktober 2026 dikunci resmi oleh Sekretariat
          </div>
          <span class="text-[10px] text-slate-500">28 Sep 14:30</span>
        </div>
        <div class="pt-2 flex justify-between items-center text-slate-300">
          <div>
            <span class="text-blue-400 font-bold">[AUTO_PASS]</span> Zero-conflict solver selesai memvalidasi 20 sesi misa
          </div>
          <span class="text-[10px] text-slate-500">28 Sep 14:15</span>
        </div>
        <div class="pt-2 flex justify-between items-center text-slate-300">
          <div>
            <span class="text-purple-400 font-bold">[ROSTER_UPDATE]</span> Wilayah 12 mengonfirmasi kesiapan 14 petugas misa 08:30
          </div>
          <span class="text-[10px] text-slate-500">27 Sep 19:40</span>
        </div>
        <div class="pt-2 flex justify-between items-center text-slate-300">
          <div>
            <span class="text-slate-400 font-bold">[INITIAL_DRAFT]</span> Draf awal jadwal digenerate oleh Sistem
          </div>
          <span class="text-[10px] text-slate-500">25 Sep 09:00</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  // ----------------------------------------------------
  // PROJECT 2: MARKETPLACE SALES INTELLIGENCE (Screens 1 to 5)
  // ----------------------------------------------------
  {
    projectId: 'marketplace-sales-intelligence',
    screenId: 'screen-1',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">📊</div>
      <div>
        <h1 class="text-base font-bold text-white">Marketplace Sales Intelligence & Production Planning OS</h1>
        <p class="text-xs text-slate-400">Sentralisasi Analitik Multi-Channel: Shopee • Tokopedia • TikTok Shop • Lazada</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="px-3 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold">
        YTD 2026: Rp 2.45 Milyar GMV
      </div>
      <div class="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold text-xs shadow-lg">
        + Unggah Data Penjualan Baru
      </div>
    </div>
  </div>

  <div class="grid grid-cols-4 gap-4 my-4">
    <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 shadow-lg">
      <div class="text-xs font-medium text-slate-400">Total Volume Terjual (YoY)</div>
      <div class="text-2xl font-bold font-mono text-white mt-1">48,920 Pcs</div>
      <div class="text-[11px] text-emerald-400 font-medium mt-0.5">+24.8% Pertumbuhan vs 2025</div>
    </div>
    <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 shadow-lg">
      <div class="text-xs font-medium text-slate-400">Kanal Terbesar (GMV)</div>
      <div class="text-2xl font-bold font-mono text-orange-400 mt-1">Shopee 54%</div>
      <div class="text-[11px] text-slate-400 mt-0.5">Disusul Tokopedia (31%) & TikTok (15%)</div>
    </div>
    <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 shadow-lg">
      <div class="text-xs font-medium text-slate-400">Rencana Batch Produksi Q4</div>
      <div class="text-2xl font-bold font-mono text-emerald-400 mt-1">56,000 Pcs</div>
      <div class="text-[11px] text-emerald-400 mt-0.5">Safety Buffer: 15% Terhitung</div>
    </div>
    <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 shadow-lg">
      <div class="text-xs font-medium text-slate-400">Akurasi Peramalan Stok</div>
      <div class="text-2xl font-bold font-mono text-blue-400 mt-1">96.4%</div>
      <div class="text-[11px] text-slate-400 mt-0.5">Zero Stockout Rate</div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 flex-1">
    <div class="col-span-2 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <div class="flex justify-between items-center pb-2 border-b border-slate-700">
        <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider">
          Performa Penjualan Multi-Kanal Lintas Kuartal (2025 vs 2026)
        </h2>
        <span class="text-xs font-mono text-emerald-400 font-bold">+Rp 480 Juta YoY Growth</span>
      </div>
      <div class="h-32 flex items-end gap-4 pt-4 border-b border-slate-700/60 font-mono text-xs">
        <div class="flex-1 space-y-1 text-center">
          <div class="text-[10px] text-slate-400">Rp 420M</div>
          <div class="bg-blue-500 h-16 rounded-t w-full"></div>
          <div class="text-[11px] text-slate-300">Q1 2026</div>
        </div>
        <div class="flex-1 space-y-1 text-center">
          <div class="text-[10px] text-slate-400">Rp 580M</div>
          <div class="bg-blue-500 h-20 rounded-t w-full"></div>
          <div class="text-[11px] text-slate-300">Q2 2026</div>
        </div>
        <div class="flex-1 space-y-1 text-center">
          <div class="text-[10px] text-slate-400">Rp 710M</div>
          <div class="bg-blue-500 h-24 rounded-t w-full"></div>
          <div class="text-[11px] text-slate-300">Q3 2026</div>
        </div>
        <div class="flex-1 space-y-1 text-center">
          <div class="text-[10px] text-emerald-400 font-bold">Rp 740M (Est)</div>
          <div class="bg-emerald-500 h-28 rounded-t w-full"></div>
          <div class="text-[11px] text-emerald-400 font-bold">Q4 2026</div>
        </div>
      </div>
    </div>

    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
        Kontribusi Kategori
      </h2>
      <div class="space-y-2 text-xs font-mono pt-1">
        <div class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700">
          <div class="flex justify-between text-slate-300">
            <span>Desk Mat Leather</span>
            <span class="text-emerald-400 font-bold">42%</span>
          </div>
        </div>
        <div class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700">
          <div class="flex justify-between text-slate-300">
            <span>Mechanical Keycaps</span>
            <span class="text-blue-400 font-bold">34%</span>
          </div>
        </div>
        <div class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700">
          <div class="flex justify-between text-slate-300">
            <span>Coiled Aviator Cables</span>
            <span class="text-purple-400 font-bold">24%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'marketplace-sales-intelligence',
    screenId: 'screen-2',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">📈</div>
      <div>
        <h1 class="text-base font-bold text-white">Cross-Year (YoY) Growth & Seasonality Comparator</h1>
        <p class="text-xs text-slate-400">Analisis Komparatif Tren Penjualan 2024 vs 2025 vs 2026 per Kuartal</p>
      </div>
    </div>
    <div class="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
      Compound Growth Rate: +27.4%
    </div>
  </div>

  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg my-4 flex-1 flex flex-col justify-between">
    <div class="border border-slate-700 rounded-xl overflow-hidden text-xs">
      <table class="w-full text-left font-mono">
        <thead class="bg-slate-950 text-slate-400 text-[11px] border-b border-slate-700">
          <tr>
            <th class="p-3">PERIODE KUARTAL</th>
            <th class="p-3">GMV 2025</th>
            <th class="p-3">GMV 2026</th>
            <th class="p-3">DELTA PERTUMBUHAN (YoY)</th>
            <th class="p-3">FAKTOR PENDORONG UTAMA</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-700/60 text-slate-200">
          <tr class="bg-slate-900/50">
            <td class="p-3 font-bold text-white font-sans">Q1 (Jan - Mar)</td>
            <td class="p-3">Rp 354 Juta</td>
            <td class="p-3 font-bold text-white">Rp 420 Juta</td>
            <td class="p-3 text-emerald-400 font-bold">+18.6% ↑</td>
            <td class="p-3 font-sans text-slate-400">Peluncuran Varian Warna Baru di Shopee</td>
          </tr>
          <tr class="bg-slate-900/50">
            <td class="p-3 font-bold text-white font-sans">Q2 (Apr - Jun)</td>
            <td class="p-3">Rp 475 Juta</td>
            <td class="p-3 font-bold text-white">Rp 580 Juta</td>
            <td class="p-3 text-emerald-400 font-bold">+22.1% ↑</td>
            <td class="p-3 font-sans text-slate-400">Kampanye Ramadan & Bundle Pack Tokopedia</td>
          </tr>
          <tr class="bg-slate-900/50">
            <td class="p-3 font-bold text-white font-sans">Q3 (Jul - Sep)</td>
            <td class="p-3">Rp 540 Juta</td>
            <td class="p-3 font-bold text-white">Rp 710 Juta</td>
            <td class="p-3 text-emerald-400 font-bold">+31.5% ↑</td>
            <td class="p-3 font-sans text-slate-400">Eksplorasi Live Shopping di TikTok Shop</td>
          </tr>
          <tr class="bg-emerald-500/10">
            <td class="p-3 font-bold text-emerald-400 font-sans">Q4 Proyeksi (Okt - Des)</td>
            <td class="p-3 text-slate-400">Rp 585 Juta</td>
            <td class="p-3 font-bold text-emerald-400">Rp 740 Juta</td>
            <td class="p-3 text-emerald-400 font-bold">+26.5% (Est)</td>
            <td class="p-3 font-sans text-slate-300">Puncak Kampanye 11.11 & 12.12 Harbolnas</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-3.5 bg-slate-900/90 rounded-xl border border-slate-700 flex justify-between text-xs font-mono text-slate-400">
      <span>Insight: Seasonality tertinggi terjadi di Q4 dengan lonjakan order hingga 35% di atas rata-rata bulanan.</span>
      <span class="text-emerald-400 font-bold">Rekomendasi: Siapkan Stok Awal Q4</span>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'marketplace-sales-intelligence',
    screenId: 'screen-3',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">🏭</div>
      <div>
        <h1 class="text-base font-bold text-white">Production Batch Demand Calculator & Warehouse Planning</h1>
        <p class="text-xs text-slate-400">Estimasi Kuota Produksi Pabrik Berdasarkan Historical Run-Rate & Safety Stock</p>
      </div>
    </div>
    <div class="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs shadow-lg">
      ✓ Setujui Rencana Batch Pabrik
    </div>
  </div>

  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg my-4 flex-1 flex flex-col justify-between">
    <div class="border border-slate-700 rounded-xl overflow-hidden text-xs">
      <table class="w-full text-left font-mono">
        <thead class="bg-slate-950 text-slate-400 text-[11px] border-b border-slate-700">
          <tr>
            <th class="p-3">SERI PRODUK</th>
            <th class="p-3">RUN-RATE BULANAN</th>
            <th class="p-3">STOK GUDANG</th>
            <th class="p-3">SAFETY BUFFER (15%)</th>
            <th class="p-3">REKOMENDASI BATCH PRODUKSI</th>
            <th class="p-3">STATUS</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-700/60 text-slate-200">
          <tr>
            <td class="p-3 font-bold text-white font-sans">Desk Mat XL (900x400mm)</td>
            <td class="p-3">4,200 Pcs/bln</td>
            <td class="p-3 text-amber-400 font-bold">1,450 Pcs</td>
            <td class="p-3 text-slate-400">630 Pcs</td>
            <td class="p-3 font-bold text-emerald-400 text-sm">Batch 12,000 Pcs</td>
            <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">DISARANKAN</span></td>
          </tr>
          <tr>
            <td class="p-3 font-bold text-white font-sans">Custom Keycaps PBT Dye-Sub</td>
            <td class="p-3">2,800 Pcs/bln</td>
            <td class="p-3 text-emerald-400 font-bold">3,100 Pcs</td>
            <td class="p-3 text-slate-400">420 Pcs</td>
            <td class="p-3 font-bold text-blue-400 text-sm">Batch 6,000 Pcs</td>
            <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold">OPTIMAL</span></td>
          </tr>
          <tr>
            <td class="p-3 font-bold text-white font-sans">Coiled Cable Type-C Gold</td>
            <td class="p-3">1,600 Pcs/bln</td>
            <td class="p-3 text-red-400 font-bold">450 Pcs (Kritis)</td>
            <td class="p-3 text-slate-400">240 Pcs</td>
            <td class="p-3 font-bold text-amber-400 text-sm">Batch 5,000 Pcs</td>
            <td class="p-3"><span class="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-bold">PRIORITAS TINGGI</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-3.5 bg-slate-900/90 rounded-xl border border-slate-700 flex justify-between text-xs font-mono text-slate-400">
      <span>Rumus Kalkulasi: Order Qty = (Monthly RunRate &times; Lead Time Bulan) + Safety Stock &minus; Current Stock</span>
      <span class="text-emerald-400 font-bold">Estimasi Biaya Produksi: Terverifikasi</span>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'marketplace-sales-intelligence',
    screenId: 'screen-4',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">🏷️</div>
      <div>
        <h1 class="text-base font-bold text-white">SKU Performance & Margin Contribution Heatmap</h1>
        <p class="text-xs text-slate-400">Tingkat Perputaran Barang (Inventory Turnover) & Kontribusi Profit</p>
      </div>
    </div>
    <div class="px-3 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
      Top SKU Margin: 44.2%
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 my-4 flex-1">
    <div class="p-4 bg-slate-800/90 border border-slate-700/80 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
        <span class="text-[10px] font-mono text-emerald-400 uppercase font-bold">#1 REVENUE DRIVER</span>
        <h2 class="text-base font-bold text-white mt-1">Desk Mat Eco Leather Pro</h2>
        <div class="mt-3 space-y-2 text-xs font-mono">
          <div class="flex justify-between text-slate-300"><span>Gross Margin:</span><span class="text-emerald-400 font-bold">42.5%</span></div>
          <div class="flex justify-between text-slate-300"><span>Turnover Speed:</span><span class="text-white">12 Hari</span></div>
          <div class="flex justify-between text-slate-300"><span>Rating Pembeli:</span><span class="text-amber-400">★ 4.9 (4.2k ulasan)</span></div>
        </div>
      </div>
      <div class="p-2 bg-slate-900 rounded-lg text-[10px] font-mono text-slate-400 mt-2">Kanal Utama: Shopee & Tokopedia</div>
    </div>

    <div class="p-4 bg-slate-800/90 border border-slate-700/80 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
        <span class="text-[10px] font-mono text-blue-400 uppercase font-bold">#2 PROFIT MARGIN DRIVER</span>
        <h2 class="text-base font-bold text-white mt-1">Retro Botanical Keycaps Set</h2>
        <div class="mt-3 space-y-2 text-xs font-mono">
          <div class="flex justify-between text-slate-300"><span>Gross Margin:</span><span class="text-emerald-400 font-bold">48.2%</span></div>
          <div class="flex justify-between text-slate-300"><span>Turnover Speed:</span><span class="text-white">16 Hari</span></div>
          <div class="flex justify-between text-slate-300"><span>Rating Pembeli:</span><span class="text-amber-400">★ 4.9 (1.8k ulasan)</span></div>
        </div>
      </div>
      <div class="p-2 bg-slate-900 rounded-lg text-[10px] font-mono text-slate-400 mt-2">Kanal Utama: TikTok Shop Viral Item</div>
    </div>

    <div class="p-4 bg-slate-800/90 border border-slate-700/80 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
        <span class="text-[10px] font-mono text-purple-400 uppercase font-bold">#3 ACCESSORY BUNDLE</span>
        <h2 class="text-base font-bold text-white mt-1">Aviator Coiled Cable V2</h2>
        <div class="mt-3 space-y-2 text-xs font-mono">
          <div class="flex justify-between text-slate-300"><span>Gross Margin:</span><span class="text-emerald-400 font-bold">38.0%</span></div>
          <div class="flex justify-between text-slate-300"><span>Turnover Speed:</span><span class="text-white">19 Hari</span></div>
          <div class="flex justify-between text-slate-300"><span>Rating Pembeli:</span><span class="text-amber-400">★ 4.8 (950 ulasan)</span></div>
        </div>
      </div>
      <div class="p-2 bg-slate-900 rounded-lg text-[10px] font-mono text-slate-400 mt-2">Kanal Utama: Tokopedia Cross-Sell</div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'marketplace-sales-intelligence',
    screenId: 'screen-5',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">⚡</div>
      <div>
        <h1 class="text-base font-bold text-white">Multi-Marketplace Raw Data Ingestion & Parser</h1>
        <p class="text-xs text-slate-400">Normalisasi Otomatis Format Ekspor Pesanan Marketplace ke Standar Database</p>
      </div>
    </div>
    <div class="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
      ALL FEEDS NORMALIZED
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 my-4 flex-1">
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
        Dropzone Unggah Berkas
      </h2>
      <div class="p-6 border-2 border-dashed border-slate-600 rounded-xl bg-slate-900/60 text-center space-y-2">
        <div class="text-2xl">📥</div>
        <div class="text-xs font-bold text-white">Drag & Drop File Laporan Penjualan</div>
        <div class="text-[10px] text-slate-400">Mendukung .xlsx, .csv (Shopee, Tokopedia, TikTok)</div>
      </div>
      <div class="text-[11px] font-mono text-emerald-400">✓ Auto-Deduplication: Enabled</div>
    </div>

    <div class="col-span-2 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
        Status Normalisasi Berkas Transaksi Terbaru
      </h2>
      <div class="space-y-2 text-xs font-mono">
        <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex justify-between items-center">
          <div>
            <div class="font-bold text-white font-sans">Shopee_Report_2026_Q3_Official.xlsx</div>
            <div class="text-[10px] text-slate-400">18,420 Baris Data • 100% Normalized</div>
          </div>
          <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">INGESTED</span>
        </div>
        <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex justify-between items-center">
          <div>
            <div class="font-bold text-white font-sans">Tokopedia_Transactions_Q3_Complete.csv</div>
            <div class="text-[10px] text-slate-400">11,290 Baris Data • 100% Normalized</div>
          </div>
          <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">INGESTED</span>
        </div>
        <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex justify-between items-center">
          <div>
            <div class="font-bold text-white font-sans">TikTok_Shop_Settlement_Q3.xlsx</div>
            <div class="text-[10px] text-slate-400">6,180 Baris Data • 100% Normalized</div>
          </div>
          <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">INGESTED</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  // ----------------------------------------------------
  // PROJECT 3: ENTERPRISE HR & TALENT POOL (Screens 1 to 5)
  // ----------------------------------------------------
  {
    projectId: 'enterprise-hr-governance',
    screenId: 'screen-1',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">🏢</div>
      <div>
        <h1 class="text-base font-bold text-white">Enterprise HR Governance Portal & Spreadsheet Hub</h1>
        <p class="text-xs text-slate-400">Sentralisasi Kontrol Google Sheets Penilaian Kinerja Karyawan & Direktori Operasional</p>
      </div>
    </div>
    <div class="px-3.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xs font-mono font-bold">
      24 SPREADSHEETS MANAGED
    </div>
  </div>

  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg my-4 flex-1 flex flex-col justify-between">
    <div class="border border-slate-700 rounded-xl overflow-hidden text-xs">
      <table class="w-full text-left font-mono">
        <thead class="bg-slate-950 text-slate-400 text-[11px] border-b border-slate-700">
          <tr>
            <th class="p-3">NAMA SPREADSHEET OPERASIONAL</th>
            <th class="p-3">DEPARTEMEN</th>
            <th class="p-3">STAF AKTIF</th>
            <th class="p-3">STATUS FORMULA</th>
            <th class="p-3">HAK AKSES ROUTING</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-700/60 text-slate-200">
          <tr class="bg-indigo-500/10">
            <td class="p-3 font-bold text-white font-sans">Sheet_Penilaian_Kinerja_Karyawan_Q3_2026</td>
            <td class="p-3 font-sans">HR Dept</td>
            <td class="p-3">42 Karyawan</td>
            <td class="p-3 text-emerald-400 font-bold">🔒 100% LOCKED</td>
            <td class="p-3"><span class="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 text-[10px]">HR ONLY ACCESS</span></td>
          </tr>
          <tr>
            <td class="p-3 font-bold text-white font-sans">Master_Budget_Dan_Reimburse_Operasional</td>
            <td class="p-3 font-sans">Finance</td>
            <td class="p-3">18 Staf</td>
            <td class="p-3 text-emerald-400 font-bold">🔒 PROTECTED</td>
            <td class="p-3"><span class="px-2 py-0.5 rounded bg-slate-700 text-slate-300 text-[10px]">READ ONLY DEPT</span></td>
          </tr>
          <tr>
            <td class="p-3 font-bold text-white font-sans">Katalog_Aset_Dan_Inventaris_Kantor</td>
            <td class="p-3 font-sans">General Affair</td>
            <td class="p-3">25 Staf</td>
            <td class="p-3 text-emerald-400 font-bold">🔒 FORMULA SAFE</td>
            <td class="p-3"><span class="px-2 py-0.5 rounded bg-slate-700 text-slate-300 text-[10px]">EDIT ROW ACCESS</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-3.5 bg-slate-900/90 rounded-xl border border-slate-700 flex justify-between text-xs font-mono text-slate-400">
      <span>Fitur Proteksi: Mencegah penimpaan rumus KPI berbobot dan cell referensi silang secara manual oleh staf.</span>
      <span class="text-emerald-400 font-bold">Status: 0 Insiden Formula Rusak</span>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'enterprise-hr-governance',
    screenId: 'screen-2',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">🛡️</div>
      <div>
        <h1 class="text-base font-bold text-white">Performance Appraisal Protection Shield (KPI Calculation Matrix)</h1>
        <p class="text-xs text-slate-400">Struktur Pembobotan Skor Evaluasi: 60% Target Kinerja + 40% Core Competency</p>
      </div>
    </div>
    <div class="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
      FORMULA INTEGRITY: 100%
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 my-4 flex-1">
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
        Bobot Hasil KPI (60%)
      </h2>
      <div class="space-y-2 text-xs font-mono">
        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700">
          <div class="text-slate-400">Target Delivery Proyek: 25%</div>
          <div class="text-white font-bold mt-0.5">SLA Waktu & Akurasi</div>
        </div>
        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700">
          <div class="text-slate-400">Kualitas Output Teknis: 20%</div>
          <div class="text-white font-bold mt-0.5">Code Review & Documentation</div>
        </div>
        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700">
          <div class="text-slate-400">Efisiensi Proses: 15%</div>
          <div class="text-white font-bold mt-0.5">Otomasi Alur Kerja</div>
        </div>
      </div>
    </div>

    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
        Bobot Kompetensi (40%)
      </h2>
      <div class="space-y-2 text-xs font-mono">
        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700">
          <div class="text-slate-400">Kolaborasi & Komunikasi: 15%</div>
          <div class="text-white font-bold mt-0.5">Cross-Functional Sync</div>
        </div>
        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700">
          <div class="text-slate-400">Problem Solving: 15%</div>
          <div class="text-white font-bold mt-0.5">Inisiatif Solutif</div>
        </div>
        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700">
          <div class="text-slate-400">Integritas & Disiplin: 10%</div>
          <div class="text-white font-bold mt-0.5">Kepatuhan Prosedur HR</div>
        </div>
      </div>
    </div>

    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <div>
        <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
          Kalkulasi Final Terproteksi
        </h2>
        <div class="mt-3 p-3.5 bg-slate-900/90 rounded-xl border border-slate-700 space-y-2 text-xs font-mono">
          <div class="text-[10px] text-slate-400">RUMUS MATEMATIS OTOMATIS:</div>
          <div class="text-emerald-400 font-bold text-xs">Total = (Score_KPI &times; 0.6) + (Score_Comp &times; 0.4)</div>
          <div class="text-slate-300 pt-2 border-t border-slate-800">Status Sel: Read-Only via OAuth Token</div>
        </div>
      </div>
      <div class="text-[11px] font-mono text-slate-400 text-center">
        Otorisasi Perubahan: HR Manager Token
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'enterprise-hr-governance',
    screenId: 'screen-3',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">👥</div>
      <div>
        <h1 class="text-base font-bold text-white">Talent Pool Recruitment Pipeline (Kanban Tracker)</h1>
        <p class="text-xs text-slate-400">Monitoring Alur Rekrutmen Kandidat dari Screening CV hingga Offering</p>
      </div>
    </div>
    <div class="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      + Tambah Kandidat Baru
    </div>
  </div>

  <div class="grid grid-cols-4 gap-4 my-4 flex-1">
    <!-- Screening -->
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-lg space-y-3">
      <div class="flex justify-between items-center pb-2 border-b border-slate-700">
        <span class="text-xs font-bold font-mono text-slate-300">SCREENING CV (4)</span>
        <span class="text-[10px] font-mono text-slate-400">Tahap 1</span>
      </div>
      <div class="space-y-2 text-xs">
        <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 space-y-1">
          <div class="font-bold text-white">Budi Santoso</div>
          <div class="text-[11px] text-slate-400">Posisi: Frontend React</div>
          <div class="text-[10px] text-emerald-400 font-mono font-bold">Skor CV: 88/100</div>
        </div>
        <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 space-y-1">
          <div class="font-bold text-white">Rian Hidayat</div>
          <div class="text-[11px] text-slate-400">Posisi: Backend Node.js</div>
          <div class="text-[10px] text-emerald-400 font-mono font-bold">Skor CV: 82/100</div>
        </div>
      </div>
    </div>

    <!-- Tech Assessment -->
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-lg space-y-3">
      <div class="flex justify-between items-center pb-2 border-b border-slate-700">
        <span class="text-xs font-bold font-mono text-blue-400">TECH TEST (2)</span>
        <span class="text-[10px] font-mono text-slate-400">Tahap 2</span>
      </div>
      <div class="space-y-2 text-xs">
        <div class="p-3 bg-slate-900 rounded-xl border border-blue-500/40 space-y-1">
          <div class="font-bold text-white">Dimas Anggara</div>
          <div class="text-[11px] text-slate-400">Posisi: Full-Stack Dev</div>
          <div class="text-[10px] text-blue-400 font-mono font-bold">Coding Test: 92/100</div>
        </div>
      </div>
    </div>

    <!-- HR Interview -->
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-lg space-y-3">
      <div class="flex justify-between items-center pb-2 border-b border-slate-700">
        <span class="text-xs font-bold font-mono text-indigo-400">INTERVIEW (2)</span>
        <span class="text-[10px] font-mono text-slate-400">Tahap 3</span>
      </div>
      <div class="space-y-2 text-xs">
        <div class="p-3 bg-slate-900 rounded-xl border border-indigo-500/40 space-y-1">
          <div class="font-bold text-white">Siti Rahma</div>
          <div class="text-[11px] text-slate-400">Posisi: UI/UX Engineer</div>
          <div class="text-[10px] text-indigo-400 font-mono font-bold">Fit Score: 94% (Passed)</div>
        </div>
      </div>
    </div>

    <!-- Offering -->
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-lg space-y-3">
      <div class="flex justify-between items-center pb-2 border-b border-slate-700">
        <span class="text-xs font-bold font-mono text-emerald-400">OFFERING (1)</span>
        <span class="text-[10px] font-mono text-slate-400">Tahap Final</span>
      </div>
      <div class="space-y-2 text-xs">
        <div class="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/40 space-y-1">
          <div class="font-bold text-white">Kevin Pratama</div>
          <div class="text-[11px] text-slate-300">Posisi: Systems Engineer</div>
          <div class="text-[10px] text-emerald-400 font-mono font-bold">Offer Letter Staged</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'enterprise-hr-governance',
    screenId: 'screen-4',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">📝</div>
      <div>
        <h1 class="text-base font-bold text-white">Candidate Evaluation Rubric & Interview Feedback</h1>
        <p class="text-xs text-slate-400">Penilaian Terstruktur Berbasis Rubrik Kompetensi Teknis & Nilai Budaya Perusahaan</p>
      </div>
    </div>
    <div class="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
      RECOMMENDATION: HIRE
    </div>
  </div>

  <div class="grid grid-cols-3 gap-5 my-4 flex-1">
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
        Profil Kandidat
      </h2>
      <div class="space-y-2 text-xs">
        <div class="text-base font-bold text-white">Siti Rahma</div>
        <div class="text-slate-400">Posisi Dilamar: UI/UX & Frontend Engineer</div>
        <div class="text-slate-400">Pengalaman: 4+ Tahun di SaaS Product</div>
        <div class="pt-2 border-t border-slate-700 text-emerald-400 font-mono font-bold">Total Skor: 92/100 (Sangat Layak)</div>
      </div>
    </div>

    <div class="col-span-2 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
        Rubrik Penilaian Kompetensi
      </h2>
      <div class="space-y-2.5 text-xs font-mono">
        <div>
          <div class="flex justify-between mb-1 text-slate-300">
            <span>Frontend & Component Architecture</span>
            <span class="text-emerald-400 font-bold">95/100 (Mastery)</span>
          </div>
          <div class="w-full bg-slate-950 h-2 rounded-full overflow-hidden"><div class="bg-emerald-500 h-full w-[95%]"></div></div>
        </div>
        <div>
          <div class="flex justify-between mb-1 text-slate-300">
            <span>Design System & High-Density UX</span>
            <span class="text-emerald-400 font-bold">90/100 (Advanced)</span>
          </div>
          <div class="w-full bg-slate-950 h-2 rounded-full overflow-hidden"><div class="bg-emerald-500 h-full w-[90%]"></div></div>
        </div>
        <div>
          <div class="flex justify-between mb-1 text-slate-300">
            <span>Komunikasi & Culture Fit</span>
            <span class="text-emerald-400 font-bold">92/100 (Strong Alignment)</span>
          </div>
          <div class="w-full bg-slate-950 h-2 rounded-full overflow-hidden"><div class="bg-emerald-500 h-full w-[92%]"></div></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'enterprise-hr-governance',
    screenId: 'screen-5',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">⚙️</div>
      <div>
        <h1 class="text-base font-bold text-white">Enterprise Internal Tooling & Automation Health Hub</h1>
        <p class="text-xs text-slate-400">Satu Pintu Tautan Kerja Kantor & Pemantauan Kuota Harian Google Apps Script</p>
      </div>
    </div>
    <div class="px-3.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
      UPTIME: 99.9%
    </div>
  </div>

  <div class="grid grid-cols-2 gap-5 my-4 flex-1">
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
        Direktori Tautan Kerja Resmi
      </h2>
      <div class="space-y-2 text-xs">
        <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 flex justify-between items-center">
          <div>
            <div class="font-bold text-white">Portal Pengajuan Cuti & Izin HR</div>
            <div class="text-[10px] text-slate-400">Akses untuk seluruh 120+ karyawan</div>
          </div>
          <span class="text-emerald-400 font-bold font-mono text-xs">ONLINE</span>
        </div>
        <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 flex justify-between items-center">
          <div>
            <div class="font-bold text-white">Dashboard Monitoring Reimburse Finance</div>
            <div class="text-[10px] text-slate-400">Khusus approval Manager & Finance</div>
          </div>
          <span class="text-emerald-400 font-bold font-mono text-xs">ONLINE</span>
        </div>
      </div>
    </div>

    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
        Kesehatan Otomasi Apps Script
      </h2>
      <div class="space-y-3 text-xs font-mono">
        <div>
          <div class="flex justify-between mb-1 text-slate-300">
            <span>Trigger Executions Quota</span>
            <span class="text-emerald-400 font-bold">34% (Aman)</span>
          </div>
          <div class="w-full bg-slate-950 h-2 rounded-full overflow-hidden"><div class="bg-indigo-500 h-full w-[34%]"></div></div>
        </div>
        <div>
          <div class="flex justify-between mb-1 text-slate-300">
            <span>Mail App Daily Limit</span>
            <span class="text-emerald-400 font-bold">18% (Aman)</span>
          </div>
          <div class="w-full bg-slate-950 h-2 rounded-full overflow-hidden"><div class="bg-emerald-500 h-full w-[18%]"></div></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  // ----------------------------------------------------
  // PROJECT 4: METHODOLOGYIQ (Screens 1 to 5)
  // ----------------------------------------------------
  {
    projectId: 'methodology-iq',
    screenId: 'screen-1',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">🧭</div>
      <div>
        <h1 class="text-base font-bold text-white">MethodologyIQ — Software Decision Support System</h1>
        <p class="text-xs text-slate-400">Instrumen Evaluasi Metodologi Proyek Berbasis Model Riset Empiris Thesing et al. (2021)</p>
      </div>
    </div>
    <div class="px-3.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
      RESEARCH-BACKED
    </div>
  </div>

  <div class="grid grid-cols-3 gap-5 my-4 flex-1">
    <div class="col-span-2 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-4">
      <div class="flex justify-between items-center pb-2 border-b border-slate-700">
        <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider">
          Visualisasi Skor Komparatif Metodologi
        </h2>
        <span class="text-emerald-400 font-mono text-xs font-bold">Agile Scrum: 78% Match</span>
      </div>
      <div class="space-y-3 text-xs font-mono pt-1">
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-white font-bold font-sans">Agile Scrum Framework</span>
            <span class="text-emerald-400 font-bold">78% Match (Rekomendasi Utama)</span>
          </div>
          <div class="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div class="bg-emerald-500 h-full rounded-full w-[78%]"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-white font-bold font-sans">Hybrid Stage-Gate & Sprint</span>
            <span class="text-blue-400 font-bold">62% Match</span>
          </div>
          <div class="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div class="bg-blue-500 h-full rounded-full w-[62%]"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-white font-bold font-sans">Traditional Waterfall (Sequential)</span>
            <span class="text-indigo-400 font-bold">35% Match</span>
          </div>
          <div class="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div class="bg-indigo-500 h-full rounded-full w-[35%]"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <div>
        <h2 class="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-700">
          Ringkasan Evaluasi
        </h2>
        <div class="mt-3 space-y-2 text-xs">
          <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400 font-mono">Dinamika Kebutuhan</div>
            <div class="font-bold text-white mt-0.5">Tinggi (Perubahan Sering)</div>
          </div>
          <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400 font-mono">Otonomi Tim Pengembang</div>
            <div class="font-bold text-emerald-400 mt-0.5">Tinggi (Self-Organizing)</div>
          </div>
        </div>
      </div>
      <div class="text-[11px] font-mono text-slate-400 text-center">
        15 Kriteria Berbobot
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'methodology-iq',
    screenId: 'screen-2',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-lg">🚪</div>
      <div>
        <h1 class="text-base font-bold text-white">Step 1: Knockout Elimination Gate (Penyaringan Mutlak)</h1>
        <p class="text-xs text-slate-400">Pengecekan Kendala Keras (Hard Constraints) Regulasi & Kontrak Sebelum Pembobotan</p>
      </div>
    </div>
    <div class="px-3.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
      GATE CLEARED (AGILE ELIGIBLE)
    </div>
  </div>

  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg my-4 flex-1 space-y-3">
    <div class="space-y-2 text-xs font-mono">
      <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex justify-between items-center">
        <div>
          <div class="font-bold text-white font-sans">1. Apakah proyek adalah sistem keselamatan kritis (Safety-Critical / Medis / Otomotif)?</div>
          <div class="text-[10px] text-slate-400">Jika ya, waterfall/V-model diwajibkan oleh regulasi keselamatan.</div>
        </div>
        <span class="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">TIDAK (LOLOS)</span>
      </div>
      <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex justify-between items-center">
        <div>
          <div class="font-bold text-white font-sans">2. Apakah kontrak kerja mewajibkan dokumen spesifikasi terkunci dengan harga pasti (Fixed Price)?</div>
          <div class="text-[10px] text-slate-400">Jika ya, mengharuskan pendekatan terstruktur atau hybrid dengan scope freeze.</div>
        </div>
        <span class="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">TIDAK (LOLOS)</span>
      </div>
      <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex justify-between items-center">
        <div>
          <div class="font-bold text-white font-sans">3. Apakah rilis sistem harus serentak tunggal tanpa kemungkinan iterasi parsial?</div>
          <div class="text-[10px] text-slate-400">Jika ya, mengeliminasi penerapan sprint rilis inkremental murni.</div>
        </div>
        <span class="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">TIDAK (LOLOS)</span>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'methodology-iq',
    screenId: 'screen-3',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">🎛️</div>
      <div>
        <h1 class="text-base font-bold text-white">Step 2: 15-Factor Multi-Criteria Scoring Panel</h1>
        <p class="text-xs text-slate-400">Pembobotan Dinamis pada 5 Dimensi Rekayasa Perangkat Lunak</p>
      </div>
    </div>
    <div class="px-3.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold">
      WEIGHTS CALIBRATED
    </div>
  </div>

  <div class="grid grid-cols-2 gap-4 my-4 flex-1 text-xs">
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-lg space-y-2">
      <div class="font-bold text-white">1. Fleksibilitas Lingkup Kebutuhan (Scope Dynamism)</div>
      <div class="text-[10px] text-slate-400">Tingkat perubahan requirement selama siklus pengembangan.</div>
      <div class="p-2 bg-slate-900 rounded font-mono text-emerald-400 font-bold">Nilai: 85/100 (Tinggi)</div>
    </div>
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-lg space-y-2">
      <div class="font-bold text-white">2. Keterlibatan Pengguna & Pemangku Kepentingan</div>
      <div class="text-[10px] text-slate-400">Frekuensi umpan balik dan ketersediaan Product Owner.</div>
      <div class="p-2 bg-slate-900 rounded font-mono text-emerald-400 font-bold">Nilai: 90/100 (Sangat Aktif)</div>
    </div>
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-lg space-y-2">
      <div class="font-bold text-white">3. Otonomi & Kematangan Tim (Team Maturity)</div>
      <div class="text-[10px] text-slate-400">Kapasitas tim untuk self-organizing dan cross-functional.</div>
      <div class="p-2 bg-slate-900 rounded font-mono text-blue-400 font-bold">Nilai: 80/100 (Mandiri)</div>
    </div>
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-lg space-y-2">
      <div class="font-bold text-white">4. Kesiapan Infrastruktur CI/CD & Testing</div>
      <div class="text-[10px] text-slate-400">Otomasi deployment dan uji regresi berkelanjutan.</div>
      <div class="p-2 bg-slate-900 rounded font-mono text-emerald-400 font-bold">Nilai: 75/100 (Siap)</div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'methodology-iq',
    screenId: 'screen-4',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">💡</div>
      <div>
        <h1 class="text-base font-bold text-white">Industry Scenario Simulation Presets (1-Klik)</h1>
        <p class="text-xs text-slate-400">Template Penilaian Cepat Sesuai Karakteristik Sektor Industri</p>
      </div>
    </div>
    <div class="px-3.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-mono font-bold">
      3 PRESETS READY
    </div>
  </div>

  <div class="grid grid-cols-3 gap-5 my-4 flex-1">
    <div class="p-4 bg-slate-800/90 border border-slate-700/80 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
        <span class="text-[10px] font-mono text-slate-400 uppercase font-bold">SKENARIO 1</span>
        <h2 class="text-sm font-bold text-white mt-1">Fintech & Core Banking</h2>
        <p class="text-xs text-slate-400 mt-1 leading-relaxed">Karakter: Kepatuhan regulasi BI/OJK ketat, audit trail wajib, zero tolerance kegagalan transaksi.</p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded-xl font-mono text-xs text-blue-400 font-bold mt-2">
        Rekomendasi: Hybrid Stage-Gate
      </div>
    </div>

    <div class="p-4 bg-slate-800/90 border border-amber-500/40 rounded-2xl shadow-lg flex flex-col justify-between bg-amber-500/5">
      <div>
        <span class="text-[10px] font-mono text-amber-400 uppercase font-bold">SKENARIO 2 (AKTIF)</span>
        <h2 class="text-sm font-bold text-white mt-1">E-Commerce & Consumer MVP</h2>
        <p class="text-xs text-slate-300 mt-1 leading-relaxed">Karakter: Kecepatan time-to-market krusial, iterasi fitur berbasis data riil pengguna, sprint 2 mingguan.</p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded-xl font-mono text-xs text-emerald-400 font-bold mt-2">
        Rekomendasi: Agile Scrum Murni
      </div>
    </div>

    <div class="p-4 bg-slate-800/90 border border-slate-700/80 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
        <span class="text-[10px] font-mono text-slate-400 uppercase font-bold">SKENARIO 3</span>
        <h2 class="text-sm font-bold text-white mt-1">Smart Hardware IoT & Embedded</h2>
        <p class="text-xs text-slate-400 mt-1 leading-relaxed">Karakter: Fabrikasi PCB bertahap sequential, firmware iteratif dengan over-the-air update.</p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded-xl font-mono text-xs text-purple-400 font-bold mt-2">
        Rekomendasi: V-Model / Dual-Track
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    projectId: 'methodology-iq',
    screenId: 'screen-5',
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; } .font-mono { font-family: 'JetBrains Mono', monospace; }</style>
</head>
<body class="bg-slate-900 text-slate-100 p-6 min-h-screen flex flex-col justify-between">
  <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">📑</div>
      <div>
        <h1 class="text-base font-bold text-white">Executive Recommendation & Risk Assessment Report</h1>
        <p class="text-xs text-slate-400">Ringkasan Keputusan Metodologi & Matriks Mitigasi Risiko Tim Pengembang</p>
      </div>
    </div>
    <div class="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs shadow-lg">
      Unduh Laporan Konsensus (PDF)
    </div>
  </div>

  <div class="grid grid-cols-2 gap-5 my-4 flex-1 text-xs">
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider pb-2 border-b border-slate-700">
        ✓ Rekomendasi Utama: Agile Scrum (78% Kecocokan)
      </h2>
      <div class="text-slate-300 space-y-2 leading-relaxed">
        <p>• Siklus Sprint: 2 Minggu per rilis inkremental.</p>
        <p>• Product Owner: Didedikasikan penuh untuk backlog grooming mingguan.</p>
        <p>• Keuntungan: Mengurangi risiko membangun fitur yang tidak terpakai pengguna sebesar 65%.</p>
      </div>
    </div>

    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg space-y-3">
      <h2 class="text-xs font-bold font-mono text-amber-400 uppercase tracking-wider pb-2 border-b border-slate-700">
        ⚠️ Identifikasi Risiko & Tindakan Mitigasi
      </h2>
      <div class="text-slate-300 space-y-2 leading-relaxed font-mono">
        <div class="p-2.5 bg-slate-900 rounded-lg">
          <div class="text-amber-400 font-bold">Risiko: Scope Creep Tak Terkendali</div>
          <div class="text-slate-400 text-[11px] mt-0.5">Mitigasi: Terapkan Definition of Done (DoD) ketat tiap sprint.</div>
        </div>
        <div class="p-2.5 bg-slate-900 rounded-lg">
          <div class="text-amber-400 font-bold">Risiko: Dokumentasi Tertinggal</div>
          <div class="text-slate-400 text-[11px] mt-0.5">Mitigasi: Otomasi API docs & ADR (Architectural Decision Records).</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  }
];

async function captureScreenshots() {
  console.log('🚀 Starting Chromium screenshot generation...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  for (let i = 0; i < TEMPLATES.length; i++) {
    const item = TEMPLATES[i];
    const targetDir = path.join(publicDir, item.projectId);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const outputPath = path.join(targetDir, `${item.screenId}.png`);

    console.log(`[${i + 1}/${TEMPLATES.length}] Capturing ${item.projectId} -> ${item.screenId}.png...`);
    await page.setContent(item.html, { waitUntil: 'domcontentloaded', timeout: 10000 });
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: outputPath, type: 'png' });
  }

  await browser.close();
  console.log('✅ All 20 high-resolution screenshots generated successfully!');
}

captureScreenshots().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
