import React, { useState } from 'react';
import type { Project } from '../types';
import { 
  X, 
  CheckCircle2, 
  AlertCircle,
            } from 'lucide-react';
import { ProjectScreenshot } from './ProjectScreenshot';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'alasan' | 'caraKerja' | 'output' | 'result'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        className="bg-white border border-slate-200 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col font-sans"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200/80 bg-studio-50 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                {project.categoryLabel}
              </span>
              {project.badge && (
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800">
                  {project.badge}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {project.title} — {project.subtitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-4 sm:px-6 border-b border-slate-200 bg-white overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-slate-900 text-slate-900 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Overview & Screenshot</span>
          </button>

          <button
            onClick={() => setActiveTab('alasan')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'alasan'
                ? 'border-slate-900 text-slate-900 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>1. Alasan Mengapa Dibuat</span>
          </button>

          <button
            onClick={() => setActiveTab('caraKerja')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'caraKerja'
                ? 'border-slate-900 text-slate-900 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>2. Bagaimana Sistem Bekerja</span>
          </button>

          <button
            onClick={() => setActiveTab('output')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'output'
                ? 'border-slate-900 text-slate-900 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>3. Output yang Dihasilkan</span>
          </button>

          <button
            onClick={() => setActiveTab('result')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'result'
                ? 'border-slate-900 text-slate-900 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>4. Result & Dampak</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 text-slate-700 text-xs sm:text-sm">
          
          {/* TAB: OVERVIEW & SCREENSHOT */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Visual Screenshot Antarmuka Sistem:
                </h4>
                <ProjectScreenshot type={project.uiType} isDetailed={true} />
              </div>

              {/* Key Highlights Checklist */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Poin Kunci & Karakteristik Utama Sistem:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-800 leading-relaxed font-medium">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: 1. ALASAN MENGAPA DIBUAT */}
          {activeTab === 'alasan' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Latar Belakang & Masalah Utama
                </h4>
                <p className="text-slate-700 leading-relaxed">{project.fourPillars.alasan.problem}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Bottleneck Kritis yang Ditemukan:
                </h4>
                <ul className="space-y-2">
                  {project.fourPillars.alasan.bottlenecks.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-xs leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-brand-50/50 border border-brand-200/70">
                <h4 className="text-xs font-bold text-brand-900 uppercase tracking-wider mb-1">
                  Tujuan Utama Proyek:
                </h4>
                <p className="text-brand-800 text-xs leading-relaxed">{project.fourPillars.alasan.objective}</p>
              </div>
            </div>
          )}

          {/* TAB: 2. BAGAIMANA SISTEM BEKERJA */}
          {activeTab === 'caraKerja' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Arsitektur & Pendekatan Teknis
                </h4>
                <p className="text-slate-700 leading-relaxed">{project.fourPillars.caraKerja.architecture}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Tahapan Alur Kerja Sistem (Workflow Pipeline):
                </h4>
                <ul className="space-y-2.5">
                  {project.fourPillars.caraKerja.workflowSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200/80">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-700 text-xs leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Spesifikasi Rekayasa Teknis:
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600">
                  {project.fourPillars.caraKerja.technicalSpecifications.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB: 3. OUTPUT YANG DIHASILKAN */}
          {activeTab === 'output' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Fitur Antarmuka & Modul Fungsional yang Dibangun:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.fourPillars.output.coreFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <h5 className="text-xs font-bold text-slate-900">{feat.title}</h5>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed pl-5">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Deliverables & Artefak Proyek:
                </h4>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                  {project.fourPillars.output.deliverables.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB: 4. RESULT & DAMPAK */}
          {activeTab === 'result' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Metrik Kinerja & Hasil Terukur:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.fourPillars.result.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                      <div className="text-2xl font-bold font-mono text-slate-900">{m.value}</div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">{m.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">
                  Rangkuman Dampak Operasional:
                </h4>
                <p className="text-emerald-800 text-xs leading-relaxed">
                  {project.fourPillars.result.impactSummary}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map(s => (
              <span key={s} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] font-mono text-slate-600">
                {s}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
