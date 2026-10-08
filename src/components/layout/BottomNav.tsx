import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LuPalette, LuPipette } from 'react-icons/lu';
import { useTheme } from '../../context/ThemeContext';
import { navItems } from '../../data/navigation';
import type { NavItem } from '../../data/navigation';
import type { ThemeOption } from '../../data/themes';

export const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentTheme, setTheme, setCustomHex, themes } = useTheme();
  const [showPalette, setShowPalette] = useState(false);
  const paletteRef = useRef<HTMLDivElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);

  // Filter out download icon as requested
  const mobileNavItems = navItems.filter((item) => !item.isDownload);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(event.target as Node)) {
        setShowPalette(false);
      }
    };

    if (showPalette) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPalette]);

  const handleNavClick = (item: NavItem) => {
    setShowPalette(false);
    if (item.isDownload) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.path);
    }
  };

  const isActive = (item: NavItem) => {
    if (item.isDownload) return false;
    if (item.path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === item.path;
  };

  return (
    <div
      ref={paletteRef}
      className="lg:hidden fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-28px)] max-w-md sm:max-w-lg"
    >
      {/* Mobile Color Theme Popover (opens elegantly above bottom bar) */}
      {showPalette && (
        <div className="mb-3 p-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-slate-200/80 flex flex-col gap-3 animate-in fade-in zoom-in-95 font-jakarta">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: currentTheme.primary }}
              />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Color Palette
              </span>
            </div>
            <span
              className="text-xs sm:text-sm font-bold truncate"
              style={{ color: currentTheme.primary }}
            >
              {currentTheme.name}
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2.5 pt-1">
            {themes.map((theme: ThemeOption) => {
              const isSelected = currentTheme.id === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id);
                  }}
                  title={theme.name}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all cursor-pointer flex items-center justify-center relative mx-auto ${
                    isSelected
                      ? 'ring-2 ring-offset-2 ring-slate-800 scale-110 shadow-sm'
                      : 'hover:scale-105 opacity-85 active:scale-95'
                  }`}
                  style={{ backgroundColor: theme.primary }}
                />
              );
            })}
          </div>

          {/* Custom color input */}
          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
            <input
              ref={colorInputRef}
              type="color"
              value={currentTheme.primary.startsWith('#') ? currentTheme.primary : '#A8796B'}
              onChange={(e) => setCustomHex(e.target.value)}
              className="sr-only"
            />
            <button
              type="button"
              onClick={() => colorInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold cursor-pointer hover:bg-slate-50 transition-colors"
            >
              <LuPipette size={13} style={{ color: currentTheme.primary }} />
              <span>Custom Color</span>
            </button>
            <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide">
              {currentTheme.primary.startsWith('#') ? currentTheme.primary : ''}
            </span>
          </div>
        </div>
      )}

      {/* Floating Premium Bottom Navigation Pill Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="w-full bg-white/90 backdrop-blur-2xl border border-white/80 rounded-full py-2 px-2.5 sm:px-3 shadow-[0_16px_40px_rgba(0,0,0,0.12),0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-between ring-1 ring-slate-900/[0.04]"
      >
        <div className="flex items-center justify-around flex-1">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item);

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                aria-label={item.name}
                title={item.name}
                className="relative flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-full transition-all duration-200 active:scale-90 cursor-pointer group"
                style={{
                  color: active ? currentTheme.primary : '#94a3b8',
                  backgroundColor: active ? currentTheme.lightBg : 'transparent',
                }}
              >
                <Icon
                  size={20}
                  className="transition-transform duration-200 group-hover:scale-110"
                  style={{
                    color: active ? currentTheme.primary : undefined,
                  }}
                />

                {/* Micro active dot indicator */}
                {active && (
                  <span
                    className="absolute -bottom-0.5 w-1 h-1 rounded-full"
                    style={{ backgroundColor: currentTheme.primary }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Subtle vertical divider */}
        <div className="h-6 w-px bg-slate-200/80 mx-1 shrink-0" aria-hidden="true" />

        {/* Color Palette Trigger Button */}
        <button
          onClick={() => setShowPalette(!showPalette)}
          aria-label="Theme Color"
          title="Change Theme Color"
          className="relative flex items-center justify-center p-2 sm:p-2.5 rounded-full transition-all duration-200 active:scale-90 cursor-pointer shrink-0"
          style={{
            color: showPalette ? currentTheme.primary : '#64748b',
            backgroundColor: showPalette ? currentTheme.lightBg : 'rgba(241, 245, 249, 0.7)',
          }}
        >
          <LuPalette
            size={20}
            style={{ color: showPalette ? currentTheme.primary : undefined }}
          />

          {/* Tiny live theme color pip on the palette button */}
          <span
            className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full ring-1 ring-white"
            style={{ backgroundColor: currentTheme.primary }}
          />
        </button>
      </nav>
    </div>
  );
};

