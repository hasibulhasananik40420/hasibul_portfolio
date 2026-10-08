import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { navItems } from '../../data/navigation';
import type { NavItem } from '../../data/navigation';

export const RightDock: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentTheme } = useTheme();

  const handleNavClick = (item: NavItem) => {
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
    <nav
      aria-label="Portfolio Navigation Dock"
      className="flex flex-col items-center bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 rounded-full py-4.5 px-2.5 transition-all duration-300 relative z-30"
    >
      <div className="flex flex-col items-center gap-3.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item);

          return (
            <div key={item.id} className="relative group flex items-center justify-center">
              {/* Tooltip Badge popping out to the LEFT (matching Image 2!) */}
              <div
                className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 ease-out translate-x-2 group-hover:translate-x-0 z-50 shadow-md rounded-md overflow-visible whitespace-nowrap"
                style={{ backgroundColor: currentTheme.badgeBg }}
              >
                <div className="px-3 py-1.5 text-white font-medium text-xs tracking-wide font-jakarta">
                  {item.name}
                </div>
                {/* Right arrow pointing to the icon button */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px]"
                  style={{ borderLeftColor: currentTheme.badgeBg }}
                ></div>
              </div>

              {/* Navigation Icon Button */}
              <button
                onClick={() => handleNavClick(item)}
                aria-label={item.name}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer relative"
                style={{
                  color: active ? currentTheme.primary : '#94a3b8',
                }}
              >
                <Icon
                  size={20}
                  className="transition-transform duration-200 group-hover:scale-115"
                  style={{
                    color: active ? currentTheme.primary : undefined,
                  }}
                />

                {/* Subtle active indicator dot */}
                {active && (
                  <span
                    className="absolute bottom-0.5 w-1 h-1 rounded-full animate-pulse"
                    style={{ backgroundColor: currentTheme.primary }}
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
