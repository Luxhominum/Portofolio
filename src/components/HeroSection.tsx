import React from 'react';
import { ArrowDown, Layers, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100/60 via-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Availability */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Full-Stack & Systems Product Engineer</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Tersedia untuk Peluang Baru</span>
          </div>
        </div>

        {/* Editorial Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] max-w-4xl">
          Membangun Arsitektur Perangkat Lunak <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 bg-clip-text text-transparent">
            Bebas Friksi, Resilien & Presisi.
          </span>
        </h1>

        {/* Manifesto Paragraph */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl font-normal">
          Mengubah kompleksitas operasional bisnis dan spreadsheet yang rentan kesalahan menjadi aplikasi cloud deterministik. Berpengalaman merancang sistem penjadwalan zero-conflict, pemantau transaksi multi-channel bervolume tinggi, dan portal kendali enterprise dengan standar keandalan tinggi.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-subtle active:scale-[0.98]"
          >
            <span>Eksplorasi 4 Studi Kasus Rekayasa</span>
            <ArrowDown className="w-4 h-4 text-slate-400" />
          </a>

          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all shadow-subtle active:scale-[0.98]"
          >
            <Layers className="w-4 h-4 text-slate-500" />
            <span>Matriks Kompetensi & Stack</span>
          </a>
        </div>

        {/* 4 Architectural Pillar Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200">
          <div className="p-3 rounded-xl bg-white/70 border border-slate-200/80 shadow-subtle">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">0 Konflik</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Penjadwalan 35 Komunitas</div>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-slate-200/80 shadow-subtle">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">99.98%</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Kepatuhan SLA Kurir</div>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-slate-200/80 shadow-subtle">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">95% Turun</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Insiden Kerusakan Rumus</div>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-slate-200/80 shadow-subtle">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">15+ Dimensi</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Model Evaluasi Keputusan</div>
          </div>
        </div>

      </div>
    </section>
  );
};
