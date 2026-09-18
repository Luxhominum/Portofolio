import React, { useState } from 'react';
import type { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle,
  Play
} from 'lucide-react';
import { OmniPulseSandbox } from './sandboxes/OmniPulseSandbox';
import { NexusPortalSandbox } from './sandboxes/NexusPortalSandbox';
import { TalentPulseSandbox } from './sandboxes/TalentPulseSandbox';
import { MethodologyRadarSandbox } from './sandboxes/MethodologyRadarSandbox';
import { LiturgyFlowSandbox } from './sandboxes/LiturgyFlowSandbox';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'alasan' | 'caraKerja' | 'output' | 'result' | 'sandbox'>('alasan');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="bg-white border border-slate-200 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6 border-b border-slate-200/80 bg-studio-50 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                {project.categoryLabel}
              </span>
              {project.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">
                  {project.badge}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {project.title} - {project.subtitle}
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-1 px-4 sm:px-6 border-b border-slate-200 bg-white overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('alasan')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'alasan'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>1. Alasan Mengapa Dibuat</span>
          </button>

          <button
            onClick={() => setActiveTab('caraKerja')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'caraKerja'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>2. Bagaimana Sistem Bekerja</span>
          </button>

          <button
            onClick={() => setActiveTab('output')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'output'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>3. Output yang Dihasilkan</span>
          </button>

          <button
            onClick={() => setActiveTab('result')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'result'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>4. Result & Dampak</span>
          </button>

          {project.sandboxAvailable && (
            <button
              onClick={() => setActiveTab('sandbox')}
              className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap text-brand-600 ${
                activeTab === 'sandbox'
                  ? 'border-brand-600 font-bold bg-brand-50/50'
                  : 'border-transparent hover:bg-brand-50/30'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-brand-600" />
              <span>Live Interactive Sandbox</span>
            </button>
          )}
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 text-slate-700 text-xs sm:text-sm">
          {activeTab === 'alasan' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Latar Belakang & Masalah Utama</h4>
                <p className="text-slate-700 leading-relaxed">{project.fourPillars.alasan.problem}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Bottleneck Kritis yang Ditemukan:</h4>
                <ul className="space-y-2">
                  {project.fourPillars.alasan.bottlenecks.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/80">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-xs">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-brand-50/50 border border-brand-200/70">
                <h4 className="text-xs font-bold text-brand-900 uppercase tracking-wider mb-1">Tujuan Proyek:</h4>
                <p className="text-brand-800 text-xs leading-relaxed">{project.fourPillars.alasan.objective}</p>
              </div>
            </div>
          )}

          {activeTab === 'caraKerja' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Arsitektur & Pendekatan Teknis</h4>
                <p className="text-slate-700 leading-relaxed">{project.fourPillars.caraKerja.architecture}</p>
                <div className="text-[11px] font-mono text-slate-500 mt-2">{project.fourPillars.caraKerja.techDetails}</div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Mekanisme Kerja Sistem (Step-by-Step):</h4>
                <ul className="space-y-2">
                  {project.fourPillars.caraKerja.mechanics.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-700 text-xs leading-relaxed">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'output' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Fitur & Antarmuka Utama yang Dihasilkan:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.fourPillars.output.features.map((f, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-800 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Deliverables & Artefak:</h4>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                  {project.fourPillars.output.deliverables.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'result' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.fourPillars.result.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-2xl font-bold font-mono text-slate-900">{m.value}</div>
                    <div className="text-xs font-semibold text-slate-800 mt-1">{m.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{m.desc}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">Dampak & Manfaat Terukur:</h4>
                <p className="text-emerald-800 text-xs leading-relaxed">{project.fourPillars.result.impactSummary}</p>
              </div>
            </div>
          )}

          {activeTab === 'sandbox' && (
            <div className="space-y-3">
              {project.demoType === 'omnipulse' && <OmniPulseSandbox />}
              {project.demoType === 'nexus' && <NexusPortalSandbox />}
              {project.demoType === 'talent' && <TalentPulseSandbox />}
              {project.demoType === 'radar' && <MethodologyRadarSandbox />}
              {project.demoType === 'liturgy' && <LiturgyFlowSandbox />}
            </div>
          )}
        </div>

        <div className="p-4 sm:px-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map(s => (
              <span key={s} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] font-mono text-slate-600">
                {s}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
              >
                <span>Buka Live Production</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
