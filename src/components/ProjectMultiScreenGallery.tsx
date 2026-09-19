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
      title: '4. Registrasi & Onboarding Kandidat', 
      subtitle: 'Direct Candidate Enrollment Portal', 
      badge: 'Candidate Enrollment',
      description: 'Formulir registrasi dan orientasi kandidat terpadu dengan validasi nomor induk, posisi lamaran, dan penugasan token asesmen.'
    },
    { 
      id: 'screen-5', 
      title: '5. Pentagon Matrix & Hasil Tes Asesmen', 
      subtitle: 'Pentagon Big Five + DISC + Logika Kognitif', 
      badge: 'Pentagon Matrix',
      description: 'Laporan komprehensif pasca-tes: Pentagon Matrix (IPIP Big Five 5-axis), grafik garis profil DISC (D-I-S-C), dan diagram batang akurasi penalaran logika & kognitif bisnis praktis.'
    },
    { 
      id: 'screen-6', 
      title: '6. Live Assessment Test Runner', 
      subtitle: 'Engine Ujian Online Anti-Cheat & Timer', 
      badge: 'Live Test Engine',
      description: 'Runner ujian langsung dengan countdown timer presisi, modul psikotes (Big Five 50 butir, DISC 24 butir, Logika 15 butir), dan pencegahan navigasi liar.'
    },
    { 
      id: 'screen-7', 
      title: '7. Leaderboard & Hasil Asesmen Kandidat', 
      subtitle: 'Tabel Rekomendasi & Profil Terintegrasi', 
      badge: 'Decision Dashboard',
      description: 'Dashboard rekapitulasi hasil seluruh kandidat yang telah menyelesaikan tes lengkap dengan badge profil DISC, skor logika, dan tombol inspeksi Pentagon Matrix instan.'
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
      
      {/* Gallery Header Bar: Clean Tactile Bar */}
      <div className="bg-zinc-100 border-b-2 border-black p-2">
        <div className="flex items-center justify-between gap-2 mb-1.5 px-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-black"></span>
            <span className="w-2 h-2 bg-orange-500"></span>
            <span className="text-[10px] font-mono text-black font-black uppercase tracking-wider ml-1 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-orange-600" />
              RETINA VIEWPORT
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold text-white bg-black px-2 py-0.5 border border-black">
              {activeScreenIndex + 1} / {screens.length}
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
        <div className={`grid gap-1 ${screens.length === 7 ? 'grid-cols-2 sm:grid-cols-4 md:grid-cols-7' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5'}`}>
          {screens.map((screen, idx) => {
            const isActive = idx === activeScreenIndex;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`text-left p-1.5 border transition-all duration-150 cursor-pointer ${
                  isActive 
                    ? 'bg-black text-white font-bold border-black shadow-[2px_2px_0px_0px_rgba(255,85,0,1)]' 
                    : 'bg-white border-black/40 text-black hover:bg-zinc-200'
                }`}
              >
                <div className="text-[9px] font-bold font-mono">0{idx + 1}</div>
                <div className={`text-[8.5px] truncate ${isActive ? 'text-orange-400' : 'text-zinc-600'}`}>
                  {screen.title.split('. ')[1] || screen.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Real Screenshot Viewport Frame */}
      <div className="relative bg-black p-1.5 group">
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
                alt={`${screen.title}`}
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
            <span className="px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase border border-orange-500 shadow-xl flex items-center gap-1.5">
              <Maximize2 className="w-3 h-3 text-orange-500" /> INSPECT
            </span>
          </div>
        </div>

        {/* Prev / Next Navigation Floating Buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-black hover:bg-orange-600 text-white border border-white/40 flex items-center justify-center shadow-lg transition-transform active:scale-90 cursor-pointer z-20"
          title="Layar Sebelumnya"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-black hover:bg-orange-600 text-white border border-white/40 flex items-center justify-center shadow-lg transition-transform active:scale-90 cursor-pointer z-20"
          title="Layar Berikutnya"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Sleek Minimal Caption Bar */}
      <div className="px-3 py-2 bg-zinc-50 border-t-2 border-black flex items-center justify-between text-xs">
        <span className="font-bold text-black font-mono text-[10.5px] truncate">
          {activeScreen.title}
        </span>
        <span className="px-1.5 py-0.5 bg-orange-500 text-white font-mono text-[8.5px] font-bold uppercase tracking-wider shrink-0">
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
