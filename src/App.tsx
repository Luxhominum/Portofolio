import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EditorialProjectCard } from './components/EditorialProjectCard';
import { DomainFilterTabs, type DomainCategory } from './components/DomainFilterTabs';
import { LeadershipPhilosophy } from './components/LeadershipPhilosophy';
import { TechMatrix } from './components/TechMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EDITORIAL_PROJECTS } from './data/projectsData';
import confetti from 'canvas-confetti';

export function App() {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [activeDomain, setActiveDomain] = useState<DomainCategory>('all');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('developer@contact.id');
    setCopiedEmail(true);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.1 },
        colors: ['#FF5500', '#000000', '#FFFFFF']
      });
    } catch (e) {}
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  // Compute counts per category
  const counts = useMemo(() => {
    return {
      all: EDITORIAL_PROJECTS.length,
      'hr-enterprise': EDITORIAL_PROJECTS.filter(p => p.domain === 'hr-enterprise').length,
      'data-marketplace': EDITORIAL_PROJECTS.filter(p => p.domain === 'data-marketplace').length,
      'community-ops': EDITORIAL_PROJECTS.filter(p => p.domain === 'community-ops').length,
      'research-methodology': EDITORIAL_PROJECTS.filter(p => p.domain === 'research-methodology').length,
    };
  }, []);

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    if (activeDomain === 'all') return EDITORIAL_PROJECTS;
    return EDITORIAL_PROJECTS.filter(p => p.domain === activeDomain);
  }, [activeDomain]);

  return (
    <div className="min-h-screen bg-zinc-50 text-black font-sans flex flex-col antialiased selection:bg-orange-500 selection:text-white">
      <Navbar onCopyEmail={handleCopyEmail} copied={copiedEmail} />
      
      <main className="flex-1">
        <HeroSection />

        {/* Featured Flagship Case Studies (Split Studio Slider) */}
        <section id="projects" className="py-20 sm:py-28 border-b-2 border-black bg-zinc-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-6 border-b-2 border-black">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                  CASE STUDIES // PRODUCTION ARCHIVE
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight uppercase leading-none">
                  Studi Kasus Sistem Nyata
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 font-mono max-w-md leading-relaxed">
                Visual antarmuka resolusi tinggi, alur kerja deterministic, validasi anti-konflik, dan pengukuran performa terverifikasi.
              </p>
            </div>

            {/* Domain Filter Navigation Bar */}
            <div className="mb-10 sm:mb-12">
              <DomainFilterTabs 
                activeDomain={activeDomain}
                onSelectDomain={setActiveDomain}
                counts={counts}
              />
            </div>

            {/* Editorial Stack of Case Studies */}
            <div className="space-y-12 sm:space-y-16 transition-all duration-300">
              {filteredProjects.map((project, idx) => (
                <EditorialProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Executive Leadership & Operational Framework Section */}
        <LeadershipPhilosophy />

        {/* Core Technical Matrix */}
        <TechMatrix />

        {/* Contact & Outreach Section */}
        <ContactSection onCopyEmail={handleCopyEmail} copied={copiedEmail} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
