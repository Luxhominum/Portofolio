import React, { useState } from 'react';
import { MOCK_SCRIPT_SERVICES } from '../../data/mockData';
import type { ScriptService } from '../../types';
import { 
  Building2, 
  ExternalLink, 
  FileSpreadsheet, 
  Activity, 
  Users, 
  Lock
} from 'lucide-react';

export const NexusPortalSandbox: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'SUPERADMIN' | 'LOGISTICS_LEAD' | 'HR_LEAD' | 'FINANCE_STAFF'>('SUPERADMIN');
  const [activeDeptFilter, setActiveDeptFilter] = useState<string>('all');
  const [services] = useState<ScriptService[]>(MOCK_SCRIPT_SERVICES);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLaunchSheet = (svc: ScriptService) => {
    if (selectedRole === 'FINANCE_STAFF' && svc.department === 'Logistics-HQ') {
      triggerToast(`Izin Ditolak: Peran Finance Staff tidak memiliki hak akses ke ${svc.sheetName}.`);
      return;
    }
    triggerToast(`Membuka ${svc.sheetName} via Destination Selector terproteksi.`);
  };

  const filteredServices = services.filter(svc => {
    if (activeDeptFilter === 'all') return true;
    return svc.department === activeDeptFilter;
  });

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 md:p-6 shadow-subtle text-slate-800">
      {toastMessage && (
        <div className="mb-3.5 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg flex items-center justify-between shadow-elevated">
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white ml-2 font-bold">&times;</button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-brand-600" />
            <h4 className="text-base font-semibold text-slate-900 tracking-tight">Enterprise Nexus Hub Simulator</h4>
            <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md font-mono">RBAC Enabled</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Simulasi single-pane-of-glass pengawasan lembar kerja spreadsheet, monitoring kuota eksekusi Google Apps Script, dan filter RBAC.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 p-1 rounded-xl">
          <span className="text-[11px] font-medium text-slate-500 px-2 flex items-center gap-1">
            <Lock className="w-3 h-3" /> Role:
          </span>
          {(['SUPERADMIN', 'LOGISTICS_LEAD', 'HR_LEAD', 'FINANCE_STAFF'] as const).map(role => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-2 py-1 text-[11px] rounded-lg font-medium transition-all ${
                selectedRole === role 
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {role.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Indexed Spreadsheets</span>
            <FileSpreadsheet className="w-3.5 h-3.5 text-brand-600" />
          </div>
          <div className="text-lg font-bold font-mono text-slate-900 mt-1">24 Active Sheets</div>
          <div className="text-[11px] text-emerald-600 font-medium mt-0.5">100% Formula Protected</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Script Health Rate</span>
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="text-lg font-bold font-mono text-slate-900 mt-1">99.85%</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Google Cloud Apps Script API</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Active Team Sessions</span>
            <Users className="w-3.5 h-3.5 text-indigo-600" />
          </div>
          <div className="text-lg font-bold font-mono text-slate-900 mt-1">106 Staff</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Cross 4 Business Units</div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2.5 mb-3.5 overflow-x-auto">
        {['all', 'Logistics-HQ', 'Finance-Ops', 'Warehouse-A', 'HR-Ops'].map(dept => (
          <button
            key={dept}
            onClick={() => setActiveDeptFilter(dept)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              activeDeptFilter === dept
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {dept === 'all' ? 'Semua Divisi' : dept}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredServices.map(svc => (
          <div key={svc.id} className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/40 hover:bg-slate-50 transition-colors">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-xs font-semibold text-slate-900">{svc.name}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5 flex items-center gap-1">
                  <FileSpreadsheet className="w-3 h-3 text-emerald-600" />
                  {svc.sheetName}
                </div>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-md font-medium border ${
                svc.status === 'Operational'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}>
                {svc.status}
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                <span>Google Apps Script Quota</span>
                <span className="font-mono font-medium text-slate-700">{svc.quotaUsagePct}% used</span>
              </div>
              <div className="w-full bg-slate-200/80 rounded-full h-1.5 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all ${
                    svc.quotaUsagePct > 80 ? 'bg-amber-500' : 'bg-brand-600'
                  }`}
                  style={{ width: `${svc.quotaUsagePct}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-slate-200/60 text-xs">
              <div className="text-[11px] text-slate-500 font-mono">
                {svc.lastRun} - {svc.activeUsers} staff
              </div>
              <button
                onClick={() => handleLaunchSheet(svc)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-brand-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
              >
                <span>Buka Sheet</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
