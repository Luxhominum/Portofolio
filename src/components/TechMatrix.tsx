import React from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  ShieldCheck
} from 'lucide-react';

export const TechMatrix: React.FC = () => {
  const quadrants = [
    {
      title: 'Frontend & Interaction Craft',
      icon: Code2,
      skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'GSAP Animation', 'Framer Motion', 'Chart.js', 'HTML5 Canvas', 'Responsive Web Standards']
    },
    {
      title: 'Enterprise Architecture & Cloud',
      icon: Layers,
      skills: ['Firebase Firestore', 'Cloud Functions', 'Google Apps Script (HTML Service)', 'REST APIs', 'OAuth 2.0 / RBAC', 'Web Workers Ingestion', 'Local-First (IndexedDB)']
    },
    {
      title: 'Systems & Data Intelligence',
      icon: Database,
      skills: ['Python Data Extraction', 'Google Suggestion Tree API', 'Multi-Criteria Decision Algorithms', 'Financial Reconciliation Models', 'Automated SLA Watchdogs']
    },
    {
      title: 'Engineering Rigor & Practices',
      icon: ShieldCheck,
      skills: ['Zero-Conflict Verification', 'Offline-Resilient Failovers', 'Clasp CLI Tooling', 'Clean Architecture', 'WCAG 2.1 AA Accessibility', 'Studio Light Design Systems']
    }
  ];

  return (
    <section id="architecture" className="py-16 border-b border-slate-200/60 bg-studio-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
            Core Competencies & Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Teknologi & Prinsip Arsitektur Rekayasa
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Menghubungkan ketelitian kode frontend dengan ketahanan sistem cloud enterprise, otomasi alur kerja, dan algoritma analitik matematis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {quadrants.map(q => {
            const Icon = q.icon;
            return (
              <div key={q.title} className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-diffusion">
                <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-slate-100">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-900">
                    <Icon className="w-4 h-4 text-brand-600" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">{q.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {q.skills.map(sk => (
                    <span
                      key={sk}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 font-medium"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
