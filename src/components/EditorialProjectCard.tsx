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
  Zap,
  ArrowRight,
  ExternalLink,
  SlidersHorizontal
} from 'lucide-react';
import type { EditorialProject } from '../data/projectsData';
import { ProjectMultiScreenGallery } from './ProjectMultiScreenGallery';

interface Props {
  project: EditorialProject;
  index: number;
}

type InfoTab = 'solution' | 'transformation' | 'matrix' | 'architecture' | 'metrics';

export const EditorialProjectCard: React.FC<Props> = ({ project, index }) => {
  const isHRProject = project.id === 'enterprise-hr-governance';
  const [activeTab, setActiveTab] = useState<InfoTab>('solution');
  const [simulatedScore, setSimulatedScore] = useState<number>(92);
  const [dispatched, setDispatched] = useState<boolean>(false);

  const baseTabs: { id: InfoTab; label: string; icon: React.ReactNode }[] = [
    { id: 'solution', label: '01 // SPECS', icon: <AlertCircle className="w-3 h-3" /> },
    { id: 'transformation', label: '02 // IMPACT', icon: <Zap className="w-3 h-3" /> },
  ];

  if (isHRProject) {
    baseTabs.push({ 
      id: 'matrix', 
      label: '★ 03 // MATRIX', 
      icon: <SlidersHorizontal className="w-3 h-3 text-orange-600" /> 
    });
  }

  baseTabs.push(
    { id: 'architecture', label: isHRProject ? '04 // ARCH' : '03 // ARCH', icon: <Layers className="w-3 h-3" /> },
    { id: 'metrics', label: isHRProject ? '05 // METRICS' : '04 // METRICS', icon: <TrendingUp className="w-3 h-3" /> }
  );

  const tabs = baseTabs;

  const getIcon = () => {
    switch (project.id) {
      case 'community-scheduling':
        return <Calendar className="w-4 h-4 text-orange-600" />;
      case 'marketplace-sales-intelligence':
        return <BarChart3 className="w-4 h-4 text-orange-600" />;
      case 'enterprise-hr-governance':
        return <Users className="w-4 h-4 text-orange-600" />;
      case 'methodology-iq':
        return <Compass className="w-4 h-4 text-orange-600" />;
      default:
        return <Briefcase className="w-4 h-4 text-orange-600" />;
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

  const handleSimulatedDispatch = () => {
    setDispatched(true);
    setTimeout(() => setDispatched(false), 3500);
  };

  const liveUrl = getLiveUrl();

  return (
    <article 
      id={project.id}
      className="bg-white border-2 border-black p-4 sm:p-6 font-sans shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
    >
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-black">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-black text-white border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(255,85,0,1)]">
            {getIcon()}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-zinc-600 uppercase font-bold">
              <span className="text-orange-600 font-black">STUDIO // 0{index + 1}</span>
              <span>•</span>
              <span className="text-black">{project.category}</span>
              <span>•</span>
              <span className="text-zinc-500">{project.roleBadge}</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-black tracking-tight uppercase mt-0.5">
              {project.title}
            </h3>
          </div>
        </div>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 font-mono text-xs font-bold uppercase bg-black hover:bg-orange-600 text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
          >
            <span>LIVE APP &rarr;</span>
            <ExternalLink className="w-3 h-3 text-orange-400" />
          </a>
        )}
      </div>

      {/* Synchronized Split-Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch pt-4">
        
        {/* LEFT PANE: Interactive Spec & Insight Slider (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-50 border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          
          <div>
            {/* Top Sub-Tab Selector Pills */}
            <div className={`grid ${isHRProject ? 'grid-cols-3 sm:grid-cols-5' : 'grid-cols-2 sm:grid-cols-4'} gap-1 mb-3.5 font-mono`}>
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-1 p-1 text-[9px] font-bold uppercase transition-all duration-150 cursor-pointer border ${
                      isActive
                        ? 'bg-black text-white border-black shadow-[1.5px_1.5px_0px_0px_rgba(255,85,0,1)]'
                        : tab.id === 'matrix'
                        ? 'bg-orange-100 text-orange-950 border-orange-400 hover:bg-orange-200'
                        : 'bg-white text-black border-black/40 hover:bg-zinc-200'
                    }`}
                  >
                    <span className={isActive ? 'text-orange-400' : 'text-black'}>
                      {tab.icon}
                    </span>
                    <span className="truncate">{tab.label.split('// ')[1] || tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Slide Content */}
            <div className="min-h-[220px] flex flex-col justify-start animate-fadeIn">
              
              {/* TAB 1: Specs (Problem & Solution) */}
              {activeTab === 'solution' && (
                <div className="space-y-2.5">
                  <div className="p-3 bg-white border-2 border-black">
                    <div className="text-[10px] font-mono font-black text-zinc-500 uppercase mb-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-orange-600" />
                      <span>OPERATIONAL BOTTLENECK</span>
                    </div>
                    <p className="text-xs text-zinc-800 leading-relaxed font-sans font-medium">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-3 bg-orange-50 border-2 border-orange-500">
                    <div className="text-[10px] font-mono font-black text-orange-950 uppercase mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-orange-600" />
                      <span>ENGINEERING SOLUTION</span>
                    </div>
                    <p className="text-xs text-zinc-900 leading-relaxed font-sans font-medium">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB: Post-Test Candidate Matrix Feature Spotlight */}
              {activeTab === 'matrix' && isHRProject && (
                <div className="space-y-2 font-mono animate-fadeIn">
                  <div className="p-2.5 bg-black text-white border border-black">
                    <div className="flex items-center justify-between text-[9px] pb-1 mb-1.5 border-b border-zinc-700">
                      <span className="text-orange-400 font-bold uppercase flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping"></span>
                        POST-TEST MATRIX SIMULATOR
                      </span>
                      <span className="text-zinc-400">SCORE: {simulatedScore}/100</span>
                    </div>

                    <input 
                      type="range" 
                      min="50" 
                      max="98" 
                      value={simulatedScore}
                      onChange={(e) => setSimulatedScore(Number(e.target.value))}
                      className="w-full h-1 bg-zinc-700 accent-orange-500 cursor-pointer mb-2"
                    />

                    <div className="grid grid-cols-2 gap-1 text-[9px]">
                      <div className={`p-1.5 border transition-all ${
                        simulatedScore >= 85 
                          ? 'bg-orange-500 text-white border-white font-black' 
                          : 'bg-zinc-900 border-zinc-700 text-zinc-400'
                      }`}>
                        <div className="font-bold">Q1: FAST-TRACK</div>
                        <div className="text-[8px] opacity-90">High Score &rarr; Offer Langsung</div>
                      </div>

                      <div className={`p-1.5 border transition-all ${
                        simulatedScore >= 70 && simulatedScore < 85
                          ? 'bg-orange-500 text-white border-white font-black' 
                          : 'bg-zinc-900 border-zinc-700 text-zinc-400'
                      }`}>
                        <div className="font-bold">Q2: SPECIALIST</div>
                        <div className="text-[8px] opacity-90">Med Score &rarr; Lead Interview</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-[9.5px] text-zinc-600 font-mono">
                      {dispatched ? '✅ WhatsApp Terkirim!' : 'Aksi Otomatis:'}
                    </span>
                    <button
                      onClick={handleSimulatedDispatch}
                      className="px-2 py-0.5 bg-black hover:bg-orange-600 text-white text-[9.5px] font-mono font-bold uppercase transition-colors cursor-pointer"
                    >
                      {dispatched ? 'TERKIRIM' : 'DISPATCH WA'}
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: Transformation / Impact */}
              {activeTab === 'transformation' && project.beforeAfter && (
                <div className="space-y-2 font-mono">
                  <div className="p-2 bg-black text-white text-[10px] font-bold uppercase flex items-center justify-between border border-black">
                    <span className="text-orange-400 font-black">{project.beforeAfter.roiHighlight}</span>
                  </div>

                  <div className="p-2.5 bg-white border border-black text-xs font-sans">
                    <div className="font-mono font-bold text-zinc-500 mb-1 text-[9.5px] uppercase">
                      Manual Spreadsheet:
                    </div>
                    <ul className="space-y-1 text-zinc-600 text-[11px]">
                      {project.beforeAfter.before.map((b, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-orange-600 font-bold">&times;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-2.5 bg-orange-50 border border-orange-500 text-xs font-sans">
                    <div className="font-mono font-bold text-orange-950 mb-1 text-[9.5px] uppercase">
                      Automated Web System:
                    </div>
                    <ul className="space-y-1 text-zinc-900 text-[11px] font-medium">
                      {project.beforeAfter.after.map((a, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <ArrowRight className="w-3 h-3 text-orange-600 shrink-0 mt-0.5" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 3: System Architecture Details */}
              {activeTab === 'architecture' && (
                <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                  {project.architectureDetails.map((arch, i) => {
                    const [title, ...desc] = arch.split(':');
                    return (
                      <div key={i} className="p-2 bg-white border border-black text-xs">
                        <div className="font-mono font-black text-black text-[10px] uppercase mb-0.5 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-orange-500 shrink-0"></span>
                          <span>{title}</span>
                        </div>
                        <p className="text-zinc-700 text-[10.5px] pl-2.5 leading-snug font-sans">
                          {desc.join(':')}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TAB 4: Verified Impact Metrics */}
              {activeTab === 'metrics' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 font-mono">
                  {project.impactMetrics.map((metric, i) => (
                    <div key={i} className="p-2.5 bg-white border border-black flex items-center justify-between gap-2">
                      <div>
                        <div className="text-[9.5px] font-black text-orange-600 uppercase">
                          {metric.label}
                        </div>
                        <div className="text-[10px] text-zinc-600 leading-tight font-sans">
                          {metric.description}
                        </div>
                      </div>
                      <div className="text-lg font-black text-black tracking-tight shrink-0">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* Left Footer: Tech Stack */}
          <div className="pt-2 mt-3 border-t border-black flex flex-wrap items-center gap-1 font-mono">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-1.5 py-0.5 bg-white text-black text-[9px] font-bold border border-black"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* RIGHT PANE: Live Chromium Multi-Screen Viewport (col-span-7) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <ProjectMultiScreenGallery 
            projectId={project.id}
          />
        </div>

      </div>
    </article>
  );
};
