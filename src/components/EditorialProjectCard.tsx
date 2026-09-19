import React from 'react';
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
  ArrowRight
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

  return (
    <article 
      id={project.id}
      className="bg-white rounded-3xl border border-slate-200/90 shadow-subtle p-6 sm:p-10 transition-all hover:border-slate-300 hover:shadow-elevation"
    >
      {/* Header Section: 60% White Card, 30% Slate Borders, 10% Blue Accent */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
            {getIcon()}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold text-slate-400">0{index + 1} // CASE STUDY</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200">
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
      />

      {/* Problem & Solution Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
            <AlertCircle className="w-4 h-4 text-slate-500" />
            Latar Belakang & Masalah Riil (Problem Statement)
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/20 border border-blue-200/70">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            Solusi Rekayasa Sistem (Engineering Solution)
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Before vs After: Transformasi Operasional Spreadsheet ke Web App */}
      {project.beforeAfter && (
        <div className="my-8 p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                Transformasi Nyata: Spreadsheet Manual vs Web App Otomatis
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              {project.beforeAfter.roiHighlight}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Before Column */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                <FileSpreadsheet className="w-4 h-4 text-slate-400" />
                Sebelumnya (Era Manual Spreadsheet)
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {project.beforeAfter.before.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 font-mono text-xs mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Column */}
            <div className="p-4 rounded-xl bg-white border border-blue-200/90 shadow-2xs ring-1 ring-blue-500/10">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Sesudahnya (Sistem Terotomasi Terpadu)
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {project.beforeAfter.after.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

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
              <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
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
            <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:border-blue-200 transition-colors">
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-1">
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
          <span className="text-xs font-medium text-slate-400 mr-1 font-mono">Stack:</span>
          {project.techStack.map((tech) => (
            <span 
              key={tech}
              className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200/80 hover:border-slate-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
