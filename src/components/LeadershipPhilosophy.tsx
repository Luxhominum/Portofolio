import React from 'react';
import { HeartHandshake, ShieldCheck, LineChart, Sparkles } from 'lucide-react';

export const LeadershipPhilosophy: React.FC = () => {
  const pillars = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-blue-600" />,
      tag: 'People-First Systems',
      title: 'Memberdayakan Manusia & Menghilangkan Friksi Repetitif',
      description:
        'Perangkat lunak terbaik bukan yang paling rumit, melainkan yang membebaskan tim dari rutinitas spreadsheet manual yang melelahkan sehingga mereka dapat fokus pada inisiatif strategis bernilai tinggi.'
    },
    {
      icon: <LineChart className="w-5 h-5 text-blue-600" />,
      tag: 'Empirical Rigor',
      title: 'Keputusan Berbasis Data Faktual & Bukti Ilmiah',
      description:
        'Menghindari spekulasi subjektif. Setiap perancangan fitur, pemilihan metodologi proyek, maupun proyeksi kapasitas produksi selalu didasarkan pada run-rate data transaksi riil dan literatur empiris teruji.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      tag: 'Zero-Defect Guardrails',
      title: 'Pencegahan Kegagalan Melalui Algoritma Matematis',
      description:
        'Membangun pagar pembatas otomatis (guardrails) di hulu sistem — seperti matrix validasi jadwal dan konsistensi skema data — untuk memastikan human-error tereliminasi sebelum berdampak pada operasional.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Leadership & Engineering Framework
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1.5">
            Filosofi Rekayasa & Kepemimpinan Operasional
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Menjembatani tata kelola organisasi (HR & Operations), ketajaman analitik bisnis, dan arsitektur rekayasa perangkat lunak modern untuk menciptakan dampak nyata yang terukur.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-subtle hover:border-blue-200 hover:shadow-elevation transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 shadow-2xs">
                  {pillar.icon}
                </div>
                <span className="text-[11px] font-mono font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  0{idx + 1} // {pillar.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Core Operating Principle</span>
                <span className="text-blue-600 font-bold">✓ Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
