import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  FileSpreadsheet, 
  Users, 
  ShieldCheck, 
  Printer, 
  Send, 
  Lock
} from 'lucide-react';

interface Props {
  projectId: string;
  uiTheme: 'emerald' | 'blue' | 'indigo' | 'amber';
}

interface ScreenTab {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
}

const SCREENS_BY_PROJECT: Record<string, ScreenTab[]> = {
  'community-scheduling': [
    { id: 'calendar', title: '1. Matriks Kalender Penugasan', subtitle: 'Slot Grid & Auto-Suggest Petugas', badge: 'Main Calendar' },
    { id: 'validator', title: '2. Zero-Conflict Validator', subtitle: 'Pencegahan Bentrok 3 Lapis', badge: 'Safety Engine' },
    { id: 'workload', title: '3. Pemerataan 35 Wilayah', subtitle: 'Analitik Proporsi Beban Pelayanan', badge: 'Fair-Share' },
    { id: 'broadcast', title: '4. Generator Warta & WhatsApp', subtitle: 'Publikasi Otomatis 1-Klik', badge: 'Publishing' },
    { id: 'audit', title: '5. Audit & Penguncian Resmi', subtitle: 'Role-Based Finalization Lock', badge: 'Governance' },
  ],
  'marketplace-sales-intelligence': [
    { id: 'executive', title: '1. Executive Sales Overview', subtitle: 'Agregasi GMV & Pertumbuhan YoY', badge: 'Executive' },
    { id: 'yoy-trends', title: '2. Tren Komparasi Lintas Tahun', subtitle: 'Analisis Musiman & Run-Rate', badge: 'YoY Analytics' },
    { id: 'production', title: '3. Estimasi Produksi & Stok', subtitle: 'Kalkulator Kebutuhan Batch Pabrik', badge: 'Forecasting' },
    { id: 'categories', title: '4. Performa Kategori & SKU', subtitle: 'Tingkat Perputaran Produk', badge: 'Product Margin' },
    { id: 'ingestion', title: '5. Ingestion Multi-Marketplace', subtitle: 'Shopee, Tokopedia, TikTok Parser', badge: 'Data Pipeline' },
  ],
  'enterprise-hr-governance': [
    { id: 'registry', title: '1. Katalog Google Sheets HR', subtitle: 'Monitoring Seluruh Sheet Aktif', badge: 'Central Registry' },
    { id: 'appraisal', title: '2. Penilaian Kinerja Karyawan', subtitle: 'Formula & KPI Protection Shield', badge: 'Formula Lock' },
    { id: 'talent-pipeline', title: '3. Talent Pool Kanban Board', subtitle: 'Screening hingga Tahap Offering', badge: 'Recruitment' },
    { id: 'candidate-score', title: '4. Lembar Penilaian Kandidat', subtitle: 'Rubrik Interview & Fit Scoring', badge: 'Evaluation' },
    { id: 'tooling-hub', title: '5. Hub Navigasi Alat Kantor', subtitle: 'Satu Pintu Akses Program Internal', badge: 'Operations' },
  ],
  'methodology-iq': [
    { id: 'radar', title: '1. Radar Proyeksi Metodologi', subtitle: 'Visualisasi Waterfall vs Agile vs Hybrid', badge: 'Dynamic Radar' },
    { id: 'knockout', title: '2. Filter Eliminasi Mutlak', subtitle: 'Penyaringan Batasan Regulasi', badge: 'Stage 1 Gate' },
    { id: 'weights', title: '3. Pembobotan 15+ Kriteria', subtitle: 'Slider Parameter Fleksibilitas & Tim', badge: 'Multi-Criteria' },
    { id: 'scenarios', title: '4. Simulasi Skenario Industri', subtitle: 'Fintech vs E-Commerce vs IoT', badge: 'Presets' },
    { id: 'report', title: '5. Matriks Rekomendasi & Risiko', subtitle: 'Ringkasan Konsensus Tim', badge: 'Executive Report' },
  ]
};

export const ProjectMultiScreenGallery: React.FC<Props> = ({ projectId, uiTheme }) => {
  const screens = SCREENS_BY_PROJECT[projectId] || SCREENS_BY_PROJECT['community-scheduling'];
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const activeScreen = screens[activeScreenIndex];

  const getThemeColor = () => {
    switch (uiTheme) {
      case 'emerald': return 'border-emerald-600 text-emerald-700 bg-emerald-50';
      case 'blue': return 'border-blue-600 text-blue-700 bg-blue-50';
      case 'indigo': return 'border-indigo-600 text-indigo-700 bg-indigo-50';
      case 'amber': return 'border-amber-600 text-amber-700 bg-amber-50';
    }
  };

  return (
    <div className="my-8 rounded-2xl bg-slate-900/5 p-3 ring-1 ring-slate-200/90 shadow-diffusion overflow-hidden">
      <div className="rounded-xl bg-white border border-slate-200 overflow-hidden font-sans">
        
        {/* Gallery Top Navigation: 5 Screen Tabs */}
        <div className="bg-slate-100/90 border-b border-slate-200 p-2 sm:p-2.5">
          <div className="flex items-center justify-between gap-2 mb-2 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="text-xs font-mono text-slate-500 font-semibold ml-1">
                Tampilan Layar & Modul Sistem (5 Layar Interaktif)
              </span>
            </div>
            <div className="text-[11px] font-mono font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
              Layar {activeScreenIndex + 1} dari 5
            </div>
          </div>

          {/* Interactive Screen Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
            {screens.map((screen, idx) => {
              const isActive = idx === activeScreenIndex;
              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`text-left p-2 rounded-lg border transition-all text-xs ${
                    isActive 
                      ? `bg-white shadow-subtle font-bold text-slate-900 ${getThemeColor()} border-l-4` 
                      : 'bg-slate-50/70 border-slate-200/70 text-slate-600 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  <div className="text-[11px] truncate font-medium">{screen.title}</div>
                  <div className="text-[9px] text-slate-400 truncate mt-0.5">{screen.subtitle}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mock Viewport Body */}
        <div className="p-4 sm:p-6 bg-slate-50/50 min-h-[360px]">
          
          {/* ======================================================== */}
          {/* 1. COMMUNITY LITURGY & RESOURCE PLANNING SCREENS (1-5) */}
          {/* ======================================================== */}
          {projectId === 'community-scheduling' && (
            <div className="space-y-4">
              
              {/* Screen 1: Calendar Slot Grid */}
              {activeScreen.id === 'calendar' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Matriks Penugasan Misa Mingguan (Bulan Oktober 2026)</div>
                        <div className="text-[10px] text-slate-500">4 Sesi Misa / Minggu • 35 Kelompok Wilayah Aktif</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                      35/35 SLOTS FILLED
                    </span>
                  </div>

                  <div className="border border-slate-200 rounded-xl overflow-hidden bg-white text-xs">
                    <div className="bg-slate-100 px-3.5 py-2 font-semibold text-slate-700 border-b border-slate-200 flex justify-between">
                      <span>JADWAL MISA</span>
                      <span>WILAYAH PENANGGUNG JAWAB</span>
                      <span>PETUGAS TATA TERTIB & LITURGI</span>
                      <span>STATUS</span>
                    </div>
                    <div className="divide-y divide-slate-100 font-mono text-xs">
                      <div className="p-3 flex items-center justify-between">
                        <div className="font-bold text-slate-900">Minggu I (06:00 WIB)</div>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[11px] font-sans">Wilayah 01 (St. Petrus)</span>
                        <div className="text-[11px] font-sans text-slate-600">12 Petugas + Koor Wilayah</div>
                        <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Siap
                        </span>
                      </div>
                      <div className="p-3 flex items-center justify-between">
                        <div className="font-bold text-slate-900">Minggu I (08:30 WIB)</div>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[11px] font-sans">Wilayah 09 (St. Maria)</span>
                        <div className="text-[11px] font-sans text-slate-600">14 Petugas + Koor Wilayah</div>
                        <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Siap
                        </span>
                      </div>
                      <div className="p-3 flex items-center justify-between bg-emerald-50/20">
                        <div className="font-bold text-slate-900">Minggu I (17:00 WIB)</div>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[11px] font-sans">Wilayah 22 (St. Yohanes)</span>
                        <div className="text-[11px] font-sans text-slate-600">10 Petugas + Koor Wilayah</div>
                        <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Siap
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 2: Validator Engine */}
              {activeScreen.id === 'validator' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Status Mesin Validasi Zero-Conflict (3 Lapis Pemeriksaan)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-xs">
                      <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200">
                        <div className="font-bold text-emerald-900 text-[11px]">Layer 1: Bentrok Jam & Sesi</div>
                        <div className="text-[10px] text-emerald-700 mt-1">Memeriksa 0 overlap antar petugas di waktu misa bersamaan.</div>
                        <div className="font-mono text-xs font-bold text-emerald-800 mt-2">✓ 0 Konflik Terdeteksi</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200">
                        <div className="font-bold text-emerald-900 text-[11px]">Layer 2: Tim Koor vs Individu</div>
                        <div className="text-[10px] text-emerald-700 mt-1">Mencegah anggota koor ditugaskan lector/tatib pada hari yang sama.</div>
                        <div className="font-mono text-xs font-bold text-emerald-800 mt-2">✓ 100% Terverifikasi</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200">
                        <div className="font-bold text-emerald-900 text-[11px]">Layer 3: Jeda Istirahat Wajib</div>
                        <div className="text-[10px] text-emerald-700 mt-1">Menjamin interval minimal 2 minggu sebelum giliran tugas berikutnya.</div>
                        <div className="font-mono text-xs font-bold text-emerald-800 mt-2">✓ Fair Cooldown Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 3: Workload Fair-Share */}
              {activeScreen.id === 'workload' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs font-bold text-slate-900">Distribusi Beban Pelayanan 35 Wilayah (Tahun Berjalan)</div>
                      <span className="text-[11px] font-mono text-slate-500">Rata-rata: 4.2x tugas/wilayah</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="font-medium text-slate-700">Wilayah 01 - 10 (Sektor Barat)</span>
                          <span className="font-mono font-bold text-slate-900">4x Penugasan</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-600 h-full w-[85%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="font-medium text-slate-700">Wilayah 11 - 20 (Sektor Timur)</span>
                          <span className="font-mono font-bold text-slate-900">4x Penugasan</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-600 h-full w-[85%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="font-medium text-slate-700">Wilayah 21 - 35 (Sektor Selatan & Utara)</span>
                          <span className="font-mono font-bold text-slate-900">5x Penugasan (Hari Raya)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[100%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 4: 1-Click Broadcast Studio */}
              {activeScreen.id === 'broadcast' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                        <Printer className="w-4 h-4 text-emerald-600" />
                        Format Lembar Cetak Warta Resmi (PDF A4)
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded border border-slate-200 font-mono text-[10px] text-slate-600 space-y-1">
                        <div className="font-bold text-slate-900 text-center pb-1 border-b border-slate-200">
                          JADWAL PETUGAS LITURGI OKTOBER 2026
                        </div>
                        <div>• Misa 06:00 : Wilayah 03 (St. Thomas)</div>
                        <div>• Misa 08:30 : Wilayah 14 (St. Laurensius)</div>
                        <div>• Misa 17:00 : Wilayah 28 (St. Fransiskus)</div>
                        <div className="text-emerald-700 font-bold mt-1">[Download PDF Siap Cetak]</div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                        <Send className="w-4 h-4 text-emerald-600" />
                        Pesan Siaran WhatsApp Koordinator
                      </div>
                      <div className="bg-emerald-50/40 p-2.5 rounded border border-emerald-200 font-mono text-[10px] text-slate-700 space-y-1">
                        <div className="font-bold text-emerald-900">*Pemberitahuan Tugas Misa Wilayah*</div>
                        <div>Halo Koor Wilayah 03, jadwal bertugas Anda adalah pada Minggu, 5 Okt 2026 (06.00 WIB).</div>
                        <div>Mohon konfirmasi kehadiran 12 petugas. Terima kasih.</div>
                        <div className="text-emerald-800 font-bold mt-1">[Salin Format Pesan WhatsApp]</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 5: Audit & Finalization Lock */}
              {activeScreen.id === 'audit' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-bold text-slate-900">Status Penguncian Jadwal Resmi (Official Lock)</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-200">
                        LOCKED BY SECRETARIAT
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Jadwal yang telah difinalisasi dikunci dalam mode read-only untuk mencegah perubahan tidak disengaja oleh staf penjadwal.
                    </p>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600 flex justify-between">
                      <span>Audit Hash: #SCH-2026-OCT-8821</span>
                      <span>Disahkan: 28 Sep 2026 • 14:30 WIB</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ======================================================== */}
          {/* 2. MARKETPLACE SALES INTELLIGENCE SCREENS (1-5) */}
          {/* ======================================================== */}
          {projectId === 'marketplace-sales-intelligence' && (
            <div className="space-y-4">
              
              {/* Screen 1: Executive Overview */}
              {activeScreen.id === 'executive' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <div className="text-[11px] text-slate-500 font-medium">Total Volume Terjual Lintas Kanal</div>
                      <div className="text-lg font-mono font-bold text-slate-900 mt-1">42,890 Items</div>
                      <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">+24.8% YoY Growth</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <div className="text-[11px] text-slate-500 font-medium">Kanal Kontribusi Terbesar</div>
                      <div className="text-lg font-mono font-bold text-blue-600 mt-1">Shopee (54%)</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Disusul Tokopedia (31%) & TikTok (15%)</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <div className="text-[11px] text-slate-500 font-medium">Status Rencana Suplai Produksi</div>
                      <div className="text-lg font-mono font-bold text-emerald-600 mt-1">Batch Q4 Terjadwal</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Estimasi kebutuhan: 50,000 Pcs</div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-2">Ringkasan Tren Penjualan Bulanan (Agregasi Seluruh Marketplace)</div>
                    <div className="h-16 flex items-end gap-2 pt-2 border-b border-slate-100">
                      <div className="flex-1 bg-blue-100 h-[40%] rounded-t text-center text-[9px] text-slate-500">Q1</div>
                      <div className="flex-1 bg-blue-200 h-[60%] rounded-t text-center text-[9px] text-slate-500">Q2</div>
                      <div className="flex-1 bg-blue-400 h-[80%] rounded-t text-center text-[9px] text-slate-600">Q3</div>
                      <div className="flex-1 bg-blue-600 h-[100%] rounded-t text-center text-[9px] text-white font-bold">Q4 (Peak)</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 2: Cross-Year YoY Comparator */}
              {activeScreen.id === 'yoy-trends' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-2">Komparasi Performa Penjualan 2025 vs 2026 (YoY Growth by Quarter)</div>
                    <div className="space-y-2.5 text-xs">
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-slate-700">Q1 Penjualan (Jan - Mar)</span>
                          <span className="font-mono text-emerald-700 font-bold">+18.5% YoY (Rp 420M vs Rp 354M)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full w-[65%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-slate-700">Q2 Penjualan (Apr - Jun)</span>
                          <span className="font-mono text-emerald-700 font-bold">+22.1% YoY (Rp 580M vs Rp 475M)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full w-[78%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-slate-700">Q3 Penjualan (Jul - Sep)</span>
                          <span className="font-mono text-emerald-700 font-bold">+31.4% YoY (Rp 710M vs Rp 540M)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full w-[92%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 3: Production Batch Estimator */}
              {activeScreen.id === 'production' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs font-bold text-slate-900">Kalkulator Rencana Produksi & Kuota Stok Gudang (Safety Buffer: 15%)</div>
                      <span className="text-[10px] font-mono text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        FORECAST ACTIVE
                      </span>
                    </div>
                    <div className="border border-slate-200 rounded-lg overflow-hidden text-xs">
                      <div className="bg-slate-100 px-3 py-1.5 font-semibold text-slate-700 border-b border-slate-200 flex justify-between">
                        <span>SERI PRODUK / KATEGORI</span>
                        <span>HISTORICAL RUN-RATE</span>
                        <span>STOK SAAT INI</span>
                        <span>REKOMENDASI BATCH PRODUKSI</span>
                      </div>
                      <div className="divide-y divide-slate-100 font-mono text-xs">
                        <div className="p-2.5 flex items-center justify-between">
                          <span className="font-bold text-slate-900 font-sans">Desk Mat Leather Series</span>
                          <span className="text-slate-600">3,400 pcs/bln</span>
                          <span className="text-amber-700 font-semibold">1,200 pcs (Low)</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold font-sans">
                            Produksi 8,000 Pcs
                          </span>
                        </div>
                        <div className="p-2.5 flex items-center justify-between">
                          <span className="font-bold text-slate-900 font-sans">Coiled Cable Aviator</span>
                          <span className="text-slate-600">1,800 pcs/bln</span>
                          <span className="text-slate-600">2,500 pcs (Aman)</span>
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-bold font-sans">
                            Produksi 3,500 Pcs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 4: Categories & SKU Margin */}
              {activeScreen.id === 'categories' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-2">Matriks Kontribusi Margin & Perputaran Produk (SKU Ranking)</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="font-semibold text-slate-800">Top Revenue Driver: Keycaps Set</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Margin Kontribusi: 42% • Turnover: 18 Hari</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="font-semibold text-slate-800">Top Volume Driver: Desk Mat</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Margin Kontribusi: 36% • Turnover: 12 Hari</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 5: Multi-Marketplace Ingestion */}
              {activeScreen.id === 'ingestion' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-2">Status Normalisasi File Unggahan Marketplace</div>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <div>
                          <span className="font-bold text-slate-900 font-sans">Shopee_Orders_2026_Q3.xlsx</span>
                          <span className="text-[10px] text-slate-500 ml-2">18,420 Baris Transaksi</span>
                        </div>
                        <span className="text-emerald-700 font-bold text-[11px] font-sans">✓ Terunggah & Dinormalisasi</span>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <div>
                          <span className="font-bold text-slate-900 font-sans">Tokopedia_Sales_2026_Q3.csv</span>
                          <span className="text-[10px] text-slate-500 ml-2">11,290 Baris Transaksi</span>
                        </div>
                        <span className="text-emerald-700 font-bold text-[11px] font-sans">✓ Terunggah & Dinormalisasi</span>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <div>
                          <span className="font-bold text-slate-900 font-sans">TikTokShop_Report_2026_Q3.xlsx</span>
                          <span className="text-[10px] text-slate-500 ml-2">6,180 Baris Transaksi</span>
                        </div>
                        <span className="text-emerald-700 font-bold text-[11px] font-sans">✓ Terunggah & Dinormalisasi</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ======================================================== */}
          {/* 3. ENTERPRISE HR & TALENT POOL SCREENS (1-5) */}
          {/* ======================================================== */}
          {projectId === 'enterprise-hr-governance' && (
            <div className="space-y-4">
              
              {/* Screen 1: Sheets Registry */}
              {activeScreen.id === 'registry' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs font-bold text-slate-900">Katalog Sentral Google Sheets & Lembar Kerja Perusahaan</div>
                      <span className="text-[10px] font-mono text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                        24 SPREADSHEETS INDEXED
                      </span>
                    </div>
                    <div className="divide-y divide-slate-100 text-xs font-mono">
                      <div className="py-2 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-slate-900 font-sans">Sheet_Penilaian_Kinerja_Karyawan_2026</div>
                          <div className="text-[10px] text-slate-500 font-sans">HR Dept • 42 Staf Terdaftar</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold font-sans">
                          FORMULA SAFE
                        </span>
                      </div>
                      <div className="py-2 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-slate-900 font-sans">Master_Budget_Departemen_Operasional</div>
                          <div className="text-[10px] text-slate-500 font-sans">Finance • Read-Only Routing</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-sans font-medium">
                          RESTRICTED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 2: Performance Appraisal */}
              {activeScreen.id === 'appraisal' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                        <FileSpreadsheet className="w-4 h-4 text-indigo-600" />
                        Detail Proteksi Lembar Penilaian Kinerja Karyawan (KPI Matrix)
                      </div>
                      <span className="text-xs font-mono text-emerald-700 font-bold">100% Locked Formula</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="p-2 rounded bg-slate-50 border border-slate-200">
                        <div className="text-[10px] text-slate-500">Komponen Bobot KPI</div>
                        <div className="font-bold text-slate-900 mt-0.5">60% Target Hasil</div>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-200">
                        <div className="text-[10px] text-slate-500">Komponen Kompetensi</div>
                        <div className="font-bold text-slate-900 mt-0.5">40% Core Values</div>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-200">
                        <div className="text-[10px] text-slate-500">Kalkulasi Otomatis</div>
                        <div className="font-bold text-emerald-700 mt-0.5">Weighted Score Terproteksi</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 3: Talent Pool Kanban */}
              {activeScreen.id === 'talent-pipeline' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-indigo-600" />
                      Papan Pipeline Rekrutmen (Talent Pool Screening Board)
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="font-bold text-slate-700 text-[11px] pb-1 border-b border-slate-200">Screening (4)</div>
                        <div className="mt-1.5 p-1.5 bg-white rounded border border-slate-200 text-[10px]">
                          <div className="font-bold text-slate-900">Budi Santoso</div>
                          <div className="text-slate-500">Frontend React • Skor: 88</div>
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-indigo-50/50 border border-indigo-200">
                        <div className="font-bold text-indigo-900 text-[11px] pb-1 border-b border-indigo-200">Interview (2)</div>
                        <div className="mt-1.5 p-1.5 bg-white rounded border border-indigo-200 text-[10px]">
                          <div className="font-bold text-slate-900">Siti Rahma</div>
                          <div className="text-indigo-700 font-semibold">User Interview • 94% Fit</div>
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-emerald-50/50 border border-emerald-200">
                        <div className="font-bold text-emerald-900 text-[11px] pb-1 border-b border-emerald-200">Offering (1)</div>
                        <div className="mt-1.5 p-1.5 bg-white rounded border border-emerald-200 text-[10px]">
                          <div className="font-bold text-slate-900">Kevin Pratama</div>
                          <div className="text-emerald-700 font-semibold">Offer Letter Staged</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 4: Candidate Score Card */}
              {activeScreen.id === 'candidate-score' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-2">Rubrik Penilaian Kandidat & Catatan Interview</div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs space-y-1.5">
                      <div className="flex justify-between font-semibold">
                        <span className="text-slate-900">Kandidat: Siti Rahma (UI/UX & Frontend)</span>
                        <span className="font-mono text-emerald-700 font-bold">Skor Total: 92/100</span>
                      </div>
                      <div className="text-[11px] text-slate-600 leading-normal">
                        Catatan HR: Memiliki pemahaman yang solid terhadap design system, komunikasi terstruktur, dan pengalaman menangani alur kerja kompleks.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 5: Internal Tooling Directory */}
              {activeScreen.id === 'tooling-hub' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-2">Direktori Satu Pintu Tautan Kerja & Tools Kantor</div>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2 bg-slate-50 rounded border border-slate-200 font-sans">
                        <div className="font-bold text-slate-900 text-[11px]">Portal Pengajuan Cuti HR</div>
                        <div className="text-[10px] text-slate-500">Akses resmi seluruh staf</div>
                      </div>
                      <div className="p-2 bg-slate-50 rounded border border-slate-200 font-sans">
                        <div className="font-bold text-slate-900 text-[11px]">Monitoring Kuota Apps Script</div>
                        <div className="text-[10px] text-slate-500">Uptime automasi: 99.9%</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ======================================================== */}
          {/* 4. METHODOLOGYIQ DECISION SUPPORT SCREENS (1-5) */}
          {/* ======================================================== */}
          {projectId === 'methodology-iq' && (
            <div className="space-y-4">
              
              {/* Screen 1: Radar Chart View */}
              {activeScreen.id === 'radar' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                      <div className="flex justify-between font-semibold text-xs">
                        <span className="text-slate-800">Agile Scrum Suitability</span>
                        <span className="font-mono text-emerald-700 font-bold">78% Match</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full w-[78%]"></div>
                      </div>
                      <div className="text-[10px] text-slate-500">Optimal untuk proyek berfitur dinamis & tim mandiri</div>
                    </div>

                    <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                      <div className="flex justify-between font-semibold text-xs">
                        <span className="text-slate-800">Waterfall Suitability</span>
                        <span className="font-mono text-indigo-700 font-bold">35% Match</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-600 h-full w-[35%]"></div>
                      </div>
                      <div className="text-[10px] text-slate-500">Kurang cocok akibat tingginya perubahan kebutuhan</div>
                    </div>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-600 flex justify-between items-center">
                    <span>Model Kerangka Ilmiah: Thesing et al. (2021)</span>
                    <span className="font-mono font-bold text-amber-800">Visual Radar Output</span>
                  </div>
                </div>
              )}

              {/* Screen 2: Knockout Filter */}
              {activeScreen.id === 'knockout' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-2">Step 1: Filter Eliminasi Mutlak (5 Pengecekan Kritis)</div>
                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <span className="text-slate-700">1. Apakah proyek merupakan sistem keselamatan kritis (safety-critical)?</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">TIDAK (Lolos)</span>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <span className="text-slate-700">2. Apakah kontrak mewajibkan harga tetap dengan dokumen spesifikasi terkunci?</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">TIDAK (Lolos)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 3: 15 Multi-Criteria Sliders */}
              {activeScreen.id === 'weights' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-2">Step 2: Pembobotan 15 Kriteria pada 5 Dimensi Inti</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 bg-slate-50 rounded border border-slate-200">
                        <div className="font-semibold text-slate-800">Fleksibilitas Lingkup: Tinggi (85%)</div>
                        <div className="text-[10px] text-slate-500">Mendorong pemilihan metode iteratif</div>
                      </div>
                      <div className="p-2 bg-slate-50 rounded border border-slate-200">
                        <div className="font-semibold text-slate-800">Otonomi Tim: Tinggi (80%)</div>
                        <div className="text-[10px] text-slate-500">Mendukung self-organizing tim Scrum</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 4: Industry Scenario Presets */}
              {activeScreen.id === 'scenarios' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-2">Template Skenario Industri 1-Klik</div>
                    <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                      <div className="p-2 bg-slate-50 rounded border border-slate-200 text-slate-800">
                        <div className="font-bold font-sans">Fintech / Banking</div>
                        <div className="text-[10px] text-slate-500">Regulasi Ketat</div>
                      </div>
                      <div className="p-2 bg-amber-50 rounded border border-amber-300 text-amber-900">
                        <div className="font-bold font-sans">E-Commerce MVP</div>
                        <div className="text-[10px] text-amber-700">Rekomendasi: Agile</div>
                      </div>
                      <div className="p-2 bg-slate-50 rounded border border-slate-200 text-slate-800">
                        <div className="font-bold font-sans">Smart Hardware IoT</div>
                        <div className="text-[10px] text-slate-500">Model Hybrid</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 5: Executive Report */}
              {activeScreen.id === 'report' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-2">Laporan Rekomendasi & Analisis Risiko Keputusan</div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                      <div className="font-bold text-emerald-900">Rekomendasi Utama: Agile Scrum (78% Kecocokan)</div>
                      <div className="text-[11px] text-slate-600">
                        Risiko Utama: Keterlibatan Product Owner yang kurang aktif dapat memperlambat sprint review. Mitigasi: Jadwalkan sync berkala mingguan.
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
