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
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
              Inquiry & Collaboration
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tertarik Berkolaborasi atau Merekrut untuk Tim Anda?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Saya siap berkontribusi penuh pada posisi <span className="font-semibold text-slate-900">Frontend Engineer</span>, <span className="font-semibold text-slate-900">UI/UX Interaction Engineer</span>, maupun <span className="font-semibold text-slate-900">Full-Stack Cloud Developer</span> untuk membangun produk perangkat lunak berkinerja tinggi.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Mail className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-slate-500 font-medium">Direct Email Contact</div>
                  <div className="text-xs font-mono font-bold text-slate-900 truncate">developer@contact.id</div>
                </div>
                <button
                  onClick={onCopyEmail}
                  className="px-3 py-1 text-xs font-medium bg-white text-slate-800 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1 shadow-subtle"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-slate-700" />
                    <span>GitHub Repositories</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-brand-600" />
                    <span>LinkedIn Network</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-diffusion">
            <h3 className="text-base font-bold text-slate-900 mb-1">Kirim Pesan Langsung</h3>
            <p className="text-xs text-slate-500 mb-4">Tinggalkan pesan Anda di sini untuk respon cepat dalam 24 jam.</p>

            {formSent ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">Pesan Berhasil Terkirim!</h4>
                <p className="text-xs text-emerald-700">Terima kasih atas pesan Anda. Saya akan segera menghubungi Anda kembali.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Nama Lengkap / Perusahaan</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Hiring Manager / PT Enterprise Inovasi"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Email Resmi</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Keterangan / Deskripsi Proyek</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan posisi yang ditawarkan atau detail kebutuhan produk Anda..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-subtle flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
