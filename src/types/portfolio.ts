export interface StatItem {
  value: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  iconType: 'analytics' | 'ml' | 'engineering';
  skills: string[];
  tools: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  type: 'flagship' | 'python_app';
  metric: string;
  metricLabel: string;
  image: string;
  description: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  tags: string[];
  githubUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  mode: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  university?: string;
  period: string;
  score: string;
  scoreLabel: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
  tag: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  description: string;
  iconName?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PortfolioData {
  brandName: string;
  brandSub: string;
  creatorName: string;
  roleTagline: string;
  availabilityTag: string;
  heroHeadingLine1: string;
  heroHeadingItalic: string;
  heroSubheading: string;
  heroPortrait: string;
  heroBadgeQuote: string;
  stats: StatItem[];
  aboutPortrait: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutBio: string[];
  aboutPoints: string[];
  aboutMissionQuote: string;
  skillCategories: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  faqs: FaqItem[];
  contactHeading: string;
  contactSubheading: string;
  email: string;
  phone: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}
