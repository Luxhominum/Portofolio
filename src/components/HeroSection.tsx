import React from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  Sparkles,
    Activity,
  } from 'lucide-react';
import { ProjectScreenshot } from './ProjectScreenshot';

interface HeroSectionProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCaseStudy }) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100/50 via-studio-50 to-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (6 cols): Clear, Confident Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700 text-xs font-semibold shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Full-Stack & Systems Architecture Portfolio</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Membangun Sistem <br />
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-brand-600 bg-clip-text text-transparent">
                Perangkat Lunak Enterprise
              </span> <br />
              & High-Craft Web Apps.
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
              Portofolio rekayasa perangkat lunak yang berfokus pada dashboard transaksi bervolume tinggi, portal kontrol sistem perusahaan, dan algoritma analitik teruji dengan standar reliabilitas 99.99%.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-elevated active:scale-[0.98]"
              >
                <span>Lihat 6 Studi Kasus Lengkap</span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50 transition-all shadow-subtle active:scale-[0.98]"
              >
                <Layers className="w-4 h-4 text-slate-500" />
                <span>Matriks Kemampuan Teknis</span>
              </a>
            </div>

            {/* Key Verified Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-md">
              <div>
                <div className="text-2xl font-bold font-mono text-slate-900">99.98%</div>
                <div className="text-[11px] text-slate-500 font-medium">SLA Compliance</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-slate-900">0 Kasus</div>
                <div className="text-[11px] text-slate-500 font-medium">Bentrok Jadwal</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-slate-900">90%</div>
                <div className="text-[11px] text-slate-500 font-medium">Otomasi Manual</div>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Featured Large-Scale Screenshot Showcase */}
          <div className="lg:col-span-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-brand-600" />
                  Featured System Interface: OmniPulse OS
                </span>
                <button
                  onClick={() => onOpenCaseStudy('omnipulse')}
                  className="text-xs font-semibold text-brand-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Buka Dokumentasi</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* High-Resolution Screenshot Component */}
              <ProjectScreenshot type="omnipulse" isDetailed={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
