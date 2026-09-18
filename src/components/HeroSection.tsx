import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Activity, 
  Layers, 
  Users, 
  Sliders, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { OmniPulseSandbox } from './sandboxes/OmniPulseSandbox';
import { NexusPortalSandbox } from './sandboxes/NexusPortalSandbox';
import { TalentPulseSandbox } from './sandboxes/TalentPulseSandbox';
import { MethodologyRadarSandbox } from './sandboxes/MethodologyRadarSandbox';

interface HeroSectionProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCaseStudy }) => {
  const [activeTab, setActiveTab] = useState<'omnipulse' | 'nexus' | 'talent' | 'radar'>('omnipulse');

  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-100/60 via-studio-50 to-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Value Proposition */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700 text-xs font-semibold shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Interactive Engineering Portfolio & System Showcases</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Engineering Resilient <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-brand-600 bg-clip-text text-transparent">
              Enterprise Platforms & High-Craft UIs
            </span>
          </h1>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Spesialisasi dalam arsitektur dashboard transaksi berkinerja tinggi, portal kendali sistem terpusat, dan visualisasi data matematis dengan standar keandalan 99.99%.
          </p>

          {/* Nested Button-in-Button CTA */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-elevated active:scale-[0.98]"
            >
              <span>Jelajahi 6 Studi Kasus Lengkap</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </a>

            <a
              href="#architecture"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50 transition-all shadow-subtle active:scale-[0.98]"
            >
              <Layers className="w-4 h-4 text-slate-500" />
              <span>Matriks Teknologi & Kode</span>
            </a>
          </div>
        </div>

        {/* DOUBLE-BEZEL INTERACTIVE HERO SHOWCASE FRAME */}
        <div className="relative mt-6 max-w-5xl mx-auto">
          {/* Ambient Glow Aura */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-slate-200 via-brand-100 to-slate-200 rounded-[2.5rem] blur-xl opacity-60 pointer-events-none"></div>

          {/* Outer Shell (Double-Bezel) */}
          <div className="relative p-2 md:p-3 rounded-[2.25rem] bg-slate-100/90 ring-1 ring-slate-200/80 shadow-2xl">
            {/* Inner Core */}
            <div className="bg-white rounded-[calc(2.25rem-0.75rem)] border border-slate-200/90 overflow-hidden shadow-subtle">
              
              {/* Hardware Mockup Top Bar (Browser/OS Window Frame) */}
              <div className="bg-slate-50/95 px-4 py-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Window Traffic Lights & URL Pill */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400 border border-rose-500/30"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/30"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/30"></span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200/80 rounded-md text-[11px] font-mono text-slate-600 shadow-subtle">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>preview.engineering-studio.internal/{activeTab}</span>
                  </div>
                </div>

                {/* Interactive Project Switcher Tabs */}
                <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-xl overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('omnipulse')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'omnipulse'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5 text-brand-600" />
                    <span>OmniPulse OS</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('nexus')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'nexus'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Nexus Portal</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('talent')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'talent'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                    <span>TalentPulse</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('radar')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'radar'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5 text-amber-600" />
                    <span>MethodologyIQ</span>
                  </button>
                </div>
              </div>

              {/* Interactive Screen Viewport */}
              <div className="p-4 sm:p-6 bg-slate-50/40">
                {activeTab === 'omnipulse' && <OmniPulseSandbox />}
                {activeTab === 'nexus' && <NexusPortalSandbox />}
                {activeTab === 'talent' && <TalentPulseSandbox />}
                {activeTab === 'radar' && <MethodologyRadarSandbox />}
              </div>

              {/* Hardware Mockup Footer Bar */}
              <div className="px-5 py-3 bg-white border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="font-medium text-slate-700">Live Client-Side State Engine</span>
                  <span className="text-slate-400 font-mono">| 100% Synthetic Privacy Data</span>
                </div>
                <button
                  onClick={() => onOpenCaseStudy(activeTab === 'omnipulse' ? 'omnipulse' : activeTab === 'nexus' ? 'nexus-portal' : activeTab === 'talent' ? 'talentpulse' : 'methodologyiq')}
                  className="font-mono text-[11px] text-brand-600 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Buka Dokumentasi 4-Pilar untuk Modul Ini</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
