import React from 'react';
import { FileSpreadsheet } from 'lucide-react';

interface ProjectScreenshotProps {
  type: 'omnipulse' | 'nexus' | 'talent' | 'liturgy' | 'radar' | 'automation';
  isDetailed?: boolean;
}

export const ProjectScreenshot: React.FC<ProjectScreenshotProps> = ({ type, isDetailed = false }) => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/5 p-2 ring-1 ring-slate-200/80 shadow-diffusion overflow-hidden select-none">
      <div className="rounded-xl bg-white border border-slate-200/90 overflow-hidden shadow-subtle font-sans">
        
        {/* Screenshot Browser Top Bar */}
        <div className="bg-slate-50/90 px-3 py-2 border-b border-slate-200/80 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
          </div>
          <div className="px-2.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-500 truncate max-w-[280px]">
            system.internal/{type}-dashboard
          </div>
          <div className="text-[10px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            ACTIVE
          </div>
        </div>

        {/* Screenshot Viewport Body */}
        <div className="p-3 sm:p-4 bg-slate-50/30">
          {type === 'omnipulse' && (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-subtle">
                  <div className="text-[10px] text-slate-500">Live Ingested Stream</div>
                  <div className="font-mono font-bold text-slate-900 text-sm mt-0.5">1,482 Orders</div>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-subtle">
                  <div className="text-[10px] text-slate-500">SLA Critical (&lt;30m)</div>
                  <div className="font-mono font-bold text-amber-600 text-sm mt-0.5">3 Orders</div>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-subtle">
                  <div className="text-[10px] text-slate-500">Failover Buffer</div>
                  <div className="font-mono font-bold text-emerald-600 text-sm mt-0.5">0 Queued (Healthy)</div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white text-[11px]">
                <div className="bg-slate-100/80 px-3 py-1.5 font-semibold text-slate-600 border-b border-slate-200 flex justify-between">
                  <span>INVOICE & MARKETPLACE</span>
                  <span>COURIER & SLA</span>
                  <span>STATUS</span>
                </div>
                <div className="divide-y divide-slate-100 font-mono">
                  <div className="px-3 py-2 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">INV/2026/SPX/9841</div>
                      <div className="text-[10px] text-slate-500 font-sans">Shopee • Desk Mat x1</div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-800 font-sans font-medium">SPX Express</div>
                      <div className="text-[10px] text-amber-600 font-semibold">38m left</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-sans text-[10px] font-medium border border-indigo-200">
                      In Fulfillment
                    </span>
                  </div>

                  <div className="px-3 py-2 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">INV/2026/TKP/5129</div>
                      <div className="text-[10px] text-slate-500 font-sans">Tokopedia • Keycaps x70</div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-800 font-sans font-medium">J&T Express</div>
                      <div className="text-[10px] text-slate-500">72m left</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-700 font-sans text-[10px] font-medium border border-sky-200">
                      Ready to Pack
                    </span>
                  </div>

                  {isDetailed && (
                    <div className="px-3 py-2 flex items-center justify-between bg-slate-50/50">
                      <div>
                        <div className="font-bold text-slate-900">INV/2026/TTS/7732</div>
                        <div className="text-[10px] text-slate-500 font-sans">TikTok Shop • Coiled Cable x1</div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-800 font-sans font-medium">SiCepat</div>
                        <div className="text-[10px] text-slate-500">115m left</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-sans text-[10px] font-medium border border-amber-200">
                        Pending
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {type === 'nexus' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Master_Orders_Fulfillment_2026</div>
                    <div className="text-[10px] text-slate-500">Logistics-HQ • 28 Active Staff</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">
                  PROTECTED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200 space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Apps Script Quota</span>
                    <span className="font-mono font-bold text-slate-700">34%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-600 h-full w-[34%]"></div>
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-lg border border-slate-200 space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Formula Integrity</span>
                    <span className="font-mono font-bold text-emerald-600">100% Lock</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[100%]"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {type === 'talent' && (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-white p-2 rounded-lg border border-slate-200">
                  <div className="text-[10px] font-semibold text-slate-500">Screening (2)</div>
                  <div className="mt-1 p-1.5 rounded bg-slate-50 border border-slate-200 text-[10px]">
                    <div className="font-mono font-bold text-slate-800">CAND-903</div>
                    <div className="text-slate-500 text-[9px]">UI Interaction</div>
                  </div>
                </div>

                <div className="bg-white p-2 rounded-lg border border-brand-200 bg-brand-50/20">
                  <div className="text-[10px] font-semibold text-brand-700">Interview (2)</div>
                  <div className="mt-1 p-1.5 rounded bg-white border border-brand-300 text-[10px] shadow-sm">
                    <div className="font-mono font-bold text-slate-900">CAND-901</div>
                    <div className="text-emerald-700 font-bold text-[9px]">94% Fit Score</div>
                  </div>
                </div>

                <div className="bg-white p-2 rounded-lg border border-slate-200">
                  <div className="text-[10px] font-semibold text-slate-500">Offering (1)</div>
                  <div className="mt-1 p-1.5 rounded bg-emerald-50 border border-emerald-200 text-[10px]">
                    <div className="font-mono font-bold text-slate-800">CAND-904</div>
                    <div className="text-emerald-700 text-[9px]">Offer Staged</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {type === 'liturgy' && (
            <div className="space-y-3">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">Minggu Biasa XXV — Sesi Pagi (07:00)</div>
                  <div className="text-[10px] text-slate-500">Wilayah 3 • Kapasitas: 12 Petugas</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">
                  ZERO-CONFLICT PASS
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <div className="text-[10px] text-slate-500">Fair-Share Balance</div>
                  <div className="font-mono font-bold text-slate-900 text-sm mt-0.5">98.4% Seimbang</div>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <div className="text-[10px] text-slate-500">Total Petugas Terdaftar</div>
                  <div className="font-mono font-bold text-slate-900 text-sm mt-0.5">172 Petugas</div>
                </div>
              </div>
            </div>
          )}

          {type === 'radar' && (
            <div className="space-y-2.5">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-800">Agile Scrum Suitability</span>
                  <span className="font-mono font-bold text-emerald-700">78%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full w-[78%]"></div>
                </div>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-800">Waterfall Stage-Gate</span>
                  <span className="font-mono font-bold text-indigo-700">35%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full w-[35%]"></div>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 flex justify-between px-1">
                <span>Model Riset: Thesing et al. (2021)</span>
                <span className="font-semibold text-brand-700">15 Kriteria Berbobot</span>
              </div>
            </div>
          )}

          {type === 'automation' && (
            <div className="bg-slate-900 text-slate-200 p-3 rounded-lg font-mono text-[10px] space-y-1">
              <div className="text-emerald-400 font-bold">$ python google_query_scraper.py --keyword "enterprise tooling"</div>
              <div className="text-slate-400">&gt; Scanning Google Suggestion Tree: A-Z expansion...</div>
              <div className="text-slate-300">&gt; Extracted 240 long-tail query branches [JSON/CSV output ready]</div>
              <div className="text-slate-400">&gt; Google Sheets Unfinished Orders Sidebar: Active (1.2s scan time)</div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
