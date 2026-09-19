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
      title: 'Frontend & Interaction Engineering',
      icon: Code2,
      skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5 Canvas', 'Chart.js', 'GSAP Animation', 'WCAG 2.1 AA Standards']
    },
    {
      title: 'Enterprise Architecture & Cloud',
      icon: Layers,
      skills: ['Firebase Firestore', 'Cloud Functions', 'Google Apps Script API', 'REST APIs', 'OAuth 2.0 / RBAC', 'Deterministic Validators']
    },
    {
      title: 'Data Intelligence & Analytics',
      icon: Database,
      skills: ['Multi-Channel Normalizer', 'Year-over-Year (YoY) Engine', 'Production Forecasting Models', 'Empirical Decision Trees', 'Python Scrapers']
    },
    {
      title: 'Engineering Rigor & Operations',
      icon: ShieldCheck,
      skills: ['Zero-Conflict Verification', 'Formula Integrity Locking', 'Talent Pipeline Workflows', 'Clean Architecture', 'Studio Light Design Systems']
    }
  ];

  return (
    <section id="architecture" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Core Competencies & Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1.5">
            Kompetensi Rekayasa & Prinsip Arsitektur
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Menghubungkan ketelitian kode frontend dengan ketahanan sistem cloud enterprise, otomasi alur kerja operasional, dan algoritma analitik matematis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {quadrants.map(q => {
            const Icon = q.icon;
            return (
              <div key={q.title} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-subtle hover:border-slate-300 transition-all">
                <div className="flex items-center gap-3 pb-3 mb-4 border-b border-slate-100">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-blue-600 shadow-2xs">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">{q.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {q.skills.map(sk => (
                    <span
                      key={sk}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium"
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
