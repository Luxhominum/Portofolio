import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Layers, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  FileSpreadsheet, 
  Compass
} from 'lucide-react';
import type { EditorialProject } from '../data/projectsData';
import { ProjectMultiScreenGallery } from './ProjectMultiScreenGallery';

interface Props {
  project: EditorialProject;
  index: number;
}

export const EditorialProjectCard: React.FC<Props> = ({ project, index }) => {
  const getIcon = () => {
    switch (project.id) {
      case 'community-scheduling':
        return <Calendar className="w-5 h-5 text-emerald-600" />;
      case 'marketplace-sales-intelligence':
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'enterprise-hr-governance':
        return <FileSpreadsheet className="w-5 h-5 text-indigo-600" />;
      case 'methodology-iq':
        return <Compass className="w-5 h-5 text-amber-600" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-600" />;
    }
  };

  const getThemeBadge = () => {
    switch (project.uiTheme) {
      case 'emerald':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/80';
      case 'blue':
        return 'bg-blue-50 text-blue-800 border-blue-200/80';
      case 'indigo':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200/80';
      case 'amber':
        return 'bg-amber-50 text-amber-800 border-amber-200/80';
    }
  };

  return (
    <article 
      id={project.id}
      className="bg-white rounded-3xl border border-slate-200/90 shadow-subtle p-6 sm:p-10 transition-all hover:border-slate-300 hover:shadow-elevation"
    >
      {/* Header Section with Role Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
            {getIcon()}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold text-slate-400">0{index + 1} // CASE STUDY</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getThemeBadge()}`}>
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                {project.roleBadge}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Main Tagline */}
      <div className="my-6">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
          {project.tagline}
        </p>
      </div>

      {/* 5-Screen Interactive Visual Gallery */}
      <ProjectMultiScreenGallery 
        projectId={project.id}
        uiTheme={project.uiTheme}
      />

      {/* Problem & Solution Deep Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/40 border border-rose-100">
          <div className="flex items-center gap-2 text-rose-700 font-bold text-sm mb-2">
            <AlertTriangle className="w-4 h-4" />
            Latar Belakang & Masalah Riil (Problem Statement)
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Solusi Rekayasa Sistem (Engineering Solution)
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* System Architecture Points */}
      <div className="my-8">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-4">
          <Layers className="w-5 h-5 text-slate-700" />
          Arsitektur & Prinsip Teknis Inti
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.architectureDetails.map((arch, i) => {
            const [title, ...desc] = arch.split(':');
            return (
              <div key={i} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                  <span>{title}</span>
                </div>
                <div className="text-slate-600 pl-3.5 leading-relaxed">
                  {desc.join(':')}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Verified Real-world Metrics */}
      <div className="my-8">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-4">
          <TrendingUp className="w-5 h-5 text-slate-700" />
          Dampak & Metrik Terverifikasi
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.impactMetrics.map((metric, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-subtle">
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 mt-1 leading-normal">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Footer */}
      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-slate-400 mr-1">Tech Stack:</span>
          {project.techStack.map((tech) => (
            <span 
              key={tech}
              className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
