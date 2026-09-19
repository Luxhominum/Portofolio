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
    category: 'Community & Volunteer Management System',
    domain: 'community-ops',
    roleBadge: 'Full-Stack Developer & Community Initiative',
    tagline: 'Sistem penjadwalan cloud terpusat dengan algoritma validasi zero-conflict otomatis dan pemerataan rotasi tugas bagi 35 kelompok komunitas.',
    problem: 'Pengelolaan jadwal penugasan ratusan relawan dan petugas liturgi yang sebelumnya dilakukan manual lewat lembar spreadsheet sering berujung pada jadwal bentrok ganda (double-booking), penugasan berturut-turut yang melelahkan petugas, serta koordinasi bulanan yang memakan waktu berhari-hari.',
    solution: 'Membangun platform cloud mandiri dengan algoritma validasi instan yang secara matematis mengeliminasi jadwal bentrok, menyeimbangkan frekuensi giliran tugas secara proporsional antar 35 wilayah, serta mengotomasi pembuatan warta resmi dan format pesan siaran komunikasi WhatsApp 1-klik.',
    beforeAfter: {
      before: [
        '14+ jam koordinasi bulanan manual lewat spreadsheet terpisah.',
        '12-15% insiden jadwal bentrok ganda & penugasan petugas beruntun.',
        'Distribusi beban tugas tidak transparan memicu keluhan relawan.'
      ],
      after: [
        '<2 jam penyusunan jadwal terotomasi secara instan.',
        '0 insiden jadwal bentrok (100% eliminasi matematis real-time).',
        'Visualisasi analitik rotasi 35 wilayah terdistribusi adil & transparan.'
      ],
      roiHighlight: '+85% Efisiensi Waktu & 100% Zero-Conflict Penugasan'
    },
    architectureDetails: [
      'Zero-Conflict Validation Matrix: Memeriksa bentrok antar sesi misa, bentrok tim koor vs penugasan perorangan, dan jeda istirahat wajib secara real-time.',
      'Fair-Share Rotation Balancer: Algoritma penyeimbang beban pelayanan yang memantau riwayat penugasan 35 komunitas wilayah sepanjang tahun.',
      'Role-Based Finalization Lock: Pembagian peran Admin dan Penjadwal dengan mekanisme penguncian jadwal resmi (Official Finalization Lock) untuk mencegah revisi tak sengaja.',
      'Multi-Format Export Engine: Mengonversi data jadwal digital menjadi format lembar cetak warta fisik dan format teks WhatsApp terstruktur.'
    ],
    keyFeatures: [
      { title: 'Interactive Calendar Slot Matrix', description: 'Antarmuka kalender modular dengan auto-suggest petugas yang bebas konflik dan siap ditugaskan.' },
      { title: 'Workload Balance Analytics', description: 'Visualisasi grafik proporsi beban pelayanan antar wilayah untuk memastikan transparansi dan keadilan penugasan.' },
      { title: '1-Click Broadcast Generator', description: 'Otomasi pembentukan teks pesan pengumuman resmi ke koordinator wilayah dalam hitungan detik.' }
    ],
    impactMetrics: [
      { value: '0 Kasus', label: 'Bentrok Jadwal', description: 'Eliminasi 100% penugasan ganda sejak implementasi sistem' },
      { value: '35 Wilayah', label: 'Terdistribusi Rata', description: 'Rotasi tugas terjadwal objektif dan transparan' },
      { value: '<2 Jam', label: 'Penyusunan Jadwal', description: 'Waktu koordinasi bulanan berkurang dari berhari-hari' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Cloud Firestore', 'Cloud Functions', 'RBAC Security']
  },
  {
    id: 'marketplace-sales-intelligence',
    title: 'PGE Intelijen Penjualan Eksekutif & Production Planning Platform',
    category: 'Enterprise Data Analytics & Forecasting',
    domain: 'data-marketplace',
    roleBadge: 'Internal Systems & Business Intelligence',
    tagline: 'Platform analitik dan agregasi data transaksi penjualan multi-marketplace lintas tahun untuk dasar pengambilan keputusan, proyeksi kuota produksi, dan strategi marketing kantor.',
    problem: 'Data transaksi penjualan dari berbagai kanal marketplace (Shopee, Tokopedia, TikTok Shop, dll) tersimpan terpisah-pisah dalam format ekspor mentah yang berbeda. Manajemen kesulitan membandingkan tren performa antar tahun (YoY), memperkirakan kebutuhan bahan baku produksi manufaktur, dan mengevaluasi efektivitas kampanye marketing secara holistik.',
    solution: 'Membangun platform agregasi data transaksi sentral di kantor yang menormalisasi seluruh file data penjualan marketplace, menyajikan dashboard visual tren pertumbuhan lintas tahun, dan menghasilkan proyeksi kebutuhan produksi berdasarkan volume penjualan riil per kategori produk.',
    beforeAfter: {
      before: [
        'File ekspor CSV marketplace terpisah-pisah di berbagai laptop admin.',
        'Kalkulasi tren tahunan (YoY) manual dengan rumus Excel rentan corrupt.',
        'Perencanaan kuota produksi manufaktur sering over/under stock.'
      ],
      after: [
        'Single source of truth: 100% data transaksi multi-kanal terpadu.',
        'Dasbor tren pertumbuhan YoY instan dengan komparasi performa multi-tahun.',
        'Model proyeksi volume produksi otomatis berbasis run-rate penjualan riil.'
      ],
      roiHighlight: 'Keputusan Kapasitas Manufaktur Berbasis Run-Rate Data Riil'
    },
    architectureDetails: [
      'Multi-Channel Ingestion & Normalizer: Mengolah dan menyeragamkan skema data transaksi dari berbagai format ekspor marketplace ke dalam format analitik standar.',
      'Year-over-Year (YoY) Growth Engine: Algoritma komparasi tren volume penjualan, nilai GMV, dan performa per kuartal/tahun secara otomatis.',
      'Production Demand Forecasting: Model kalkulasi estimasi kebutuhan kapasitas produksi dan stok gudang berdasarkan historical run-rate transaksi.',
      'Marketing Campaign Impact Matrix: Evaluasi performa produk sebelum, saat, dan sesudah kampanye promosi untuk mengoptimalkan alokasi budget marketing.'
    ],
    keyFeatures: [
      { title: 'Cross-Year Comparative Dashboard', description: 'Visualisasi grafik interaktif tren penjualan tahunan untuk memantau pertumbuhan bisnis dan seasonality pasar.' },
      { title: 'Production Volume Estimator', description: 'Kalkulator kebutuhan suplai produksi pabrik/gudang berdasarkan pola repeat order dan volume item terjual.' },
      { title: 'Product SKU Performance Grid', description: 'Tabel performa item terlaris dengan margin kontribusi dan tingkat perputaran barang (inventory turnover).' }
    ],
    impactMetrics: [
      { value: 'Multi-Channel', label: 'Data Terpadu', description: 'Shopee, Tokopedia, TikTok Shop teragregasi dalam 1 sistem' },
      { value: 'YoY Trends', label: 'Analisis Akurat', description: 'Pemantauan performa bisnis tahunan berbasis data faktual' },
      { value: 'Akurasi Stok', label: 'Perencanaan Produksi', description: 'Meminimalisir overproduction & out-of-stock gudang' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Chart.js Data Engine', 'Client-side Ingestion Parser', 'State Analytics']
  },
  {
    id: 'enterprise-hr-governance',
    title: 'PGE Talent Pool & Post-Test Assessment Matrix Portal',
    category: 'Enterprise HR Tech & Candidate Evaluation Matrix',
    domain: 'hr-enterprise',
    roleBadge: 'HR & Internal Systems Innovator',
    tagline: 'Portal sentral tata kelola talent pool terstruktur yang mengotomasi pelaksanaan asesmen on-site dan menghasilkan matriks evaluasi kompetensi kandidat instan setelah tes selesai.',
    problem: 'Di lingkungan kantor, berkas pelamar tersebar tanpa repositori aman, riwayat seleksi mudah hilang, dan pengoreksian hasil tes asesmen kompetensi memakan waktu berjam-jam secara manual sehingga HR kesulitan memetakan matriks kelayakan kandidat secara objektif.',
    solution: 'Membangun portal kendali talent pool satu pintu (single-pane-of-glass) yang mengintegrasikan repositori kandidat, portal ujian asesmen on-site, dan mesin kalkulasi otomatis yang menerbitkan Matriks Evaluasi Pasca-Tes (Post-Test Competency & Fit Decision Matrix) secara instan seketika kandidat menyelesaikan tes.',
    beforeAfter: {
      before: [
        'CV dan berkas pelamar tercecer di email, spreadsheet, dan folder lokal tanpa repositori terpadu.',
        'Hasil tes asesmen dikoreksi manual berjam-jam tanpa matriks pemetaan kompetensi objektif.',
        'Penjadwalan interview rentan bentrok slot waktu penguji dan feedback penilaian tidak terdokumentasi.'
      ],
      after: [
        'Central Candidate Repository: Master pool database seluruh pelamar aktif terindeks rapi.',
        'Post-Test Evaluation Matrix: Matriks skor kompetensi & kuadran kelayakan terbit instan saat tes disubmit.',
        'Smart Interview Scheduler dengan alokasi slot otomatis & auto-dispatch pesan WhatsApp terstruktur.'
      ],
      roiHighlight: 'Hasil Matriks Evaluasi Terbit Instan & 3x Kecepatan Screening Kandidat'
    },
    architectureDetails: [
      'Candidate Repository Database: Mengindeks dan mengorganisir seluruh data kandidat pelamar, riwayat seleksi, dan status kualifikasi posisi.',
      'On-Site Assessment Engine: Portal interaktif pelaksanaan tes kompetensi teknis di tempat dengan penguncian sesi ujian anti-manipulasi.',
      'Post-Test Candidate Evaluation Matrix: Mesin kalkulasi otomatis yang mengagregasi skor tes kompetensi, logika analitik, dan penilaian peran ke dalam kuadran hiring recommendation instan.',
      'End-to-End Talent Pipeline: Modul tracking kandidat terpadu mulai dari screening CV, scoring asesmen pasca-tes, hingga penawaran kerja (offering).'
    ],
    keyFeatures: [
      { title: 'Post-Test Candidate Evaluation Matrix', description: 'Matriks komparasi multi-dimensi otomatis yang langsung memetakan kompetensi teknis vs kesesuaian peran saat kandidat selesai ujian.' },
      { title: 'On-Site Assessment Portal', description: 'Portal interaktif pelaksanaan asesmen kandidat dengan form pengujian kompetensi langsung di tempat.' },
      { title: 'Structured Scoring Rubric & Decision Grid', description: 'Instrumen rubrik penilaian objektif dengan pembobotan otomatis untuk rekomendasi hiring (Fast Track / Review / Pool).' }
    ],
    impactMetrics: [
      { value: '0 Detik', label: 'Post-Test Matrix', description: 'Matriks evaluasi & kuadran kompetensi terbit instan saat tes selesai' },
      { value: '100%', label: 'Sentralisasi Talent', description: 'Seluruh database kandidat terdata dalam 1 repositori aman' },
      { value: 'Terstandar', label: 'Rubrik Asesmen', description: 'Standardisasi uji kompetensi objektif berbasis kriteria terukur' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Cloud Firestore', 'Assessment Engine', 'RBAC Architecture']
  },
  {
    id: 'methodology-iq',
    title: 'MethodologyIQ — Project Management Decision Support Instrument',
    category: 'Decision Support & Systems Research',
    domain: 'research-methodology',
    roleBadge: 'Empirical Research & Interactive Visualization',
    tagline: 'Instrumen visualisasi interaktif hasil riset komparatif metodologi manajemen proyek (Waterfall vs Agile Scrum vs Hybrid) untuk kemudahan pemahaman dan konsensus tim.',
    problem: 'Banyak pimpinan proyek dan tim rekayasa memilih metode pengembangan hanya berdasarkan tren populer tanpa mempertimbangkan batasan regulasi, stabilitas kebutuhan, dan struktur organisasi riil, yang berujung pada inefisiensi eksekusi proyek.',
    solution: 'Mengembangkan instrumen web interaktif berbasis kerangka riset ilmiah (Thesing et al., 2021) dengan evaluasi 2 tahap (Filter Eliminasi Mutlak + Pembobotan Multi-Kriteria) yang divisualisasikan secara langsung melalui grafik radar perbandingan.',
    beforeAfter: {
      before: [
        'Pemilihan model SDLC Waterfall vs Agile hanya berbasis opini subjektif.',
        'Salah metodologi di tengah jalan mengakibatkan pemborosan budget & rework.',
        'Tidak ada bukti empiris yang bisa diaudit oleh pimpinan / stakeholder.'
      ],
      after: [
        'Keputusan berbasis kerangka riset ilmiah Thesing et al. (2021).',
        'Kalkulasi pembobotan 10 parameter empiris dengan grafik radar visual instan.',
        'Rekomendasi model Hybrid vs Agile vs Waterfall yang akuntabel & audit-ready.'
      ],
      roiHighlight: 'Mengeliminasi Risiko Salah Metodologi & Mencapai Konsensus Cepat'
    },
    architectureDetails: [
      'Elimination Filter Engine: Memeriksa 5 kriteria mutlak (misal: batasan regulasi safety-critical atau kontrak fixed-price) sebelum penilaian mendalam.',
      'Multi-Dimensional Weighted Scoring: Pembobotan dinamis pada fleksibilitas lingkup, otonomi tim, kesiapan organisasi, dan prediktabilitas rilis.',
      'Interactive Comparative Radar: Proyeksi skor kecocokan Waterfall vs Agile vs Hybrid secara visual dan intuitif.',
      'Bilingual State Preservation: Kemudahan berganti bahasa (Indonesia & English) secara instan tanpa mereset input penilaian pengguna.'
    ],
    keyFeatures: [
      { title: '2-Stage Decision Pipeline', description: 'Penyaringan faktor eliminasi mutlak yang dilanjutkan dengan pembobotan multi-parameter terstruktur.' },
      { title: 'Dynamic Multi-Axis Radar Visualizer', description: 'Grafik radar interaktif yang memperlihatkan keunggulan komparatif masing-masing metodologi.' },
      { title: 'Scenario Presets', description: 'Preset studi kasus siap pakai untuk industri Perbankan/Fintech, E-Commerce, dan Perangkat Keras.' }
    ],
    impactMetrics: [
      { value: '15+ Kriteria', label: 'Evaluasi Teruji', description: 'Faktor penilaian berbasis literatur riset ilmiah' },
      { value: 'Interaktif', label: 'Visual Radar', description: 'Memudahkan pemahaman konsep manajemen proyek yang kompleks' },
      { value: 'Konsensus', label: 'Keputusan Cepat', description: 'Membantu tim memilih metodologi yang tepat dalam 1 sesi' }
    ],
    techStack: ['Modern JavaScript', 'TypeScript', 'Tailwind CSS', 'Chart.js Radar Engine', 'GSAP Animation']
  }
];
