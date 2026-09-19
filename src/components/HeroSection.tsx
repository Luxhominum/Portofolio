import React from 'react';
import { ArrowDown, Layers, Terminal } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-14 md:pt-16 md:pb-20 overflow-hidden bg-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Status Line */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-orange-500" />
            <span>FULLSTACK & SYSTEMS ENGINEER</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500 text-white text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span>AVAILABLE FOR WORK</span>
          </div>
        </div>

        {/* Ultra-Bold Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-black tracking-tighter uppercase leading-[0.95] max-w-5xl">
          ENGINEERING DETERMINISTIC SYSTEMS FOR COMPLEX WORKFLOWS.
        </h1>

        {/* 1-Line Clean Subheadline */}
        <p className="mt-5 text-base sm:text-lg text-zinc-700 leading-relaxed max-w-2xl font-normal">
          Mengubah alur kerja spreadsheet manual menjadi aplikasi web deterministik dengan validasi matematis otomatis dan pelaporan terstruktur.
        </p>

        {/* Clean CTAs */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider bg-black text-white hover:bg-orange-600 transition-all shadow-[3px_3px_0px_0px_rgba(255,85,0,1)] active:translate-x-0.5 active:translate-y-0.5"
          >
            <span>Lihat 4 Sistem Produksi</span>
            <ArrowDown className="w-3.5 h-3.5 text-orange-400" />
          </a>

          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider bg-white text-black border-2 border-black hover:bg-zinc-100 transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
          >
            <Layers className="w-3.5 h-3.5 text-black" />
            <span>Tech Stack</span>
          </a>
        </div>

        {/* 4 Clean Metric Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-6 border-t-2 border-black">
          <div className="p-3.5 bg-zinc-50 border-2 border-black">
            <div className="text-xl sm:text-2xl font-black font-mono text-black">0 CONFLICT</div>
            <div className="text-[10px] font-mono text-zinc-600 uppercase mt-0.5">Resource Scheduling</div>
          </div>

          <div className="p-3.5 bg-zinc-50 border-2 border-black">
            <div className="text-xl sm:text-2xl font-black font-mono text-black">MULTI-YoY</div>
            <div className="text-[10px] font-mono text-zinc-600 uppercase mt-0.5">Sales Intelligence</div>
          </div>

          <div className="p-3.5 bg-zinc-50 border-2 border-black">
            <div className="text-xl sm:text-2xl font-black font-mono text-black">0 DETIK</div>
            <div className="text-[10px] font-mono text-zinc-600 uppercase mt-0.5">Post-Test Matrix</div>
          </div>

          <div className="p-3.5 bg-zinc-50 border-2 border-black">
            <div className="text-xl sm:text-2xl font-black font-mono text-black">15+ FAKTOR</div>
            <div className="text-[10px] font-mono text-zinc-600 uppercase mt-0.5">Decision Research</div>
          </div>
        </div>

      </div>
    </section>
  );
};
