import { createContext } from 'react';
import { themes } from '../data/themes';
import type { ThemeOption } from '../data/themes';

export interface ThemeContextType {
  currentTheme: ThemeOption;
  setTheme: (themeId: string) => void;
  setCustomHex: (hex: string) => void;
  themes: ThemeOption[];
}

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: themes[0],
  setTheme: () => {},
  setCustomHex: () => {},
  themes
});

export { useTheme } from './useTheme';
export { ThemeProvider } from './ThemeProvider';
