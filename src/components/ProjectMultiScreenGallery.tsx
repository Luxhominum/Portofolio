import React, { useState } from 'react';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles
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
  description: string;
}

const SCREENS_BY_PROJECT: Record<string, ScreenTab[]> = {
  'community-scheduling': [
    { 
      id: 'screen-1', 
      title: '1. Matriks Kalender Misa', 
      subtitle: 'Slot Grid & Auto-Suggest Petugas', 
      badge: 'Main Calendar View',
      description: 'Antarmuka kalender bulanan interaktif dengan pengisian slot otomatis dan status kesiapan 35 wilayah.'
    },
    { 
      id: 'screen-2', 
      title: '2. Zero-Conflict Validator', 
      subtitle: 'Pencegahan Bentrok 3 Lapis', 
      badge: 'Safety Engine',
      description: 'Mesin diagnostik validasi 3 lapis untuk mengeliminasi tumpang tindih waktu, tugas ganda koor, dan jeda istirahat.'
    },
    { 
      id: 'screen-3', 
      title: '3. Pemerataan 35 Wilayah', 
      subtitle: 'Analitik Proporsi Beban Pelayanan', 
      badge: 'Fair-Share Analytics',
      description: 'Visualisasi analitik proporsi frekuensi tugas antar sektor wilayah untuk menjamin keadilan pelayanan.'
    },
    { 
      id: 'screen-4', 
      title: '4. Generator Warta & WhatsApp', 
      subtitle: 'Publikasi Otomatis 1-Klik', 
      badge: 'Publishing Engine',
      description: 'Pratinjau lembar cetak fisik warta A4 siap unduh serta format pesan siaran WA terstruktur.'
    },
    { 
      id: 'screen-5', 
      title: '5. Audit & Penguncian Resmi', 
      subtitle: 'Role-Based Finalization Lock', 
      badge: 'Governance & Lock',
      description: 'Penguncian jadwal resmi dalam mode read-only dengan tanda tangan digital dan log aktivitas audit lengkap.'
    },
  ],
  'marketplace-sales-intelligence': [
    { 
      id: 'screen-1', 
      title: '1. Intelijen Penjualan Eksekutif', 
      subtitle: 'Ringkasan GMV & Metrik Utama', 
      badge: 'Executive Summary',
      description: 'Tampilan ringkasan eksekutif intelijen penjualan PGE dengan grafik metrik pendapatan dan performa multi-kanal.'
    },
    { 
      id: 'screen-2', 
      title: '2. Tren & Pola Penjualan YoY', 
      subtitle: 'Grafik Pertumbuhan Lintas Tahun', 
      badge: 'Trend & Seasonality',
      description: 'Visualisasi analitik pola penjualan komparatif antar tahun dan identifikasi dinamika musiman pasar.'
    },
    { 
      id: 'screen-3', 
      title: '3. Volume & Proyeksi Produksi', 
      subtitle: 'Perencanaan Kapasitas Suplai', 
      badge: 'Production Planning',
      description: 'Analisis pergerakan volume item terjual untuk dasar perencanaan kuota batch produksi dan stok.'
    },
    { 
      id: 'screen-4', 
      title: '4. Performa Produk & SKU Table', 
      subtitle: 'Tabel Komparasi Margin & Kategori', 
      badge: 'Product Matrix',
      description: 'Tabel komprehensif performa SKU produk unggulan, margin kontribusi, dan tingkat perputaran unit.'
    },
    { 
      id: 'screen-5', 
      title: '5. Detail Produk Unggulan', 
      subtitle: 'Filter Interaktif & Analisis SKU', 
      badge: 'Interactive Filter',
      description: 'Eksplorasi interaktif detail varian produk dan kontribusi penjualan per kategori.'
    },
  ],
  'enterprise-hr-governance': [
    { 
      id: 'screen-1', 
      title: '1. PGE Talent Pool Repository', 
      subtitle: 'Candidate Database & Status', 
      badge: 'Candidate Hub',
      description: 'Repositori sentral pengelolaan database kandidat pelamar PGE dengan status seleksi terstruktur.'
    },
    { 
      id: 'screen-2', 
      title: '2. Pipeline & Screening Pelamar', 
      subtitle: 'Daftar Kandidat & Evaluasi Berkas', 
      badge: 'Screening Pipeline',
      description: 'Monitoring tahapan screening berkas pelamar kerja, kualifikasi posisi, dan riwayat seleksi.'
    },
    { 
      id: 'screen-3', 
      title: '3. Alur Rekrutmen Terpusat', 
      subtitle: 'Workflow Tahapan Kandidat', 
      badge: 'Talent Workflow',
      description: 'Manajemen alur seleksi terpadu mulai dari verifikasi CV hingga tahapan interview tim.'
    },
    { 
      id: 'screen-4', 
      title: '4. Portal Asesmen On-Site', 
      subtitle: 'Pelaksanaan Uji Kompetensi', 
      badge: 'Assessment Portal',
      description: 'Portal pelaksanaan asesmen on-site PGE untuk pengujian kompetensi dan penilaian langsung peserta.'
    },
    { 
      id: 'screen-5', 
      title: '5. Rubrik Penilaian & Evaluasi', 
      subtitle: 'Form Asesmen & Scoring Teruji', 
      badge: 'Scoring Rubric',
      description: 'Instrumen rubrik penilaian objektif berbasis kompetensi teknis dan indikator evaluasi peran.'
    },
  ],
  'methodology-iq': [
    { 
      id: 'screen-1', 
      title: '1. Radar Proyeksi Metodologi', 
      subtitle: 'Waterfall vs Agile vs Hybrid', 
      badge: 'Comparative Radar',
      description: 'Visualisasi grafik radar interaktif yang memproyeksikan skor kecocokan metodologi manajemen proyek.'
    },
    { 
      id: 'screen-2', 
      title: '2. Filter Eliminasi Mutlak', 
      subtitle: 'Penyaringan Batasan Regulasi', 
      badge: 'Stage 1 Gate',
      description: 'Pemeriksaan 5 kendala mutlak (faktor regulasi keselamatan, kontrak fixed-price, dsb) sebelum pembobotan mendalam.'
    },
    { 
      id: 'screen-3', 
      title: '3. Pembobotan 15+ Kriteria', 
      subtitle: 'Slider Parameter Fleksibilitas & Tim', 
      badge: 'Multi-Criteria Panel',
      description: 'Panel kalibrasi dinamis pada 5 dimensi inti (fleksibilitas lingkup, otonomi tim, kesiapan CI/CD, dsb).'
    },
    { 
      id: 'screen-4', 
      title: '4. Simulasi Skenario Industri', 
      subtitle: 'Fintech vs E-Commerce vs IoT', 
      badge: 'Industry Presets',
      description: 'Preset studi kasus 1-klik yang mengonfigurasi parameter khas industri perbankan, startup e-commerce, dan hardware.'
    },
    { 
      id: 'screen-5', 
      title: '5. Matriks Rekomendasi & Risiko', 
      subtitle: 'Ringkasan Konsensus Tim', 
      badge: 'Executive Report',
      description: 'Laporan ringkasan keputusan akhir, analisis trade-off keuntungan, dan panduan mitigasi risiko tim.'
    },
  ]
};

export const ProjectMultiScreenGallery: React.FC<Props> = ({ projectId, uiTheme }) => {
  const screens = SCREENS_BY_PROJECT[projectId] || SCREENS_BY_PROJECT['community-scheduling'];
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const activeScreen = screens[activeScreenIndex];

  const getThemeColor = () => {
    switch (uiTheme) {
      case 'emerald': return 'border-emerald-600 text-emerald-800 bg-emerald-50';
      case 'blue': return 'border-blue-600 text-blue-800 bg-blue-50';
      case 'indigo': return 'border-indigo-600 text-indigo-800 bg-indigo-50';
      case 'amber': return 'border-amber-600 text-amber-800 bg-amber-50';
    }
  };

  const getImageUrl = (screenId: string) => {
    const base = import.meta.env.BASE_URL.endsWith('/') 
      ? import.meta.env.BASE_URL 
      : `${import.meta.env.BASE_URL}/`;
    return `${base}screenshots/${projectId}/${screenId}.png`;
  };

  const handleNext = () => {
    setActiveScreenIndex((prev) => (prev + 1) % screens.length);
  };

  const handlePrev = () => {
    setActiveScreenIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <div className="my-8 rounded-2xl bg-slate-900/5 p-3 sm:p-4 ring-1 ring-slate-200/90 shadow-diffusion overflow-hidden">
      <div className="rounded-xl bg-white border border-slate-200 overflow-hidden font-sans">
        
        {/* Gallery Header Bar */}
        <div className="bg-slate-100/90 border-b border-slate-200 p-3 sm:p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="text-xs font-mono text-slate-700 font-bold ml-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Tangkapan Layar Riil Chromium (5 Layar per Proyek)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
                Layar {activeScreenIndex + 1} / 5
              </span>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-medium hover:bg-slate-50 transition-colors shadow-xs"
                title="Buka Layar Penuh"
              >
                <Maximize2 className="w-3 h-3 text-slate-500" />
                <span>Perbesar</span>
              </button>
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
                  <div className="text-[11px] truncate font-semibold">{screen.title}</div>
                  <div className="text-[9px] text-slate-400 truncate mt-0.5">{screen.subtitle}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Real Screenshot Viewport Frame */}
        <div className="relative bg-slate-950 p-2 sm:p-4 group">
          <div 
            onClick={() => setIsLightboxOpen(true)}
            className="relative rounded-lg overflow-hidden border border-slate-800 shadow-2xl cursor-zoom-in bg-slate-900 transition-all hover:ring-2 hover:ring-blue-500/50"
          >
            <img 
              src={getImageUrl(activeScreen.id)} 
              alt={`${activeScreen.title} - ${activeScreen.subtitle}`}
              className="w-full h-auto object-cover max-h-[540px] block"
              loading="lazy"
            />
            
            {/* Overlay Hover Hint */}
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-blue-400" /> Klik untuk Memperbesar Resolusi Penuh
              </span>
            </div>
          </div>

          {/* Prev / Next Navigation Floating Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 flex items-center justify-center shadow-lg transition-transform active:scale-95"
            title="Layar Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 flex items-center justify-center shadow-lg transition-transform active:scale-95"
            title="Layar Berikutnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Screen Description Context Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div>
            <span className="font-bold text-slate-900">{activeScreen.title}: </span>
            <span className="text-slate-600">{activeScreen.description}</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-white text-slate-700 font-mono text-[10px] font-semibold border border-slate-200 shrink-0 self-start sm:self-auto">
            {activeScreen.badge}
          </span>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{activeScreen.title}</span>
                  <span className="text-xs text-slate-400 font-normal">({activeScreen.subtitle})</span>
                </h4>
              </div>
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-700/80 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                title="Tutup Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-2 sm:p-4 overflow-auto flex-1 flex items-center justify-center bg-slate-950">
              <img 
                src={getImageUrl(activeScreen.id)} 
                alt={activeScreen.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg border border-slate-800"
              />
            </div>

            {/* Modal Navigation Footer */}
            <div className="bg-slate-800 px-4 py-2.5 border-t border-slate-700 flex items-center justify-between text-xs text-slate-300">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Layar Sebelumnya
              </button>
              <span className="font-mono text-[11px] text-slate-400">
                {activeScreenIndex + 1} dari {screens.length} Layar
              </span>
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors"
              >
                Layar Berikutnya <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
