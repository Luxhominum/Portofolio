import React from 'react';
import { ArrowDown, Layers, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100/60 via-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Availability: 60-30-10 Cohesive Palette */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>HR & Enterprise Systems Product Engineer</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Tersedia untuk Peluang Baru & Kolaborasi</span>
          </div>
        </div>

        {/* Editorial Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] max-w-4xl">
          Membangun Solusi Rekayasa Perangkat Lunak <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-700 bg-clip-text text-transparent">
            untuk Masalah Operasional Nyata.
          </span>
        </h1>

        {/* Manifesto Paragraph */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl font-normal">
          Berpengalaman mengubah proses operasional yang rumit dan spreadsheet yang rentan kesalahan menjadi aplikasi web yang deterministik, andal, dan mudah digunakan. Mengintegrasikan keahlian People & Operations dengan ketelitian rekayasa sistem frontend, analitik data marketplace, dan platform otomasi internal.
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
          <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">0 Konflik</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Penjadwalan 35 Wilayah</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">Multi-YoY</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Analitik Sales Marketplace</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">100% Lock</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Sheet HR & Talent Pool</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">15+ Kriteria</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Riset Metodologi Proyek</div>
          </div>
        </div>

      </div>
    </section>
  );
};
