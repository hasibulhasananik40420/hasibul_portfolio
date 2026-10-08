import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useTheme } from '../../context/ThemeContext';
import { Sidebar } from './Sidebar';
import { RightDock } from './RightDock';
import { PageNavigation } from './PageNavigation';
import { ThemeColorPicker } from './ThemeColorPicker';
import { BottomNav } from './BottomNav';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const { currentTheme } = useTheme();
  const isHomePage = location.pathname === '/';
  const mainRef = useRef<HTMLElement>(null);
  const pageContentRef = useRef<HTMLDivElement>(null);
  const laserBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset window (mobile) and container (desktop) scroll position on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    if (pageContentRef.current) {
      pageContentRef.current.scrollTop = 0;
    }

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (mainRef.current) {
        mainRef.current.scrollTop = 0;
      }
    });

    const ctx = gsap.context(() => {
      // 1. High-tech laser sweep line running across the top edge
      if (laserBarRef.current) {
        gsap.fromTo(
          laserBarRef.current,
          { scaleX: 0, opacity: 1, transformOrigin: 'left' },
          {
            scaleX: 1,
            opacity: 0,
            duration: 0.55,
            ease: 'power3.inOut',
          }
        );
      }

      // 2. Apple / Linear luxury depth blur & scale transition
      if (pageContentRef.current) {
        gsap.fromTo(
          pageContentRef.current,
          {
            opacity: 0,
            y: 20,
            scale: 0.985,
            filter: 'blur(8px)',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.46,
            ease: 'power3.out',
            clearProps: 'transform,filter,opacity',
          }
        );
      }
    }, mainRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-[#edf2f7] flex flex-col items-center justify-start lg:justify-center p-2.5 sm:p-5 md:p-8 lg:p-10 relative overflow-x-hidden font-jakarta">
      {/* Decorative dot matrix background patterns (Desktop & Tablet) */}
      <div className="absolute top-6 left-6 pointer-events-none opacity-40 select-none hidden sm:block">
        <div className="grid grid-cols-6 gap-2 w-28">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 pointer-events-none opacity-30 select-none hidden sm:block">
        <div className="grid grid-cols-6 gap-2 w-28">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none opacity-20 select-none hidden xl:block">
        <div className="grid grid-cols-4 gap-2 w-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      {/* Main Portfolio Row (max-w-[1280px]) */}
      <div className="w-full max-w-xl md:max-w-3xl lg:max-w-[1280px] flex items-center justify-center gap-4 lg:gap-6 relative my-auto pb-24 sm:pb-28 lg:pb-0">
        {/* The Main Card (On mobile: clean standalone card; On desktop: fixed height with sidebar) */}
        <div className="flex-1 w-full bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08),0_0_1px_1px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col lg:flex-row min-h-[500px] lg:h-[600px] border border-slate-100/50 relative">
          {/* Top route laser accent beam */}
          <div
            ref={laserBarRef}
            className="absolute top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none shadow-sm"
            style={{ backgroundColor: currentTheme.primary }}
          />

          {/* Left Side: Profile Sidebar (Hidden on mobile and tablet!) */}
          <Sidebar />

          {/* Right Side: Active Page View */}
          <main
            ref={mainRef}
            className={`flex-1 bg-white relative flex flex-col rounded-[28px] sm:rounded-[36px] lg:rounded-none lg:rounded-r-[40px] h-full ${
              isHomePage
                ? 'overflow-hidden'
                : 'overflow-y-auto custom-scrollbar'
            }`}
          >
            <div ref={pageContentRef} className="w-full h-full">
              {children}
            </div>
          </main>
        </div>

        {/* Right Controls Column (Desktop Only): Color Picker on top, Dock in middle, Arrows at bottom */}
        <div className="hidden lg:flex flex-col items-center justify-between h-[600px] shrink-0 py-1 z-40">
          {/* Top: Color Change Setting Only */}
          <ThemeColorPicker />

          {/* Middle: Navigation Dock */}
          <RightDock />

          {/* Bottom: Page Navigation Arrows */}
          <PageNavigation />
        </div>
      </div>

      {/* Mobile & Medium Device Bottom Navigation */}
      <BottomNav />
    </div>
  );
};
