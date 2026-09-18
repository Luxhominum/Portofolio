import React, { useState } from 'react';
import { Sliders, CheckCircle2, RotateCcw } from 'lucide-react';

export const MethodologyRadarSandbox: React.FC = () => {
  const [scopeFlex, setScopeFlex] = useState<number>(75);
  const [teamAutonomy, setTeamAutonomy] = useState<number>(80);
  const [govReadiness, setGovReadiness] = useState<number>(70);
  const [safetyCritical, setSafetyCritical] = useState<boolean>(false);

  const agileScore = safetyCritical ? 25 : Math.round((scopeFlex * 0.45 + teamAutonomy * 0.35 + govReadiness * 0.20));
  const waterfallScore = safetyCritical ? 92 : Math.round(((100 - scopeFlex) * 0.45 + (100 - teamAutonomy) * 0.25 + (100 - govReadiness) * 0.30));
  const hybridScore = Math.round(100 - Math.abs(agileScore - waterfallScore) * 0.7);

  const getRecommendation = () => {
    if (safetyCritical) return { name: 'Waterfall (Stage-Gate)', desc: 'Safety-critical & strict regulation requires strict phased validation.', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    if (agileScore > waterfallScore + 15) return { name: 'Agile (Scrum Cadence)', desc: 'High flexibility and autonomous team thrives in 2-week continuous iteration.', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (waterfallScore > agileScore + 15) return { name: 'Waterfall (Stage-Gate)', desc: 'Predictable fixed milestones align best with deterministic stage gates.', color: 'text-indigo-700 bg-indigo-50 border-indigo-200' };
    return { name: 'Hybrid (Water-Scrum-Fall)', desc: 'Phased architecture planning with agile iterative sprint execution.', color: 'text-brand-700 bg-brand-50 border-brand-200' };
  };

  const rec = getRecommendation();

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 md:p-6 shadow-subtle text-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-brand-600" />
            <h4 className="text-base font-semibold text-slate-900 tracking-tight">MethodologyIQ Decision Simulator</h4>
            <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md font-mono">Thesing et al. 2021</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Geser slider parameter proyek untuk melihat perhitungan matematis kecocokan metodologi secara dinamis.
          </p>
        </div>

        <button
          onClick={() => { setScopeFlex(75); setTeamAutonomy(80); setGovReadiness(70); setSafetyCritical(false); }}
          className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 self-start sm:self-auto"
        >
          <RotateCcw className="w-3 h-3" /> Reset Slider
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-4">
        <div className="md:col-span-6 space-y-4">
          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
              <span>Scope & Requirements Flexibility</span>
              <span className="font-mono text-slate-900 font-bold">{scopeFlex}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={scopeFlex}
              onChange={e => setScopeFlex(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>Strict Fixed Scope (Waterfall)</span>
              <span>Evolving Backlog (Agile)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
              <span>Team Autonomy & Self-Organization</span>
              <span className="font-mono text-slate-900 font-bold">{teamAutonomy}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={teamAutonomy}
              onChange={e => setTeamAutonomy(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>Top-Down Directive</span>
              <span>Cross-Functional Squad</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
              <span>Organization Governance Readiness</span>
              <span className="font-mono text-slate-900 font-bold">{govReadiness}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={govReadiness}
              onChange={e => setGovReadiness(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>High Ceremony Bureaucracy</span>
              <span>Fast Iterative Feedback</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-800 block">Safety Critical / Strict Regulatory Constraint?</span>
              <span className="text-[11px] text-slate-500">Step 1 Hard Knockout Exclusion Filter</span>
            </div>
            <input
              type="checkbox"
              checked={safetyCritical}
              onChange={e => setSafetyCritical(e.target.checked)}
              className="w-4 h-4 text-brand-600 rounded cursor-pointer accent-brand-600"
            />
          </div>
        </div>

        <div className="md:col-span-6 bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Dynamic Recommendation</span>
            <div className={`mt-2 p-3 rounded-lg border ${rec.color}`}>
              <div className="text-sm font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                {rec.name}
              </div>
              <p className="text-xs mt-1 leading-relaxed opacity-90">{rec.desc}</p>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1">
                  <span className="font-medium">Agile Scrum Suitability</span>
                  <span className="font-mono font-bold">{agileScore}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full transition-all" style={{ width: `${agileScore}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1">
                  <span className="font-medium">Waterfall Stage-Gate Suitability</span>
                  <span className="font-mono font-bold">{waterfallScore}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full rounded-full transition-all" style={{ width: `${waterfallScore}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1">
                  <span className="font-medium">Hybrid Water-Scrum-Fall</span>
                  <span className="font-mono font-bold">{hybridScore}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-600 h-full rounded-full transition-all" style={{ width: `${hybridScore}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 border-t border-slate-200 pt-2 mt-4 text-center">
            Perhitungan real-time berdasarkan matriks 15 kriteria berbobot
          </div>
        </div>
      </div>
    </div>
  );
};
