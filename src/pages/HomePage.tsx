import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { currentTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Avatar subtle scale & reveal
      if (avatarRef.current) {
        gsap.fromTo(
          avatarRef.current,
          { scale: 0.93, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.45, ease: 'power2.out' }
        );
      }

      // Staggered text & button entrance
      if (contentRef.current) {
        const elements = contentRef.current.children;
        gsap.fromTo(
          elements,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full w-full flex items-center justify-center p-4 sm:p-8 md:p-10 lg:p-12 pb-24 sm:pb-28 lg:pb-12"
    >
      {/* Hero Intro Section (Responsive layout: column on mobile, row on desktop) */}
      <div className="flex flex-col lg:flex-row items-center gap-5 sm:gap-6 lg:gap-12 w-full max-w-4xl text-center lg:text-left">
        {/* Circular Avatar with soft ambient border & shadow */}
        <div ref={avatarRef} className="shrink-0 relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden relative transition-transform duration-500 hover:scale-102">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Intro Details */}
        <div ref={contentRef} className="flex-1 space-y-3.5 sm:space-y-4">
          <span className="text-slate-400 font-medium text-sm sm:text-base md:text-lg tracking-wide block font-jakarta">
            {personalInfo.role}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-outfit">
            {personalInfo.name}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-light font-jakarta mx-auto lg:mx-0">
            {personalInfo.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2 sm:pt-3">
            {/* Download CV pill button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 sm:px-9 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 border-2 shadow-sm hover:shadow-md active:scale-95 cursor-pointer font-jakarta inline-flex items-center justify-center"
              style={{
                borderColor: currentTheme.primary,
                color: currentTheme.primary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = currentTheme.primary;
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = currentTheme.primary;
              }}
            >
              Download CV
            </a>

            {/* Contact pill button */}
            <button
              onClick={() => navigate('/contact')}
              className="px-7 sm:px-9 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base border border-slate-200 text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer font-jakarta"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
