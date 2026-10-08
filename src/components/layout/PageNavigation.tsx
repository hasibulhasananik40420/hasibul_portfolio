import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LuChevronUp, LuChevronDown } from 'react-icons/lu';
import { useTheme } from '../../context/ThemeContext';

const routeOrder = ['/', '/about', '/resume', '/portfolio', '/services', '/contact'];

export const PageNavigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentTheme } = useTheme();

  const currentPath = location.pathname;
  const currentIndex = routeOrder.indexOf(currentPath);
  const activeIdx = currentIndex >= 0 ? currentIndex : 0;

  const handlePrev = () => {
    const prevIdx = (activeIdx - 1 + routeOrder.length) % routeOrder.length;
    navigate(routeOrder[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % routeOrder.length;
    navigate(routeOrder[nextIdx]);
  };

  return (
    <div
      aria-label="Previous and Next Section Navigation"
      className="flex flex-col items-center bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-slate-100 rounded-full py-2 px-1 transition-all duration-300 relative z-30"
    >
      <button
        onClick={handlePrev}
        aria-label="Previous Page"
        title="Previous Page"
        className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-800 transition-colors duration-200 cursor-pointer active:scale-95"
        onMouseEnter={(e) => {
          e.currentTarget.style.color = currentTheme.primary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#94a3b8';
        }}
      >
        <LuChevronUp size={18} />
      </button>

      <div className="w-3.5 h-[1px] bg-slate-100 my-0.5"></div>

      <button
        onClick={handleNext}
        aria-label="Next Page"
        title="Next Page"
        className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-800 transition-colors duration-200 cursor-pointer active:scale-95"
        onMouseEnter={(e) => {
          e.currentTarget.style.color = currentTheme.primary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#94a3b8';
        }}
      >
        <LuChevronDown size={18} />
      </button>
    </div>
  );
};
