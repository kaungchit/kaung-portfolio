export interface SocialLinks {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  lineId: string;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  tagline: string;
  bioHeadline: string;
  bioParagraphs: string[];
  location: string;
  timezone: string;
  availability: string;
  status: 'ONLINE' | 'BUSY' | 'OPEN_FOR_OPPORTUNITIES';
  yearsExperience: number;
  projectsCompleted: number;
  technologiesCount: number;
  socials: SocialLinks;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    details?: string;
  }>;
  languages: Array<{
    name: string;
    level: string;
    percent: number;
  }>;
}

export interface SkillItem {
  name: string;
  iconName?: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  experienceYears: string;
  description: string;
  tags: string[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Enterprise / Backend' | 'FinTech & Accounting' | 'Frontend / UI';
  description: string;
  challenge: string;
  solution: string;
  impactMetrics: string[];
  technologies: string[];
  architecture: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  visualType: 'dashboard' | 'terminal' | 'flow' | 'mobile' | 'code';
  previewDetails: {
    accentColor: string;
    mockupType: string;
    stats: Array<{ label: string; value: string }>;
    codeHighlight?: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  isRemote: boolean;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  teamRegion: 'Singapore' | 'Japan' | 'Myanmar' | 'International';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  keyDeliverables: string[];
  technologies: string[];
  icon: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
}

export interface TerminalCommand {
  command: string;
  description: string;
  action?: () => void;
}
