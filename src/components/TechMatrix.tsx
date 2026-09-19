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
      code: 'SYS-01',
      title: 'Frontend & Interaction Engineering',
      icon: Code2,
      skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5 Canvas', 'Chart.js', 'GSAP Motion', 'WCAG 2.1 AA Standards']
    },
    {
      code: 'SYS-02',
      title: 'Enterprise Architecture & Cloud',
      icon: Layers,
      skills: ['Firebase Firestore', 'Cloud Functions', 'Google Apps Script API', 'REST APIs', 'OAuth 2.0 / RBAC', 'Deterministic Validators']
    },
    {
      code: 'SYS-03',
      title: 'Data Intelligence & Analytics',
      icon: Database,
      skills: ['Multi-Channel Normalizer', 'Year-over-Year (YoY) Engine', 'Production Forecasting Models', 'Empirical Decision Trees', 'Python Scrapers']
    },
    {
      code: 'SYS-04',
      title: 'Engineering Rigor & Operations',
      icon: ShieldCheck,
      skills: ['Zero-Conflict Verification', 'Formula Integrity Locking', 'Talent Pipeline Workflows', 'Clean Architecture', 'Industrial Design Systems']
    }
  ];

  return (
    <section id="architecture" className="py-16 border-b-2 border-black bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-4 border-b-2 border-black">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              03 // CORE STACK
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight uppercase">
              Kompetensi Rekayasa & Arsitektur
            </h2>
          </div>
          <p className="text-xs text-zinc-600 max-w-sm font-mono">
            Ketelitian frontend, ketahanan cloud enterprise, dan automasi sistem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quadrants.map(q => {
            const Icon = q.icon;
            return (
              <div 
                key={q.title} 
                className="bg-white border-2 border-black p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(255,85,0,1)] hover:border-black transition-all group"
              >
                <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-zinc-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-zinc-100 border-2 border-black group-hover:bg-orange-500 group-hover:text-white transition-colors text-black">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-black text-black uppercase tracking-tight">{q.title}</h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 group-hover:text-orange-600 transition-colors">
                    {q.code}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {q.skills.map(sk => (
                    <span
                      key={sk}
                      className="text-xs font-mono px-2.5 py-1 bg-zinc-50 border border-zinc-300 text-zinc-800 font-semibold hover:border-black hover:bg-black hover:text-white transition-all cursor-default"
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
