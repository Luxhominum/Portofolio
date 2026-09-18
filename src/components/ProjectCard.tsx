import React from 'react';
import type { Project } from '../types';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Users, 
  Sliders, 
  Calendar, 
  FileSpreadsheet
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const renderUIMockup = () => {
    switch (project.demoType) {
      case 'omnipulse':
        return (
          <div className="bg-slate-900 text-white p-3 rounded-xl font-mono text-[11px] space-y-2 select-none">
            <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1.5 border-b border-slate-800">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE STREAM INGESTION
              </span>
              <span>BUFFER: 0 STAGED</span>
            </div>
            <div className="space-y-1.5 font-sans">
              <div className="bg-slate-800/80 p-2 rounded-lg flex items-center justify-between border border-slate-700/60">
                <div>
                  <div className="font-mono text-xs font-bold text-white">INV/2026/SPX/9841</div>
                  <div className="text-[10px] text-slate-400">Shopee • Ergonomic Desk Mat</div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-semibold">
                    38m SLA
                  </span>
                </div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded-lg flex items-center justify-between border border-slate-700/40">
                <div>
                  <div className="font-mono text-xs font-bold text-slate-200">INV/2026/TKP/5129</div>
                  <div className="text-[10px] text-slate-400">Tokopedia • Keycaps x70</div>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">
                  Ready to Pack
                </span>
              </div>
            </div>
          </div>
        );

      case 'nexus':
        return (
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-slate-800 space-y-2 select-none">
            <div className="flex items-center justify-between text-[10px] pb-1.5 border-b border-slate-100">
              <span className="font-semibold text-slate-700 flex items-center gap-1">
                <FileSpreadsheet className="w-3 h-3 text-emerald-600" />
                CENTRAL REGISTRY
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded">
                RBAC ACTIVE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/80">
                <div className="text-[10px] text-slate-500">Apps Script Quota</div>
                <div className="text-xs font-bold font-mono text-slate-900 mt-0.5">34% Used</div>
                <div className="w-full bg-slate-200 h-1 rounded-full mt-1 overflow-hidden">
                  <div className="bg-brand-600 h-full w-[34%]"></div>
                </div>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/80">
                <div className="text-[10px] text-slate-500">Master Formula</div>
                <div className="text-xs font-bold font-mono text-emerald-600 mt-0.5">100% Lock</div>
                <div className="text-[9px] text-slate-400 mt-0.5">Zero Override</div>
              </div>
            </div>
          </div>
        );

      case 'talent':
        return (
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/90 text-slate-800 space-y-2 select-none">
            <div className="flex items-center justify-between text-[10px] pb-1.5 border-b border-slate-200">
              <span className="font-semibold text-slate-700 flex items-center gap-1">
                <Users className="w-3 h-3 text-brand-600" />
                RECRUITMENT PIPELINE
              </span>
              <span className="font-mono text-[9px] text-slate-500">5 ACTIVE</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center">
              <div className="bg-white p-1.5 rounded-lg border border-slate-200">
                <div className="text-[9px] text-slate-400">Screening</div>
                <div className="text-xs font-bold font-mono text-slate-800 mt-0.5">2</div>
              </div>
              <div className="bg-white p-1.5 rounded-lg border border-brand-200 bg-brand-50/20">
                <div className="text-[9px] text-brand-600 font-semibold">Interview</div>
                <div className="text-xs font-bold font-mono text-brand-700 mt-0.5">2</div>
              </div>
              <div className="bg-white p-1.5 rounded-lg border border-slate-200">
                <div className="text-[9px] text-slate-400">Offer</div>
                <div className="text-xs font-bold font-mono text-emerald-600 mt-0.5">1</div>
              </div>
            </div>
            <div className="bg-white p-1.5 rounded-lg border border-slate-200 flex items-center justify-between text-[10px]">
              <span className="font-mono font-bold text-slate-800">CAND-901</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">94% Fit Score</span>
            </div>
          </div>
        );

      case 'liturgy':
        return (
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-slate-800 space-y-2 select-none">
            <div className="flex items-center justify-between text-[10px] pb-1.5 border-b border-slate-100">
              <span className="font-semibold text-slate-700 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-brand-600" />
                COMMUNITY CALENDAR
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">
                ZERO-CONFLICT PASS
              </span>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/80 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-slate-900">Minggu Biasa XXV</div>
                <div className="text-[9px] text-slate-500">Sesi Pagi (07:00) • Wilayah 3</div>
              </div>
              <div className="text-right font-mono text-[10px] font-bold text-emerald-700">
                12/12 Filled
              </div>
            </div>
            <div className="text-[9px] text-slate-500 flex justify-between px-1">
              <span>Fair-Share Index: 98.4%</span>
              <span className="font-bold text-brand-600">jadwal-liturgi.web.app</span>
            </div>
          </div>
        );

      case 'radar':
        return (
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-800 space-y-2 select-none">
            <div className="flex items-center justify-between text-[10px] pb-1.5 border-b border-slate-200">
              <span className="font-semibold text-slate-700 flex items-center gap-1">
                <Sliders className="w-3 h-3 text-amber-600" />
                DECISION RADAR ENGINE
              </span>
              <span className="font-mono text-[9px] text-slate-500">15 CRITERIA</span>
            </div>
            <div className="space-y-1.5 text-[10px]">
              <div>
                <div className="flex justify-between text-slate-600 mb-0.5">
                  <span>Agile Scrum</span>
                  <span className="font-mono font-bold text-emerald-700">78%</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full w-[78%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-slate-600 mb-0.5">
                  <span>Waterfall Stage-Gate</span>
                  <span className="font-mono font-bold text-indigo-700">35%</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full w-[35%]"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'automation':
        return (
          <div className="bg-slate-900 text-white p-3 rounded-xl font-mono text-[10px] space-y-1.5 select-none">
            <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800">
              <span>GOOGLE WORKSPACE SIDEBAR</span>
              <span className="text-emerald-400">READY</span>
            </div>
            <div className="text-slate-300 leading-relaxed text-[9px]">
              [OK] Unfinished Orders Filter: 1,420 rows scanned<br />
              [OK] Python Suggestion Tree: +240 long-tail keywords<br />
              [OK] Execution duration: 1.2s
            </div>
          </div>
        );
    }
  };

  return (
    <div className="group relative p-2 rounded-[2rem] bg-slate-100/90 ring-1 ring-slate-200/80 hover:ring-slate-300 transition-all shadow-diffusion hover:shadow-elevated flex flex-col justify-between">
      <div className="bg-white p-5 md:p-6 rounded-[calc(2rem-0.5rem)] border border-slate-200/80 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
              {project.categoryLabel}
            </span>
            {project.badge && (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                {project.badge}
              </span>
            )}
          </div>

          <div className="mb-4 rounded-xl overflow-hidden shadow-subtle group-hover:scale-[1.01] transition-transform">
            {renderUIMockup()}
          </div>

          <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-semibold text-slate-500 mt-0.5 mb-1.5">
            {project.subtitle}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
            {project.tagline}
          </p>

          <div className="p-3 bg-slate-50/90 rounded-xl border border-slate-200/70 mb-4 space-y-1 text-xs">
            <p className="text-[11px] text-slate-600 leading-normal">
              <span className="font-bold text-slate-800">Tantangan:</span> {project.fourPillars.alasan.problem.slice(0, 110)}...
            </p>
            <p className="text-[11px] text-slate-600 leading-normal">
              <span className="font-bold text-emerald-800">Dampak:</span> {project.fourPillars.result.impactSummary}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.slice(0, 4).map(tech => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="group/btn inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-brand-600 transition-colors"
          >
            <span>Buka Studi Kasus 4-Pilar & Sandbox</span>
            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-brand-50 group-hover/btn:text-brand-600 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              title="Kunjungi Live Production App"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
