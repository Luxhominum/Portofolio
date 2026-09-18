import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Calendar, 
  ShoppingBag, 
  FileSpreadsheet, 
  Compass
} from 'lucide-react';
import type { EditorialProject } from '../data/projectsData';

interface Props {
  project: EditorialProject;
  index: number;
}

export const EditorialProjectCard: React.FC<Props> = ({ project, index }) => {
  const getIcon = () => {
    switch (project.id) {
      case 'community-scheduling':
        return <Calendar className="w-5 h-5 text-emerald-600" />;
      case 'marketplace-ops':
        return <ShoppingBag className="w-5 h-5 text-blue-600" />;
      case 'enterprise-nexus':
        return <FileSpreadsheet className="w-5 h-5 text-indigo-600" />;
      case 'methodology-iq':
        return <Compass className="w-5 h-5 text-amber-600" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-600" />;
    }
  };

  const getThemeBadge = () => {
    switch (project.uiTheme) {
      case 'emerald':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/80';
      case 'blue':
        return 'bg-blue-50 text-blue-800 border-blue-200/80';
      case 'indigo':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200/80';
      case 'amber':
        return 'bg-amber-50 text-amber-800 border-amber-200/80';
    }
  };

  return (
    <article 
      id={project.id}
      className="bg-white rounded-3xl border border-slate-200/90 shadow-subtle p-6 sm:p-10 transition-all hover:border-slate-300 hover:shadow-elevation"
    >
      {/* Header section */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
            {getIcon()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-slate-400">0{index + 1} // CASE STUDY</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getThemeBadge()}`}>
                {project.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Main Tagline & Problem-Solution Framing */}
      <div className="my-6">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
          {project.tagline}
        </p>
      </div>

      {/* Embedded High-Fidelity UI Mockup Frame */}
      <div className="my-8 rounded-2xl bg-slate-900/5 p-2.5 ring-1 ring-slate-200/80 shadow-diffusion overflow-hidden">
        <div className="rounded-xl bg-white border border-slate-200 overflow-hidden font-sans">
          
          {/* Mock Browser Header */}
          <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            </div>
            <div className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-500 truncate max-w-sm">
              system.internal/{project.id}-dashboard
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              LIVE PRODUCTION
            </div>
          </div>

          {/* Dynamic Mock Viewport by Project */}
          <div className="p-4 sm:p-6 bg-slate-50/40">
            {project.id === 'community-scheduling' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-subtle">
                    <div className="text-slate-500 font-medium">Algoritma Bentrok</div>
                    <div className="font-mono font-bold text-emerald-600 text-sm sm:text-base mt-1 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> 0 Konflik (100% Pass)
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-subtle">
                    <div className="text-slate-500 font-medium">Beban Rotasi Antar Wilayah</div>
                    <div className="font-mono font-bold text-slate-900 text-sm sm:text-base mt-1">
                      35 Wilayah Proporsional
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-subtle">
                    <div className="text-slate-500 font-medium">Penerbitan Jadwal</div>
                    <div className="font-mono font-bold text-blue-600 text-sm sm:text-base mt-1">
                      1-Klik WA & PDF Cetak
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white text-xs">
                  <div className="bg-slate-100/90 px-4 py-2 font-semibold text-slate-700 border-b border-slate-200 flex justify-between">
                    <span>SESI & TANGGAL PELAYANAN</span>
                    <span className="hidden sm:inline">WILAYAH / PETUGAS TERTUGAS</span>
                    <span>STATUS VALIDASI</span>
                  </div>
                  <div className="divide-y divide-slate-100 font-mono">
                    <div className="px-4 py-3 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900">Minggu Biasa XXV (07:00 WIB)</div>
                        <div className="text-slate-500 font-sans text-[11px]">Koordinator: Wilayah 03 • 12 Petugas</div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-[11px] font-sans font-medium border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Validated (No Overlap)
                      </span>
                    </div>
                    <div className="px-4 py-3 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900">Minggu Biasa XXV (17:00 WIB)</div>
                        <div className="text-slate-500 font-sans text-[11px]">Koordinator: Wilayah 11 • 14 Petugas</div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-[11px] font-sans font-medium border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Validated (Fair Share)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'marketplace-ops' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-subtle">
                    <div className="text-slate-500 font-medium">Live Ingested Stream</div>
                    <div className="font-mono font-bold text-slate-900 text-sm sm:text-base mt-1">1,482 Orders / Hari</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-subtle">
                    <div className="text-slate-500 font-medium">SLA Kurir Kritis (&lt;45m)</div>
                    <div className="font-mono font-bold text-amber-600 text-sm sm:text-base mt-1">3 Pesanan Prioritas</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-subtle">
                    <div className="text-slate-500 font-medium">Failover Sync Buffer</div>
                    <div className="font-mono font-bold text-emerald-600 text-sm sm:text-base mt-1">0 Pending (Online Sync)</div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white text-xs">
                  <div className="bg-slate-100/90 px-4 py-2 font-semibold text-slate-700 border-b border-slate-200 flex justify-between">
                    <span>INVOICE & MARKETPLACE</span>
                    <span className="hidden sm:inline">KURIR & DEADLINE SLA</span>
                    <span>STATUS OPERASIONAL</span>
                  </div>
                  <div className="divide-y divide-slate-100 font-mono">
                    <div className="px-4 py-3 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900">INV/2026/SPX/9841</div>
                        <div className="text-slate-500 font-sans text-[11px]">Shopee • Mechanical Keycaps Set</div>
                      </div>
                      <div className="hidden sm:block text-right">
                        <div className="text-slate-800 font-sans font-medium">SPX Express</div>
                        <div className="text-[11px] text-amber-600 font-semibold">38m sisa batas</div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[11px] font-sans font-medium border border-blue-200">
                        In Packing Stage
                      </span>
                    </div>
                    <div className="px-4 py-3 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900">INV/2026/TKP/5129</div>
                        <div className="text-slate-500 font-sans text-[11px]">Tokopedia • Coiled USB-C Aviator Cable</div>
                      </div>
                      <div className="hidden sm:block text-right">
                        <div className="text-slate-800 font-sans font-medium">J&T Express</div>
                        <div className="text-[11px] text-slate-500">110m sisa batas</div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-[11px] font-sans font-medium border border-emerald-200">
                        Ready for Handover
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'enterprise-nexus' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3">
                    <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">Master_Fulfillment_Registry_2026</div>
                      <div className="text-[11px] text-slate-500">Divisi Logistik & Warehouse • 28 Staf Terproteksi</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                    FORMULA PROTECTED
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Apps Script Daily Quota</span>
                      <span className="font-mono font-bold text-slate-900">34% (Aman)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full w-[34%]"></div>
                    </div>
                    <div className="text-[10px] text-slate-400">Trigger Executions & Mail API Limit</div>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Integrity Lock Mode</span>
                      <span className="font-mono font-bold text-emerald-600">100% Locked</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[100%]"></div>
                    </div>
                    <div className="text-[10px] text-slate-400">Zero accidental formula overwrites</div>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'methodology-iq' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-slate-800">Agile Scrum Suitability</span>
                      <span className="font-mono font-bold text-emerald-700">78%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[78%]"></div>
                    </div>
                    <div className="text-[10px] text-slate-500">Tinggi pada fleksibilitas lingkup & iterasi cepat</div>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-slate-800">Waterfall Suitability</span>
                      <span className="font-mono font-bold text-indigo-700">35%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full w-[35%]"></div>
                    </div>
                    <div className="text-[10px] text-slate-500">Rendah akibat tingginya dinamika requirement</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-wrap items-center justify-between text-xs gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold border border-amber-200 text-[10px]">
                      Step 1 Filter
                    </span>
                    <span className="text-slate-600">Eliminasi Faktor Regulasi & Keselamatan Selesai</span>
                  </div>
                  <span className="font-mono text-slate-500 text-[11px]">Model: Thesing et al. (2021)</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Deep Problem & Solution Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/40 border border-rose-100">
          <div className="flex items-center gap-2 text-rose-700 font-bold text-sm mb-2">
            <AlertTriangle className="w-4 h-4" />
            The Friction / Problem Statement
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            The Engineering Solution
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Deep System Architecture Breakdown */}
      <div className="my-8">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-4">
          <Layers className="w-5 h-5 text-slate-700" />
          Arsitektur & Prinsip Teknis Inti
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.architectureDetails.map((arch, i) => {
            const [title, ...desc] = arch.split(':');
            return (
              <div key={i} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                  <span>{title}</span>
                </div>
                <div className="text-slate-600 pl-3.5 leading-relaxed">
                  {desc.join(':')}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Verified Metrics / Impact */}
      <div className="my-8">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-4">
          <TrendingUp className="w-5 h-5 text-slate-700" />
          Dampak & Metrik Terverifikasi
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.impactMetrics.map((metric, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-subtle">
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 mt-1 leading-normal">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Pills Footer */}
      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-slate-400 mr-1">Stack:</span>
          {project.techStack.map((tech) => (
            <span 
              key={tech}
              className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
