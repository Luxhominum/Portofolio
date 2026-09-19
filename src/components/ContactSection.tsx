import React, { useState } from 'react';
import { Mail, Check, Copy, Send, ExternalLink, Globe, UserCheck } from 'lucide-react';

interface ContactSectionProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail, copied }) => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              PORT // 05 DIRECT LINE
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight uppercase leading-none">
              Tertarik Berkolaborasi atau Merekrut?
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed font-mono">
              Siap berkontribusi penuh pada posisi <span className="font-bold text-black bg-orange-100 px-1 border border-orange-300">Frontend / Systems Engineer</span>, <span className="font-bold text-black bg-orange-100 px-1 border border-orange-300">HR Tech Lead</span>, maupun <span className="font-bold text-black bg-orange-100 px-1 border border-orange-300">Internal Product Developer</span> untuk membangun sistem enterprise deterministic.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between p-4 bg-zinc-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 bg-orange-500 text-white border border-black">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">Direct Line</div>
                    <div className="text-xs sm:text-sm font-mono font-black text-black truncate">developer@contact.id</div>
                  </div>
                </div>
                <button
                  onClick={onCopyEmail}
                  className={`px-3.5 py-2 text-xs font-mono font-bold uppercase border-2 border-black transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer active:translate-x-0.5 active:translate-y-0.5 ${
                    copied 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-white text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/Luxhominum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-zinc-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all flex items-center justify-between text-xs font-mono font-bold uppercase group"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-orange-600 group-hover:text-orange-400" />
                    <span>GITHUB</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-zinc-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all flex items-center justify-between text-xs font-mono font-bold uppercase group"
                >
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-orange-600 group-hover:text-orange-400" />
                    <span>LINKEDIN</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-zinc-50 border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-black">
              <h3 className="text-sm font-black text-black uppercase tracking-tight">KIRIM PESAN LANGSUNG</h3>
              <span className="text-[10px] font-mono font-bold text-orange-600">INPUT // DISPATCH</span>
            </div>

            {formSent ? (
              <div className="p-8 bg-white border-2 border-black text-center space-y-3 shadow-[4px_4px_0px_0px_rgba(255,85,0,1)] animate-fadeIn">
                <div className="w-12 h-12 bg-orange-500 text-white border-2 border-black flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-sm font-black text-black uppercase tracking-tight">PESAN BERHASIL DISPATCH!</h4>
                <p className="text-xs font-mono text-zinc-600">Terima kasih atas kontak Anda. Respon akan dikirim dalam 1x24 jam kerja.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block font-bold text-black uppercase text-[11px] mb-1.5">Nama Lengkap / Instansi</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Lead Recruiter / PT Enterprise"
                    className="w-full px-3.5 py-2.5 border-2 border-black bg-white text-black font-mono placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-black"
                  />
                </div>

                <div>
                  <label className="block font-bold text-black uppercase text-[11px] mb-1.5">Email Resmi</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 border-2 border-black bg-white text-black font-mono placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-black"
                  />
                </div>

                <div>
                  <label className="block font-bold text-black uppercase text-[11px] mb-1.5">Keterangan / Kebutuhan Rekayasa</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan spesifikasi posisi atau kolaborasi teknis..."
                    className="w-full px-3.5 py-2.5 border-2 border-black bg-white text-black font-mono placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-black"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 bg-orange-500 text-white border-2 border-black font-mono font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
