import React from 'react';
import { Check, Copy } from 'lucide-react';

interface NavbarProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyEmail, copied }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-studio-50/80 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-subtle">
            E
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Frontend & Systems Engineer</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for Hire
              </span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
          <a href="#projects" className="hover:text-slate-900 transition-colors">Featured Projects</a>
          <a href="#architecture" className="hover:text-slate-900 transition-colors">Tech Architecture</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Get in Touch</a>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 transition-all shadow-subtle active:scale-[0.98]"
            title="Copy email to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span className="font-mono text-[11px]">{copied ? 'Email Copied!' : 'developer@contact.id'}</span>
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-subtle active:scale-[0.98]"
          >
            <span>Hubungi Saya</span>
          </a>
        </div>
      </div>
    </header>
  );
};
