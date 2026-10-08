import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  LuMonitor, 
  LuCode, 
  LuLayoutDashboard, 
  LuShoppingBag, 
  LuGauge, 
  LuShieldCheck, 
  LuCalendar,
  LuLanguages,
  LuGlobe,
  LuHeart
} from 'react-icons/lu';
import { personalInfo, servicesData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const AboutPage: React.FC = () => {
  const { currentTheme } = useTheme();
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.38, ease: 'power2.out', clearProps: 'transform,opacity' }
        );
      }

      if (servicesGridRef.current) {
        gsap.fromTo(
          servicesGridRef.current.children,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.38,
            stagger: 0.05,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          }
        );
      }

      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: 'transform,opacity' }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Monitor': return LuMonitor;
      case 'Code': return LuCode;
      case 'Layout': return LuLayoutDashboard;
      case 'Gem': return LuShoppingBag;
      case 'Search': return LuGauge;
      case 'Shield': return LuShieldCheck;
      default: return LuCode;
    }
  };

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 lg:p-10 pb-28 sm:pb-32 lg:pb-10 space-y-8">
      {/* Header */}
      <div ref={headerRef} className="pb-4 border-b border-slate-100">
        <span className="text-slate-400 font-semibold text-xs sm:text-sm uppercase tracking-wider block mb-1 font-jakarta">
          Who I Am
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit">
          About Me
        </h1>
        <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mt-2.5 font-light font-jakarta">
          {personalInfo.bio}
        </p>
      </div>

      {/* "What I Do" Section (Clean, borderless cards with theme-colored soft hover bg) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5">
          {/* Subtle dot matrix marker */}
          <div className="grid grid-cols-2 gap-1 w-3" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentTheme.primary }} />
            <span className="w-1.5 h-1.5 rounded-full opacity-60" style={{ backgroundColor: currentTheme.primary }} />
            <span className="w-1.5 h-1.5 rounded-full opacity-60" style={{ backgroundColor: currentTheme.primary }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentTheme.primary }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentTheme.primary }} />
            <span className="w-1.5 h-1.5 rounded-full opacity-60" style={{ backgroundColor: currentTheme.primary }} />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-outfit">
            What <span style={{ color: currentTheme.primary }}>I Do</span>
          </h2>
        </div>

        {/* Borderless Cards Grid with Theme Hover Background */}
        <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 font-jakarta">
          {servicesData.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            const isHovered = hoveredServiceId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                className="p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: isHovered ? currentTheme.lightBg : '#f8fafc',
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon container */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? currentTheme.primary : '#ffffff',
                      color: isHovered ? '#ffffff' : currentTheme.primary,
                      boxShadow: isHovered ? 'none' : '0 1px 3px rgba(0,0,0,0.04)',
                    }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="flex-1 space-y-2 min-w-0">
                    <h3
                      className="font-bold text-base sm:text-lg transition-colors duration-300 font-outfit"
                      style={{
                        color: isHovered ? currentTheme.primary : '#0f172a',
                      }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.features.map((feat, i) => (
                        <span
                          key={i}
                          className="text-xs sm:text-sm font-medium px-2.5 py-1 rounded-md transition-colors duration-300"
                          style={{
                            backgroundColor: '#ffffff',
                            color: isHovered ? '#334155' : '#64748b',
                            border: '1px solid rgba(226, 232, 240, 0.7)',
                          }}
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Personal Details (Borderless, clean neutral card) */}
      <section ref={infoRef} className="space-y-3.5 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-outfit">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/80 p-5 sm:p-6 rounded-2xl font-jakarta">
          <div className="flex items-center gap-3.5">
            <LuCalendar className="text-slate-400 shrink-0" size={18} />
            <span className="text-slate-500 text-sm sm:text-base font-medium w-28 sm:w-32">Date of birth:</span>
            <span className="text-slate-800 text-sm sm:text-base font-semibold">{personalInfo.dateOfBirth}</span>
          </div>

          <div className="flex items-center gap-3.5">
            <LuLanguages className="text-slate-400 shrink-0" size={18} />
            <span className="text-slate-500 text-sm sm:text-base font-medium w-28 sm:w-32">Languages:</span>
            <span className="text-slate-800 text-sm sm:text-base font-semibold">{personalInfo.languages}</span>
          </div>

          <div className="flex items-center gap-3.5">
            <LuGlobe className="text-slate-400 shrink-0" size={18} />
            <span className="text-slate-500 text-sm sm:text-base font-medium w-28 sm:w-32">Nationality:</span>
            <span className="text-slate-800 text-sm sm:text-base font-semibold">{personalInfo.nationality}</span>
          </div>

          <div className="flex items-center gap-3.5">
            <LuHeart className="text-slate-400 shrink-0" size={18} />
            <span className="text-slate-500 text-sm sm:text-base font-medium w-28 sm:w-32">Interests:</span>
            <span className="text-slate-800 text-sm sm:text-base font-semibold">{personalInfo.interests}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
