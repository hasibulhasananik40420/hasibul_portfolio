import React, { useState, useRef, useEffect } from 'react';
import { LuPalette, LuPipette } from 'react-icons/lu';
import { useTheme } from '../../context/ThemeContext';
import type { ThemeOption } from '../../data/themes';

export const ThemeColorPicker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme, setCustomHex, themes } = useTheme();
  const pickerRef = useRef<HTMLDivElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomHex(e.target.value);
  };

  return (
    <div ref={pickerRef} className="relative z-50">
      {/* Color Change Setting Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Theme Color"
        title="Change Color Theme"
        className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all cursor-pointer hover:border-slate-300 active:scale-95"
        style={{
          borderColor: isOpen ? currentTheme.primary : undefined
        }}
      >
        <LuPalette size={20} style={{ color: currentTheme.primary }} />
      </button>

      {/* Palette Popover */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2.5 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-3 min-w-[230px] z-50 animate-in fade-in zoom-in-95 font-jakarta">
          {/* Header */}
          <div className="flex items-center justify-between px-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Color Theme
            </span>
            <span
              className="text-xs font-bold truncate max-w-[120px] text-right"
              style={{ color: currentTheme.primary }}
            >
              {currentTheme.name}
            </span>
          </div>

          {/* 10 Curated Designer Presets in 2x5 Grid */}
          <div className="grid grid-cols-5 gap-2.5 pt-0.5">
            {themes.map((theme: ThemeOption) => {
              const isSelected = currentTheme.id === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id);
                  }}
                  title={theme.name}
                  className={`w-7 h-7 rounded-full transition-all cursor-pointer flex items-center justify-center relative ${
                    isSelected
                      ? 'ring-2 ring-offset-2 ring-slate-800 scale-110 shadow-sm'
                      : 'hover:scale-110 opacity-85 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: theme.primary }}
                />
              );
            })}
          </div>

          {/* Custom Color Selector */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Invisible color input triggered by button */}
              <input
                ref={colorInputRef}
                type="color"
                value={currentTheme.primary.startsWith('#') ? currentTheme.primary : '#A8796B'}
                onChange={handleCustomColorChange}
                className="sr-only"
                id="custom-hex-input"
              />

              <button
                type="button"
                onClick={() => colorInputRef.current?.click()}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 text-xs font-medium cursor-pointer transition-colors"
              >
                <LuPipette size={13} style={{ color: currentTheme.primary }} />
                <span>Custom Color</span>
              </button>
            </div>

            <span className="text-[11px] font-mono font-medium text-slate-400 uppercase">
              {currentTheme.primary.startsWith('#') ? currentTheme.primary : ''}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
