export interface ProjectItem {
  id: string;
  title: string;
  category: 'School' | 'Web App' | 'Business' | 'Others';
  shortDesc: string;
  fullDesc: string;
  image: string;
  year: string;
  role: string;
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface TechCategory {
  title: string;
  subtitle: string;
  items: {
    name: string;
    level: string;
    tag: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'Work & Freelance' | 'Education';
  description: string;
  skills: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  stack: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: string;
  skills: string[];
  summary: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  output: string;
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Backend Development',
    subtitle: 'Core server-side architecture & database',
    items: [
      { name: 'Laravel', level: 'Advanced', tag: 'Framework' },
      { name: 'PHP 8.x', level: 'Advanced', tag: 'Language' },
      { name: 'MySQL', level: 'Advanced', tag: 'Database' },
      { name: 'RESTful API', level: 'Advanced', tag: 'Architecture' },
    ],
  },
  {
    title: 'Frontend & Interface',
    subtitle: 'Clean, responsive & accessible user interfaces',
    items: [
      { name: 'Tailwind CSS', level: 'Advanced', tag: 'Styling' },
      { name: 'JavaScript (ES6+)', level: 'Intermediate', tag: 'Language' },
      { name: 'Laravel Blade / Livewire', level: 'Advanced', tag: 'Templating' },
      { name: 'HTML5 & CSS3', level: 'Advanced', tag: 'Core Web' },
    ],
  },
  {
    title: 'Workflow & Tools',
    subtitle: 'Version control, testing & deployment tools',
    items: [
      { name: 'Git & GitHub', level: 'Advanced', tag: 'Version Control' },
      { name: 'Postman', level: 'Advanced', tag: 'API Testing' },
      { name: 'Figma', level: 'Intermediate', tag: 'UI/UX Design' },
      { name: 'Linux / cPanel / VPS', level: 'Intermediate', tag: 'Deployment' },
    ],
  },
];

export const PROFILE_STATS = [
  { value: '12+', label: 'Completed Projects', note: 'School & Web Systems' },
  { value: '2.5+', label: 'Years Experience', note: 'Laravel & Modern Web' },
  { value: '8+', label: 'Tech & Frameworks', note: 'Full-Stack Workflow' },
  { value: '99%', label: 'Responsive & Clean', note: 'Mobile-First Code' },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2024 — Present',
    role: 'Full-Stack Web Developer (Freelance & Project-Based)',
    organization: 'Self-Employed / Digital Solutions Partner',
    type: 'Work & Freelance',
    description:
      'Merancang dan membangun sistem informasi sekolah (PPDB Online, CMS Profil Sekolah), aplikasi manajemen inventaris, dan landing page bisnis menggunakan Laravel dan Tailwind CSS.',
    skills: ['Laravel 11', 'PHP', 'MySQL', 'Tailwind CSS', 'REST API'],
  },
  {
    id: 'exp-2',
    period: '2023 — 2024',
    role: 'Web Developer — School Digitalization Project',
    organization: 'SMK / Yayasan Prestasi Prima',
    type: 'Work & Freelance',
    description:
      'Mengembangkan portal website profil sekolah terintegrasi dengan modul berita kegiatan, galeri ekstrakurikuler, serta sistem pendaftaran siswa baru (PPDB) berbasis web.',
    skills: ['Laravel', 'Blade', 'Bootstrap / Tailwind', 'MySQL'],
  },
  {
    id: 'exp-3',
    period: '2022 — Present',
    role: 'Software Engineering / Rekayasa Perangkat Lunak',
    organization: 'Pendidikan Teknologi & Pengembangan Software',
    type: 'Education',
    description:
      'Mendalami rekayasa perangkat lunak, pemrograman berorientasi objek (OOP), perancangan basis data relasional, serta desain antarmuka pengguna modern di Figma.',
    skills: ['OOP', 'Database Design', 'System Analysis', 'UI/UX'],
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    title: 'Web Application & Custom System',
    description:
      'Pembuatan aplikasi web kustom seperti sistem PPDB sekolah, SIAKAD, dashboard admin, sistem absensi, hingga manajemen inventaris dengan arsitektur database yang rapi.',
    deliverables: [
      'Multi-Role Authentication (Admin, Operator, User)',
      'CRUD Dashboard & Laporan Export PDF/Excel',
      'Keamanan Validasi Data & Optimasi Query',
    ],
    stack: 'Laravel • PHP 8 • MySQL • Livewire',
  },
  {
    number: '02',
    title: 'School & Company Profile CMS',
    description:
      'Website profil institusi pendidikan atau bisnis yang cepat, ramah SEO, dan dilengkapi panel CMS sehingga tim internal mudah memperbarui berita atau konten.',
    deliverables: [
      'Desain Eksklusif & Mobile-Responsive',
      'Manajemen Berita, Agenda & Galeri Dinamis',
      'Optimasi Kecepatan Muat & Struktur SEO',
    ],
    stack: 'Laravel Blade • Tailwind CSS • JavaScript',
  },
  {
    number: '03',
    title: 'RESTful API & System Integration',
    description:
      'Perancangan dan pembuatan endpoint API yang terstruktur untuk kebutuhan aplikasi mobile, frontend SPA, maupun integrasi layanan pihak ketiga.',
    deliverables: [
      'Dokumentasi Endpoint via Postman / Swagger',
      'Token Authentication (Laravel Sanctum / JWT)',
      'Integrasi Payment Gateway & WhatsApp Notification',
    ],
    stack: 'Laravel Sanctum • REST API • JSON • Postman',
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'prestasi-prima-main',
    title: 'Prestasi Prima Website',
    category: 'School',
    shortDesc: 'Website profile sekolah dengan informasi lengkap, berita, dan sistem PPDB.',
    fullDesc:
      'Portal resmi sekolah Prestasi Prima yang dirancang untuk memudahkan calon siswa, orang tua, dan masyarakat mengakses profil jurusan, fasilitas, berita prestasi terbaru, serta alur pendaftaran PPDB secara terpusat.',
    image: '/images/proj-prestasi-1.png',
    year: '2024',
    role: 'Full-Stack Developer & UI Designer',
    techStack: ['Laravel', 'PHP 8', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    highlights: [
      'Halaman landing interaktif dengan statistik sekolah real-time',
      'Sistem manajemen berita, pengumuman, dan profil kompetensi keahlian',
      'Integrasi alur pendaftaran PPDB online yang ramah perangkat mobile',
    ],
  },
  {
    id: 'prestasi-prima-student',
    title: 'School Activity & Achievement Portal',
    category: 'School',
    shortDesc: 'Portal dokumentasi kegiatan siswa, ekstrakurikuler, dan publikasi prestasi sekolah.',
    fullDesc:
      'Sub-modul portal sekolah yang menyoroti kehidupan kampus, dokumentasi turnamen olahraga, kegiatan ekstrakurikuler, dan pencapaian akademik siswa dengan tata letak visual yang dinamis.',
    image: '/images/proj-prestasi-2.png',
    year: '2024',
    role: 'Frontend & CMS Developer',
    techStack: ['Laravel Blade', 'Tailwind CSS', 'MySQL', 'Alpine.js'],
    highlights: [
      'Galeri foto kegiatan terfilter berdasarkan kategori ekstrakurikuler',
      'Optimasi gambar otomatis agar halaman tetap ringan diakses',
      'Panel editor mudah digunakan oleh tim jurnalistik sekolah',
    ],
  },
  {
    id: 'prestasi-prima-campus',
    title: 'School Directory & Campus Info System',
    category: 'School',
    shortDesc: 'Sistem informasi fasilitas gedung, direktori guru, dan layanan akademik.',
    fullDesc:
      'Platform direktori digital sekolah yang menyajikan informasi sarana prasarana gedung, kalender akademik, serta halaman kontak terpadu untuk tamu dan wali murid.',
    image: '/images/proj-prestasi-3.png',
    year: '2024',
    role: 'Web Developer',
    techStack: ['Laravel', 'PHP', 'Bootstrap / Tailwind', 'MySQL'],
    highlights: [
      'Navigasi informasi fasilitas sekolah yang bersih dan terstruktur',
      'Direktori staf pengajar dan jadwal layanan administrasi',
      'Desain monokrom bersih dengan kontras keterbacaan tinggi',
    ],
  },
  {
    id: 'ppdb-management-app',
    title: 'E-PPDB Admission & Verification Dashboard',
    category: 'Web App',
    shortDesc: 'Aplikasi web pendaftaran peserta didik baru dengan verifikasi berkas otomatis.',
    fullDesc:
      'Sistem aplikasi web untuk panitia PPDB dan calon siswa. Mendukung pengunggahan dokumen persyaratan, pelacakan status seleksi real-time, serta cetak kartu bukti pendaftaran PDF.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    year: '2024',
    role: 'Backend & System Architect',
    techStack: ['Laravel 11', 'MySQL', 'DomPDF', 'Tailwind CSS'],
    highlights: [
      'Dashboard statistik pendaftar harian per jurusan',
      'Validasi berkas dan perubahan status kelulusan satu klik',
      'Export data rekapitulasi siswa ke format Excel dan PDF',
    ],
  },
  {
    id: 'inventra-pos-business',
    title: 'Inventra — Business Inventory & POS',
    category: 'Business',
    shortDesc: 'Sistem manajemen stok barang, transaksi kasir, dan laporan keuangan UMKM.',
    fullDesc:
      'Solusi aplikasi berbasis web untuk pemilik bisnis ritel dalam memantau stok masuk/keluar, mencatat transaksi penjualan harian, dan menghasilkan laporan laba-rugi secara akurat.',
    image: 'https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    year: '2023',
    role: 'Full-Stack Laravel Developer',
    techStack: ['Laravel', 'MySQL', 'REST API', 'Chart.js'],
    highlights: [
      'Notifikasi stok menipis (Low-Stock Alert) otomatis di dashboard',
      'Grafik analitik penjualan bulanan dan produk terlaris',
      'Manajemen hak akses kasir, gudang, dan pemilik usaha',
    ],
  },
  {
    id: 'rest-api-starter',
    title: 'Modular Laravel API Boilerplate',
    category: 'Others',
    shortDesc: 'Arsitektur starter REST API dengan autentikasi Sanctum, Role Permission, dan logging.',
    fullDesc:
      'Repositori template backend yang mempercepat pembuatan proyek baru dengan standar clean code, Service-Repository pattern, serta format response JSON yang konsisten.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    year: '2024',
    role: 'Backend Engineer',
    techStack: ['PHP 8.2', 'Laravel Sanctum', 'Spatie Permission', 'Postman'],
    highlights: [
      'Struktur folder modular yang mudah di-maintain tim',
      'Autentikasi token aman beserta rate-limiting endpoint',
      'Dokumentasi koleksi Postman siap pakai',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & System Flow',
    subtitle: 'Memahami masalah & alur bisnis',
    description:
      'Berdiskusi mengenai kebutuhan fitur, target pengguna, serta menyusun flowchart alur sistem agar solusi tepat sasaran.',
    output: 'System Flowchart & Requirement List',
  },
  {
    step: '02',
    title: 'Database & UI Wireframe',
    subtitle: 'Merancang struktur tabel & antarmuka',
    description:
      'Mendesain Entity Relationship Diagram (ERD) untuk database MySQL sekaligus menyusun tampilan UI minimalis di Figma.',
    output: 'ERD Schema & Clean Figma UI',
  },
  {
    step: '03',
    title: 'Clean Laravel Development',
    subtitle: 'Implementasi kode yang rapi & terukur',
    description:
      'Membangun backend dengan Laravel & PHP mengikuti standar MVC, mengintegrasikan tampilan responsif, dan menguji fitur.',
    output: 'Functional Web Application',
  },
  {
    step: '04',
    title: 'Testing & Deployment',
    subtitle: 'Uji kelayakan & rilis ke server produksi',
    description:
      'Melakukan pengujian bug, optimasi kecepatan query, konfigurasi domain/SSL di server, serta serah terima dokumentasi.',
    output: 'Live Production Website',
  },
];

export const CERTIFICATES_LIST: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Junior Web Developer Competency (BNSP)',
    issuer: 'Badan Nasional Sertifikasi Profesi',
    date: '2024',
    credentialId: 'BNSP-JWD-2024-8819',
    category: 'National Certification',
    skills: ['PHP', 'Database SQL', 'Structured Programming', 'Web Security'],
    summary:
      'Sertifikasi kompetensi nasional dalam merancang algoritma, mengimplementasikan antarmuka pengguna, dan mengelola koneksi basis data aplikasi web.',
  },
  {
    id: 'cert-2',
    title: 'Belajar Membuat Aplikasi Back-End & Laravel Modern',
    issuer: 'Dicoding Indonesia / Coding Academy',
    date: '2024',
    credentialId: 'DC-LRV-90412X',
    category: 'Backend Engineering',
    skills: ['Laravel', 'RESTful API', 'Eloquent ORM', 'Authentication'],
    summary:
      'Menyelesaikan studi kasus pembuatan aplikasi web dan RESTful API menggunakan framework Laravel dengan arsitektur MVC dan validasi keamanan.',
  },
  {
    id: 'cert-3',
    title: 'Responsive Web Design & Modern CSS Architecture',
    issuer: 'freeCodeCamp / Frontend Mastery',
    date: '2023',
    credentialId: 'FCC-RWD-77231',
    category: 'Frontend & UI',
    skills: ['HTML5 Semantic', 'Tailwind CSS', 'Flexbox & Grid', 'Accessibility'],
    summary:
      'Penguasaan tata letak web responsif lintas perangkat, tipografi modern, dan komponen antarmuka yang ramah pengguna.',
  },
  {
    id: 'cert-4',
    title: 'SQL & Relational Database Design Fundamentals',
    issuer: 'Progate / Oracle Academy Track',
    date: '2023',
    credentialId: 'SQL-DB-44109',
    category: 'Database Architecture',
    skills: ['MySQL', 'ERD Normalization', 'Complex Joins', 'Query Indexing'],
    summary:
      'Perancangan skema tabel relasional yang efisien, normalisasi data hingga 3NF, dan optimasi query untuk aplikasi skala menengah.',
  },
];

export interface DesignSectionTip {
  sectionId: string;
  order: string;
  name: string;
  status: 'Sudah Ada di Desainmu' | 'Rekomendasi Section Baru';
  whyNeeded: string;
  figmaTip: string;
}

export const DESIGN_SECTION_TIPS: Record<string, DesignSectionTip> = {
  hero: {
    sectionId: 'hero',
    order: 'Section 01',
    name: 'Hero Section',
    status: 'Sudah Ada di Desainmu',
    whyNeeded: 'Kesan pertama 3 detik untuk menjelaskan siapa kamu (Ilham Ramadan) dan keahlian utamamu (Laravel & PHP Developer).',
    figmaTip: 'Desain Hero kamu sudah sangat bagus! Pertahankan aksen double-card abu-abu dan 5 titik monokrom di kanan bawah sebagai ciri khas.',
  },
  techstack: {
    sectionId: 'techstack',
    order: 'Section 02',
    name: 'Tech Stack / Arsenal',
    status: 'Rekomendasi Section Baru',
    whyNeeded: 'HRD atau klien teknis ingin langsung tahu teknologi apa yang kamu kuasai tanpa harus membaca paragraf panjang.',
    figmaTip: 'Gunakan 3 kolom kartu dengan background #F8F8F8, border #EAEAEA, dan badge kecil monokrom agar senada dengan tombol filter di Projects.',
  },
  profile: {
    sectionId: 'profile',
    order: 'Section 03',
    name: 'Profile & Experience (Sesuai menu "profile" di Navbar)',
    status: 'Rekomendasi Section Baru',
    whyNeeded: 'Di Navbar kamu sudah ada menu "profile". Section ini menjawab menu tersebut dengan menggabungkan bio singkat, angka statistik, dan timeline pengalaman.',
    figmaTip: 'Bagi menjadi 2 kolom (5 kolom kiri untuk Bio + 4 kotak Angka Statistik, 7 kolom kanan untuk Vertical Timeline pengalaman & pendidikan).',
  },
  services: {
    sectionId: 'services',
    order: 'Section 04',
    name: 'Services / What I Do',
    status: 'Rekomendasi Section Baru',
    whyNeeded: 'Menjelaskan solusi nyata dari tagline "Building Digital Solutions."—apakah kamu membuat Web Sekolah, Sistem Informasi, atau API.',
    figmaTip: 'Gunakan 3 Card sejajar (mirip grid Projects) dengan nomor besar 01, 02, 03 di pojok kiri atas dan daftar poin deliverable.',
  },
  projects: {
    sectionId: 'projects',
    order: 'Section 05',
    name: 'Featured Projects',
    status: 'Sudah Ada di Desainmu',
    whyNeeded: 'Bukti nyata hasil kerjamu (seperti Prestasi Prima Website).',
    figmaTip: 'Tips revisi kecil: Di desainmu judulnya masih kembar "Building Digital Solutions." dengan Hero. Ubah menjadi "Selected Works." atau tambahkan tag teknologi di tiap card.',
  },
  process: {
    sectionId: 'process',
    order: 'Section 06',
    name: 'Work Process / How I Work',
    status: 'Rekomendasi Section Baru',
    whyNeeded: 'Memberi rasa percaya ke calon klien bahwa kamu bekerja secara terstruktur mulai dari analisis database hingga deployment.',
    figmaTip: 'Buat 4 kotak horizontal (01 Discovery → 02 Design → 03 Coding → 04 Deploy) dengan garis penghubung tipis.',
  },
  certificates: {
    sectionId: 'certificates',
    order: 'Section 07',
    name: 'Certificates (Sesuai menu di Navbar)',
    status: 'Rekomendasi Section Baru',
    whyNeeded: 'Menjawab menu "certifitaced" di Navbar (sekaligus perbaiki ejaannya menjadi "certificates"). Menampilkan sertifikasi tanpa membuat halaman berantakan.',
    figmaTip: 'Hindari memajang foto sertifikat warna-warni yang merusak tema monokrom. Gunakan layout Card/List bersih dengan tombol "Preview Credential".',
  },
  contact: {
    sectionId: 'contact',
    order: 'Section 08',
    name: 'Contact Me & Footer (Sesuai tombol CTA di Navbar)',
    status: 'Rekomendasi Section Baru',
    whyNeeded: 'Menjawab tombol hitam "contact me" di pojok kanan atas Navbar agar pengunjung punya tempat untuk mengirim pesan atau menawari proyek.',
    figmaTip: 'Gunakan container gelap (#232323) atau kartu abu-abu terang (#F7F7F7) dengan kolom info kontak di kiri dan form input minimalis di kanan.',
  },
};
