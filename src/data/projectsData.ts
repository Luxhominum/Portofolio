export interface EditorialProject {
  id: string;
  title: string;
  category: string;
  domain: 'community-ops' | 'data-marketplace' | 'hr-enterprise' | 'research-methodology';
  roleBadge: string;
  tagline: string;
  problem: string;
  solution: string;
  beforeAfter: {
    before: string[];
    after: string[];
    roiHighlight: string;
  };
  architectureDetails: string[];
  keyFeatures: { title: string; description: string }[];
  impactMetrics: { value: string; label: string; description: string }[];
  techStack: string[];
}

export const EDITORIAL_PROJECTS: EditorialProject[] = [
  {
    id: 'community-scheduling',
    title: 'Community Resource Planning & Scheduling Platform',
    category: 'Community & Operations',
    domain: 'community-ops',
    roleBadge: 'Lead Full-Stack Developer',
    tagline: 'Sistem penjadwalan terpusat dengan validasi zero-conflict dan pemerataan rotasi 35 wilayah.',
    problem: 'Penyusunan jadwal manual di spreadsheet memicu bentrok ganda, rotasi tugas tidak adil, dan koordinasi berhari-hari.',
    solution: 'Platform web dengan validator matematis otomatis untuk pencegahan bentrok real-time dan generator broadcast 1-klik.',
    beforeAfter: {
      before: [
        '14+ jam koordinasi bulanan via spreadsheet terpisah.',
        '15% insiden jadwal bentrok & penugasan beruntun.',
        'Distribusi tugas tidak transparan antar relawan.'
      ],
      after: [
        '<2 jam penyusunan jadwal terotomasi.',
        '0 insiden bentrok (100% validasi otomatis).',
        'Rotasi 35 wilayah terdistribusi merata & transparan.'
      ],
      roiHighlight: '+85% Efisiensi Waktu & 100% Zero-Conflict'
    },
    architectureDetails: [
      'Zero-Conflict Validation Matrix: Pencegahan bentrok multi-sesi, tim, dan jeda istirahat secara real-time.',
      'Fair-Share Rotation Balancer: Algoritma penyeimbang beban penugasan 35 komunitas sepanjang tahun.',
      'Role-Based Finalization Lock: Mekanisme read-only lock resmi untuk mencegah modifikasi tak sengaja.',
      'Multi-Format Export Engine: Generator lembar warta cetak fisik dan format siaran WhatsApp instan.'
    ],
    keyFeatures: [
      { title: 'Interactive Calendar Matrix', description: 'Auto-suggest petugas bebas konflik dan siap ditugaskan.' },
      { title: 'Workload Balance Analytics', description: 'Grafik proporsi beban penugasan antar wilayah.' },
      { title: '1-Click Broadcast Generator', description: 'Otomasi teks pengumuman resmi ke koordinator wilayah.' }
    ],
    impactMetrics: [
      { value: '0 Kasus', label: 'Bentrok Jadwal', description: 'Eliminasi 100% penugasan ganda' },
      { value: '35 Wilayah', label: 'Rotasi Merata', description: 'Distribusi adil & transparan' },
      { value: '<2 Jam', label: 'Waktu Penyusunan', description: 'Turun dari 14+ jam koordinasi' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Cloud Firestore', 'Cloud Functions', 'RBAC Security']
  },
  {
    id: 'marketplace-sales-intelligence',
    title: 'PGE Intelijen Penjualan Eksekutif & Production Planning',
    category: 'Sales Intelligence & Analytics',
    domain: 'data-marketplace',
    roleBadge: 'Business Intelligence & Systems',
    tagline: 'Agregasi transaksi multi-marketplace lintas tahun untuk perencanaan kapasitas produksi.',
    problem: 'Data penjualan multi-channel terfragmentasi, menyulitkan analisis tren tahunan (YoY) dan estimasi stok pabrik.',
    solution: 'Sentralisasi data transaksi penjualan dengan kalkulasi tren YoY otomatis dan model peramalan kuota produksi.',
    beforeAfter: {
      before: [
        'File ekspor CSV marketplace terpisah di berbagai laptop.',
        'Kalkulasi tren tahunan (YoY) manual rentan error.',
        'Perencanaan kuota produksi manufaktur sering over/under stock.'
      ],
      after: [
        'Single source of truth: 100% data multi-kanal terpadu.',
        'Dasbor tren pertumbuhan YoY instan multi-tahun.',
        'Model proyeksi produksi otomatis berbasis run-rate transaksi.'
      ],
      roiHighlight: 'Perencanaan Manufaktur Presisi Berbasis Data Riil'
    },
    architectureDetails: [
      'Multi-Channel Ingestion & Normalizer: Menyeragamkan format ekspor Shopee, Tokopedia, TikTok Shop ke skema standar.',
      'Year-over-Year (YoY) Growth Engine: Analisis tren volume penjualan, GMV, dan dinamika musiman.',
      'Production Demand Forecasting: Estimasi kapasitas produksi & stok gudang berbasis run-rate riil.',
      'Product SKU Matrix: Komparasi margin kontribusi dan perputaran barang (inventory turnover).'
    ],
    keyFeatures: [
      { title: 'Cross-Year Dashboard', description: 'Grafik komparasi penjualan multi-tahun dan seasonality.' },
      { title: 'Production Volume Estimator', description: 'Kalkulator kuota produksi berdasarkan tren repeat order.' },
      { title: 'Product SKU Performance', description: 'Tabel margin kontribusi dan inventori per varian.' }
    ],
    impactMetrics: [
      { value: 'Multi-Channel', label: 'Data Terpadu', description: 'Shopee, Tokopedia, TikTok Shop' },
      { value: 'YoY Trends', label: 'Analisis Akurat', description: 'Monitoring performa lintas tahun' },
      { value: 'Presisi', label: 'Rencana Produksi', description: 'Cegah overproduction & out-of-stock' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Chart.js Engine', 'Client-side Ingestion', 'State Analytics']
  },
  {
    id: 'enterprise-hr-governance',
    title: 'PGE Talent Pool & Post-Test Assessment Matrix Portal',
    category: 'Enterprise HR Tech & Evaluation',
    domain: 'hr-enterprise',
    roleBadge: 'HR Tech Systems Innovator',
    tagline: 'Tata kelola talent pool terpadu dengan modul ujian online dan matriks rekomendasi hiring pasca-tes.',
    problem: 'Data pelamar tercecer tanpa repositori terpadu, serta scoring hasil tes asesmen memakan waktu berjam-jam.',
    solution: 'Repositori kandidat sentral dengan test runner online, scoring otomatis, dan Matriks Keputusan Pasca-Tes instan.',
    beforeAfter: {
      before: [
        'CV pelamar tercecer di email dan folder lokal tanpa master pool.',
        'Koreksi tes asesmen manual berjam-jam tanpa rubrik terstandar.',
        'Jadwal interview rentan bentrok dan feedback tidak terdokumentasi.'
      ],
      after: [
        'Central Candidate Pool: Master database kandidat terindeks rapi.',
        'Post-Test Matrix: Kuadran kompetensi terbit seketika tes selesai.',
        'Smart Scheduler: Alokasi jadwal interview & auto-dispatch pesan.'
      ],
      roiHighlight: 'Hasil Matriks Terbit 0 Detik & 3x Kecepatan Screening'
    },
    architectureDetails: [
      'Candidate Repository Hub: Master database pelamar, riwayat seleksi, dan status pipeline.',
      'Live Assessment Test Runner: Modul ujian on-site (Big Five 50 butir, DISC 24 butir, Logika 15 butir) dengan timer.',
      'Post-Test Decision Matrix: Kalkulasi otomatis skor kompetensi & pemetaan ke kuadran hiring recommendation.',
      'End-to-End Pipeline: Pelacakan kandidat dari screening CV, scoring tes, hingga offering.'
    ],
    keyFeatures: [
      { title: 'Post-Test Decision Matrix', description: 'Pemetaan kompetensi vs kesesuaian peran seketika tes selesai.' },
      { title: 'On-Site Assessment Portal', description: 'Portal ujian interaktif dengan timer dan modul anti-manipulasi.' },
      { title: 'Structured Rubric & Grid', description: 'Standardisasi rubrik penilaian objektif berbasis kriteria terukur.' }
    ],
    impactMetrics: [
      { value: '0 Detik', label: 'Post-Test Matrix', description: 'Matriks & kuadran terbit seketika submit' },
      { value: '100%', label: 'Sentralisasi Data', description: 'Database kandidat terdata dalam 1 pool' },
      { value: 'Objektif', label: 'Rubrik Terstandar', description: 'Scoring otomatis bebas bias subjektif' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Cloud Firestore', 'Assessment Engine', 'RBAC Architecture']
  },
  {
    id: 'methodology-iq',
    title: 'MethodologyIQ — Project Decision Support Instrument',
    category: 'Decision Support & Systems Research',
    domain: 'research-methodology',
    roleBadge: 'Empirical Research & Visualization',
    tagline: 'Instrumen visualisasi komparatif metodologi (Waterfall vs Agile vs Hybrid) berbasis riset empiris.',
    problem: 'Pemilihan metodologi proyek kerap berbasis opini subjektif tanpa mempertimbangkan regulasi dan stabilitas scope.',
    solution: 'Instrumen web interaktif dengan filter eliminasi mutlak dan pembobotan multi-kriteria berbasis riset ilmiah.',
    beforeAfter: {
      before: [
        'Pemilihan model SDLC hanya berdasarkan opini subjektif.',
        'Salah metodologi memicu pemborosan budget & rework.',
        'Tidak ada dasar empiris yang dapat diaudit stakeholder.'
      ],
      after: [
        'Keputusan berbasis kerangka riset ilmiah Thesing et al.',
        'Kalkulasi pembobotan multi-parameter dengan grafik radar instan.',
        'Rekomendasi model Hybrid vs Agile vs Waterfall yang akuntabel.'
      ],
      roiHighlight: 'Keputusan Metodologi Audit-Ready & Konsensus Cepat'
    },
    architectureDetails: [
      'Elimination Filter Engine: Pemeriksaan 5 batasan mutlak (regulasi safety-critical, kontrak fixed-price).',
      'Multi-Dimensional Weighted Scoring: Pembobotan dinamis pada fleksibilitas scope, otonomi tim, dan kesiapan rilis.',
      'Interactive Comparative Radar: Proyeksi skor kecocokan Waterfall vs Agile vs Hybrid secara visual.',
      'Bilingual State Engine: Pergantian bahasa (ID/EN) instan tanpa mereset input penilaian.'
    ],
    keyFeatures: [
      { title: '2-Stage Decision Pipeline', description: 'Filter eliminasi mutlak dilanjutkan dengan pembobotan terstruktur.' },
      { title: 'Multi-Axis Radar Visualizer', description: 'Grafik radar keunggulan komparatif masing-masing metodologi.' },
      { title: 'Scenario Presets', description: 'Preset 1-klik untuk industri Fintech, E-Commerce, dan Hardware.' }
    ],
    impactMetrics: [
      { value: '15+ Kriteria', label: 'Faktor Empiris', description: 'Evaluasi berbasis literatur riset ilmiah' },
      { value: 'Radar SVG', label: 'Visualisasi Instan', description: 'Proyeksi komparatif mudah dipahami' },
      { value: 'Konsensus', label: 'Keputusan Cepat', description: 'Menentukan metodologi dalam 1 sesi' }
    ],
    techStack: ['Modern JavaScript', 'TypeScript', 'Tailwind CSS', 'Chart.js Radar Engine', 'GSAP Animation']
  }
];
