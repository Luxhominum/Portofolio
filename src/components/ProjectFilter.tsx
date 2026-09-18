import React from 'react';
import type { ProjectCategory } from '../types';

interface ProjectFilterProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  counts: Record<ProjectCategory, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeCategory,
  onSelectCategory,
  counts
}) => {
  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'ecommerce', label: 'E-Commerce & Transaksi' },
    { id: 'enterprise', label: 'Enterprise & HR Tech' },
    { id: 'community', label: 'Cloud SaaS' },
    { id: 'decision', label: 'Decision Intelligence' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 py-4">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            activeCategory === cat.id
              ? 'bg-slate-900 text-white shadow-subtle'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 hover:text-slate-900'
          }`}
        >
          <span>{cat.label}</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
            activeCategory === cat.id ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-500'
          }`}>
            {counts[cat.id] || 0}
          </span>
        </button>
      ))}
    </div>
  );
};
