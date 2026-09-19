import React from 'react';
import { LayoutGrid, Users, BarChart3, Calendar, Compass } from 'lucide-react';

export type DomainCategory = 'all' | 'hr-enterprise' | 'data-marketplace' | 'community-ops' | 'research-methodology';

interface DomainFilterTabsProps {
  activeDomain: DomainCategory;
  onSelectDomain: (domain: DomainCategory) => void;
  counts: Record<DomainCategory, number>;
}

export const DomainFilterTabs: React.FC<DomainFilterTabsProps> = ({
  activeDomain,
  onSelectDomain,
  counts
}) => {
  const tabs: { id: DomainCategory; label: string; icon: React.ReactNode }[] = [
    {
      id: 'all',
      label: 'Semua Solusi',
      icon: <LayoutGrid className="w-3.5 h-3.5" />
    },
    {
      id: 'hr-enterprise',
      label: 'Enterprise HR & Governance',
      icon: <Users className="w-3.5 h-3.5" />
    },
    {
      id: 'data-marketplace',
      label: 'Marketplace & Sales Analytics',
      icon: <BarChart3 className="w-3.5 h-3.5" />
    },
    {
      id: 'community-ops',
      label: 'Operations & Resource Planning',
      icon: <Calendar className="w-3.5 h-3.5" />
    },
    {
      id: 'research-methodology',
      label: 'Methodology & Decision Intelligence',
      icon: <Compass className="w-3.5 h-3.5" />
    }
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar">
      {tabs.map((tab) => {
        const isActive = activeDomain === tab.id;
        const count = counts[tab.id] || 0;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectDomain(tab.id)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-900'
                : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-100/70 hover:text-slate-900'
            }`}
          >
            <span className={isActive ? 'text-blue-400' : 'text-slate-400'}>
              {tab.icon}
            </span>
            <span>{tab.label}</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                isActive
                  ? 'bg-slate-800 text-slate-300'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
