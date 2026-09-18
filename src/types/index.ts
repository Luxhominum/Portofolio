export type ProjectCategory = 'all' | 'ecommerce' | 'enterprise' | 'community' | 'decision';

export interface ProjectMetric {
  label: string;
  value: string;
  desc: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  badge?: string;
}

export interface FourPillars {
  alasan: {
    problem: string;
    bottlenecks: string[];
    objective: string;
  };
  caraKerja: {
    architecture: string;
    workflowSteps: string[];
    technicalSpecifications: string[];
  };
  output: {
    deliverables: string[];
    coreFeatures: ProjectFeature[];
  };
  result: {
    metrics: ProjectMetric[];
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
  uiType: 'omnipulse' | 'nexus' | 'talent' | 'liturgy' | 'radar' | 'automation';
  stack: string[];
  keyHighlights: string[];
  fourPillars: FourPillars;
}
