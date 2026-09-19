import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  Users, 
  Compass,
  Briefcase,
  FileSpreadsheet,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  SlidersHorizontal
} from 'lucide-react';
import type { EditorialProject } from '../data/projectsData';
import { ProjectMultiScreenGallery } from './ProjectMultiScreenGallery';

interface Props {
  project: EditorialProject;
  index: number;
}

type InfoTab = 'solution' | 'transformation' | 'architecture' | 'metrics';

export const EditorialProjectCard: React.FC<Props> = ({ project, index }) => {
  const [activeTab, setActiveTab] = useState<InfoTab>('solution');

  const tabs: { id: InfoTab; label: string; icon: React.ReactNode }[] = [
    { id: 'solution', label: '1. Problem & Solusi', icon: <AlertCircle className="w-3.5 h-3.5" /> },
    { id: 'transformation', label: '2. Before vs After', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'architecture', label: '3. Arsitektur Inti', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'metrics', label: '4. Metrik & Dampak', icon: <TrendingUp className="w-3.5 h-3.5" /> },
  ];

  const getIcon = () => {
    switch (project.id) {
      case 'community-scheduling':
        return <Calendar className="w-5 h-5 text-blue-600" />;
      case 'marketplace-sales-intelligence':
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'enterprise-hr-governance':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'methodology-iq':
        return <Compass className="w-5 h-5 text-blue-600" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-600" />;
    }
  };

  const getLiveUrl = () => {
    switch (project.id) {
      case 'community-scheduling':
        return 'https://jadwal-liturgi.web.app';
      case 'marketplace-sales-intelligence':
        return 'https://pge-dashboard-online.vercel.app/';
      case 'enterprise-hr-governance':
        return 'https://pge-talentpool.web.app/';
      default:
        return null;
    }
  };

  const currentTabIndex = tabs.findIndex(t => t.id === activeTab);

  const handleNextTab = () => {
    const nextIdx = (currentTabIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIdx].id);
  };

  const handlePrevTab = () => {
    const prevIdx = (currentTabIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIdx].id);
  };

  const liveUrl = getLiveUrl();

  return (
    <article 
      id={project.id}
      className="bg-white rounded-3xl border border-slate-200/90 shadow-subtle p-5 sm:p-8 transition-all hover:border-slate-300 hover:shadow-elevation"
    >
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
            {getIcon()}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold text-slate-400">0{index + 1} // CASE STUDIO</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200">
                {project.roleBadge}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
              {project.title}
            </h3>
          </div>
        </div>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            <span>Live App</span>
            <ExternalLink className="w-3 h-3 text-slate-300" />
          </a>
        )}
      </div>

      {/* Main Tagline Banner */}
      <div className="my-4 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
        {project.tagline}
      </div>

      {/* Synchronized Split-Studio Grid (Left: Information Slider, Right: Chromium Screen) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-2">
        
        {/* ================================================================= */}
        {/* LEFT PANE: Interactive Information Slider Tabs (col-span-5)        */}
        {/* ================================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50/70 border border-slate-200 rounded-2xl p-4 sm:p-5">
          
          <div>
            {/* Info Slider Navigation Bar */}
            <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 font-mono">
                <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
                <span>Insight Studio</span>
              </div>

              {/* Prev / Next Slide Switcher */}
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-mono text-slate-400 mr-1.5">
                  {currentTabIndex + 1} / {tabs.length}
                </span>
                <button
                  onClick={handlePrevTab}
                  className="w-7 h-7 rounded-md bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors cursor-pointer shadow-2xs"
                  title="Insight Sebelumnya"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNextTab}
                  className="w-7 h-7 rounded-md bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors cursor-pointer shadow-2xs"
                  title="Insight Berikutnya"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sub-Tab Selector Pills */}
            <div className="grid grid-cols-2 gap-1.5 mb-4">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white font-bold text-blue-700 shadow-2xs border border-blue-200/90 ring-1 ring-blue-500/10'
                        : 'text-slate-600 hover:bg-white/60 hover:text-slate-900 border border-transparent'
                    }`}
                  >
                    <span className={isActive ? 'text-blue-600' : 'text-slate-400'}>
                      {tab.icon}
                    </span>
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Slide Content (Height stabilized) */}
            <div className="min-h-[260px] flex flex-col justify-start animate-fadeIn">
              
              {/* TAB 1: Problem & Solution */}
              {activeTab === 'solution' && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                      <span>Masalah Operasional Riil</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/30 border border-blue-200/80 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Solusi Rekayasa Sistem</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: Before vs After Transformation */}
              {activeTab === 'transformation' && project.beforeAfter && (
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-200/80 text-[11px] font-semibold text-blue-900 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-blue-600" />
                      <span>Hasil Transformasi Bisnis</span>
                    </span>
                    <span className="font-bold text-blue-700">{project.beforeAfter.roiHighlight}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-slate-600 mb-2 uppercase text-[10px] tracking-wider">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-slate-400" />
                      <span>Sebelumnya (Era Spreadsheet Manual)</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-500 text-[11px]">
                      {project.beforeAfter.before.map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-slate-400">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-blue-200/90 text-xs shadow-2xs">
                    <div className="flex items-center gap-1.5 font-bold text-blue-800 mb-2 uppercase text-[10px] tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Sesudahnya (Sistem Terotomasi)</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-700 text-[11px] font-medium">
                      {project.beforeAfter.after.map((a, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <ArrowRight className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 3: System Architecture Details */}
              {activeTab === 'architecture' && (
                <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                  {project.architectureDetails.map((arch, i) => {
                    const [title, ...desc] = arch.split(':');
                    return (
                      <div key={i} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs">
                        <div className="font-bold text-slate-900 text-[11px] mb-0.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                          <span>{title}</span>
                        </div>
                        <p className="text-slate-600 text-[11px] pl-3 leading-relaxed">
                          {desc.join(':')}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TAB 4: Verified Impact Metrics */}
              {activeTab === 'metrics' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
                  {project.impactMetrics.map((metric, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-200 transition-colors flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                          {metric.label}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                          {metric.description}
                        </div>
                      </div>
                      <div className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight shrink-0">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* Left Footer: Tech Stack Pills */}
          <div className="pt-3 mt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-mono font-medium text-slate-400 mr-1">Stack:</span>
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-2 py-0.5 rounded bg-white text-slate-700 text-[10px] font-mono font-medium border border-slate-200 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* ================================================================= */}
        {/* RIGHT PANE: Live Chromium Multi-Screen Viewport (col-span-7)       */}
        {/* ================================================================= */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <ProjectMultiScreenGallery 
            projectId={project.id}
          />
        </div>

      </div>
    </article>
  );
};
