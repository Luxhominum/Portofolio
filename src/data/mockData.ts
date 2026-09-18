import type { Project, MockTransaction, Candidate, ScriptService } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'omnipulse',
    title: 'OmniPulse',
    subtitle: 'Marketplace Transaction & Business Continuity OS',
    tagline: 'High-throughput multi-channel transaction stream, offline-resilient failover queue, and automated SLA compliance engine.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Operations',
    badge: 'Flagship OS',
    liveUrl: '#',
    githubUrl: 'https://github.com/example/omnipulse-continuity-os',
    demoType: 'omnipulse',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Web Workers', 'IndexedDB', 'Lucide'],
    highlights: [
      'Multi-channel real-time transaction ingestion stream (Shopee, Tokopedia, TikTok Shop)',
      'Offline-resilient failover queue with Web Workers auto-retry',
      'Proactive SLA breach countdown timers with courier cutoff alarms',
      'Automated gross-to-net financial settlement reconciliation matrix'
    ],
    fourPillars: {
      alasan: {
        problem: 'Pada operasional multi-channel marketplace bervolume tinggi, pesanan kerap mengalami fragmentasi data, webhook gagal akibat API rate-limit saat kampanye kilat, dan risiko pesanan terlewat (unfulfilled orders) yang memicu penalti pembatalan otomatis.',
        bottlenecks: [
          'Fragmentasi data transaksi antar 4+ marketplace berbeda',
          'API downtime & rate-limiting menyebabkan pesanan tidak terproses tepat waktu',
          'Sulitnya memantau batas waktu kurir (SLA cutoff) secara simultan',
          'Selisih rekonsiliasi manual antara GMV bruto dan pencairan bank bersih'
        ],
        objective: 'Membangun command center terpusat dengan toleransi gangguan 99.99% (business continuity) sehingga tidak ada pesanan yang terlewat atau melewati batas waktu pengiriman.'
      },
      caraKerja: {
        architecture: 'Arsitektur Client-Side Resilient Event Ingestion dengan antrean lokal terenkripsi (IndexedDB) dan Web Worker background processor.',
        mechanics: [
          'Event Ingestion & Normalisasi: Menyelaraskan format payload order acak dari berbagai marketplace ke skema terstandarisasi.',
          'Local-First Failover Queue: Saat koneksi gateway terputus, event disimpan di buffer lokal dan disinkronisasi otomatis dengan backoff exponential.',
          'SLA Watchdog Algorithm: Menghitung mundur sisa waktu pemrosesan berdasarkan jenis kurir (Instant, Same-Day, Regular) dan menaikkan prioritas pesanan kritis.',
          'Reconciliation Discrepancy Matrix: Membandingkan total GMV pesanan terhadap potongan komisi platform dan mendeteksi anomali selisih secara otomatis.'
        ],
        techDetails: 'Dibangun dengan React 19 concurrent features, TypeScript strictly typed interfaces, dan zero-lag state isolation untuk menangani ribuan baris transaksi.'
      },
      output: {
        features: [
          'High-density Studio Light Transaction Table dengan filtering multi-parameter',
          'Simulasi Network Blackout & Self-Healing Queue interaktif',
          'Bulk Packing Slip & Batch Dispatch Generator',
          'Millisecond-precision Audit Trail Log untuk setiap perubahan status pesanan'
        ],
        deliverables: [
          'Production Web Application Dashboard',
          'Web Worker Sync Engine Script',
          'Modul Visualisasi Metrik SLA & Finansial'
        ]
      },
      result: {
        metrics: [
          { label: 'SLA Compliance Rate', value: '99.98%', desc: 'Pemenuhan pesanan tepat waktu tanpa penalti keterlambatan' },
          { label: 'Lost Transactions', value: '0.00%', desc: 'Zero data loss berkat failover queue buffer' },
          { label: 'Reconciliation Speed', value: '+65%', desc: 'Pencocokan dana harian dari 4 jam menjadi <45 menit' }
        ],
        impactSummary: 'Menghilangkan seluruh penalti keterlambatan pengiriman dan memberikan visibilitas operasional penuh kepada tim fulfillment bahkan saat lonjakan transaksi kampanye besar.'
      }
    },
    sandboxAvailable: true
  },
  {
    id: 'nexus-portal',
    title: 'Enterprise Nexus',
    subtitle: 'Company Portal & Centralized Systems Control Hub',
    tagline: 'Single-pane-of-glass governance portal centralizing internal spreadsheets, script health monitoring, and role-based access.',
    category: 'enterprise',
    categoryLabel: 'Enterprise Systems',
    badge: 'Enterprise Hub',
    liveUrl: '#',
    githubUrl: 'https://github.com/example/enterprise-nexus-portal',
    demoType: 'nexus',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Google Apps Script API', 'OAuth 2.0', 'RBAC Engine'],
    highlights: [
      'Sentralisasi seluruh Google Sheets operasional dan custom scripts perusahaan',
      'Real-time Script Quota & Failure Health Inspector',
      'Dynamic Role-Based Access Control (RBAC) & Destination Routing',
      'Automated snapshot & master formula integrity protection'
    ],
    fourPillars: {
      alasan: {
        problem: 'Di lingkungan perusahaan dengan puluhan Google Sheets operasional dan script add-on, terjadi fragmentasi tautan kerja, hilangnya visibilitas kuota API Google, serta tingginya risiko kerusakan rumus master oleh karyawan tanpa hak akses yang sesuai.',
        bottlenecks: [
          'Tautan spreadsheet operasional tersebar tanpa katalog terpusat',
          'Script internal mengalami kegagalan/kuota habis tanpa notifikasi awal',
          'Karyawan salah menginput data pada sheet master divisi lain',
          'Sulitnya mengelola izin akses saat terjadi pergantian staf'
        ],
        objective: 'Menyediakan satu portal sentral terpadu (single-pane-of-glass) yang mengamankan integritas data spreadsheet perusahaan dan memantau kesehatan modul automasi secara real-time.'
      },
      caraKerja: {
        architecture: 'Unified Web Portal yang berkomunikasi dengan Google Apps Script API, mengindeks metadata sheet, serta mengatur routing berdasarkan otorisasi peran pengguna.',
        mechanics: [
          'Central Registry Indexer: Memetakan ID sheet, penanggung jawab divisi, dan status link ke database katalog terpadu.',
          'Script Health Inspector: Memeriksa tingkat penggunaan kuota API (Trigger, URLFetch, Mail) dan mencatat riwayat kegagalan eksekusi.',
          'Dynamic Destination Selector: Mengarahkan pengguna langsung ke tampilan sheet yang aman sesuai divisi (Logistics, Finance, HR) tanpa membuka akses ke baris sensitif.',
          'Automated Integrity Guard: Validasi berkala untuk memastikan formula utama tidak tertimpa nilai statis.'
        ],
        techDetails: 'Arsitektur modular dengan antarmuka Studio Light UI, caching status servis lokal, dan sistem otorisasi token RBAC.'
      },
      output: {
        features: [
          'Enterprise Command Center Dashboard dengan filter divisi cepat',
          'Panel Pemantau Kuota & Status Kesehatan Skrip Otomatis',
          'Destination Selector Dialog untuk routing alur kerja aman',
          'Log Audit Akses Karyawan & Riwayat Eksekusi Program'
        ],
        deliverables: [
          'Web App Portal Manajemen Internal',
          'Modul Script Inspector & Error Alert',
          'Template Struktur Tata Kelola Spreadsheet Perusahaan'
        ]
      },
      result: {
        metrics: [
          { label: 'Formula Error Reduction', value: '95%', desc: 'Penurunan insiden rumus spreadsheet tertimpa manual' },
          { label: 'Asset Centralization', value: '100%', desc: 'Seluruh sheet & tool internal terpusat dalam 1 portal resmi' },
          { label: 'System Uptime', value: '99.9%', desc: 'Pencegahan kegagalan skrip mendadak melalui quota alert' }
        ],
        impactSummary: 'Menghilangkan kebingungan tautan kerja lintas departemen dan menjamin keamanan integritas data spreadsheet operasional perusahaan secara menyeluruh.'
      }
    },
    sandboxAvailable: true
  },
  {
    id: 'talentpulse',
    title: 'TalentPulse',
    subtitle: 'End-to-End Recruitment & Talent Pool Intelligence',
    tagline: 'Visual candidate pipeline kanban, weighted competency scorecards, and instant searchable talent pool database.',
    category: 'enterprise',
    categoryLabel: 'HR Tech & ATS',
    badge: 'Recruitment OS',
    liveUrl: '#',
    githubUrl: 'https://github.com/example/talentpulse-ats',
    demoType: 'talent',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Scorecard Engine', 'Lucide'],
    highlights: [
      'Visual drag-and-drop recruitment kanban pipeline',
      'Standardized weighted competency scorecard (Technical, Problem Solving, Culture)',
      'Automated Skill-Fit matching score per applicant',
      'Searchable Talent Pool database for fast future re-engagement'
    ],
    fourPillars: {
      alasan: {
        problem: 'Proses rekrutmen konvensional sering terhambat oleh berkas lamaran yang tercecer, evaluasi wawancara yang tidak terstandarisasi (bias subjektif), serta hilangnya data kandidat berkualitas yang tidak terpilih untuk kebutuhan posisi mendatang.',
        bottlenecks: [
          'Berkas CV menumpuk di inbox tanpa status pipeline yang jelas',
          'Penilaian wawancara berbeda standar antar interviewer',
          'Waktu screening manual yang memakan waktu berminggu-minggu',
          'Kandidat potensial (silver medalists) hilang tanpa database talent pool'
        ],
        objective: 'Membangun Applicant Tracking System (ATS) modern yang mempercepat proses seleksi kandidat dan mengarsipkan talent pool untuk efisiensi biaya rekrutmen masa depan.'
      },
      caraKerja: {
        architecture: 'Multi-stage recruitment workflow engine dengan papan kanban dinamis, sistem penilaian terbobot, dan indexing kandidat cerdas.',
        mechanics: [
          'Kanban Pipeline State Machine: Memindahkan kandidat antar tahap seleksi (Screening ? Tech Test ? User Interview ? Offering ? Hired) secara realtime.',
          'Weighted Interview Scorecard: Menghitung skor akhir berdasarkan bobot kriteria objektif yang telah dikonfigurasi hiring manager.',
          'Automated Skill-Fit Analyzer: Membandingkan kata kunci keahlian kandidat dengan kualifikasi lowongan.',
          'Talent Pool Vault: Mengelompokkan kandidat berbakat yang lolos seleksi namun belum mendapat kuota untuk dihubungi kembali di masa depan.'
        ],
        techDetails: 'Komponen React terisolasi dengan state persistensi lokal, filter multivariat instan, dan transisi fluid Framer Motion.'
      },
      output: {
        features: [
          'Papan Kanban Rekrutmen Interaktif dengan kartu profil 360?',
          'Modal Formulir Penilaian Wawancara Terstruktur (Scorecard)',
          'Mesin Pencarian Talent Pool dengan filter skill & ekspektasi gaji',
          'Dashboard Metrik Time-to-Hire & Funnel Conversion Rate'
        ],
        deliverables: [
          'Modern Web ATS Application',
          'Modul Evaluasi & Scorecard Wawancara',
          'Database Talent Pool Search Engine'
        ]
      },
      result: {
        metrics: [
          { label: 'Time-to-Hire Speed', value: '50%', desc: 'Mempercepat siklus rekrutmen dari 30 hari ke 15 hari' },
          { label: 'Feedback Transparency', value: '100%', desc: 'Seluruh catatan interviewer terarsip dan dapat diaudit' },
          { label: 'Sourcing Cost Savings', value: '40%', desc: 'Penghematan biaya rekrutmen via re-engagement talent pool' }
        ],
        impactSummary: 'Meningkatkan kualitas rekrutmen secara objektif dan mempercepat pemenuhan kebutuhan talent tim teknis tanpa proses administratif yang berbelit.'
      }
    },
    sandboxAvailable: true
  },
  {
    id: 'liturgyflow',
    title: 'LiturgyFlow',
    subtitle: 'Community Resource Planning & Scheduling SaaS',
    tagline: 'Enterprise scheduling SaaS with 3-layer zero-conflict validation and fair-share workload distribution algorithm across 35 communities.',
    category: 'community',
    categoryLabel: 'Community Cloud SaaS',
    badge: 'Live SaaS (v2.0)',
    liveUrl: 'https://jadwal-liturgi.web.app',
    githubUrl: 'https://github.com/example/liturgyflow-cloud',
    demoType: 'liturgy',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Firebase Firestore', 'Cloud Functions', 'Hosting'],
    highlights: [
      'Zero-conflict validation algorithm across concurrent multi-session services',
      'Fair-share workload distribution engine across 35 districts & 170+ officers',
      '2-tier role-based security with Official Finalization locking',
      '1-click multi-format publication (Official A4 bulletin, digital poster, WhatsApp broadcast)'
    ],
    fourPillars: {
      alasan: {
        problem: 'Pengelolaan jadwal penugasan petugas berskala besar (ratusan relawan di puluhan wilayah komunitas) yang sebelumnya dikelola manual via spreadsheet rentan bentrok ganda (double-booking) dan beban tugas yang tidak merata.',
        bottlenecks: [
          'Jadwal bentrok antar sesi misa pada hari yang sama',
          'Petugas yang sama ditugaskan berturut-turut hingga kelelahan',
          'Penyusunan jadwal manual memakan waktu hingga berhari-hari',
          'Perubahan jadwal resmi yang tidak sengaja terhapus di spreadsheet'
        ],
        objective: 'Mentransformasikan sistem manual menjadi aplikasi cloud kolaboratif yang menjamin nol bentrok penugasan dan distribusi pelayanan yang transparan.'
      },
      caraKerja: {
        architecture: 'Cloud-native SPA pada Firebase Hosting dengan database Firestore NoSQL real-time dan Cloud Functions untuk komputasi analitik pemerataan.',
        mechanics: [
          '3-Tier Conflict Detection: Memvalidasi ketersediaan petugas secara instan (bentrok sesi, bentrok tugas tim vs perorangan, dan jeda wajib).',
          'Fair-Share Rotation Matrix: Menghitung frekuensi penugasan per komunitas untuk menjaga rasio beban pelayanan seimbang.',
          'Official Revision Lock: Mengunci jadwal berstatus FINAL dalam mode read-only dan memerlukan otorisasi admin untuk membuka draf revisi.',
          'Multi-Channel Export Engine: Mengonversi data jadwal digital menjadi warta A4 siap cetak, layout infografis, dan teks broadcast WhatsApp.'
        ],
        techDetails: 'Arsitektur komponen React modern dengan TypeScript, caching client-side reaktif, dan Firestore Security Rules berbasis peran.'
      },
      output: {
        features: [
          'Interactive Scheduling Matrix Grid dengan drag-and-assign bebas konflik',
          'Dasbor Analitik Pemerataan Penugasan Lintas Wilayah',
          'Generator Warta Cetak A4 Resmi & Export CSV',
          '1-Click WhatsApp Broadcast Formatter'
        ],
        deliverables: [
          'Production Web App Live di Cloud',
          'Firebase Cloud Functions Suite',
          'Sistem Manajemen Data Petugas & Komunitas'
        ]
      },
      result: {
        metrics: [
          { label: 'Double-Booking Incidents', value: '0', desc: 'Eliminasi 100% bentrok jadwal sejak peluncuran sistem' },
          { label: 'Workload Balance', value: '100%', desc: 'Pemerataan tugas terdata objektif antar 35 komunitas' },
          { label: 'Coordination Time', value: '-80%', desc: 'Penyusunan jadwal bulanan selesai dalam 1-2 jam' }
        ],
        impactSummary: 'Menjadi standar digital resmi dalam tata kelola pelayanan komunitas skala besar dengan tingkat kepuasan relawan dan pengurus yang sangat tinggi.'
      }
    },
    sandboxAvailable: true
  },
  {
    id: 'methodologyiq',
    title: 'MethodologyIQ',
    subtitle: 'Research-Grounded Software Decision Support System',
    tagline: 'Interactive methodology assessment engine evaluating Waterfall vs Agile vs Hybrid models based on empirical research criteria.',
    category: 'decision',
    categoryLabel: 'Decision Intelligence',
    badge: 'Research Tool',
    liveUrl: '#',
    githubUrl: 'https://github.com/example/methodology-decision-tool',
    demoType: 'radar',
    stack: ['Vanilla JS', 'HTML5', 'Tailwind CSS', 'Chart.js', 'GSAP', 'Lucide'],
    highlights: [
      'Empirical decision model grounded in peer-reviewed research (Thesing et al., 2021)',
      '2-Step evaluation engine: 5 Knockout filters + 15 Weighted multi-criteria sliders',
      'Dynamic real-time Chart.js Radar visualization',
      'Bilingual reactive engine (English & Indonesian) without page reload'
    ],
    fourPillars: {
      alasan: {
        problem: 'Banyak Engineering Manager dan Product Manager memilih metodologi pengembangan perangkat lunak (Waterfall, Agile Scrum, atau Hybrid) berdasarkan asumsi subjektif atau tren semata, yang sering berujung pada kegagalan proyek akibat ketidakcocokan tata kelola.',
        bottlenecks: [
          'Kurangnya instrumen objektif berbasis riset dalam menentukan metodologi',
          'Asumsi keliru bahwa Agile cocok untuk semua jenis proyek tanpa syarat',
          'Kesulitan memvisualisasikan trade-off antar kriteria proyek kepada stakeholder'
        ],
        objective: 'Membangun instrumen web interaktif berbasis riset empiris untuk membantu tim engineering memilih metodologi software development secara presisi dan terjustifikasi.'
      },
      caraKerja: {
        architecture: 'Client-Side Decision Intelligence Engine dengan kalkulasi matematis berbobot dan perenderan visualisasi radar interaktif.',
        mechanics: [
          'Step 1 Knockout Engine: Mengevaluasi 5 filter mutlak (Safety critical, fixed-firm contracts, single-release constraints).',
          'Step 2 Multi-Criteria Scoring: Algoritma pembobotan dinamis pada 5 dimensi inti (Scope Flexibility, Governance Readiness, Team Autonomy, Time to Market, Cost Predictability).',
          'Live Radar Projection: Memproyeksikan skor kesesuaian Waterfall vs Agile vs Hybrid secara real-time pada radar chart.',
          'Stateful Dual-Language Engine: Mengubah seluruh terminologi antara ID dan EN secara reaktif tanpa kehilangan input penilaian.'
        ],
        techDetails: 'Arsitektur vanilla JS berperforma tinggi tanpa dependensi berat, dianimasikan dengan GSAP micro-transitions.'
      },
      output: {
        features: [
          'Interactive Radar Chart Scorecard & Methodology Recommendation Box',
          'Visual Pipeline Architecture Simulator (Stage-Gate vs 2-Week Sprint Cadence)',
          'Template Skenario Industri 1-Klik (Fintech Core Banking, E-Commerce MVP, IoT Hardware)',
          'Full Reactive Bilingual Switcher (ID/EN)'
        ],
        deliverables: [
          'Single-Page Standalone Decision Tool',
          'Empirical Research Scorecard Matrix',
          'Visual Pipeline Simulation Engine'
        ]
      },
      result: {
        metrics: [
          { label: 'Evaluation Criteria', value: '15+', desc: 'Faktor penilaian berbobot komprehensif' },
          { label: 'Knockout Accuracy', value: '100%', desc: 'Penyaringan otomatis terhadap batasan regulasi/kontrak' },
          { label: 'Stakeholder Alignment', value: '<10 min', desc: 'Mencapai konsensus metodologi proyek dalam 1 sesi' }
        ],
        impactSummary: 'Menghadirkan instrumen pengambil keputusan berstandar akademik yang meminimalisir risiko kegagalan manajemen proyek perangkat lunak.'
      }
    },
    sandboxAvailable: true
  },
  {
    id: 'automation-suite',
    title: 'Enterprise Automation Suite',
    subtitle: 'Embedded Workspace Add-ons & SEO Data Scraper',
    tagline: 'Custom embedded Google Sheets workflow sidebar for order tracking and automated recursive search query expansion tree in Python.',
    category: 'enterprise',
    categoryLabel: 'Automation & Tools',
    badge: 'Automation Tools',
    liveUrl: '#',
    githubUrl: 'https://github.com/example/enterprise-automation-suite',
    demoType: 'automation',
    stack: ['Google Apps Script', 'HTML Service', 'JavaScript ES6', 'Python', 'Google Suggestion API'],
    highlights: [
      'Custom embedded sidebar inside Google Sheets for real-time unfulfilled order tracking',
      'Automated batch attendance aggregation and structured reporting engine',
      'Recursive Google Suggest query tree scraper for long-tail keyword intelligence',
      'Zero-installation client workflow integration'
    ],
    fourPillars: {
      alasan: {
        problem: 'Operasional harian sering terbebani oleh pekerjaan repetitif manual seperti memverifikasi ribuan baris pesanan menggantung di spreadsheet dan mengumpulkan variasi kata kunci pencarian secara manual untuk strategi SEO.',
        bottlenecks: [
          'Pemeriksaan status pesanan satu per satu di spreadsheet memakan waktu berjam-jam',
          'Human error tinggi saat menyalin dan merekapitulasi data absensi massal',
          'Riset kata kunci manual hanya menangkap variasi pencarian yang dangkal'
        ],
        objective: 'Membangun add-on antarmuka web langsung di dalam lembar kerja Google serta skrip data scraping otomatis untuk memangkas pekerjaan manual hingga 90%.'
      },
      caraKerja: {
        architecture: 'Kombinasi Google Apps Script (HTML Service) untuk automasi spreadsheet cloud dan Python Script untuk ekstraksi data pencarian.',
        mechanics: [
          'Embedded HTML Service Sidebar: Membuka antarmuka interaktif responsif langsung di panel samping spreadsheet tanpa membuka tab baru.',
          'Batch Data Aggregator: Mengiterasi ribuan baris log transaksi, memvalidasi status unik, dan menyusun rekapitulasi siap baca.',
          'Recursive Search Intent Crawler: Menembus pohon saran mesin pencari dengan ekspansi huruf A-Z untuk mengekstrak ratusan long-tail keywords.'
        ],
        techDetails: 'Menggunakan Google Sheets API, Clasp CLI untuk version control Google Apps Script, dan pustaka Requests/JSON di Python.'
      },
      output: {
        features: [
          'Custom Interactive Sidebar Add-on untuk Google Sheets (Unfinished Orders Tracker)',
          'Rekapitulasi Otomatis Data Presensi & Operasional',
          'Generator Dataset Kata Kunci SEO Terstruktur (JSON & CSV)'
        ],
        deliverables: [
          'Google Apps Script Embedded UI Project',
          'Python Keyword Research CLI Tool',
          'Dokumentasi Integrasi Workspace'
        ]
      },
      result: {
        metrics: [
          { label: 'Manual Effort Reduced', value: '90%', desc: 'Pemangkasan waktu kerja rekapitulasi data harian' },
          { label: 'Data Processing Speed', value: 'Seconds', desc: 'Pemrosesan ribuan baris spreadsheet dalam 1-klik' },
          { label: 'Keyword Expansion', value: '10x', desc: 'Ekstraksi query intent pencarian lebih dalam dan cepat' }
        ],
        impactSummary: 'Mengubah alur kerja manual spreadsheet menjadi proses semi-otomatis yang cepat, minim kesalahan manusia, dan langsung terintegrasi dengan aktivitas bisnis harian.'
      }
    },
    sandboxAvailable: false
  }
];

// 100% Mock Transactions for OmniPulse Sandbox
export const MOCK_TRANSACTIONS: MockTransaction[] = [
  { id: 'tx-101', invoice: 'INV/2026/SPX/9841', channel: 'Shopee', buyer: 'Ahmad S.', items: 'Ergonomic Desk Mat x1', amount: 185000, status: 'In Fulfillment', courier: 'SPX Express', slaMinutesLeft: 38, timestamp: '10:04:12', reconciled: true },
  { id: 'tx-102', invoice: 'INV/2026/TKP/5129', channel: 'Tokopedia', buyer: 'Budi W.', items: 'Mechanical Keyboard Switch x70', amount: 345000, status: 'Ready to Pack', courier: 'J&T Express', slaMinutesLeft: 72, timestamp: '09:58:30', reconciled: true },
  { id: 'tx-103', invoice: 'INV/2026/TTS/7732', channel: 'TikTok Shop', buyer: 'Citra D.', items: 'Type-C Coiled Cable x1', amount: 120000, status: 'Pending Verification', courier: 'SiCepat', slaMinutesLeft: 115, timestamp: '09:52:19', reconciled: false },
  { id: 'tx-104', invoice: 'INV/2026/TKP/8812', channel: 'Tokopedia', buyer: 'Dimas R.', items: 'Wireless Mouse Pro x1', amount: 650000, status: 'In Fulfillment', courier: 'GoSend Instant', slaMinutesLeft: 18, timestamp: '09:45:00', reconciled: true },
  { id: 'tx-105', invoice: 'INV/2026/LZD/3391', channel: 'Lazada', buyer: 'Eka P.', items: 'PBT Keycap Set Cherry x1', amount: 280000, status: 'Dispatched', courier: 'J&T Express', slaMinutesLeft: 240, timestamp: '09:30:15', reconciled: true },
  { id: 'tx-106', invoice: 'INV/2026/SPX/9842', channel: 'Shopee', buyer: 'Fajar K.', items: 'Wrist Rest Walnut Wood x1', amount: 155000, status: 'Settled', courier: 'SPX Express', slaMinutesLeft: 0, timestamp: '08:15:00', reconciled: true },
  { id: 'tx-107', invoice: 'INV/2026/TTS/7733', channel: 'TikTok Shop', buyer: 'Gita M.', items: 'Lube Station & Brush Set x1', amount: 89000, status: 'Ready to Pack', courier: 'SiCepat', slaMinutesLeft: 85, timestamp: '08:00:22', reconciled: true },
  { id: 'tx-108', invoice: 'INV/2026/TKP/5130', channel: 'Tokopedia', buyer: 'Hendra T.', items: 'Monitor Arm Heavy Duty x1', amount: 480000, status: 'In Fulfillment', courier: 'GoSend Instant', slaMinutesLeft: 22, timestamp: '07:45:10', reconciled: true },
];

// 100% Mock Candidates for TalentPulse Sandbox
export const MOCK_CANDIDATES: Candidate[] = [
  { id: 'c-1', candidateCode: 'CAND-901', appliedRole: 'Senior Frontend Engineer', department: 'Product Engineering', experienceYears: 5, stage: 'User Interview', fitScore: 94, skills: ['React 19', 'TypeScript', 'Tailwind', 'Next.js'], notes: 'Strong system design, excellent code craft in live demo.', appliedDate: '2026-09-12' },
  { id: 'c-2', candidateCode: 'CAND-902', appliedRole: 'Full Stack Engineer', department: 'Enterprise Systems', experienceYears: 4, stage: 'Technical Assessment', fitScore: 89, skills: ['TypeScript', 'Node.js', 'PostgreSQL', 'GCP'], notes: 'Submitted clean test repository, currently running automated test suite.', appliedDate: '2026-09-14' },
  { id: 'c-3', candidateCode: 'CAND-903', appliedRole: 'UI/UX Interaction Designer', department: 'Design System', experienceYears: 3, stage: 'Screening', fitScore: 86, skills: ['Figma', 'Framer Motion', 'Design Tokens', 'CSS'], notes: 'Impressive portfolio with high-craft micro-interactions.', appliedDate: '2026-09-16' },
  { id: 'c-4', candidateCode: 'CAND-904', appliedRole: 'Cloud DevOps Specialist', department: 'Infrastructure', experienceYears: 6, stage: 'Offering', fitScore: 96, skills: ['Kubernetes', 'Terraform', 'CI/CD', 'Docker'], notes: 'Offer letter generated. Awaiting candidate signature.', appliedDate: '2026-09-08' },
  { id: 'c-5', candidateCode: 'CAND-905', appliedRole: 'Frontend Developer', department: 'E-Commerce Ops', experienceYears: 2, stage: 'Talent Pool', fitScore: 82, skills: ['React', 'JavaScript', 'Tailwind CSS'], notes: 'Silver medalist candidate. Keep for next junior batch expansion.', appliedDate: '2026-09-02' },
];

// 100% Mock Script Services for Nexus Portal Sandbox
export const MOCK_SCRIPT_SERVICES: ScriptService[] = [
  { id: 'svc-1', name: 'Unfinished Orders Sync Engine', department: 'Logistics-HQ', sheetName: 'Master_Orders_Fulfillment_2026', status: 'Operational', lastRun: '2 mins ago', executionRate: 99.9, quotaUsagePct: 34, activeUsers: 28 },
  { id: 'svc-2', name: 'Daily Attendance & Payroll Aggregator', department: 'HR-Ops', sheetName: 'Rekap_Presensi_Karyawan_HQ', status: 'Operational', lastRun: '15 mins ago', executionRate: 100.0, quotaUsagePct: 18, activeUsers: 45 },
  { id: 'svc-3', name: 'Inventory Reorder & SKU Valuation', department: 'Warehouse-A', sheetName: 'Master_Stock_Valuation_Depot', status: 'Quota Warning', lastRun: '1 hour ago', executionRate: 97.4, quotaUsagePct: 88, activeUsers: 14 },
  { id: 'svc-4', name: 'Settlement Reconciliation Gateway', department: 'Finance-Ops', sheetName: 'Rekonsiliasi_Pencairan_Bank', status: 'Operational', lastRun: 'Just now', executionRate: 99.8, quotaUsagePct: 42, activeUsers: 19 },
];
