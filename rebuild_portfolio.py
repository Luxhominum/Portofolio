# -*- coding: utf-8 -*-
import os

# 1. src/types/index.ts
types_code = """export type ProjectCategory = 'all' | 'ecommerce' | 'enterprise' | 'community' | 'decision';

export interface ProjectMetric {
  label: string;
  value: string;
  desc: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  badge?: string;
}

export interface FourPillars {
  alasan: {
    problem: string;
    bottlenecks: string[];
    objective: string;
  };
  caraKerja: {
    architecture: string;
    workflowSteps: string[];
    technicalSpecifications: string[];
  };
  output: {
    deliverables: string[];
    coreFeatures: ProjectFeature[];
  };
  result: {
    metrics: ProjectMetric[];
    impactSummary: string;
  };
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  badge?: string;
  uiType: 'omnipulse' | 'nexus' | 'talent' | 'liturgy' | 'radar' | 'automation';
  stack: string[];
  keyHighlights: string[];
  fourPillars: FourPillars;
}
"""
with open("src/types/index.ts", "w", encoding="utf-8") as f:
    f.write(types_code)

# 2. src/data/mockData.ts
data_code = """import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'omnipulse',
    title: 'OmniPulse',
    subtitle: 'Marketplace Transaction & Business Continuity OS',
    tagline: 'Platform sentralisasi data transaksi multi-channel bervolume tinggi dengan antrean failover offline-resilient dan pemantau kepatuhan SLA kurir otomatis.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & High-Throughput Systems',
    badge: 'Flagship Platform',
    uiType: 'omnipulse',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Web Workers', 'IndexedDB', 'Client-Side State Engine'],
    keyHighlights: [
      'Normalisasi real-time payload pesanan multi-channel (Shopee, Tokopedia, TikTok Shop, Lazada)',
      'Buffer antrean offline berbasis Web Worker untuk menjamin zero data loss saat API rate-limit',
      'Pemantau batas waktu pengiriman kurir (SLA countdown) untuk mencegah pembatalan otomatis',
      'Matriks rekonsiliasi finansial gross-to-net pencairan dana platform secara terperinci'
    ],
    fourPillars: {
      alasan: {
        problem: 'Pada operasional perdagangan multi-channel dengan volume ribuan pesanan harian, bisnis kerap mengalami fragmentasi status pesanan, kegagalan webhook akibat API rate-limit saat periode kampanye kilat, dan risiko pesanan terlewat (unfulfilled) yang menyebabkan sanksi penalti pembatalan.',
        bottlenecks: [
          'Fragmentasi data transaksi lintas 4+ antarmuka marketplace yang berbeda',
          'Keterbatasan laju API (rate-limiting) yang menyebabkan pesanan tidak terverifikasi tepat waktu',
          'Sulitnya memantau batas waktu penyerahan paket ke kurir (SLA cutoff) secara simultan',
          'Selisih rekonsiliasi manual antara total penjualan bruto (GMV) dan dana bersih yang cair di bank'
        ],
        objective: 'Membangun command center terpusat dengan toleransi kegagalan 99.99% yang mengonsolidasikan seluruh alur transaksi dan menjamin kelangsungan operasional (business continuity) tanpa ada pesanan yang tertinggal.'
      },
      caraKerja: {
        architecture: 'Arsitektur Client-Side Resilient Event Stream dengan penyimpanan antrean lokal terenkripsi (IndexedDB) dan pemrosesan latar belakang berbasis Web Workers.',
        workflowSteps: [
          'Ingestion & Normalisasi: Mengonversi format payload acak dari berbagai channel marketplace ke dalam satu skema data transaksi terpadu.',
          'Local-First Failover Buffer: Ketika koneksi jaringan atau API marketplace terganggu, data transaksi disimpan dalam buffer lokal dan disinkronisasi ulang secara otomatis saat koneksi pulih.',
          'SLA Watchdog Countdown: Menghitung mundur sisa batas waktu proses berdasarkan jenis layanan kurir (Instant, Same-Day, Regular) dan menyorot pesanan prioritas tinggi.',
          'Settlement Reconciliation Checker: Membandingkan total GMV pesanan terhadap potongan komisi platform dan diskon voucher untuk mendeteksi selisih finansial secara instan.'
        ],
        technicalSpecifications: [
          'Optimasi React 19 Concurrent Rendering untuk memproses ribuan baris data transaksi tanpa freeze',
          'Web Worker multithreading untuk komputasi antrean tanpa membebani antarmuka pengguna',
          'State isolation per modul untuk memastikan performa rendering tetap di 60 FPS'
        ]
      },
      output: {
        deliverables: [
          'Dashboard Command Center Transaksi (Studio Light Density)',
          'Modul Failover Buffer & Sync Log Inspector',
          'Panel Rekonsiliasi Finansial & Matriks SLA Kurir'
        ],
        coreFeatures: [
          { title: 'Live Normalized Stream Table', description: 'Tabel data transaksi multi-channel terpadu dengan status seragam (Pending, Ready to Pack, Dispatched, Settled).' },
          { title: 'SLA Courier Countdown Watcher', description: 'Indikator sisa batas waktu pengiriman dengan peringatan visual saat pesanan mendekati cutoff kurir.' },
          { title: 'Offline Failover Queue Monitor', description: 'Panel pemantau antrean pesanan yang tersimpan di buffer lokal saat terjadi gangguan gateway.' },
          { title: 'Discrepancy Reconciliation Matrix', description: 'Pemeriksaan otomatis kesesuaian nilai bruto transaksi dengan pencairan dana aktual.' }
        ]
      },
      result: {
        metrics: [
          { label: 'Tingkat Kepatuhan SLA', value: '99.98%', desc: 'Pemenuhan pesanan tepat waktu tanpa denda keterlambatan' },
          { label: 'Transaksi Terlewat', value: '0.00%', desc: 'Nol data hilang berkat sistem buffer failover antrean lokal' },
          { label: 'Efisiensi Waktu Rekonsiliasi', value: '+65%', desc: 'Pencocokan dana harian dipangkas dari 4 jam menjadi <45 menit' }
        ],
        impactSummary: 'Menghilangkan seluruh sanksi keterlambatan pengiriman paket dan memberikan kontrol visibilitas penuh kepada tim operasional bahkan saat terjadi lonjakan pesanan hingga puluhan ribu transaksi.'
      }
    }
  },
  {
    id: 'nexus-portal',
    title: 'Enterprise Nexus',
    subtitle: 'Centralized Systems Hub & Spreadsheet Governance Portal',
    tagline: 'Portal kendali sentral untuk tata kelola puluhan Google Sheets operasional, pemantauan kesehatan skrip automasi, dan kontrol akses berbasis peran (RBAC).',
    category: 'enterprise',
    categoryLabel: 'Enterprise Governance & Operations',
    badge: 'Enterprise Hub',
    uiType: 'nexus',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Google Apps Script API', 'OAuth 2.0', 'RBAC Architecture'],
    keyHighlights: [
      'Sentralisasi seluruh spreadsheet operasional dan script add-on perusahaan dalam 1 katalog resmi',
      'Pemantauan kuota Google API dan status kesehatan eksekusi script automasi secara real-time',
      'Role-Based Access Control (RBAC) dengan Destination Selector untuk routing data antar divisi',
      'Proteksi formula master spreadsheet untuk mencegah kerusakan rumus akibat human error'
    ],
    fourPillars: {
      alasan: {
        problem: 'Di lingkungan perusahaan yang mengoperasikan puluhan Google Sheets antar departemen, sering terjadi tautan kerja yang tercecer, skrip automasi yang mati tanpa diketahui karena kuota habis, serta insiden formula rumus master terhapus oleh staf yang tidak berwenang.',
        bottlenecks: [
          'Tautan spreadsheet operasional tersebar di berbagai bookmark tanpa pengawasan terpusat',
          'Skrip internal mengalami kegagalan eksekusi tanpa ada sistem peringatan dini',
          'Karyawan salah menginput data pada kolom master milik departemen lain',
          'Sulitnya mengatur hak akses lembar kerja saat terjadi rotasi atau pergantian personel'
        ],
        objective: 'Membangun satu portal kendali terpadu (single-pane-of-glass) yang mengindeks seluruh lembar kerja perusahaan, mengamankan rumus master, dan memonitor kesehatan skrip operasional.'
      },
      caraKerja: {
        architecture: 'Arsitektur Portal Sentral dengan antarmuka web modern yang terintegrasi dengan Google Workspace API dan layer otorisasi peran bertingkat.',
        workflowSteps: [
          'Catalog Indexing: Mengindeks ID lembar kerja, penanggung jawab departemen, dan tingkat sensitivitas data ke dalam repositori sentral.',
          'Script Health Watchdog: Memonitor metrik penggunaan kuota API Google (Trigger, URLFetch, Mail, Execution Duration) secara periodik.',
          'Dynamic Destination Selector: Mengarahkan pengguna langsung ke tampilan lembar kerja yang aman sesuai divisinya tanpa memberikan izin ubah pada baris master.',
          'Formula Integrity Protection: Memvalidasi integritas rumus dan mengunci cell penting dalam mode read-only berbasis otorisasi token.'
        ],
        technicalSpecifications: [
          'Integrasi terverifikasi dengan Google Apps Script REST API dan Clasp CLI',
          'Sistem verifikasi token RBAC (Superadmin, Division Lead, Staff Operasional)',
          'Pencatatan log audit akses karyawan dan riwayat eksekusi sistem'
        ]
      },
      output: {
        deliverables: [
          'Enterprise Command Center Web Portal',
          'Script Inspector & Quota Health Panel',
          'Destination Selector Modal Add-on'
        ],
        coreFeatures: [
          { title: 'Central Spreadsheet Registry', description: 'Katalog terpadu 24+ lembar kerja operasional lengkap dengan status izin dan penanggung jawab.' },
          { title: 'API Quota Health Inspector', description: 'Visualisasi persentase konsumsi kuota Google Apps Script harian untuk mencegah script failure.' },
          { title: 'Department Workspace Switcher', description: 'Navigasi cepat antar modul divisi (Logistik, Finance, Warehouse, HR) dengan filter RBAC.' },
          { title: 'Master Formula Shield', description: 'Pemberian peringatan dan penguncian otomatis pada cell formula vital dari modifikasi tak sengaja.' }
        ]
      },
      result: {
        metrics: [
          { label: 'Penurunan Insiden Formula Rusak', value: '95%', desc: 'Mencegah kerusakan rumus master pada seluruh spreadsheet perusahaan' },
          { label: 'Sentralisasi Aset Kerja', value: '100%', desc: 'Seluruh spreadsheet dan tools internal terdaftar dalam 1 portal resmi' },
          { label: 'Kesiapan Uptime Sistem', value: '99.9%', desc: 'Pencegahan kegagalan skrip mendadak melalui notifikasi kuota dini' }
        ],
        impactSummary: 'Menghilangkan kebingungan tautan kerja lintas divisi dan memastikan data operasional perusahaan selalu akurat, aman, dan dapat diakses dengan cepat.'
      }
    }
  },
  {
    id: 'talentpulse',
    title: 'TalentPulse',
    subtitle: 'End-to-End Recruitment & Talent Pool ATS',
    tagline: 'Sistem rekrutmen lengkap (Applicant Tracking System) dengan papan visual kanban pipeline, scorecard penilaian terbobot, dan arsip talent pool siap panggil.',
    category: 'enterprise',
    categoryLabel: 'HR Tech & Recruitment Intelligence',
    badge: 'Recruitment OS',
    uiType: 'talent',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Scorecard Evaluation Engine'],
    keyHighlights: [
      'Papan kanban rekrutmen visual untuk memantau perjalanan kandidat dari screening hingga offering',
      'Formulir penilaian wawancara terstandarisasi (Weighted Interview Scorecard) untuk eliminasi bias',
      'Algoritma penghitung skor kecocokan kualifikasi (Skill-Fit Index) otomatis per pelamar',
      'Database Talent Pool terindeks untuk pemanggilan kembali kandidat berkualitas di masa depan'
    ],
    fourPillars: {
      alasan: {
        problem: 'Proses perekrutan konvensional sering terhambat oleh berkas CV yang tercecer di berbagai email, evaluasi wawancara yang tidak terstandarisasi antar interviewer, serta hilangnya kontak kandidat berbakat (silver medalists) yang tidak terpilih pada posisi sebelumnya.',
        bottlenecks: [
          'Berkas pelamar menumpuk tanpa status tahapan seleksi yang transparan',
          'Penilaian wawancara bersifat subjektif dan sulit dibandingkan secara adil',
          'Durasi proses seleksi (time-to-hire) yang berlarut-larut hingga berminggu-minggu',
          'Biaya iklan lowongan kerja berulang karena tidak memiliki arsip talent pool terstruktur'
        ],
        objective: 'Membangun platform rekrutmen modern yang mempercepat proses seleksi kandidat secara objektif dan mengarsipkan talent pool untuk efisiensi perekrutan jangka panjang.'
      },
      caraKerja: {
        architecture: 'Multi-stage recruitment workflow engine dengan visual kanban state machine dan sistem pembobotan kriteria evaluasi otomatis.',
        workflowSteps: [
          'Visual Pipeline Ingestion: Mengelompokkan berkas pelamar ke dalam tahapan terstruktur (Screening ➔ Tech Assessment ➔ User Interview ➔ Offering ➔ Hired).',
          'Automated Skill-Fit Analyzer: Membandingkan kata kunci kompetensi kandidat dengan kriteria posisi untuk menghasilkan indeks kecocokan (Fit Score).',
          'Weighted Interview Scorecard: Interviewer mengisi penilaian objektif berdasarkan parameter teknis, problem solving, dan cultural fit.',
          'Talent Pool Vault: Kandidat berkualitas yang belum lolos kuota dialihkan ke database talent pool terindeks untuk re-engagement di masa mendatang.'
        ],
        technicalSpecifications: [
          'State persistence modular untuk pelacakan riwayat evaluasi kandidat',
          'Antarmuka visual kanban fluid dengan transisi responsif',
          'Mesin pencarian multivariat berbasis skill, pengalaman, dan ekspektasi gaji'
        ]
      },
      output: {
        deliverables: [
          'Interactive Recruitment Kanban Board',
          'Candidate 360 Profile & Scorecard Modal',
          'Searchable Talent Pool Search Engine'
        ],
        coreFeatures: [
          { title: 'Kanban Stage Pipeline', description: 'Pemantauan alur status kandidat real-time dengan kartu ringkasan kualifikasi dan SLA respon.' },
          { title: 'Weighted Evaluation Scorecard', description: 'Formulir penilaian terstruktur dengan grafik radar bobot kompetensi per kandidat.' },
          { title: 'Talent Pool Search Engine', description: 'Filter pencarian instan database kandidat tersimpan berdasarkan keahlian teknis dan lokasi.' },
          { title: 'Recruitment Funnel Metrics', description: 'Dasbor analitik konversi tahapan seleksi dan pemantauan kecepatan time-to-hire.' }
        ]
      },
      result: {
        metrics: [
          { label: 'Percepatan Time-to-Hire', value: '50%', desc: 'Memangkas siklus perekrutan dari 30 hari menjadi 15 hari' },
          { label: 'Transparansi Evaluasi', value: '100%', desc: 'Seluruh catatan penilaian tersimpan rapi dan dapat diaudit manajemen' },
          { label: 'Penghematan Sourcing Cost', value: '40%', desc: 'Memanfaatkan bank data talent pool sebelum membuka iklan baru' }
        ],
        impactSummary: 'Menghadirkan proses rekrutmen yang terstruktur, cepat, dan objektif sehingga tim engineering mendapatkan talenta terbaik dengan efisiensi biaya maksimal.'
      }
    }
  },
  {
    id: 'liturgyflow',
    title: 'Community Resource Planning (LiturgyFlow)',
    subtitle: 'Automated Multi-Community Scheduling Cloud SaaS',
    tagline: 'Sistem penjadwalan cloud berskala besar dengan algoritma validasi zero-conflict 3 lapis dan pemerataan beban tugas bagi 35 kelompok komunitas.',
    category: 'community',
    categoryLabel: 'Community Cloud SaaS',
    badge: 'Cloud Architecture',
    uiType: 'liturgy',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Cloud Firestore', 'Cloud Functions', 'RBAC Security Rules'],
    keyHighlights: [
      'Algoritma validasi otomatis 3 lapis untuk mengeliminasi bentrok jadwal penugasan ganda',
      'Matriks rotasi pemerataan pelayanan (Fair-Share Distribution) antar 35 komunitas wilayah',
      'Otorisasi keamanan 2 tingkat (Admin vs Scheduler) dengan penguncian integritas jadwal resmi',
      'Generator dokumen warta cetak resmi A4 dan format pesan siaran WhatsApp 1-klik'
    ],
    fourPillars: {
      alasan: {
        problem: 'Pengelolaan jadwal penugasan relawan berskala besar (ratusan petugas di puluhan wilayah) yang sebelumnya dikelola manual via spreadsheet rentan bentrok ganda (double-booking) antar sesi dan beban tugas yang tidak merata.',
        bottlenecks: [
          'Bentrok penugasan pada petugas yang sama di hari yang sama',
          'Ketidakmerataan giliran tugas yang menyebabkan kelelahan pada kelompok tertentu',
          'Penyusunan jadwal manual yang memakan waktu berhari-hari setiap bulan',
          'Risiko perubahan atau penghapusan jadwal resmi yang tidak sengaja'
        ],
        objective: 'Membangun aplikasi cloud kolaboratif terpusat yang menjamin nol bentrok jadwal, pembagian tugas yang adil, dan distribusi informasi jadwal resmi yang cepat.'
      },
      caraKerja: {
        architecture: 'Cloud-native Single Page Application dengan database dokumen real-time dan komputasi analitik pemerataan di cloud functions.',
        workflowSteps: [
          'Slot Grid Mapping: Memetakan seluruh kebutuhan sesi penugasan bulanan ke dalam matriks kalender interaktif.',
          '3-Tier Conflict Engine: Memvalidasi ketersediaan petugas secara otomatis (bentrok antar sesi, bentrok tugas tim vs perorangan, dan jeda istirahat wajib).',
          'Fair-Share Rotation Index: Menghitung riwayat frekuensi penugasan per komunitas untuk menjaga keseimbangan beban pelayanan.',
          'Official Lock & Multi-Channel Export: Jadwal berstatus FINAL dikunci dari perubahan dan langsung dikonversi menjadi dokumen cetak A4 dan teks WhatsApp.'
        ],
        technicalSpecifications: [
          'State manajemen reaktif berbasis event untuk pembaruan jadwal instan',
          'Cloud security rules ketat untuk pemisahan hak akses Admin dan Penjadwal',
          'Kompresi data jadwal untuk responsivitas aplikasi yang sangat cepat'
        ]
      },
      output: {
        deliverables: [
          'Interactive Scheduling Matrix Web Application',
          'Workload Fair-Share Analytics Dashboard',
          'Automated Official A4 Bulletin & WhatsApp Generator'
        ],
        coreFeatures: [
          { title: 'Zero-Conflict Calendar Grid', description: 'Grid kalender interaktif dengan auto-suggest petugas yang bebas bentrok dan siap bertugas.' },
          { title: 'Fair-Share Distribution Chart', description: 'Visualisasi grafik proporsi beban penugasan per komunitas wilayah sepanjang kuartal.' },
          { title: 'Official Finalization Lock', description: 'Mekanisme proteksi baca-saja untuk jadwal resmi yang telah disahkan pimpinan.' },
          { title: '1-Click Multi-Channel Formatter', description: 'Ekspor instan warta resmi siap cetak dan template teks siaran WhatsApp rapi.' }
        ]
      },
      result: {
        metrics: [
          { label: 'Insiden Bentrok Jadwal', value: '0 Kasus', desc: '100% bebas dari penugasan ganda sejak sistem diimplementasikan' },
          { label: 'Keseimbangan Beban Tugas', value: '100%', desc: 'Pemerataan giliran terdata transparan antar 35 komunitas wilayah' },
          { label: 'Efisiensi Waktu Koordinasi', value: '-80%', desc: 'Penyusunan jadwal bulanan tuntas dalam 1-2 jam dari sebelumnya berhari-hari' }
        ],
        impactSummary: 'Mentransformasikan tata kelola pelayanan komunitas menjadi standar digital modern yang transparan, minim stres koordinasi, dan bebas kesalahan penugasan.'
      }
    }
  },
  {
    id: 'methodologyiq',
    title: 'MethodologyIQ',
    subtitle: 'Research-Grounded Software Decision Support System',
    tagline: 'Instrumen evaluasi keputusan metodologi rekayasa perangkat lunak berbasis riset empiris akademis dengan visualisasi radar dinamis.',
    category: 'decision',
    categoryLabel: 'Decision Intelligence & Systems Research',
    badge: 'Research Model',
    uiType: 'radar',
    stack: ['Modern JavaScript', 'HTML5', 'Tailwind CSS', 'Chart.js Radar Engine', 'GSAP Animation'],
    keyHighlights: [
      'Model keputusan matematis berlandaskan riset ilmiah peer-reviewed (Thesing et al., 2021)',
      'Pipeline evaluasi 2 tahap: 5 Filter Eliminasi Mutlak (Knockout) + 15 Kriteria Berbobot',
      'Visualisasi Radar Komparatif real-time (Waterfall vs Agile vs Hybrid Water-Scrum-Fall)',
      'Pengalihan bahasa reaktif (Bahasa Indonesia & English) tanpa kehilangan input penilaian'
    ],
    fourPillars: {
      alasan: {
        problem: 'Banyak manajer engineering dan pimpinan proyek memilih metodologi pengembangan (Waterfall, Agile Scrum, atau Hybrid) hanya berdasarkan tren, bukan berdasarkan karakteristik teknis dan kendala nyata proyek, yang berujung pada kegagalan eksekusi.',
        bottlenecks: [
          'Tidak adanya instrumen objektif berbasis riset dalam menentukan tata kelola proyek',
          'Asumsi keliru bahwa Agile cocok untuk semua skenario tanpa mempertimbangkan regulasi',
          'Kesulitan memvisualisasikan trade-off antar kriteria proyek kepada para stakeholder'
        ],
        objective: 'Menyediakan instrumen web interaktif berbasis riset akademis yang membantu tim engineering memilih metodologi software development secara presisi, terjustifikasi, dan terukur.'
      },
      caraKerja: {
        architecture: 'Client-Side Decision Intelligence Engine dengan kalkulasi pembobotan dinamis dan perenderan radar chart analitik.',
        workflowSteps: [
          'Step 1 Knockout Filter: Mengevaluasi 5 batasan deterministik mutlak (Safety-critical, kontrak fixed-price, dan limitasi rilis tunggal).',
          'Step 2 Multi-Criteria Scoring: Pembobotan dinamis pada 5 dimensi utama (Fleksibilitas Lingkup, Kesiapan Organisasi, Otonomi Tim, Waktu Rilis, Prediktabilitas Biaya).',
          'Real-Time Radar Projection: Memproyeksikan skor kesesuaian masing-masing metodologi ke dalam grafik radar interaktif.',
          'Process Pipeline Simulation: Menampilkan visualisasi alur Stage-Gate Waterfall vs Sprint Cadence 2 Mingguan secara animasi.'
        ],
        technicalSpecifications: [
          'Mesin kalkulasi matematis instan tanpa latensi server',
          'Perenderan grafik radar responsif berbasis Chart.js',
          'Dukungan dwi-bahasa (ID/EN) reaktif'
        ]
      },
      output: {
        deliverables: [
          'Interactive Decision Support System Web Tool',
          'Multi-Criteria Radar Scorecard Visualizer',
          'Interactive Process Pipeline Simulator'
        ],
        coreFeatures: [
          { title: '2-Step Knockout & Weighting Engine', description: 'Penyaringan otomatis batasan regulasi dan penilaian 15 kriteria berbobot.' },
          { title: 'Dynamic Multi-Axis Radar Chart', description: 'Visualisasi komparasi kekuatan dan kelemahan proyek terhadap masing-masing metodologi.' },
          { title: 'Interactive Process Architecture', description: 'Simulasi alur Waterfall Stage-Gate vs Sprint Iteration Agile secara visual.' },
          { title: 'Industry Preset Templates', description: 'Skenario 1-klik untuk Fintech/Core Banking, E-Commerce MVP, dan Smart IoT Hardware.' }
        ]
      },
      result: {
        metrics: [
          { label: 'Kriteria Evaluasi Teruji', value: '15+', desc: 'Faktor penilaian berbobot berbasis riset akademis' },
          { label: 'Akurasi Filter Eliminasi', value: '100%', desc: 'Penyaringan deterministik batasan regulasi/kontrak' },
          { label: 'Kecepatan Konsensus Tim', value: '<10 Menit', desc: 'Mencapai kesepakatan metodologi proyek dalam 1 sesi diskusi' }
        ],
        impactSummary: 'Menghadirkan instrumen pengambil keputusan berstandar akademik yang meminimalisir risiko kegagalan proyek perangkat lunak akibat salah pilih metodologi.'
      }
    }
  },
  {
    id: 'automation-suite',
    title: 'Enterprise Automation Suite',
    subtitle: 'Embedded Workspace Tools & SEO Data Scraper',
    tagline: 'Custom embedded add-on Google Sheets untuk pelacakan status pesanan harian dan skrip ekstraksi pohon kueri pencarian otomatis di Python.',
    category: 'enterprise',
    categoryLabel: 'Workflow Digitization & Search Expansion',
    badge: 'Internal Tools',
    uiType: 'automation',
    stack: ['Google Apps Script (HTML Service)', 'JavaScript ES6', 'Python', 'Google Suggestion Tree API'],
    keyHighlights: [
      'Custom embedded sidebar di dalam Google Sheets untuk pelacakan dan validasi pesanan menggantung',
      'Mesin pemrosesan dan rekapitulasi data massal otomatis dari ribuan baris log operasional',
      'Skrip Python penelusuran pohon saran mesin pencari untuk riset kata kunci long-tail otomatis',
      'Integrasi alur kerja langsung tanpa instalasi aplikasi pihak ketiga yang rumit'
    ],
    fourPillars: {
      alasan: {
        problem: 'Banyak operasional bisnis terjebak dalam proses manual penyalinan data, pelacakan status pesanan yang menggantung di spreadsheet, dan lambatnya pengumpulan kueri pencarian pasar untuk kebutuhan optimasi SEO.',
        bottlenecks: [
          'Pemeriksaan status pesanan satu per satu di spreadsheet memakan waktu berjam-jam',
          'Human error tinggi saat menyalin dan merekapitulasi data absensi massal',
          'Riset kata kunci manual hanya menangkap variasi pencarian yang dangkal'
        ],
        objective: 'Membangun antarmuka web add-on langsung di dalam lembar kerja Google serta skrip ekstraksi data otomatis untuk memangkas pekerjaan manual hingga 90%.'
      },
      caraKerja: {
        architecture: 'Kombinasi Google Apps Script (HTML Service) untuk antarmuka add-on spreadsheet dan skrip Python untuk ekstraksi data pencarian.',
        workflowSteps: [
          'Embedded HTML Service Sidebar: Membuka antarmuka interaktif responsif langsung di panel samping spreadsheet.',
          'Batch Data Aggregator: Mengiterasi ribuan baris log, memvalidasi status unik, dan menyusun rekapitulasi siap baca.',
          'Recursive Search Intent Scraper: Menelusuri pohon saran mesin pencari dengan ekspansi kueri otomatis untuk mengekstrak ratusan variasi kata kunci.'
        ],
        technicalSpecifications: [
          'Antarmuka embedded responsif di Google Workspace',
          'Manajemen versi skrip cloud dengan Clasp CLI',
          'Pemrosesan JSON dan ekspor CSV terstruktur di Python'
        ]
      },
      output: {
        deliverables: [
          'Google Sheets Unfinished Orders Sidebar Add-on',
          'Daily Batch Aggregator Engine',
          'Python Keyword Research CLI Tool'
        ],
        coreFeatures: [
          { title: 'Embedded Order Tracker Sidebar', description: 'Panel kontrol interaktif di samping spreadsheet untuk memvalidasi dan memonitor pesanan menggantung.' },
          { title: 'Automated Daily Aggregator', description: 'Penyusunan rekapitulasi data operasional otomatis dalam hitungan detik.' },
          { title: 'Recursive Suggestion Tree Scraper', description: 'Pengekstrak variasi kata kunci long-tail terstruktur untuk strategi optimasi SEO.' }
        ]
      },
      result: {
        metrics: [
          { label: 'Penurunan Beban Manual', value: '90%', desc: 'Pemangkasan waktu kerja rekapitulasi data harian' },
          { label: 'Kecepatan Pemrosesan Data', value: 'Detik', desc: 'Pemrosesan ribuan baris data dalam 1-klik' },
          { label: 'Ekspansi Kata Kunci', value: '10x Lipat', desc: 'Ekstraksi query intent pencarian lebih dalam dan cepat' }
        ],
        impactSummary: 'Mengubah alur kerja manual spreadsheet menjadi proses otomatis yang cepat, minim kesalahan manusia, dan terintegrasi langsung dengan operasional bisnis harian.'
      }
    }
  }
];
"""
with open("src/data/mockData.ts", "w", encoding="utf-8") as f:
    f.write(data_code)

print("Types and MockData rebuilt cleanly.")
