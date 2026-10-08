import React from 'react';
import { 
  LuHouse,
  LuUser, 
  LuGraduationCap, 
  LuBriefcase, 
  LuBookOpen, 
  LuMail, 
  // LuDownload 
} from 'react-icons/lu';
// import { personalInfo } from './portfolioData';

export interface NavItem {
  id: string;
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>;
  isDownload?: boolean;
}

export const navItems: NavItem[] = [
  { id: 'home', name: 'Home', path: '/', icon: LuHouse },
  { id: 'about', name: 'About Me', path: '/about', icon: LuUser },
  { id: 'resume', name: 'Resume', path: '/resume', icon: LuGraduationCap },
  { id: 'portfolio', name: 'Portfolio', path: '/portfolio', icon: LuBriefcase },
  { id: 'services', name: 'Services', path: '/services', icon: LuBookOpen },
  { id: 'contact', name: 'Contact', path: '/contact', icon: LuMail },
  // { id: 'download', name: 'Download CV', path: personalInfo.resumeUrl, icon: LuDownload, isDownload: true },
];
