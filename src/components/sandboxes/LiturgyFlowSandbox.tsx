import React, { useState } from 'react';
import { Calendar, ShieldAlert, CheckCircle2, AlertTriangle } from 'lucide-react';

export const LiturgyFlowSandbox: React.FC = () => {
  const [conflictDetected, setConflictDetected] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('Jadwal tervalidasi: Bebas bentrok antar sesi dan rotasi adil.');

  const handleTestAssignment = (hasConflict: boolean) => {
    if (hasConflict) {
      setConflictDetected(true);
      setStatusMessage('Peringatan Bentrok: Petugas #14 sudah terdaftar pada Sesi Sore (17:00). Mencegah penugasan ganda otomatis.');
    } else {
      setConflictDetected(false);
      setStatusMessage('Validasi Sukses: Petugas memenuhi syarat jeda istirahat dan pemerataan distrik.');
    }
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 md:p-6 shadow-subtle text-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-brand-600" />
            <h4 className="text-base font-semibold text-slate-900 tracking-tight">LiturgyFlow Zero-Conflict Validator</h4>
            <span className="text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md font-mono">
              Live in Production
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Uji algoritma pencegahan bentrok jadwal penugasan ganda dan rotasi pemerataan 35 komunitas wilayah.
          </p>
        </div>

        <a
          href="https://jadwal-liturgi.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold px-3 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center gap-1 self-start sm:self-auto"
        >
          Kunjungi Live App (jadwal-liturgi.web.app)
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="space-y-3">
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
            <span className="text-xs font-medium text-slate-500 block mb-1">Target Sesi Pelayanan:</span>
            <div className="font-semibold text-slate-900 text-sm">Minggu Biasa XXV - Sesi Pagi (07:00 WIB)</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Kapasitas: 12 Petugas - Lingkungan: Wilayah 3</div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-700">Simulasikan Skenario Penugasan:</span>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleTestAssignment(false)}
                className="w-full text-left p-2.5 rounded-lg border border-slate-200 hover:border-emerald-500 bg-white hover:bg-emerald-50/30 text-xs font-medium text-slate-800 transition-all flex items-center justify-between"
              >
                <span>Uji Penugasan Normal (Bebas Konflik)</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </button>

              <button
                onClick={() => handleTestAssignment(true)}
                className="w-full text-left p-2.5 rounded-lg border border-slate-200 hover:border-rose-500 bg-white hover:bg-rose-50/30 text-xs font-medium text-slate-800 transition-all flex items-center justify-between"
              >
                <span>Uji Bentrok Ganda (Double-Booking Trigger)</span>
                <AlertTriangle className="w-4 h-4 text-rose-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Status Validasi Sistem</span>
            <div className={`mt-2 p-3 rounded-lg border ${
              conflictDetected 
                ? 'bg-rose-50 text-rose-800 border-rose-200' 
                : 'bg-emerald-50 text-emerald-800 border-emerald-200'
            }`}>
              <div className="text-xs font-bold flex items-center gap-1.5">
                {conflictDetected ? <ShieldAlert className="w-4 h-4 text-rose-600" /> : <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                {conflictDetected ? 'Double-Booking Blocked' : 'Schedule Integrity Passed'}
              </div>
              <p className="text-xs mt-1 leading-relaxed">{statusMessage}</p>
            </div>

            <div className="mt-4 p-3 bg-white border border-slate-200/80 rounded-lg text-xs space-y-1.5">
              <div className="flex justify-between text-slate-600">
                <span>Fair-Share Distribution Index:</span>
                <span className="font-mono font-bold text-slate-900">98.4% Seimbang</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Active Registered Officers:</span>
                <span className="font-mono font-bold text-slate-900">172 Petugas</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 border-t border-slate-200 pt-2 mt-3 text-center">
            Pencegahan bentrok otomatis real-time via Cloud Firestore Engine
          </div>
        </div>
      </div>
    </div>
  );
};
