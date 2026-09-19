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
      label: 'ALL SYSTEMS',
      icon: <LayoutGrid className="w-3.5 h-3.5" />
    },
    {
      id: 'hr-enterprise',
      label: 'HR TECH & GOVERNANCE',
      icon: <Users className="w-3.5 h-3.5" />
    },
    {
      id: 'data-marketplace',
      label: 'SALES & MARKETPLACE INTEL',
      icon: <BarChart3 className="w-3.5 h-3.5" />
    },
    {
      id: 'community-ops',
      label: 'OPERATIONS & SCHEDULING',
      icon: <Calendar className="w-3.5 h-3.5" />
    },
    {
      id: 'research-methodology',
      label: 'DECISION METHODOLOGY',
      icon: <Compass className="w-3.5 h-3.5" />
    }
  ];

  return (
    <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar font-mono">
      {tabs.map((tab) => {
        const isActive = activeDomain === tab.id;
        const count = counts[tab.id] || 0;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectDomain(tab.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase whitespace-nowrap transition-all duration-150 cursor-pointer ${
              isActive
                ? 'bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,85,0,1)]'
                : 'bg-white text-black border-2 border-black hover:bg-zinc-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5'
            }`}
          >
            <span className={isActive ? 'text-orange-400' : 'text-black'}>
              {tab.icon}
            </span>
            <span>{tab.label}</span>
            <span
              className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-xs ${
                isActive
                  ? 'bg-orange-500 text-white'
                  : 'bg-zinc-200 text-black'
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
