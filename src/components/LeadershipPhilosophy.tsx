import React from 'react';
import { HeartHandshake, ShieldCheck, LineChart, Terminal } from 'lucide-react';

export const LeadershipPhilosophy: React.FC = () => {
  const pillars = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-orange-600" />,
      tag: 'People-First Systems',
      title: 'MEMBERDAYAKAN MANUSIA & MENGELIMINASI FRIKSI',
      description:
        'Perangkat lunak terbaik bukan yang paling rumit, melainkan yang membebaskan tim dari rutinitas spreadsheet manual yang melelahkan sehingga mereka dapat fokus pada inisiatif strategis bernilai tinggi.'
    },
    {
      icon: <LineChart className="w-5 h-5 text-orange-600" />,
      tag: 'Empirical Rigor',
      title: 'KEPUTUSAN BERBASIS DATA FAKTUAL & RISET ILMIAH',
      description:
        'Menghindari spekulasi subjektif. Setiap perancangan fitur, pemilihan metodologi proyek, maupun proyeksi kapasitas produksi selalu didasarkan pada run-rate data transaksi riil dan literatur empiris teruji.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-orange-600" />,
      tag: 'Zero-Defect Guardrails',
      title: 'PENCEGAHAN KEGAGALAN DENGAN ALGORITMA MATEMATIS',
      description:
        'Membangun pagar pembatas otomatis (guardrails) di hulu sistem — seperti matrix validasi jadwal dan konsistensi skema data — untuk memastikan human-error tereliminasi sebelum berdampak pada operasional.'
    }
  ];

  return (
    <section id="philosophy" className="py-16 sm:py-20 bg-zinc-50 border-b-2 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            02 // LEADERSHIP & OPERATIONAL FRAMEWORK
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight uppercase mt-2">
            FILOSOFI REKAYASA & TATA KELOLA
          </h2>
          <p className="text-sm sm:text-base text-zinc-800 mt-3 leading-relaxed font-medium">
            Menjembatani tata kelola organisasi (HR & Operations), ketajaman analitik bisnis, dan arsitektur rekayasa perangkat lunak modern untuk menciptakan dampak nyata yang terukur.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-black p-6 sm:p-7 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:border-orange-600 hover:shadow-[5px_5px_0px_0px_rgba(255,85,0,1)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 bg-black text-white border-2 border-black flex items-center justify-center mb-5 shadow-[2px_2px_0px_0px_rgba(255,85,0,1)]">
                  {pillar.icon}
                </div>
                <span className="text-[11px] font-mono font-black text-orange-600 uppercase tracking-wider block mb-1.5">
                  MOD-0{idx + 1} // {pillar.tag}
                </span>
                <h3 className="text-base sm:text-lg font-black text-black uppercase leading-snug mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t-2 border-black flex items-center justify-between text-xs font-mono font-bold text-black">
                <span className="uppercase text-[10px]">OPERATING PRINCIPLE</span>
                <span className="text-orange-600">ACTIVE [OK]</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
