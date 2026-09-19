import React from 'react';
import { Check, Copy } from 'lucide-react';

interface NavbarProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyEmail, copied }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b-2 border-black transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between font-sans">
        
        {/* Brand & Status */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-mono font-black text-sm tracking-tighter">
            TE
          </div>
          <div>
            <div className="text-sm font-black text-black tracking-tight uppercase flex items-center gap-2">
              <span>Systems & HR Product Engineer</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-orange-700 bg-orange-50 px-2 py-0.5 border border-orange-300">
                <span className="w-1.5 h-1.5 bg-orange-500 animate-pulse"></span>
                ACTIVE / AVAILABILITY: READY
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-bold text-black uppercase tracking-wider">
          <a href="#projects" className="hover:text-orange-600 transition-colors">01 // Projects</a>
          <a href="#philosophy" className="hover:text-orange-600 transition-colors">02 // Framework</a>
          <a href="#architecture" className="hover:text-orange-600 transition-colors">03 // Stack</a>
          <a href="#contact" className="hover:text-orange-600 transition-colors">04 // Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-zinc-100 text-black border border-black hover:bg-zinc-200 transition-all active:translate-y-0.5 cursor-pointer"
            title="Salin email ke clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-orange-600" /> : <Copy className="w-3.5 h-3.5 text-black" />}
            <span className="text-[11px]">{copied ? 'COPIED!' : 'developer@contact.id'}</span>
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-mono font-bold bg-black text-white hover:bg-orange-600 transition-all active:translate-y-0.5 uppercase tracking-wider"
          >
            <span>Reach Out &rarr;</span>
          </a>
        </div>

      </div>
    </header>
  );
};
