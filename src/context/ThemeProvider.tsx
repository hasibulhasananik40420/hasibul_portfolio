import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { themes, createCustomTheme } from '../data/themes';
import type { ThemeOption } from '../data/themes';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved && saved !== 'eucalyptus') {
      if (saved.startsWith('#')) {
        return createCustomTheme(saved);
      }
      const found = themes.find(t => t.id === saved);
      if (found) return found;
    }
    return themes[0]; // Canyon Clay (#A8796B)
  });

  const handleSetTheme = (id: string) => {
    const found = themes.find(t => t.id === id);
    if (found) {
      setCurrentTheme(found);
      localStorage.setItem('portfolio-theme', id);
    }
  };

  const handleSetCustomHex = (hex: string) => {
    const custom = createCustomTheme(hex);
    setCurrentTheme(custom);
    localStorage.setItem('portfolio-theme', hex);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme: handleSetTheme,
        setCustomHex: handleSetCustomHex,
        themes
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
