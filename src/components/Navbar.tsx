import React from 'react';
import { Check, Copy } from 'lucide-react';

interface NavbarProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyEmail, copied }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-2xs">
            L
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>HR & Systems Product Engineer</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Tersedia untuk Kolaborasi
              </span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
          <a href="#projects" className="hover:text-slate-900 transition-colors">Studi Kasus Sistem</a>
          <a href="#architecture" className="hover:text-slate-900 transition-colors">Kompetensi & Stack</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Hubungi Saya</a>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all shadow-2xs active:scale-[0.98] cursor-pointer"
            title="Salin email ke clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-blue-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span className="font-mono text-[11px]">{copied ? 'Email Tersalin!' : 'developer@contact.id'}</span>
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-2xs active:scale-[0.98]"
          >
            <span>Hubungi Saya</span>
          </a>
        </div>
      </div>
    </header>
  );
};
