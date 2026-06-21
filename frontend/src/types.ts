export type PageId =
  | 'home'
  | 'about'
  | 'business'
  | 'education'
  | 'debate'
  | 'academy'
  | 'projects'
  | 'blog'
  | 'contact';

export interface NavItem {
  label: string;
  id: PageId;
  description: string;
}

export interface ServicePillar {
  title: string;
  description: string;
  iconName: string;
}

export interface ValueCard {
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedIn?: string;
}

export interface AcademyCourse {
  title: string;
  category: string;
  duration: string;
  level: string;
  tagline: string;
  description: string;
  isComingSoon: boolean;
  features: string[];
}

export interface FeaturedProgram {
  title: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  title: string;
  category: 'project' | 'event' | 'workshop' | 'community';
  description: string;
  imageUrl: string;
  tag: string;
  date: string;
}

export interface BlogPost {
  title: string;
  summary: string;
  excerpt: string;
  content?: string;
  category: 'Technology' | 'Education' | 'Business' | 'Innovation';
  author: string;
  readTime: string;
  date: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
