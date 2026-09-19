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
        particleCount: 35,
        spread: 50,
        origin: { y: 0.1 }
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar onCopyEmail={handleCopyEmail} copied={copiedEmail} />
      
      <main className="flex-1">
        <HeroSection />

        {/* Featured Flagship Case Studies (Editorial Long-Form) */}
        <section id="projects" className="py-16 sm:py-24 border-b border-slate-200/80 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-8 sm:mb-10">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Production Case Studies
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1.5">
                Studi Kasus Rekayasa Sistem Nyata
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Setiap proyek di bawah ini mendokumentasikan tantangan bisnis riil, visual antarmuka produksi berdensitas tinggi, arsitektur pencegahan kegagalan, dan metrik hasil yang terukur.
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
