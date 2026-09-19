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
    { id: 'solution', label: '01 // PROBLEM & SOLUTION', icon: <AlertCircle className="w-3.5 h-3.5" /> },
    { id: 'transformation', label: '02 // BEFORE VS AFTER', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'architecture', label: '03 // ARCHITECTURE', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'metrics', label: '04 // IMPACT METRICS', icon: <TrendingUp className="w-3.5 h-3.5" /> },
  ];

  const getIcon = () => {
    switch (project.id) {
      case 'community-scheduling':
        return <Calendar className="w-5 h-5 text-orange-600" />;
      case 'marketplace-sales-intelligence':
        return <BarChart3 className="w-5 h-5 text-orange-600" />;
      case 'enterprise-hr-governance':
        return <Users className="w-5 h-5 text-orange-600" />;
      case 'methodology-iq':
        return <Compass className="w-5 h-5 text-orange-600" />;
      default:
        return <Briefcase className="w-5 h-5 text-orange-600" />;
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
      className="bg-white border-2 border-black p-5 sm:p-8 font-sans shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
    >
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b-2 border-black">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(255,85,0,1)]">
            {getIcon()}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 font-mono">
              <span className="text-xs font-black text-orange-600">STUDIO // 0{index + 1}</span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-orange-500 text-white">
                {project.category}
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-zinc-100 text-black border border-black">
                {project.roleBadge}
              </span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-black tracking-tight uppercase mt-1">
              {project.title}
            </h3>
          </div>
        </div>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-xs font-bold uppercase bg-black hover:bg-orange-600 text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
          >
            <span>LIVE SYSTEM &rarr;</span>
            <ExternalLink className="w-3 h-3 text-orange-400" />
          </a>
        )}
      </div>

      {/* Main Tagline Banner */}
      <div className="my-4 text-xs sm:text-sm text-zinc-800 font-medium leading-relaxed">
        {project.tagline}
      </div>

      {/* Synchronized Split-Studio Grid (Left: Information Slider, Right: Chromium Screen) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-2">
        
        {/* ================================================================= */}
        {/* LEFT PANE: Interactive Information Slider Tabs (col-span-5)        */}
        {/* ================================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-50 border-2 border-black p-4 sm:p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          
          <div>
            {/* Info Slider Navigation Bar */}
            <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-black">
              <div className="flex items-center gap-1.5 text-xs font-black text-black font-mono uppercase tracking-wider">
                <SlidersHorizontal className="w-3.5 h-3.5 text-orange-600" />
                <span>SPEC // INSIGHTS</span>
              </div>

              {/* Prev / Next Slide Switcher */}
              <div className="flex items-center gap-1 font-mono">
                <span className="text-[10px] font-bold text-black mr-1.5">
                  PAGE 0{currentTabIndex + 1}/0{tabs.length}
                </span>
                <button
                  onClick={handlePrevTab}
                  className="w-7 h-7 bg-white border border-black hover:bg-black hover:text-white flex items-center justify-center text-black transition-colors cursor-pointer"
                  title="Insight Sebelumnya"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNextTab}
                  className="w-7 h-7 bg-white border border-black hover:bg-black hover:text-white flex items-center justify-center text-black transition-colors cursor-pointer"
                  title="Insight Berikutnya"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sub-Tab Selector Pills */}
            <div className="grid grid-cols-2 gap-1.5 mb-4 font-mono">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-bold uppercase transition-all duration-150 cursor-pointer border ${
                      isActive
                        ? 'bg-black text-white border-black shadow-[2px_2px_0px_0px_rgba(255,85,0,1)]'
                        : 'bg-white text-black border-black/40 hover:bg-zinc-200'
                    }`}
                  >
                    <span className={isActive ? 'text-orange-400' : 'text-black'}>
                      {tab.icon}
                    </span>
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Slide Content */}
            <div className="min-h-[260px] flex flex-col justify-start animate-fadeIn">
              
              {/* TAB 1: Problem & Solution */}
              {activeTab === 'solution' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-white border-2 border-black">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-black text-black uppercase mb-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-orange-600" />
                      <span>Masalah Operasional Riil</span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-3.5 bg-orange-50 border-2 border-orange-500">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-black text-orange-900 uppercase mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                      <span>Solusi Rekayasa Sistem</span>
                    </div>
                    <p className="text-xs text-zinc-800 leading-relaxed font-sans">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: Before vs After Transformation */}
              {activeTab === 'transformation' && project.beforeAfter && (
                <div className="space-y-2.5 font-mono">
                  <div className="p-2.5 bg-black text-white text-[11px] font-bold uppercase flex items-center justify-between border border-black">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-orange-500" />
                      <span>TRANSFORMATION OUTCOME:</span>
                    </span>
                    <span className="text-orange-400 font-black">{project.beforeAfter.roiHighlight}</span>
                  </div>

                  <div className="p-3 bg-white border-2 border-black text-xs font-sans">
                    <div className="flex items-center gap-1.5 font-mono font-bold text-zinc-600 mb-2 uppercase text-[10px] tracking-wider">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Sebelumnya (Era Manual Spreadsheet)</span>
                    </div>
                    <ul className="space-y-1.5 text-zinc-600 text-[11px]">
                      {project.beforeAfter.before.map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-orange-600 font-mono font-bold">&times;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-orange-50 border-2 border-orange-500 text-xs font-sans">
                    <div className="flex items-center gap-1.5 font-mono font-black text-orange-950 mb-2 uppercase text-[10px] tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                      <span>Sesudahnya (Sistem Terotomasi)</span>
                    </div>
                    <ul className="space-y-1.5 text-zinc-900 text-[11px] font-medium">
                      {project.beforeAfter.after.map((a, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <ArrowRight className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
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
                      <div key={i} className="p-2.5 bg-white border border-black text-xs">
                        <div className="font-mono font-black text-black text-[11px] uppercase mb-0.5 flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-orange-500 shrink-0"></span>
                          <span>{title}</span>
                        </div>
                        <p className="text-zinc-700 text-[11px] pl-3.5 leading-relaxed font-sans">
                          {desc.join(':')}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TAB 4: Verified Impact Metrics */}
              {activeTab === 'metrics' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 font-mono">
                  {project.impactMetrics.map((metric, i) => (
                    <div key={i} className="p-3 bg-white border-2 border-black flex items-center justify-between gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <div>
                        <div className="text-[10px] font-black text-orange-600 uppercase tracking-wider">
                          {metric.label}
                        </div>
                        <div className="text-[11px] text-zinc-600 mt-0.5 leading-tight font-sans">
                          {metric.description}
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-black tracking-tight shrink-0">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* Left Footer: Tech Stack Pills */}
          <div className="pt-3 mt-4 border-t-2 border-black flex flex-wrap items-center gap-1.5 font-mono">
            <span className="text-[10px] font-bold text-black uppercase mr-1">STACK:</span>
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-2 py-0.5 bg-white text-black text-[10px] font-bold border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
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
