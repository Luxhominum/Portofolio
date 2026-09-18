import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Layers, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenOmniPulse: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOmniPulse }) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Studio Light UI - Engineering Portfolio 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Engineering <span className="text-slate-900 underline decoration-brand-500/40 underline-offset-4">Resilient Enterprise Platforms</span> & High-Craft Web Applications.
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Fokus membangun sistem dashboard transaksi bervolume tinggi, portal sentralisasi tata kelola perusahaan, dan aplikasi cloud tanpa bentrok jadwal dengan standar arsitektur teruji, nol kesalahan manual, dan pengalaman interaksi pengguna yang presisi.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-elevated active:scale-[0.98]"
              >
                <span>Jelajahi 6 Proyek Unggulan</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenOmniPulse}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-800 border border-slate-200/90 hover:bg-slate-50 transition-all shadow-subtle active:scale-[0.98]"
              >
                <Activity className="w-4 h-4 text-brand-600" />
                <span>Live Transaction Simulator</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/70 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">99.98%</div>
                <div className="text-[11px] text-slate-500 font-medium">SLA Compliance</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">0</div>
                <div className="text-[11px] text-slate-500 font-medium">Scheduling Conflicts</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">90%</div>
                <div className="text-[11px] text-slate-500 font-medium">Manual Work Saved</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-elevated relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-800 tracking-tight">Active Engine Telemetry</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">60 FPS Fluid</span>
              </div>

              <div className="space-y-3 mt-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Zero-Conflict Engine</div>
                      <div className="text-[11px] text-slate-500">Live on Cloud Firestore</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    Active
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-brand-100 text-brand-700">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Failover Buffer Queue</div>
                      <div className="text-[11px] text-slate-500">Web Worker Background Sync</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200/60">
                    Standby
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">RBAC Governance Hub</div>
                      <div className="text-[11px] text-slate-500">Google Workspace Add-ons</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/60">
                    100% Secure
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Synthetic Validation Datasets</span>
                <span className="font-mono text-slate-700 font-medium">Privacy Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
