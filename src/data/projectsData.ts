export interface EditorialProject {
  id: string;
  title: string;
  category: string;
  roleBadge: string;
  tagline: string;
  problem: string;
  solution: string;
  architectureDetails: string[];
  keyFeatures: { title: string; description: string }[];
  impactMetrics: { value: string; label: string; description: string }[];
  techStack: string[];
  uiTheme: 'blue' | 'emerald' | 'indigo' | 'amber';
}

export const EDITORIAL_PROJECTS: EditorialProject[] = [
  {
    id: 'community-scheduling',
    title: 'Community Resource Planning & Scheduling Platform',
    category: 'Community & Volunteer Management System',
    roleBadge: 'Full-Stack Developer & Community Initiative',
    tagline: 'Sistem penjadwalan cloud terpusat dengan algoritma validasi zero-conflict otomatis dan pemerataan rotasi tugas bagi 35 kelompok komunitas.',
    problem: 'Pengelolaan jadwal penugasan ratusan relawan dan petugas liturgi yang sebelumnya dilakukan manual lewat lembar spreadsheet sering berujung pada jadwal bentrok ganda (double-booking), penugasan berturut-turut yang melelahkan petugas, serta koordinasi bulanan yang memakan waktu berhari-hari.',
    solution: 'Membangun platform cloud mandiri dengan algoritma validasi instan yang secara matematis mengeliminasi jadwal bentrok, menyeimbangkan frekuensi giliran tugas secara proporsional antar 35 wilayah, serta mengotomasi pembuatan warta resmi dan format pesan siaran komunikasi WhatsApp 1-klik.',
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
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Cloud Firestore', 'Cloud Functions', 'RBAC Security'],
    uiTheme: 'emerald'
  },
  {
    id: 'marketplace-sales-intelligence',
    title: 'Marketplace Sales Intelligence & Production Planning Platform',
    category: 'Enterprise Data Analytics & Forecasting',
    roleBadge: 'Internal Systems & Business Intelligence',
    tagline: 'Platform analitik dan agregasi data transaksi penjualan multi-marketplace lintas tahun untuk dasar pengambilan keputusan, proyeksi kuota produksi, dan strategi marketing kantor.',
    problem: 'Data transaksi penjualan dari berbagai kanal marketplace (Shopee, Tokopedia, TikTok Shop, dll) tersimpan terpisah-pisah dalam format ekspor mentah yang berbeda. Manajemen kesulitan membandingkan tren performa antar tahun (YoY), memperkirakan kebutuhan bahan baku produksi manufaktur, dan mengevaluasi efektivitas kampanye marketing secara holistik.',
    solution: 'Membangun platform agregasi data transaksi sentral di kantor yang menormalisasi seluruh file data penjualan marketplace, menyajikan dashboard visual tren pertumbuhan lintas tahun, dan menghasilkan proyeksi kebutuhan produksi berdasarkan volume penjualan riil per kategori produk.',
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
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Chart.js Data Engine', 'Client-side Ingestion Parser', 'State Analytics'],
    uiTheme: 'blue'
  },
  {
    id: 'enterprise-hr-governance',
    title: 'Enterprise HR & Operations Governance Portal (Nexus & Talent Pool)',
    category: 'Internal Enterprise Portal & HR Tech',
    roleBadge: 'HR & Internal Systems Innovator',
    tagline: 'Portal sentral untuk tata kelola spreadsheet perusahaan—terutama pengawasan file penilaian kinerja karyawan—serta modul screening Talent Pool rekrutmen end-to-end.',
    problem: 'Di lingkungan kantor, puluhan Google Sheets operasional dan lembar Penilaian Kinerja Karyawan tersebar tanpa katalogisasi yang jelas, memicu risiko rumus master terhapus oleh staf, link file hilang, dan proses screening berkas kandidat pelamar yang tidak terstruktur.',
    solution: 'Membangun portal kendali internal satu pintu (single-pane-of-glass) untuk memetakan dan memproteksi seluruh spreadsheet penilaian kinerja aktif, mengawasi kesehatan otomatisasi, serta mengintegrasikan modul Talent Pool untuk screening dan tahapan rekrutmen kandidat secara terpusat.',
    architectureDetails: [
      'Performance Appraisal Sheet Registry: Mengindeks dan memonitor seluruh Google Sheets penilaian kinerja yang sedang aktif dipakai antar departemen.',
      'Master Formula & Permission Shield: Penguncian integritas formula vital dan pengaturan hak akses divisi untuk mencegah kerusakan data manual.',
      'End-to-End Talent Pool Pipeline: Modul tracking kandidat terpadu mulai dari screening CV, scoring penilaian tes, hingga tahapan offering.',
      'Central Operations Navigator: Direktori navigasi cepat ke seluruh program dan alat bantu kerja internal kantor dalam satu dashboard terverifikasi.'
    ],
    keyFeatures: [
      { title: 'Active Performance Sheet Registry', description: 'Katalog status seluruh lembar kerja evaluasi staf lengkap dengan penanggung jawab divisi dan proteksi formula.' },
      { title: 'Talent Pool Screening Board', description: 'Papan manajemen pelamar interaktif dengan status tahapan rekrutmen, catatan wawancara, dan skor kecocokan profil.' },
      { title: 'Internal Tooling Directory', description: 'Satu pintu akses untuk seluruh tautan kerja resmi kantor guna mengeliminasi kebingungan link antar karyawan.' }
    ],
    impactMetrics: [
      { value: '100%', label: 'Sentralisasi Aset', description: 'Seluruh spreadsheet penilaian kinerja terdata dalam 1 portal' },
      { value: 'Zero Data Loss', label: 'Proteksi Formula', description: 'Mencegah insiden penimpaan rumus master secara manual' },
      { value: 'End-to-End', label: 'Talent Pipeline', description: 'Screening pelamar lebih cepat, terdokumentasi rapi' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Google Apps Script API', 'OAuth 2.0', 'RBAC Architecture'],
    uiTheme: 'indigo'
  },
  {
    id: 'methodology-iq',
    title: 'MethodologyIQ — Project Management Decision Support Instrument',
    category: 'Decision Support & Systems Research',
    roleBadge: 'Empirical Research & Interactive Visualization',
    tagline: 'Instrumen visualisasi interaktif hasil riset komparatif metodologi manajemen proyek (Waterfall vs Agile Scrum vs Hybrid) untuk kemudahan pemahaman dan konsensus tim.',
    problem: 'Banyak pimpinan proyek dan tim rekayasa memilih metode pengembangan hanya berdasarkan tren populer tanpa mempertimbangkan batasan regulasi, stabilitas kebutuhan, dan struktur organisasi riil, yang berujung pada inefisiensi eksekusi proyek.',
    solution: 'Mengembangkan instrumen web interaktif berbasis kerangka riset ilmiah (Thesing et al., 2021) dengan evaluasi 2 tahap (Filter Eliminasi Mutlak + Pembobotan Multi-Kriteria) yang divisualisasikan secara langsung melalui grafik radar perbandingan.',
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
    techStack: ['Modern JavaScript', 'TypeScript', 'Tailwind CSS', 'Chart.js Radar Engine', 'GSAP Animation'],
    uiTheme: 'amber'
  }
];
