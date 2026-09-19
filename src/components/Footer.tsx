import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-black text-white text-xs border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-none" />
            <span className="font-mono font-bold uppercase tracking-wider text-sm text-white">
              FRONTEND & SYSTEMS ENGINEER PORTFOLIO
            </span>
          </div>
          <div className="text-[11px] font-mono text-zinc-400">
            TEENAGE ENGINEERING INDUSTRIAL MINIMALIST SPEC // ZERO-SLOP RIGOR // SYNTHETIC PRIVACY MASK
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 text-white font-mono font-bold uppercase text-[11px] hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] active:translate-x-0.5 active:translate-y-0.5"
        >
          <span>TOP OF SPEC</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
