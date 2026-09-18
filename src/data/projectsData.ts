export interface EditorialProject {
  id: string;
  title: string;
  category: string;
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
    category: 'Full-Stack Cloud Application',
    tagline: 'Sistem penjadwalan cloud berskala besar dengan algoritma validasi zero-conflict otomatis dan pemerataan rotasi tugas bagi 35 kelompok komunitas.',
    problem: 'Pengelolaan jadwal penugasan ratusan relawan yang sebelumnya dilakukan manual lewat spreadsheet sering berujung pada jadwal bentrok ganda (double-booking), penugasan berturut-turut yang melelahkan petugas, serta koordinasi bulanan yang memakan waktu berhari-hari.',
    solution: 'Membangun platform cloud terpusat dengan algoritma validasi instan 3 lapis yang secara matematis mencegah jadwal bentrok, menyeimbangkan frekuensi giliran tugas secara proporsional, serta mengotomasi pembuatan warta resmi dan format pesan siaran komunikasi.',
    architectureDetails: [
      '3-Tier Zero-Conflict Validator: Memeriksa bentrok antar sesi, bentrok tim koor vs penugasan perorangan, dan jeda istirahat wajib secara real-time.',
      'Fair-Share Rotation Matrix: Algoritma penyeimbang beban pelayanan yang memantau riwayat penugasan 35 komunitas wilayah sepanjang kuartal.',
      '2-Tier Role-Based Security: Pembagian peran Admin dan Penjadwal dengan mekanisme penguncian jadwal resmi (Official Finalization Lock).',
      'Multi-Format Publishing Engine: Mengonversi data jadwal digital menjadi format lembar cetak warta A4 dan format teks WhatsApp 1-klik.'
    ],
    keyFeatures: [
      { title: 'Interactive Calendar Slot Matrix', description: 'Antarmuka kalender modular dengan auto-suggest petugas yang bebas konflik dan siap ditugaskan.' },
      { title: 'Workload Balance Analytics', description: 'Visualisasi grafik proporsi beban pelayanan antar wilayah untuk memastikan transparansi dan keadilan penugasan.' },
      { title: 'Official Revision Locking', description: 'Mencegah perubahan tak sengaja pada jadwal resmi yang telah disahkan melalui mode read-only.' }
    ],
    impactMetrics: [
      { value: '0 Kasus', label: 'Bentrok Jadwal', description: 'Eliminasi 100% penugasan ganda sejak implementasi sistem' },
      { value: '100%', label: 'Pemerataan Beban', description: 'Distribusi tugas antar 35 komunitas terdata objektif' },
      { value: '-80%', label: 'Waktu Koordinasi', description: 'Penyusunan jadwal bulanan selesai dalam 1-2 jam' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Cloud Firestore', 'Cloud Functions', 'RBAC Security'],
    uiTheme: 'emerald'
  },
  {
    id: 'marketplace-ops',
    title: 'Marketplace Transaction & Continuity Operations OS',
    category: 'E-Commerce & High-Throughput Systems',
    tagline: 'Platform sentralisasi data transaksi multi-channel dengan buffer failover offline-resilient dan pemantau kepatuhan batas waktu pengiriman kurir (SLA).',
    problem: 'Pada operasional penjualan multi-channel (Shopee, Tokopedia, TikTok Shop, Lazada), lonjakan pesanan saat kampanye kilat kerap memicu API rate-limiting, webhook gagal, dan risiko pesanan terlewat (unfulfilled) yang berujung pada denda penalti pembatalan otomatis.',
    solution: 'Membangun arsitektur penanganan transaksi real-time dengan buffer antrean lokal (IndexedDB) dan Web Workers background sync yang menjamin data pesanan tidak pernah hilang, disertai watchdog batas waktu kurir yang proaktif.',
    architectureDetails: [
      'Multi-Channel Ingestion & Normalisasi: Mengonversi skema payload pesanan dari berbagai marketplace ke dalam satu format standar terpadu.',
      'Offline-Resilient Failover Queue: Mengamankan event transaksi di buffer lokal terenkripsi saat koneksi API terganggu dan melakukan auto-retry dengan exponential backoff.',
      'Courier SLA Watchdog: Menghitung mundur sisa batas waktu pengiriman (Instant, Same-Day, Regular) dan menaikkan prioritas pesanan yang mendekati batas penyerahan paket.',
      'Financial Discrepancy Matrix: Pencocokan otomatis antara total penjualan bruto (GMV), potongan komisi platform, dan pencairan dana bersih di bank.'
    ],
    keyFeatures: [
      { title: 'Live Normalized Stream Grid', description: 'Tabel transaksi berdensitas tinggi dengan pembaruan status real-time tanpa refresh halaman.' },
      { title: 'Proactive Courier Cutoff Alert', description: 'Peringatan visual saat pesanan mendekati batas penjemputan kurir untuk mencegah sanksi keterlambatan.' },
      { title: 'Self-Healing Sync Buffer', description: 'Mekanisme sinkronisasi otomatis yang menyalurkan kembali antrean pesanan saat gateway online kembali.' }
    ],
    impactMetrics: [
      { value: '99.98%', label: 'Kepatuhan SLA', description: 'Pengiriman paket tepat waktu tanpa denda keterlambatan' },
      { value: '0.00%', label: 'Pesanan Terlewat', description: 'Nol transaksi hilang berkat antrean failover lokal' },
      { value: '+65%', label: 'Efisiensi Audit', description: 'Pencocokan dana harian dari 4 jam menjadi <45 menit' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Web Workers', 'IndexedDB', 'Client-Side State Engine'],
    uiTheme: 'blue'
  },
  {
    id: 'enterprise-nexus',
    title: 'Enterprise Nexus — Spreadsheet & Tooling Governance Portal',
    category: 'Enterprise Internal Platform',
    tagline: 'Portal sentral untuk tata kelola puluhan Google Sheets operasional, pemantauan kesehatan skrip automasi, dan proteksi rumus master perusahaan.',
    problem: 'Di lingkungan kerja yang mengandalkan puluhan Google Sheets antar departemen, sering terjadi kekacauan tautan kerja, skrip automasi yang mati mendadak karena kehabisan kuota Google API, serta rumus formula master tertimpa manual oleh staf.',
    solution: 'Membangun satu portal kendali terpadu (single-pane-of-glass) yang mengindeks seluruh lembar kerja perusahaan, memantau penggunaan kuota API Google secara real-time, dan membatasi akses melalui routing RBAC yang aman.',
    architectureDetails: [
      'Central Spreadsheet Indexer: Memetakan ID sheet, penanggung jawab departemen, dan tingkat sensitivitas data ke database sentral.',
      'Script Quota Health Inspector: Memantau metrik konsumsi kuota harian Google Apps Script (Trigger, URLFetch, Mail) sebelum terjadi kegagalan massal.',
      'Dynamic Destination Selector: Mengarahkan karyawan ke lembar kerja khusus divisinya secara terproteksi tanpa membuka akses ke cell master.',
      'Formula Integrity Shield: Penguncian otomatis formula vital dalam mode read-only berbasis otorisasi token pengguna.'
    ],
    keyFeatures: [
      { title: 'Single-Pane-of-Glass Registry', description: 'Katalog terpadu 24+ spreadsheet operasional lengkap dengan status izin dan penanggung jawab.' },
      { title: 'Real-time API Quota Gauges', description: 'Panel visualisasi persentase kuota eksekusi Google Apps Script untuk mencegah downtime operasional.' },
      { title: 'Department Access Switcher', description: 'Navigasi cepat antar modul divisi (Logistik, Finance, Warehouse, HR) dengan kontrol hak akses ketat.' }
    ],
    impactMetrics: [
      { value: '95%', label: 'Insiden Rumus Rusak', description: 'Penurunan signifikan insiden formula master tertimpa manual' },
      { value: '100%', label: 'Sentralisasi Aset', description: 'Seluruh lembar kerja terdaftar dalam 1 portal resmi terpadu' },
      { value: '99.9%', label: 'Uptime Automasi', description: 'Pencegahan script failure melalui peringatan dini kuota' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Google Apps Script API', 'OAuth 2.0', 'RBAC Architecture'],
    uiTheme: 'indigo'
  },
  {
    id: 'methodology-iq',
    title: 'MethodologyIQ — Software Decision Support System',
    category: 'Decision Intelligence & Systems Research',
    tagline: 'Instrumen evaluasi keputusan metodologi rekayasa perangkat lunak berbasis riset empiris akademis dengan proyeksi radar multi-dimensi.',
    problem: 'Banyak pimpinan engineering memilih metodologi pengembangan (Waterfall, Agile Scrum, atau Hybrid) hanya berdasarkan tren populer, bukan berdasarkan kendala teknis nyata dan batasan regulasi proyek, yang berujung pada kegagalan eksekusi.',
    solution: 'Menyediakan instrumen web interaktif berbasis riset peer-reviewed (Thesing et al., 2021) dengan evaluasi 2 tahap (Filter Eliminasi Mutlak + Pembobotan 15 Kriteria) dan visualisasi radar komparatif real-time.',
    architectureDetails: [
      'Step 1 Knockout Engine: Evaluasi 5 filter mutlak (Faktor keselamatan/safety-critical, kontrak fixed-price, integrasi rilis tunggal).',
      'Step 2 Multi-Criteria Scoring: Pembobotan dinamis pada 5 dimensi inti (Fleksibilitas Lingkup, Kesiapan Organisasi, Otonomi Tim, Target Rilis, Prediktabilitas Biaya).',
      'Dynamic Radar Projection: Menghitung skor kecocokan Waterfall vs Agile vs Hybrid secara real-time pada grafik radar interaktif.',
      'Stateful Dual-Language Engine: Pengalihan bahasa instan (Bahasa Indonesia & English) tanpa kehilangan state penilaian yang sedang diinput.'
    ],
    keyFeatures: [
      { title: '2-Step Knockout & Weighting Pipeline', description: 'Penyaringan otomatis batasan regulasi sebelum masuk ke pembobotan kriteria mendalam.' },
      { title: 'Comparative Multi-Axis Radar Visualizer', description: 'Grafik radar interaktif yang memproyeksikan kekuatan dan kelemahan proyek terhadap masing-masing metodologi.' },
      { title: 'Industry Scenario Presets', description: 'Template skenario 1-klik untuk Fintech/Core Banking, E-Commerce MVP, dan Smart IoT Hardware.' }
    ],
    impactMetrics: [
      { value: '15+', label: 'Kriteria Teruji', description: 'Faktor penilaian berbobot komprehensif berbasis riset' },
      { value: '100%', label: 'Akurasi Eliminasi', description: 'Penyaringan deterministik batasan regulasi dan kontrak' },
      { value: '<10 Min', label: 'Konsensus Tim', description: 'Mencapai kesepakatan metodologi proyek dalam 1 sesi diskusi' }
    ],
    techStack: ['Modern JavaScript', 'HTML5', 'Tailwind CSS', 'Chart.js Radar Engine', 'GSAP Animation'],
    uiTheme: 'amber'
  }
];
