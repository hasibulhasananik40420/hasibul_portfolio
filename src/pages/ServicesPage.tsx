import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { 
  LuMonitor, 
  LuCode, 
  LuLayoutDashboard, 
  LuShoppingBag, 
  LuGauge, 
  LuShieldCheck,
  LuCheck,
  LuArrowRight
} from 'react-icons/lu';
import { servicesData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentTheme } = useTheme();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
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

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
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
          What I Offer
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit">
          Services & Technical Solutions
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5 font-light max-w-2xl font-jakarta">
          Helping businesses, startups, and creative teams stand out through scalable frontend architecture, pixel-perfect UI execution, and high-performance web solutions.
        </p>
      </div>

      {/* Services Grid (Borderless, theme hover bg, compact) */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 font-jakarta">
        {servicesData.map((service) => {
          const Icon = getServiceIcon(service.iconName);
          const isHovered = hoveredId === service.id;

          return (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="p-5 sm:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-default"
              style={{
                backgroundColor: isHovered ? currentTheme.lightBg : '#f8fafc',
              }}
            >
              {/* Service Number Watermark */}
              <span className="absolute top-4 right-4 text-2xl font-bold font-outfit text-slate-300/60 pointer-events-none">
                {service.id}
              </span>

              <div className="space-y-4">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: isHovered ? currentTheme.primary : '#ffffff',
                    color: isHovered ? '#ffffff' : currentTheme.primary,
                    boxShadow: isHovered ? 'none' : '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Title & Description */}
                <div>
                  <h3
                    className="font-bold text-base sm:text-lg font-outfit transition-colors duration-300"
                    style={{
                      color: isHovered ? currentTheme.primary : '#0f172a',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base mt-1.5 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Features Bullet Points */}
                <ul className="space-y-2 pt-2 border-t border-slate-200/50">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0"
                        style={{
                          backgroundColor: isHovered ? '#ffffff' : currentTheme.lightBg,
                          color: currentTheme.primary,
                        }}
                      >
                        <LuCheck size={10} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action Banner */}
      <div
        ref={ctaRef}
        className="p-6 sm:p-8 rounded-2xl text-center space-y-3.5 border-0 transition-colors duration-300"
        style={{ backgroundColor: currentTheme.lightBg }}
      >
        <span
          className="text-xs sm:text-sm font-bold uppercase tracking-widest block font-jakarta"
          style={{ color: currentTheme.primary }}
        >
          Have a Project in Mind?
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 font-outfit">
          Let’s build something extraordinary together.
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto font-light font-jakarta leading-relaxed">
          Whether you need an MVP from scratch, a design overhaul, or a performance boost, I am here to help.
        </p>
        <div className="pt-2">
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-sm hover:opacity-95 active:scale-95 transition-all cursor-pointer font-jakarta"
            style={{ backgroundColor: currentTheme.primary }}
          >
            Start a Conversation
            <LuArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
