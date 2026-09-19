import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Terminal
} from 'lucide-react';

interface Props {
  projectId: string;
  className?: string;
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
      subtitle: 'Candidate Master Hub & Status', 
      badge: 'Candidate Hub',
      description: 'Repositori sentral pengelolaan database pelamar PGE dengan status seleksi, filter divisi, dan rekam jejak kandidat terstruktur.'
    },
    { 
      id: 'screen-2', 
      title: '2. Pipeline & Screening Pelamar', 
      subtitle: 'Daftar Kandidat & Evaluasi Berkas', 
      badge: 'Screening Pipeline',
      description: 'Monitoring tahapan screening berkas pelamar kerja, kualifikasi posisi, dan riwayat seleksi lintas departemen.'
    },
    { 
      id: 'screen-3', 
      title: '3. Alur Rekrutmen Terpusat', 
      subtitle: 'Workflow Tahapan Seleksi', 
      badge: 'Talent Workflow',
      description: 'Manajemen alur seleksi terpadu mulai dari verifikasi CV, undangan asesmen on-site, hingga interview hiring manager.'
    },
    { 
      id: 'screen-4', 
      title: '4. Portal Asesmen On-Site', 
      subtitle: 'Pelaksanaan Uji Kompetensi Live', 
      badge: 'Live Test Engine',
      description: 'Portal pelaksanaan asesmen on-site dengan modul soal teknis, timer terintegrasi, dan penguncian sesi ujian anti-cheat.'
    },
    { 
      id: 'screen-5', 
      title: '5. Matriks Evaluasi Pasca-Tes', 
      subtitle: 'Post-Test Scoring & Fit Decision Matrix', 
      badge: 'Post-Test Matrix',
      description: 'Matriks hasil pengujian otomatis seketika kandidat submit tes: komparasi skor teknis vs culture fit, kuadran rekomendasi, dan scorecard terukur.'
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

export const ProjectMultiScreenGallery: React.FC<Props> = ({ projectId, className = '' }) => {
  const screens = SCREENS_BY_PROJECT[projectId] || SCREENS_BY_PROJECT['community-scheduling'];
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const activeScreen = screens[activeScreenIndex];

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveScreenIndex((prev) => (prev + 1) % screens.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveScreenIndex((prev) => (prev - 1 + screens.length) % screens.length);
      } else if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, screens.length]);

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
    <div className={`bg-white border-2 border-black overflow-hidden font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}>
      
      {/* Gallery Header Bar: Hardware Aesthetic */}
      <div className="bg-zinc-100 border-b-2 border-black p-2.5 sm:p-3">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 px-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-black"></span>
            <span className="w-2.5 h-2.5 bg-orange-500"></span>
            <span className="w-2.5 h-2.5 bg-zinc-300"></span>
            <span className="text-[10px] font-mono text-black font-black uppercase tracking-wider ml-1 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-orange-600" />
              CHROMIUM VIEWPORT // 2880×1800 RETINA
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold text-white bg-black px-2 py-0.5 border border-black">
              DISP: {activeScreenIndex + 1}/5
            </span>
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-white border border-black text-black text-[10px] font-bold uppercase hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
              title="Buka Layar Penuh"
            >
              <Maximize2 className="w-2.5 h-2.5" />
              <span>EXPAND</span>
            </button>
          </div>
        </div>

        {/* Tactile Screen Selector Tabs */}
        <div className="grid grid-cols-5 gap-1">
          {screens.map((screen, idx) => {
            const isActive = idx === activeScreenIndex;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`text-left p-1.5 border transition-all duration-150 text-xs cursor-pointer ${
                  isActive 
                    ? 'bg-black text-white font-bold border-black shadow-[2px_2px_0px_0px_rgba(255,85,0,1)]' 
                    : 'bg-white border-black/40 text-black hover:bg-zinc-200'
                }`}
              >
                <div className="text-[9px] truncate font-bold font-mono">0{idx + 1} // VIEW</div>
                <div className={`text-[8px] truncate ${isActive ? 'text-orange-400' : 'text-zinc-500'}`}>
                  {screen.subtitle.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Real Screenshot Viewport Frame */}
      <div className="relative bg-black p-2 group">
        <div 
          onClick={() => setIsLightboxOpen(true)}
          className="relative w-full aspect-[16/10] overflow-hidden border border-zinc-800 bg-zinc-950 cursor-zoom-in group"
        >
          {/* Stacked Preloaded Screen Images with GPU-accelerated Cross-Fade */}
          {screens.map((screen, idx) => {
            const isCurrent = idx === activeScreenIndex;
            return (
              <img 
                key={screen.id}
                src={getImageUrl(screen.id)} 
                alt={`${screen.title} - ${screen.subtitle}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ease-out will-change-transform ${
                  isCurrent 
                    ? 'opacity-100 scale-100 z-10 pointer-events-auto' 
                    : 'opacity-0 scale-[1.01] z-0 pointer-events-none'
                }`}
              />
            );
          })}
          
          {/* Overlay Hover Hint */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center pointer-events-none z-20">
            <span className="px-3 py-1 bg-black text-white text-[11px] font-mono font-bold uppercase border border-orange-500 shadow-xl flex items-center gap-1.5">
              <Maximize2 className="w-3 h-3 text-orange-500" /> FULL RESOLUTION INSPECT
            </span>
          </div>
        </div>

        {/* Prev / Next Navigation Floating Buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black hover:bg-orange-600 text-white border border-white/40 flex items-center justify-center shadow-lg transition-transform active:scale-90 cursor-pointer z-20"
          title="Layar Sebelumnya"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black hover:bg-orange-600 text-white border border-white/40 flex items-center justify-center shadow-lg transition-transform active:scale-90 cursor-pointer z-20"
          title="Layar Berikutnya"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Screen Description Context Footer */}
      <div className="p-2.5 sm:p-3 bg-zinc-50 border-t-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div key={activeScreen.id} className="animate-fadeIn truncate">
          <span className="font-bold text-black font-mono">{activeScreen.title}: </span>
          <span className="text-zinc-700 text-[11px] font-sans">{activeScreen.description}</span>
        </div>
        <span className="px-2 py-0.5 bg-orange-500 text-white font-mono text-[9px] font-bold uppercase tracking-wider shrink-0 self-start sm:self-auto">
          {activeScreen.badge}
        </span>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn font-mono"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full bg-zinc-950 border-2 border-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,85,0,1)] flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-black px-4 py-3 border-b-2 border-zinc-800 flex items-center justify-between text-white">
              <div>
                <h4 className="text-xs font-bold uppercase flex items-center gap-2">
                  <span className="text-orange-500">[{activeScreen.badge}]</span>
                  <span>{activeScreen.title}</span>
                  <span className="text-zinc-500 text-[10px]">({activeScreen.subtitle})</span>
                </h4>
              </div>
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="w-7 h-7 bg-zinc-800 hover:bg-orange-600 text-white flex items-center justify-center transition-colors cursor-pointer border border-zinc-700"
                title="Tutup Modal (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative w-full aspect-[16/10] max-h-[75vh] flex-1 bg-black overflow-hidden">
              {screens.map((screen, idx) => {
                const isCurrent = idx === activeScreenIndex;
                return (
                  <img 
                    key={screen.id}
                    src={getImageUrl(screen.id)} 
                    alt={screen.title}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ease-out ${
                      isCurrent 
                        ? 'opacity-100 scale-100 z-10' 
                        : 'opacity-0 scale-[1.01] z-0 pointer-events-none'
                    }`}
                  />
                );
              })}
            </div>

            {/* Modal Navigation Footer */}
            <div className="bg-black px-4 py-2.5 border-t-2 border-zinc-800 flex items-center justify-between text-xs text-white">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-900 border border-zinc-700 hover:bg-orange-600 text-white font-bold transition-colors cursor-pointer uppercase text-[10px]"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> PREV VIEW
              </button>
              <span className="font-mono text-[10px] text-zinc-400">
                DISPLAY {activeScreenIndex + 1} OF {screens.length} (ARROW KEYS &larr; &rarr;)
              </span>
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-900 border border-zinc-700 hover:bg-orange-600 text-white font-bold transition-colors cursor-pointer uppercase text-[10px]"
              >
                NEXT VIEW <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
