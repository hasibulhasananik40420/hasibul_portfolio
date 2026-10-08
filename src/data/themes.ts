export interface ThemeOption {
  id: string;
  name: string;
  primary: string;
  primaryHover: string;
  lightBg: string;
  borderLight: string;
  gradient: string;
  badgeBg: string;
}

export const themes: ThemeOption[] = [
  {
    id: 'canyon-clay',
    name: 'Canyon Clay',
    primary: '#A8796B',
    primaryHover: '#8c5f52',
    lightBg: 'rgba(168, 121, 107, 0.08)',
    borderLight: '#d4ada2',
    gradient: 'from-[#A8796B] to-[#8c5f52]',
    badgeBg: '#A8796B'
  },
  {
    id: 'eucalyptus',
    name: 'Eucalyptus Teal',
    primary: '#087e8b',
    primaryHover: '#06636e',
    lightBg: 'rgba(8, 126, 139, 0.08)',
    borderLight: '#8cd4dc',
    gradient: 'from-[#087e8b] to-[#06636e]',
    badgeBg: '#087e8b'
  },
  {
    id: 'sage-mineral',
    name: 'Sage Mineral',
    primary: '#526B68',
    primaryHover: '#3f5350',
    lightBg: 'rgba(82, 107, 104, 0.08)',
    borderLight: '#9cb5b2',
    gradient: 'from-[#526B68] to-[#3f5350]',
    badgeBg: '#526B68'
  },
  {
    id: 'deep-forest',
    name: 'Deep Forest',
    primary: '#293D3B',
    primaryHover: '#1b2928',
    lightBg: 'rgba(41, 61, 59, 0.08)',
    borderLight: '#6e8c89',
    gradient: 'from-[#293D3B] to-[#1b2928]',
    badgeBg: '#293D3B'
  },
  {
    id: 'riviera-azure',
    name: 'Riviera Azure',
    primary: '#0096c7',
    primaryHover: '#0077b6',
    lightBg: 'rgba(0, 150, 199, 0.08)',
    borderLight: '#90e0ef',
    gradient: 'from-[#0096c7] to-[#0077b6]',
    badgeBg: '#0096c7'
  },
  {
    id: 'persimmon-coral',
    name: 'Persimmon Coral',
    primary: '#ff5733',
    primaryHover: '#d94120',
    lightBg: 'rgba(255, 87, 51, 0.08)',
    borderLight: '#ffb3a1',
    gradient: 'from-[#ff5733] to-[#d94120]',
    badgeBg: '#ff5733'
  },
  {
    id: 'kyoto-matcha',
    name: 'Kyoto Matcha',
    primary: '#2d6a4f',
    primaryHover: '#1e4835',
    lightBg: 'rgba(45, 106, 79, 0.08)',
    borderLight: '#95d5b2',
    gradient: 'from-[#2d6a4f] to-[#1e4835]',
    badgeBg: '#2d6a4f'
  },
  {
    id: 'terracotta-clay',
    name: 'Tuscan Clay',
    primary: '#b44c28',
    primaryHover: '#923c1d',
    lightBg: 'rgba(180, 76, 40, 0.08)',
    borderLight: '#e4a58f',
    gradient: 'from-[#b44c28] to-[#923c1d]',
    badgeBg: '#b44c28'
  },
  {
    id: 'saffron-amber',
    name: 'Saffron Ochre',
    primary: '#c87a0e',
    primaryHover: '#a36209',
    lightBg: 'rgba(200, 122, 14, 0.08)',
    borderLight: '#f3c98b',
    gradient: 'from-[#c87a0e] to-[#a36209]',
    badgeBg: '#c87a0e'
  },
  {
    id: 'obsidian-carbon',
    name: 'Obsidian Carbon',
    primary: '#18181b',
    primaryHover: '#09090b',
    lightBg: 'rgba(24, 24, 27, 0.07)',
    borderLight: '#71717a',
    gradient: 'from-[#27272a] to-[#09090b]',
    badgeBg: '#18181b'
  }
];

export function createCustomTheme(hex: string): ThemeOption {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
  const g = parseInt(cleanHex.substring(2, 4), 16) || 0;
  const b = parseInt(cleanHex.substring(4, 6), 16) || 0;

  return {
    id: `custom-${cleanHex}`,
    name: 'Custom',
    primary: hex,
    primaryHover: hex,
    lightBg: `rgba(${r}, ${g}, ${b}, 0.08)`,
    borderLight: hex,
    gradient: `from-[${hex}] to-[${hex}]`,
    badgeBg: hex
  };
}
