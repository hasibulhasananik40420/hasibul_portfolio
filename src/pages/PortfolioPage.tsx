import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { LuExternalLink, LuLayers } from 'react-icons/lu';
import { portfolioItems } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { currentTheme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'Web Application',
    'Real Estate',
    'EdTech Platform',
    'Ecommerce',
    'Agency',
    'Landing Page'
  ];

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  // Initial entrance for header and category tabs
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

      if (tabsRef.current) {
        gsap.fromTo(
          tabsRef.current.children,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.02, ease: 'power2.out', clearProps: 'transform,opacity' }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Smooth card stagger when activeCategory changes
  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      if (gridRef.current && gridRef.current.children.length > 0) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 14, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            stagger: 0.045,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          }
        );
      }
    }, gridRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 lg:p-10 pb-28 sm:pb-32 lg:pb-10 space-y-6 font-jakarta">
      {/* Header */}
      <div ref={headerRef} className="pb-4 border-b border-slate-100">
        <span className="text-slate-400 font-semibold text-xs sm:text-sm uppercase tracking-wider block mb-1">
          Recent Works
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit">
          Featured Portfolio
        </h1>
      </div>

      {/* Category Filter Tabs (Compact, minimal pills) */}
      <div ref={tabsRef} className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: isActive ? currentTheme.primary : '#f8fafc',
                color: isActive ? '#ffffff' : '#64748b',
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Compact 3-Column Premium Portfolio Grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-1">
        {filteredItems.map((project) => (
          <div key={project.id} className="group flex flex-col">
            {/* Visual Preview Card (Compact aspect-ratio, smooth frosted hover) */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
              className="relative block aspect-[16/11] rounded-2xl overflow-hidden bg-slate-100 border border-slate-100/80 transition-all duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-106"
                loading="lazy"
              />

              {/* Default Category Pill (fades on hover) */}
              <div className="absolute top-2.5 left-2.5 z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-slate-950/70 text-white backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Ultra-Premium Frosted Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-1.5 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 font-jakarta"
                  style={{ color: currentTheme.primary }}
                >
                  View Project
                </span>

                <h3 className="text-white text-base sm:text-lg font-bold font-outfit transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-white/80 text-xs sm:text-sm font-light mt-1 max-w-[90%] line-clamp-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.description}
                </p>

                {/* Subtle circle action button */}
                <div
                  className="mt-3.5 w-9 h-9 rounded-full flex items-center justify-center text-white transition-all transform scale-90 group-hover:scale-100 duration-300"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  <LuExternalLink size={15} />
                </div>
              </div>
            </a>

            {/* Slim Minimalist Caption Bar below image */}
            <div className="pt-2 px-1 flex items-center justify-between gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-bold text-slate-800 truncate font-outfit transition-colors group-hover:opacity-80"
              >
                {project.title}
              </a>
              <span className="text-xs sm:text-sm text-slate-400 font-normal shrink-0 font-jakarta">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="py-16 text-center text-slate-400 space-y-2">
          <LuLayers size={32} className="mx-auto text-slate-300" />
          <p className="text-xs">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};
