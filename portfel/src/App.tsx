import React, { useState } from 'react';
import {
  CERTIFICATES_LIST,
   CertificateItem,
  DESIGN_SECTION_TIPS,
  EXPERIENCE_TIMELINE,
  PROCESS_STEPS,
  PROFILE_STATS,
  PROJECTS_LIST,
  ProjectItem,
  SERVICES_LIST,
  TECH_CATEGORIES,
} from './data/portfolioData';
import {
  FigmaBlueprintNote,
  FiveDotsMotif,
  SectionEyebrow,
  SixStripesMotif,
} from './components/DesignElements';

type ProjectFilter = 'All' | 'School' | 'Web App' | 'Business' | 'Others';

const SECTION_NAV_PILLS = [
  { id: 'hero', num: '01', label: 'Hero', isNew: false },
  { id: 'techstack', num: '02', label: 'Tech Stack', isNew: true },
  { id: 'profile', num: '03', label: 'Profile & Exp', isNew: true },
  { id: 'services', num: '04', label: 'Services', isNew: true },
  { id: 'projects', num: '05', label: 'Projects', isNew: false },
  { id: 'process', num: '06', label: 'Work Process', isNew: true },
  { id: 'certificates', num: '07', label: 'Certificates', isNew: true },
  { id: 'contact', num: '08', label: 'Contact', isNew: true },
];

export default function App() {
  const [showBlueprintNotes, setShowBlueprintNotes] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [heroDotIndex, setHeroDotIndex] = useState<number>(0);
  const [projectDotIndex, setProjectDotIndex] = useState<number>(0);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    category: 'School / Campus Website',
    message: '',
  });

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((item) => item.category === activeFilter);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('ilham.ramadan.dev@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({
        name: '',
        email: '',
        category: 'School / Campus Website',
        message: '',
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-white text-[#232323] selection:bg-[#232323] selection:text-white">
      {/* Sticky Top Figma Section Blueprint Bar */}
      <div className="sticky top-0 z-40 bg-[#1E1E1E] text-white border-b border-white/10">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-mono font-medium text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Ide Struktur Section Portfel.
            </span>
            <span className="hidden lg:inline text-xs text-white/70">
              2 section asli desainmu + 6 rekomendasi section baru agar alur portofolio lengkap
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-0.5">
            <div className="hidden xl:flex items-center gap-1 mr-2">
              {SECTION_NAV_PILLS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="px-2 py-1 rounded-md text-[11px] font-medium text-white/80 hover:text-white hover:bg-white/10 transition flex items-center gap-1"
                >
                  <span className="font-mono text-[10px] text-white/50">{sec.num}</span>
                  <span>{sec.label}</span>
                  {sec.isNew && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Section Baru" />
                  )}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setShowBlueprintNotes((prev) => !prev)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                showBlueprintNotes
                  ? 'bg-white text-[#1E1E1E]'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <span>{showBlueprintNotes ? 'Sembunyikan Tips Figma' : 'Tampilkan Tips Figma'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Portfolio Canvas Container (Matches Figma Frame Guidelines) */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-10 md:px-14 border-x border-[#F2F2F2] bg-white">
        {/* Primary Navbar — Matches "Portfel." Figma Header */}
        <header className="py-7 flex items-center justify-between gap-4 border-b border-[#F5F5F5]">
          <a
            href="#hero"
            className="text-xl sm:text-[22px] font-extrabold tracking-tight text-[#232323]"
          >
            Portfel.
          </a>

          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#7A7A7A]">
            <a href="#hero" className="text-[#232323] font-semibold transition">
              Home
            </a>
            <a href="#techstack" className="hover:text-[#232323] transition">
              tech stack
            </a>
            <a href="#profile" className="hover:text-[#232323] transition">
              profile
            </a>
            <a href="#services" className="hover:text-[#232323] transition">
              services
            </a>
            <a href="#projects" className="hover:text-[#232323] transition">
              project
            </a>
            <a href="#certificates" className="hover:text-[#232323] transition">
              certificates
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#2B2B2B] hover:bg-black text-white text-xs font-medium px-6 py-2.5 rounded-full transition shadow-xs"
          >
            contact me
          </a>
        </header>

        {/* =========================================================
            SECTION 01: HERO SECTION (Asli dari Frame 1 Desain User)
           ========================================================= */}
        <section id="hero" className="pt-10 pb-16 sm:py-20 relative">
          <FigmaBlueprintNote
            tip={DESIGN_SECTION_TIPS.hero}
            visible={showBlueprintNotes}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Intro, Big Headline, Description, CTAs */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-0.5 text-[#4A4A4A]">
                <p className="text-sm sm:text-[15px] font-medium">Hello I'm</p>
                <p className="text-base sm:text-[17px] font-semibold text-[#232323]">
                  Ilham Ramadan
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold tracking-tight text-[#2B2B2B] leading-[1.12]">
                Building Digital
                <br />
                Solutions.
              </h1>

              <p className="text-xs sm:text-[13.5px] text-[#6E6E6E] leading-[1.75] max-w-[430px]">
                Software developer focused on creating modern, scalable, and
                user-friendly applications using Laravel, PHP, and modern web
                technologies.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-6">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center bg-[#2B2B2B] hover:bg-black text-white text-xs font-medium px-8 py-3.5 rounded-full transition shadow-sm"
                >
                  Explore My Work
                </a>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-[#3A3A3A] hover:text-black transition py-2"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right Column: Layered Monochrome Portrait Card from Ilham's Figma Design */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-end">
              <div className="relative w-full max-w-[440px]">
                <img
                  src="/images/ilham-hero-clean.png"
                  alt="Ilham Ramadan — Software Developer"
                  className="w-full h-auto block select-none rounded-2xl"
                />
                {/* Vector Crisp Overlay for the 6 Vertical Bars + Portfel. Badge in the Right Cutout */}
                <div className="absolute top-[37.5%] right-[3.5%] flex flex-col items-end">
                  <SixStripesMotif />
                  <span className="mt-1.5 text-sm sm:text-base font-extrabold tracking-tight text-[#2B2B2B]">
                    Portfel.
                  </span>
                </div>
              </div>

              {/* Bottom-Right 5 Monochrome Dots from Hero Frame */}
              <div className="mt-8 self-end">
                <FiveDotsMotif
                  activeIndex={heroDotIndex}
                  onSelect={setHeroDotIndex}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 02: TECH STACK & CORE ARSENAL (Section Baru #1)
           ========================================================= */}
        <section
          id="techstack"
          className="py-16 border-t border-[#F0F0F0] relative"
        >
          <FigmaBlueprintNote
            tip={DESIGN_SECTION_TIPS.techstack}
            visible={showBlueprintNotes}
          />

          <SectionEyebrow
            label="Tech Stack"
            title="Core Technologies & Tools."
            subtitle="Teknologi utama yang saya gunakan sehari-hari untuk membangun aplikasi web yang cepat, terstruktur, dan mudah dikembangkan."
            rightSlot={
              <div className="hidden sm:flex items-center gap-2 text-xs text-[#6E6E6E] bg-[#F7F7F7] px-3.5 py-2 rounded-full border border-[#EBEBEB]">
                <span className="w-2 h-2 rounded-full bg-[#2B2B2B]" />
                <span>Primary Stack: Laravel + PHP + MySQL + Tailwind</span>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECH_CATEGORIES.map((category, idx) => (
              <div
                key={category.title}
                className="bg-[#FAFAFA] hover:bg-[#F5F5F5] border border-[#ECECEC] rounded-2xl p-6 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold text-[#7A7A7A] bg-white px-2.5 py-1 rounded-md border border-[#E6E6E6]">
                      0{idx + 1} / STACK
                    </span>
                    <SixStripesMotif className="scale-75 origin-right opacity-70" />
                  </div>

                  <h3 className="text-lg font-bold text-[#232323]">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#757575] mt-1 mb-5">
                    {category.subtitle}
                  </p>

                  <div className="space-y-2.5">
                    {category.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center justify-between bg-white px-3.5 py-2.5 rounded-xl border border-[#EFEFEF]"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#2B2B2B]" />
                          <span className="text-xs font-semibold text-[#232323]">
                            {tech.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-medium text-[#777777] bg-[#F5F5F5] px-2 py-0.5 rounded">
                            {tech.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 03: PROFILE & EXPERIENCE (Section Baru #2 — Menu "profile")
           ========================================================= */}
        <section
          id="profile"
          className="py-16 border-t border-[#F0F0F0] relative"
        >
          <FigmaBlueprintNote
            tip={DESIGN_SECTION_TIPS.profile}
            visible={showBlueprintNotes}
          />

          <SectionEyebrow
            label="Profile"
            title="About Me & Journey."
            subtitle="Perpaduan latar belakang rekayasa perangkat lunak dan pengalaman nyata membangun sistem digital untuk sekolah maupun bisnis."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Columns: About Card + 2x2 Key Metrics Grid */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F8F8F8] border border-[#ECECEC] rounded-2xl p-6 sm:p-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E6E6E6] text-[11px] font-medium text-[#444444] mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#2B2B2B]" />
                  Based in Indonesia • Open for Projects
                </div>

                <h3 className="text-xl font-bold text-[#232323] leading-snug">
                  Fokus pada Clean Code, Performa Database, & Kemudahan Pengguna.
                </h3>

                <p className="mt-3 text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                  Halo! Saya <strong className="text-[#232323]">Ilham Ramadan</strong>, seorang
                  Software Developer yang gemar mengubah kebutuhan administrasi atau bisnis yang
                  kompleks menjadi aplikasi web berbasis <strong className="text-[#232323]">Laravel & PHP</strong> yang
                  rapi, aman, dan mudah dioperasikan.
                </p>

                <p className="mt-2.5 text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                  Saya terbiasa menangani proyek dari tahap perancangan skema database (ERD),
                  desain UI di Figma, hingga pengembangan full-stack dan rilis ke server produksi.
                </p>

                <div className="mt-6 pt-5 border-t border-[#E8E8E8] flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] text-[#888888]">Fokus Spesialisasi</p>
                    <p className="text-xs font-bold text-[#232323]">
                      Full-Stack Laravel & Web Systems
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#2B2B2B] hover:bg-black text-white text-xs font-medium px-5 py-2.5 rounded-full transition"
                  >
                    <span>Request CV / Resume</span>
                  </a>
                </div>
              </div>

              {/* 2x2 Stats Bento */}
              <div className="grid grid-cols-2 gap-4">
                {PROFILE_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-[#EAEAEA] rounded-2xl p-5 hover:border-[#2B2B2B]/40 transition"
                  >
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#232323] tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs font-bold text-[#333333] mt-1">
                      {stat.label}
                    </p>
                    <p className="text-[11px] text-[#888888] mt-0.5">
                      {stat.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 7 Columns: Experience & Education Vertical Timeline */}
            <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#ECECEC] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-[#232323]">
                    Experience & Education Timeline
                  </h3>
                  <p className="text-xs text-[#777777]">
                    Riwayat proyek pengembangan perangkat lunak & latar belakang pendidikan
                  </p>
                </div>
                <SixStripesMotif />
              </div>

              <div className="relative pl-6 border-l-2 border-[#E2E2E2] space-y-7">
                {EXPERIENCE_TIMELINE.map((item, idx) => (
                  <div key={item.id} className="relative group">
                    {/* Timeline Node Dot */}
                    <span
                      className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white transition ${
                        idx === 0
                          ? 'bg-[#2B2B2B] ring-4 ring-[#2B2B2B]/10'
                          : 'bg-[#B0B0B0] group-hover:bg-[#2B2B2B]'
                      }`}
                    />

                    <div className="bg-white border border-[#ECECEC] rounded-2xl p-5 shadow-2xs hover:border-[#CCCCCC] transition">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-mono font-semibold text-[#232323] bg-[#F3F3F3] px-2.5 py-0.5 rounded-md">
                          {item.period}
                        </span>
                        <span className="text-[11px] font-medium text-[#777777]">
                          {item.type}
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-[#232323]">
                        {item.role}
                      </h4>
                      <p className="text-xs font-medium text-[#555555] mb-2.5">
                        {item.organization}
                      </p>
                      <p className="text-xs text-[#6E6E6E] leading-relaxed mb-3.5">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-medium px-2.5 py-0.5 rounded-md bg-[#F7F7F7] text-[#444444] border border-[#EAEAEA]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 04: SERVICES / WHAT I DO (Section Baru #3)
           ========================================================= */}
        <section
          id="services"
          className="py-16 border-t border-[#F0F0F0] relative"
        >
          <FigmaBlueprintNote
            tip={DESIGN_SECTION_TIPS.services}
            visible={showBlueprintNotes}
          />

          <SectionEyebrow
            label="Services"
            title="Digital Solutions I Provide."
            subtitle="Layanan pengembangan web yang dirancang untuk menjawab kebutuhan digitalisasi sekolah, instansi, maupun bisnis modern."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.number}
                className={`rounded-2xl p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                  index === 0
                    ? 'bg-[#232323] text-white border-[#232323] shadow-sm'
                    : 'bg-[#FAFAFA] text-[#232323] border-[#ECECEC] hover:border-[#CCCCCC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                        index === 0
                          ? 'bg-white/15 text-white'
                          : 'bg-[#EBEBEB] text-[#232323]'
                      }`}
                    >
                      {service.number}
                    </span>
                    <span
                      className={`text-[11px] font-mono ${
                        index === 0 ? 'text-white/60' : 'text-[#888888]'
                      }`}
                    >
                      Portfel. Service
                    </span>
                  </div>

                  <h3 className="text-lg font-bold leading-snug mb-3">
                    {service.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      index === 0 ? 'text-white/75' : 'text-[#666666]'
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs">
                        <span
                          className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
                            index === 0 ? 'bg-white' : 'bg-[#2B2B2B]'
                          }`}
                        />
                        <span
                          className={
                            index === 0 ? 'text-white/90' : 'text-[#444444]'
                          }
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`pt-4 border-t text-[11px] font-mono ${
                    index === 0
                      ? 'border-white/15 text-white/70'
                      : 'border-[#E6E6E6] text-[#777777]'
                  }`}
                >
                  {service.stack}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 05: PROJECTS SECTION (Asli dari Frame 8 Desain User)
           ========================================================= */}
        <section
          id="projects"
          className="py-16 border-t border-[#F0F0F0] relative"
        >
          <FigmaBlueprintNote
            tip={DESIGN_SECTION_TIPS.projects}
            visible={showBlueprintNotes}
          />

          {/* Header & Filter Bar Matching Frame 8 */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-4 h-[4px] rounded-full bg-[#2B2B2B]" />
                <span className="text-xs font-semibold tracking-wide text-[#555555]">
                  Projects
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight text-[#232323]">
                Building Digital Solutions.
              </h2>
            </div>

            {/* Category Filter Pills (All, School, Web App, Business, Others) */}
            <div className="flex flex-wrap items-center gap-2">
              {(
                ['All', 'School', 'Web App', 'Business', 'Others'] as ProjectFilter[]
              ).map((category) => {
                const active = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveFilter(category)}
                    className={`px-5 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                      active
                        ? 'bg-[#2B2B2B] text-white shadow-2xs'
                        : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#EAEAEA] hover:text-[#232323]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Project Cards Grid Matching Frame 8 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#DDDDDD] transition group"
              >
                <div>
                  {/* Monochrome Image Container */}
                  <div className="relative h-48 bg-[#E9E9E9] overflow-hidden p-2.5 pb-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top rounded-t-xl grayscale group-hover:grayscale-0 transition duration-500"
                    />
                    <span className="absolute top-5 right-5 bg-[#232323]/85 backdrop-blur-xs text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-[11px] text-[#888888] mb-1.5">
                      <span>{project.role}</span>
                      <span className="font-mono">{project.year}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#232323] leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#757575] leading-relaxed line-clamp-2">
                      {project.shortDesc}
                    </p>

                    {/* Tech tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-white border border-[#E6E6E6] text-[#555555]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-1">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center bg-[#2B2B2B] hover:bg-black text-white text-[11px] font-medium px-7 py-2.5 rounded-full transition cursor-pointer"
                  >
                    View Detail
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Decorative Row from Frame 8 (Left 6 Stripes + Right 5 Dots) */}
          <div className="mt-10 flex items-center justify-between">
            <SixStripesMotif />
            <FiveDotsMotif
              activeIndex={projectDotIndex}
              onSelect={setProjectDotIndex}
            />
          </div>
        </section>

        {/* =========================================================
            SECTION 06: WORK PROCESS / HOW I WORK (Section Baru #4)
           ========================================================= */}
        <section
          id="process"
          className="py-16 border-t border-[#F0F0F0] relative"
        >
          <FigmaBlueprintNote
            tip={DESIGN_SECTION_TIPS.process}
            visible={showBlueprintNotes}
          />

          <SectionEyebrow
            label="Workflow"
            title="How I Build Projects."
            subtitle="Empat tahapan kerja terstruktur untuk memastikan setiap proyek selesai tepat waktu, minim bug, dan sesuai kebutuhan pengguna."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-[#FAFAFA] border border-[#ECECEC] rounded-2xl p-6 flex flex-col justify-between hover:border-[#2B2B2B]/40 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-[#232323]">
                      {item.step}.
                    </span>
                    <span className="w-8 h-[2px] bg-[#D9D9D9]" />
                  </div>

                  <h3 className="text-base font-bold text-[#232323]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-medium text-[#777777] mt-0.5 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#EAEAEA]">
                  <span className="block text-[10px] uppercase tracking-wider text-[#888888] font-mono">
                    Deliverable Output:
                  </span>
                  <span className="text-xs font-semibold text-[#232323]">
                    {item.output}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 07: CERTIFICATES & CREDENTIALS (Section Baru #5 — Menu "certificates")
           ========================================================= */}
        <section
          id="certificates"
          className="py-16 border-t border-[#F0F0F0] relative"
        >
          <FigmaBlueprintNote
            tip={DESIGN_SECTION_TIPS.certificates}
            visible={showBlueprintNotes}
          />

          <SectionEyebrow
            label="Certificates"
            title="Certifications & Credentials."
            subtitle="Bukti sertifikasi kompetensi dan pelatihan rekayasa perangkat lunak yang telah diselesaikan."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CERTIFICATES_LIST.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#FAFAFA] border border-[#ECECEC] rounded-2xl p-6 flex flex-col justify-between hover:bg-white hover:shadow-xs transition"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#232323] text-white">
                      {cert.category}
                    </span>
                    <span className="text-xs font-mono text-[#777777]">
                      Issued {cert.date} • ID: {cert.credentialId}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#232323] leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#555555] mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-[#6E6E6E] leading-relaxed mt-3">
                    {cert.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#EAEAEA] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-medium px-2.5 py-0.5 rounded bg-white border border-[#E2E2E2] text-[#444444]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-semibold text-[#232323] hover:underline cursor-pointer"
                  >
                    Preview Credential →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 08: CONTACT ME & FOOTER (Section Baru #6 — CTA "contact me")
           ========================================================= */}
        <section
          id="contact"
          className="py-16 border-t border-[#F0F0F0] relative"
        >
          <FigmaBlueprintNote
            tip={DESIGN_SECTION_TIPS.contact}
            visible={showBlueprintNotes}
          />

          <div className="bg-[#F7F7F7] border border-[#EAEAEA] rounded-3xl p-7 sm:p-10 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left 5 Columns: Contact Pitch & Direct Info */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2.5 mb-3">
                    <span className="w-4 h-[4px] rounded-full bg-[#2B2B2B]" />
                    <span className="text-xs font-semibold text-[#555555]">
                      Contact Me
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232323] leading-tight">
                    Let's Discuss Your Next Digital Solution.
                  </h2>

                  <p className="mt-3 text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                    Tertarik membangun website sekolah, aplikasi manajemen berbasis Laravel,
                    atau berdiskusi tentang peluang kolaborasi? Silakan kirim pesan atau hubungi
                    kontak di bawah ini.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="bg-white border border-[#E6E6E6] rounded-2xl p-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] text-[#888888]">Direct Email</p>
                        <p className="text-xs sm:text-sm font-bold text-[#232323]">
                          ilham.ramadan.dev@gmail.com
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="px-3 py-1.5 rounded-lg bg-[#F3F3F3] hover:bg-[#232323] hover:text-white text-[11px] font-semibold transition cursor-pointer"
                      >
                        {copiedEmail ? 'Copied!' : 'Copy'}
                      </button>
                    </div>

                    <div className="bg-white border border-[#E6E6E6] rounded-2xl p-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] text-[#888888]">GitHub & LinkedIn</p>
                        <p className="text-xs sm:text-sm font-bold text-[#232323]">
                          github.com/ilhamramadan
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-[#666666] bg-[#F5F5F5] px-2.5 py-1 rounded">
                        @ilhamramadan
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <SixStripesMotif />
                  <span className="text-xs font-extrabold text-[#232323]">
                    Portfel.
                  </span>
                </div>
              </div>

              {/* Right 7 Columns: Clean Monochrome Form */}
              <div className="lg:col-span-7 bg-white border border-[#EAEAEA] rounded-2xl p-6 sm:p-8">
                <h3 className="text-base font-bold text-[#232323] mb-1">
                  Send a Quick Message
                </h3>
                <p className="text-xs text-[#777777] mb-6">
                  Isi detail singkat proyek atau pesanmu di bawah ini.
                </p>

                {contactSubmitted ? (
                  <div className="py-12 px-6 text-center bg-[#FAFAFA] rounded-2xl border border-[#EAEAEA]">
                    <div className="w-10 h-10 rounded-full bg-[#232323] text-white mx-auto flex items-center justify-center text-sm font-bold mb-3">
                      ✓
                    </div>
                    <h4 className="text-base font-bold text-[#232323]">
                      Pesan Berhasil Terkirim!
                    </h4>
                    <p className="text-xs text-[#666666] mt-1 max-w-sm mx-auto">
                      Terima kasih telah menghubungi Ilham Ramadan. Pesanmu telah tercatat di
                      simulasi preview portofolio ini.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, name: e.target.value })
                          }
                          placeholder="Nama lengkap / Instansi"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] text-xs text-[#232323] focus:outline-none focus:border-[#232323]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, email: e.target.value })
                          }
                          placeholder="nama@email.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] text-xs text-[#232323] focus:outline-none focus:border-[#232323]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                        Project Category
                      </label>
                      <select
                        value={contactForm.category}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, category: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] text-xs text-[#232323] focus:outline-none focus:border-[#232323]"
                      >
                        <option>School / Campus Website (PPDB & CMS)</option>
                        <option>Custom Laravel Web Application</option>
                        <option>Company Profile & Business Website</option>
                        <option>Full-Time / Internship Opportunity</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                        Message / Project Brief
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, message: e.target.value })
                        }
                        placeholder="Ceritakan kebutuhan website atau sistem yang ingin dibangun..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] text-xs text-[#232323] focus:outline-none focus:border-[#232323]"
                      />
                    </div>

                    <div className="pt-1 flex items-center justify-between gap-4">
                      <span className="text-[11px] text-[#888888]">
                        Respon rata-rata dalam 1×24 jam kerja
                      </span>
                      <button
                        type="submit"
                        className="bg-[#2B2B2B] hover:bg-black text-white text-xs font-medium px-8 py-3 rounded-full transition cursor-pointer"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Monochrome Footer */}
        <footer className="py-10 border-t border-[#EFEFEF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <div className="flex items-center gap-3">
            <span className="text-base font-extrabold text-[#232323]">
              Portfel.
            </span>
            <span>— Ilham Ramadan © {new Date().getFullYear()}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-[#232323] transition">
              Back to Top ↑
            </a>
          </div>
        </footer>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden border border-[#E5E5E5] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 bg-[#EAEAEA] p-4 pb-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top rounded-t-2xl"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 bg-[#232323] text-white w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center hover:bg-black cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold px-3 py-0.5 rounded-full bg-[#232323] text-white">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-[#777777]">
                  {selectedProject.role} • {selectedProject.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#232323]">
                {selectedProject.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#555555] leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#232323] mb-2">
                  Fitur & Highlight Utama:
                </h4>
                <ul className="space-y-1.5">
                  {selectedProject.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-xs text-[#555555] flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#232323] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EFEFEF] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F5F5F5] text-[#333333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#2B2B2B] text-white text-xs font-medium px-6 py-2.5 rounded-full hover:bg-black transition cursor-pointer"
                >
                  Tutup Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E5E5E5] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-2 border-[#232323] rounded-2xl p-6 bg-[#FAFAFA]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-extrabold text-[#232323]">
                  Portfel. Credential
                </span>
                <SixStripesMotif />
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#777777]">
                Certificate of Competency
              </p>
              <h3 className="text-lg font-bold text-[#232323] mt-1">
                {selectedCert.title}
              </h3>
              <p className="text-xs font-semibold text-[#555555] mt-1">
                Issued by {selectedCert.issuer} ({selectedCert.date})
              </p>
              <p className="text-xs text-[#666666] mt-3 leading-relaxed">
                {selectedCert.summary}
              </p>
              <div className="mt-5 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#555555]">
                <span>Holder: Ilham Ramadan</span>
                <span>ID: {selectedCert.credentialId}</span>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="bg-[#2B2B2B] text-white text-xs font-medium px-6 py-2.5 rounded-full hover:bg-black transition cursor-pointer"
              >
                Tutup Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
