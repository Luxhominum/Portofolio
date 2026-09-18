import React, { useState, useEffect } from 'react';
import { MOCK_TRANSACTIONS } from '../../data/mockData';
import type { MockTransaction } from '../../types';
import { 
  ShieldCheck, 
  Wifi, 
  WifiOff, 
  Clock, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  Activity,
  } from 'lucide-react';

export const OmniPulseSandbox: React.FC = () => {
  const [transactions, setTransactions] = useState<MockTransaction[]>(MOCK_TRANSACTIONS);
  const [channelFilter, setChannelFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const [offlineQueueCount, setOfflineQueueCount] = useState<number>(0);
  const [simulating, setSimulating] = useState<boolean>(false);

  // SLA countdown timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTransactions(prev => 
        prev.map(tx => {
          if (tx.status === 'Settled' || tx.slaMinutesLeft <= 0) return tx;
          return { ...tx, slaMinutesLeft: Math.max(0, tx.slaMinutesLeft - 1) };
        })
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSimulateNewOrder = () => {
    setSimulating(true);
    setTimeout(() => {
      const channels: ('Shopee' | 'Tokopedia' | 'TikTok Shop' | 'Lazada')[] = ['Shopee', 'Tokopedia', 'TikTok Shop', 'Lazada'];
      const couriers: ('J&T Express' | 'SiCepat' | 'SPX Express' | 'GoSend Instant')[] = ['J&T Express', 'SiCepat', 'SPX Express', 'GoSend Instant'];
      const randomChannel = channels[Math.floor(Math.random() * channels.length)];
      const randomCourier = couriers[Math.floor(Math.random() * couriers.length)];
      const randomId = Math.floor(1000 + Math.random() * 9000);

      const newTx: MockTransaction = {
        id: `tx-sim-${Date.now()}`,
        invoice: `INV/2026/MOCK/${randomId}`,
        channel: randomChannel,
        buyer: `Pelanggan #${randomId.toString().slice(-3)}`,
        items: 'Custom Mechanical Keycaps x1',
        amount: Math.floor(150000 + Math.random() * 400000),
        status: 'Pending Verification',
        courier: randomCourier,
        slaMinutesLeft: randomCourier.includes('Instant') ? 25 : 120,
        timestamp: new Date().toLocaleTimeString('id-ID'),
        reconciled: true
      };

      if (isOffline) {
        setOfflineQueueCount(prev => prev + 1);
      } else {
        setTransactions(prev => [newTx, ...prev]);
      }
      setSimulating(false);
    }, 600);
  };

  const handleToggleOffline = () => {
    if (isOffline) {
      // Reconnecting & flushing queue
      setIsOffline(false);
      if (offlineQueueCount > 0) {
        const flushed: MockTransaction[] = Array.from({ length: offlineQueueCount }).map((_, idx) => ({
          id: `tx-recovered-${Date.now()}-${idx}`,
          invoice: `INV/2026/RECOVERED/${8000 + idx}`,
          channel: 'Shopee',
          buyer: `Buffered Customer #${idx + 1}`,
          items: 'Queued Stream Batch Item',
          amount: 210000,
          status: 'Ready to Pack',
          courier: 'J&T Express',
          slaMinutesLeft: 95,
          timestamp: new Date().toLocaleTimeString('id-ID'),
          reconciled: true
        }));
        setTransactions(prev => [...flushed, ...prev]);
        setOfflineQueueCount(0);
      }
    } else {
      setIsOffline(true);
    }
  };

  const filteredTransactions = transactions.filter(tx => {
    const matchesChannel = channelFilter === 'all' || tx.channel === channelFilter;
    const matchesStatus = statusFilter === 'all' || tx.status === statusFilter;
    const matchesSearch = tx.invoice.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tx.buyer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tx.items.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesChannel && matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: MockTransaction['status']) => {
    switch (status) {
      case 'Pending Verification':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/80">Pending</span>;
      case 'Ready to Pack':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-sky-50 text-sky-700 border border-sky-200/80">Ready to Pack</span>;
      case 'In Fulfillment':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200/80">In Fulfillment</span>;
      case 'Dispatched':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80">Dispatched</span>;
      case 'Settled':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Settled</span>;
    }
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 md:p-6 shadow-subtle text-slate-800">
      {/* Sandbox Header Control */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <h4 className="text-base font-semibold text-slate-900 tracking-tight">OmniPulse Live Transaction Sandbox</h4>
            <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md font-mono">Simulated Mock Engine</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Uji responsivitas ingestion feed multi-channel, deteksi batas SLA, dan sistem failover queue saat simulasi offline.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleToggleOffline}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
              isOffline 
                ? 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100' 
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {isOffline ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5 text-emerald-600" />}
            {isOffline ? `Simulasi Offline (${offlineQueueCount} Queued)` : 'Simulasikan Gangguan Jaringan'}
          </button>

          <button
            onClick={handleSimulateNewOrder}
            disabled={simulating}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${simulating ? 'animate-spin' : ''}`} />
            + Trigger Ingest Baru
          </button>
        </div>
      </div>

      {/* Metric Cards Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Active Stream</span>
            <Activity className="w-3.5 h-3.5 text-brand-600" />
          </div>
          <div className="text-lg font-bold font-mono text-slate-900 mt-1">{transactions.length} Orders</div>
          <div className="text-[11px] text-emerald-600 font-medium mt-0.5">100% Ingested</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Failover Buffer</span>
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
          </div>
          <div className="text-lg font-bold font-mono text-slate-900 mt-1">{offlineQueueCount} Staged</div>
          <div className="text-[11px] text-slate-500 mt-0.5">{isOffline ? 'IndexedDB Active' : 'Online Standby'}</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>SLA Critical</span>
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          </div>
          <div className="text-lg font-bold font-mono text-amber-700 mt-1">
            {transactions.filter(t => t.slaMinutesLeft > 0 && t.slaMinutesLeft <= 30 && t.status !== 'Settled').length} Orders
          </div>
          <div className="text-[11px] text-amber-600 font-medium mt-0.5">&lt;30m Courier Cutoff</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Settlement Sync</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="text-lg font-bold font-mono text-slate-900 mt-1">99.98%</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Auto-Reconciled</div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between mb-3.5">
        <div className="relative flex-1 max-w-xs">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Cari invoice, pembeli, item..."
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={channelFilter}
            onChange={e => setChannelFilter(e.target.value)}
            className="px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none"
          >
            <option value="all">Semua Marketplace</option>
            <option value="Shopee">Shopee</option>
            <option value="Tokopedia">Tokopedia</option>
            <option value="TikTok Shop">TikTok Shop</option>
            <option value="Lazada">Lazada</option>
          </select>

          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none"
          >
            <option value="all">Semua Status</option>
            <option value="Pending Verification">Pending</option>
            <option value="Ready to Pack">Ready to Pack</option>
            <option value="In Fulfillment">In Fulfillment</option>
            <option value="Dispatched">Dispatched</option>
            <option value="Settled">Settled</option>
          </select>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="border border-slate-200/80 rounded-xl overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-medium">
            <tr>
              <th className="py-2.5 px-3.5">Invoice & Channel</th>
              <th className="py-2.5 px-3.5">Item & Buyer</th>
              <th className="py-2.5 px-3.5">Amount (IDR)</th>
              <th className="py-2.5 px-3.5">Courier & SLA</th>
              <th className="py-2.5 px-3.5">Pipeline Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-sans">
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-400">
                  Tidak ada transaksi yang cocok dengan filter kriteria.
                </td>
              </tr>
            ) : (
              filteredTransactions.map(tx => (
                <tr key={tx.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-3.5">
                    <div className="font-mono font-medium text-slate-900">{tx.invoice}</div>
                    <div className="text-[11px] text-slate-500 font-normal mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                      {tx.channel} ? <span className="font-mono">{tx.timestamp}</span>
                    </div>
                  </td>
                  <td className="py-2.5 px-3.5 max-w-[200px]">
                    <div className="font-medium text-slate-800 truncate">{tx.items}</div>
                    <div className="text-[11px] text-slate-500 truncate">{tx.buyer}</div>
                  </td>
                  <td className="py-2.5 px-3.5 font-mono text-slate-900 font-medium">
                    Rp {tx.amount.toLocaleString('id-ID')}
                  </td>
                  <td className="py-2.5 px-3.5">
                    <div className="text-slate-800 font-medium">{tx.courier}</div>
                    <div className={`text-[11px] flex items-center gap-1 font-mono ${
                      tx.slaMinutesLeft > 0 && tx.slaMinutesLeft <= 30 && tx.status !== 'Settled'
                        ? 'text-amber-600 font-semibold'
                        : 'text-slate-500'
                    }`}>
                      <Clock className="w-3 h-3" />
                      {tx.status === 'Settled' ? 'Done' : `${tx.slaMinutesLeft}m left`}
                    </div>
                  </td>
                  <td className="py-2.5 px-3.5">
                    {getStatusBadge(tx.status)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 mt-3 px-1">
        <span>Menampilkan {filteredTransactions.length} dari {transactions.length} mock transaksi</span>
        <span>Arsitektur Web Worker Ingestion & Offline IndexedDB Cache</span>
      </div>
    </div>
  );
};
