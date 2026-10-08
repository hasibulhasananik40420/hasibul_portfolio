import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/portfolioData';

export const Preloader: React.FC = () => {
  const { currentTheme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initial GSAP Entrance for Preloader Card
    if (cardRef.current && avatarRef.current) {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.9, opacity: 0, y: 15 },
        { scale: 1, opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }
      );
      gsap.fromTo(
        avatarRef.current,
        { scale: 0.75, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.6)' }
      );
    }

    if (ringRef.current) {
      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: 'none',
      });
    }

    // 2. Smooth progress progression from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = 100 - prev;
        const step = Math.max(1.8, Math.min(8.5, diff * 0.14));
        const next = prev + step;
        return next >= 99 ? 100 : next;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100 && containerRef.current) {
      const exitTimer = setTimeout(() => {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.03,
          filter: 'blur(8px)',
          duration: 0.65,
          ease: 'power3.inOut',
          onComplete: () => {
            setShouldRender(false);
          },
        });
      }, 200);

      return () => clearTimeout(exitTimer);
    }
  }, [progress]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#edf2f7] select-none font-jakarta"
    >
      {/* Decorative Dot Matrix in top-left */}
      <div className="absolute top-8 left-8 pointer-events-none opacity-40 select-none hidden sm:block">
        <div className="grid grid-cols-6 gap-2 w-28">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      {/* Decorative Dot Matrix in bottom-right */}
      <div className="absolute bottom-8 right-8 pointer-events-none opacity-40 select-none hidden sm:block">
        <div className="grid grid-cols-6 gap-2 w-28">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      {/* Main Preloader Glass Card */}
      <div
        ref={cardRef}
        className="relative z-10 bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-[32px] p-7 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12),0_0_1px_1px_rgba(0,0,0,0.03)] flex flex-col items-center max-w-sm w-[calc(100%-40px)] text-center space-y-4"
      >
        {/* Profile Avatar Emblem with rotating dashed accent */}
        <div ref={avatarRef} className="relative">
          <div
            ref={ringRef}
            className="absolute -inset-2.5 rounded-full border border-dashed"
            style={{ borderColor: currentTheme.primary, opacity: 0.45 }}
          />

          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden relative ">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Active status pip */}
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2 border-white bg-emerald-500 shadow-sm" />
        </div>

        {/* Identity Info */}
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-outfit tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xs sm:text-[13px] font-medium text-slate-500 max-w-[240px] leading-snug">
            {personalInfo.role}
          </p>
        </div>

        {/* Progress Bar & Numeric Indicator */}
        <div className="w-full space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs font-semibold px-0.5">
            <span className="text-slate-400 uppercase tracking-widest text-[10px]">
              Loading Experience
            </span>
            <span
              className="font-mono text-xs font-bold transition-colors"
              style={{ color: currentTheme.primary }}
            >
              {Math.round(progress)}%
            </span>
          </div>

          {/* Progress bar track */}
          <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden ring-1 ring-slate-200/70 p-0.5">
            <div
              className="h-full rounded-full transition-all duration-75 ease-out"
              style={{
                width: `${progress}%`,
                backgroundColor: currentTheme.primary,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

