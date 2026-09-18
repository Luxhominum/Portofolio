export type ProjectCategory = 'all' | 'enterprise' | 'ecommerce' | 'decision' | 'community';

export interface FourPillars {
  alasan: {
    problem: string;
    bottlenecks: string[];
    objective: string;
  };
  caraKerja: {
    architecture: string;
    mechanics: string[];
    techDetails: string;
  };
  output: {
    features: string[];
    deliverables: string[];
  };
  result: {
    metrics: { label: string; value: string; desc: string }[];
    impactSummary: string;
  };
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  badge?: string;
  liveUrl?: string;
  githubUrl?: string;
  demoType: 'omnipulse' | 'nexus' | 'talent' | 'radar' | 'liturgy' | 'automation';
  stack: string[];
  highlights: string[];
  fourPillars: FourPillars;
  sandboxAvailable: boolean;
}

export interface MockTransaction {
  id: string;
  invoice: string;
  channel: 'Shopee' | 'Tokopedia' | 'TikTok Shop' | 'Lazada';
  buyer: string;
  items: string;
  amount: number;
  status: 'Pending Verification' | 'Ready to Pack' | 'In Fulfillment' | 'Dispatched' | 'Settled';
  courier: 'J&T Express' | 'SiCepat' | 'SPX Express' | 'GoSend Instant';
  slaMinutesLeft: number;
  timestamp: string;
  reconciled: boolean;
}

export interface Candidate {
  id: string;
  candidateCode: string;
  appliedRole: string;
  department: string;
  experienceYears: number;
  stage: 'Screening' | 'Technical Assessment' | 'User Interview' | 'Offering' | 'Hired' | 'Talent Pool';
  fitScore: number;
  skills: string[];
  notes: string;
  appliedDate: string;
}

export interface ScriptService {
  id: string;
  name: string;
  department: 'Logistics-HQ' | 'Finance-Ops' | 'Warehouse-A' | 'HR-Ops';
  sheetName: string;
  status: 'Operational' | 'Quota Warning' | 'Maintenance';
  lastRun: string;
  executionRate: number;
  quotaUsagePct: number;
  activeUsers: number;
}
