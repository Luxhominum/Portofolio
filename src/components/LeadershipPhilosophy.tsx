import React from 'react';
import { HeartHandshake, ShieldCheck, LineChart, Terminal } from 'lucide-react';

export const LeadershipPhilosophy: React.FC = () => {
  const pillars = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-orange-600" />,
      tag: 'People-First Systems',
      title: 'MENGELIMINASI FRIKSI OPERASIONAL',
      description:
        'Perangkat lunak terbaik membebaskan tim dari rutinitas spreadsheet manual agar dapat fokus pada inisiatif strategis bernilai tinggi.'
    },
    {
      icon: <LineChart className="w-5 h-5 text-orange-600" />,
      tag: 'Empirical Rigor',
      title: 'KEPUTUSAN BERBASIS DATA RIIL',
      description:
        'Setiap perancangan sistem, pemilihan metodologi, dan estimasi kapasitas selalu didasarkan pada run-rate transaksi faktual dan riset teruji.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-orange-600" />,
      tag: 'Zero-Defect Guardrails',
      title: 'PAGAR PENGAMAN DETERMINISTIK',
      description:
        'Validasi otomatis di hulu sistem — seperti matriks anti-konflik dan konsistensi skema data — mengeliminasi human-error sejak awal.'
    }
  ];

  return (
    <section id="philosophy" className="py-14 sm:py-18 bg-zinc-50 border-b-2 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            02 // OPERATING PRINCIPLES
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight uppercase mt-1">
            FILOSOFI REKAYASA & TATA KELOLA
          </h2>
          <p className="text-xs sm:text-sm text-zinc-700 mt-2 leading-relaxed">
            Menghubungkan tata kelola operasional, ketajaman data bisnis, dan rekayasa perangkat lunak modern.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-black p-5 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:border-orange-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-black text-white border-2 border-black flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(255,85,0,1)]">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-mono font-black text-orange-600 uppercase tracking-wider block mb-1">
                  0{idx + 1} // {pillar.tag}
                </span>
                <h3 className="text-sm sm:text-base font-black text-black uppercase leading-snug mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-black flex items-center justify-between text-[10px] font-mono font-bold text-black">
                <span className="uppercase text-zinc-500">STANDARD</span>
                <span className="text-orange-600 font-black">ENFORCED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
