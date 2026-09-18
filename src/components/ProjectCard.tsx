import React from 'react';
import type { Project } from '../types';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="group bg-white border border-slate-200/90 rounded-2xl p-5 md:p-6 shadow-diffusion hover:shadow-elevated transition-all flex flex-col justify-between hover:border-slate-300">
      <div>
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
            {project.categoryLabel}
          </span>
          {project.badge && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              {project.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-slate-500 mt-0.5 mb-2">
          {project.subtitle}
        </p>
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {project.tagline}
        </p>

        <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/70 mb-4 space-y-1.5 text-xs">
          <div className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>Karakteristik Kunci (4-Pilar):</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-normal line-clamp-2">
            <span className="font-semibold text-slate-800">Alasan:</span> {project.fourPillars.alasan.problem}
          </p>
          <p className="text-[11px] text-slate-600 leading-normal">
            <span className="font-semibold text-slate-800">Result:</span> {project.fourPillars.result.impactSummary}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-brand-600 transition-colors"
        >
          <span>Buka Studi Kasus 4-Pilar</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {project.liveUrl && project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800"
            title="Buka Live Application"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};
