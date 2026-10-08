export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  features: string[];
}

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  address: string;
  position: string;
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools & Methods';
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
  tags?: string[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  avatar: string;
  avatarSecondary: string;
  bio: string;
  shortBio: string;
  email: string;
  phone: string;
  location: string;
  dateOfBirth: string;
  languages: string;
  nationality: string;
  interests: string;
  resumeUrl: string;
  socials: {
    linkedin: string;
    facebook: string;
    twitter: string;
    github: string;
  };
}

