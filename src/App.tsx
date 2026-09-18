import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectFilter } from './components/ProjectFilter';
import { ProjectCard } from './components/ProjectCard';
import { CaseStudyModal } from './components/CaseStudyModal';
import { TechMatrix } from './components/TechMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/mockData';
import type { Project, ProjectCategory } from './types';
import confetti from 'canvas-confetti';

export function App() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('developer@contact.id');
    setCopiedEmail(true);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.1 }
      });
    } catch (e) {}
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const filteredProjects = PROJECTS.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const categoryCounts: Record<ProjectCategory, number> = {
    all: PROJECTS.length,
    ecommerce: PROJECTS.filter(p => p.category === 'ecommerce').length,
    enterprise: PROJECTS.filter(p => p.category === 'enterprise').length,
    community: PROJECTS.filter(p => p.category === 'community').length,
    decision: PROJECTS.filter(p => p.category === 'decision').length,
  };

  const handleOpenCaseStudyById = (projectId: string) => {
    const proj = PROJECTS.find(p => p.id === projectId);
    if (proj) setSelectedProject(proj);
  };

  return (
    <div className="min-h-screen bg-studio-50 text-slate-900 font-sans flex flex-col antialiased selection:bg-brand-100 selection:text-brand-900">
      <Navbar onCopyEmail={handleCopyEmail} copied={copiedEmail} />
      
      <main className="flex-1">
        <HeroSection 
          onOpenCaseStudy={handleOpenCaseStudyById} 
        />

        {/* Featured Projects Grid Section */}
        <section id="projects" className="py-16 md:py-24 border-b border-slate-200/60 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                  Production & Enterprise Showcase
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Koleksi 6 Proyek Perangkat Lunak Unggulan
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-xl">
                  Setiap proyek dilengkapi antarmuka screenshot realistis, dokumentasi 4-Pilar komprehensif, dan simulator interaktif langsung.
                </p>
              </div>

              <ProjectFilter
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                counts={categoryCounts}
              />
            </div>

            {/* Asymmetrical Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenCaseStudy={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </section>

        <TechMatrix />
        <ContactSection onCopyEmail={handleCopyEmail} copied={copiedEmail} />
      </main>

      <Footer />

      {/* 4-Pillar Deep Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
