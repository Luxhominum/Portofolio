import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EditorialProjectCard } from './components/EditorialProjectCard';
import { TechMatrix } from './components/TechMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EDITORIAL_PROJECTS } from './data/projectsData';
import confetti from 'canvas-confetti';

export function App() {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar onCopyEmail={handleCopyEmail} copied={copiedEmail} />
      
      <main className="flex-1">
        <HeroSection />

        {/* Featured Flagship Case Studies (Editorial Long-Form) */}
        <section id="projects" className="py-16 sm:py-24 border-b border-slate-200/80 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12 sm:mb-16">
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

            {/* Editorial Stack of Case Studies */}
            <div className="space-y-12 sm:space-y-16">
              {EDITORIAL_PROJECTS.map((project, idx) => (
                <EditorialProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                />
              ))}
            </div>

          </div>
        </section>

        <TechMatrix />
        <ContactSection onCopyEmail={handleCopyEmail} copied={copiedEmail} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
