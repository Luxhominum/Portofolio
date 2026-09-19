import React from 'react';
import { ArrowDown, Layers, Terminal } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Top Hardware Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-orange-500" />
            <span>DEV / OPS / HR TECH</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500 text-white text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span>SYSTEM OPERATIONAL: READY FOR COLLAB</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 text-black border border-black text-xs font-mono font-bold uppercase">
            <span>SERIES: 2026.09</span>
          </div>
        </div>

        {/* Ultra-Bold Teenage Engineering Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-black tracking-tighter uppercase leading-[0.95] max-w-5xl">
          ENGINEERING DETERMINISTIC SOFTWARE FOR COMPLEX WORKFLOWS.
        </h1>

        {/* Manifesto Paragraph */}
        <p className="mt-7 text-base sm:text-xl text-zinc-800 leading-relaxed max-w-3xl font-medium">
          Mengubah spreadsheet manual yang rentan kesalahan (*error-prone spreadsheets*) menjadi aplikasi web deterministik dengan pagar pengaman algoritma matematis (*zero-conflict guardrails*). Menghubungkan tata kelola operasional HR, inteligensi penjualan multi-kanal, dan rekayasa sistem terdistribusi.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider bg-black text-white hover:bg-orange-600 transition-all shadow-[4px_4px_0px_0px_rgba(255,85,0,1)] active:translate-x-0.5 active:translate-y-0.5"
          >
            <span>Explore 4 Production Studios</span>
            <ArrowDown className="w-4 h-4 text-orange-400" />
          </a>

          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider bg-white text-black border-2 border-black hover:bg-zinc-100 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
          >
            <Layers className="w-4 h-4 text-black" />
            <span>Architecture & Stack</span>
          </a>
        </div>

        {/* 4 Hardware Tactile Metric Modules (ala Teenage Engineering pocket operators) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14 pt-8 border-t-2 border-black">
          <div className="p-4 bg-zinc-50 border-2 border-black relative group hover:border-orange-600 transition-colors">
            <span className="absolute top-2 right-2 text-[9px] font-mono text-zinc-400 uppercase font-bold">MTR-01</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-black">0 CONFLICT</div>
            <div className="text-[11px] font-mono text-orange-600 font-bold uppercase mt-1">Resource Scheduling</div>
          </div>

          <div className="p-4 bg-zinc-50 border-2 border-black relative group hover:border-orange-600 transition-colors">
            <span className="absolute top-2 right-2 text-[9px] font-mono text-zinc-400 uppercase font-bold">MTR-02</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-black">MULTI-YoY</div>
            <div className="text-[11px] font-mono text-orange-600 font-bold uppercase mt-1">Sales Intelligence</div>
          </div>

          <div className="p-4 bg-zinc-50 border-2 border-black relative group hover:border-orange-600 transition-colors">
            <span className="absolute top-2 right-2 text-[9px] font-mono text-zinc-400 uppercase font-bold">MTR-03</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-black">100% AUDIT</div>
            <div className="text-[11px] font-mono text-orange-600 font-bold uppercase mt-1">HR Assessment Portal</div>
          </div>

          <div className="p-4 bg-zinc-50 border-2 border-black relative group hover:border-orange-600 transition-colors">
            <span className="absolute top-2 right-2 text-[9px] font-mono text-zinc-400 uppercase font-bold">MTR-04</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-black">15+ CRITERIA</div>
            <div className="text-[11px] font-mono text-orange-600 font-bold uppercase mt-1">Methodology Research</div>
          </div>
        </div>

      </div>
    </section>
  );
};
