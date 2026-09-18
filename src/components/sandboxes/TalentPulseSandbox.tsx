import React, { useState } from 'react';
import { MOCK_CANDIDATES } from '../../data/mockData';
import type { Candidate } from '../../types';
import { 
  Users, 
  Star, 
  Search, 
  ChevronRight
} from 'lucide-react';

export const TalentPulseSandbox: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>(MOCK_CANDIDATES);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(MOCK_CANDIDATES[0]);
  const [searchFilter, setSearchFilter] = useState<string>('');

  const stages: Candidate['stage'][] = [
    'Screening', 
    'Technical Assessment', 
    'User Interview', 
    'Offering', 
    'Talent Pool'
  ];

  const handleAdvanceStage = (candId: string) => {
    setCandidates(prev => prev.map(c => {
      if (c.id !== candId) return c;
      const currentIndex = stages.indexOf(c.stage);
      if (currentIndex < stages.length - 2) {
        const nextStage = stages[currentIndex + 1];
        const updated = { ...c, stage: nextStage };
        if (selectedCandidate?.id === candId) setSelectedCandidate(updated);
        return updated;
      }
      return c;
    }));
  };

  const filteredCandidates = candidates.filter(c => 
    c.candidateCode.toLowerCase().includes(searchFilter.toLowerCase()) ||
    c.appliedRole.toLowerCase().includes(searchFilter.toLowerCase()) ||
    c.skills.some(s => s.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 md:p-6 shadow-subtle text-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-brand-600" />
            <h4 className="text-base font-semibold text-slate-900 tracking-tight">TalentPulse ATS & Talent Pool Simulator</h4>
            <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md font-mono">End-to-End Pipeline</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Visualisasi alur seleksi kandidat, evaluasi scorecard terbobot, dan pengarsipan talent pool siap panggil.
          </p>
        </div>

        <div className="relative max-w-xs">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchFilter}
            onChange={e => setSearchFilter(e.target.value)}
            placeholder="Cari kandidat atau skill..."
            className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-4">
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {stages.slice(0, 3).map(stage => {
            const inStage = filteredCandidates.filter(c => c.stage === stage);
            return (
              <div key={stage} className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-3 flex flex-col">
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-200/60">
                  <span className="text-xs font-semibold text-slate-700">{stage}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-white text-slate-600 rounded border border-slate-200">
                    {inStage.length}
                  </span>
                </div>

                <div className="space-y-2.5 flex-1">
                  {inStage.map(c => (
                    <div
                      key={c.id}
                      onClick={() => setSelectedCandidate(c)}
                      className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                        selectedCandidate?.id === c.id
                          ? 'bg-white border-brand-500 shadow-sm ring-1 ring-brand-500/20'
                          : 'bg-white border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-bold text-slate-900">{c.candidateCode}</span>
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          <Star className="w-2.5 h-2.5 fill-emerald-600" />
                          {c.fitScore}%
                        </span>
                      </div>
                      <div className="text-xs font-medium text-slate-800 mt-1">{c.appliedRole}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{c.department} - {c.experienceYears}y exp</div>
                      
                      <div className="flex flex-wrap gap-1 mt-2">
                        {c.skills.slice(0, 2).map(sk => (
                          <span key={sk} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-4 bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between">
          {selectedCandidate ? (
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="font-mono text-xs font-bold text-slate-900">{selectedCandidate.candidateCode}</span>
                  <h5 className="text-sm font-bold text-slate-900 mt-0.5">{selectedCandidate.appliedRole}</h5>
                </div>
                <div className="text-right">
                  <div className="text-base font-bold font-mono text-emerald-600">{selectedCandidate.fitScore}%</div>
                  <div className="text-[10px] text-slate-500">Skill-Fit Index</div>
                </div>
              </div>

              <div className="my-3 space-y-2.5">
                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>Technical Architecture</span>
                    <span className="font-mono font-medium">92%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-600 h-full rounded-full w-[92%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>Problem Solving & Craft</span>
                    <span className="font-mono font-medium">96%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full w-[96%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>Communication & Culture</span>
                    <span className="font-mono font-medium">88%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full w-[88%]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-800 block mb-1">Interviewer Notes:</span>
                <p className="text-[11px] leading-relaxed">{selectedCandidate.notes}</p>
              </div>

              <button
                onClick={() => handleAdvanceStage(selectedCandidate.id)}
                className="w-full mt-4 py-2 px-3 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Loloskan ke Tahap Berikutnya</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 text-xs">
              Pilih salah satu kartu kandidat untuk meninjau scorecard.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
