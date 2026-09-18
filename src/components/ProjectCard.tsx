import React from 'react';
import type { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { ProjectScreenshot } from './ProjectScreenshot';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="group relative p-2 rounded-[2rem] bg-slate-100/90 ring-1 ring-slate-200/80 hover:ring-slate-300 transition-all shadow-diffusion hover:shadow-elevated flex flex-col justify-between">
      <div className="bg-white p-5 md:p-6 rounded-[calc(2rem-0.5rem)] border border-slate-200/80 flex flex-col justify-between flex-1">
        <div>
          {/* Header Category & Badge */}
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

          {/* Screenshot Viewport */}
          <div className="mb-4 group-hover:scale-[1.01] transition-transform">
            <ProjectScreenshot type={project.uiType} isDetailed={false} />
          </div>

          {/* Title & Tagline */}
          <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-semibold text-slate-500 mt-0.5 mb-2">
            {project.subtitle}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {project.tagline}
          </p>

          {/* 4-Pillar Quick Summary */}
          <div className="p-3 bg-slate-50/90 rounded-xl border border-slate-200/70 mb-4 space-y-1.5 text-xs">
            <p className="text-[11px] text-slate-600 leading-normal">
              <span className="font-bold text-slate-800">Alasan:</span> {project.fourPillars.alasan.problem.slice(0, 110)}...
            </p>
            <p className="text-[11px] text-slate-600 leading-normal">
              <span className="font-bold text-emerald-800">Result:</span> {project.fourPillars.result.impactSummary}
            </p>
          </div>

          {/* Tech Stack Pills */}
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

        {/* Footer Action */}
        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="w-full group/btn inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-subtle active:scale-[0.98]"
          >
            <span>Buka Studi Kasus & Elaborasi Visual</span>
            <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
