import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  LuBriefcase, 
  LuGraduationCap, 
  LuPlus, 
  LuMinus, 
  LuDownload, 
  LuMapPin,
  LuCircleCheck,
  LuSparkles
} from 'react-icons/lu';
import { experienceData, educationData, skillsData, personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ResumePage: React.FC = () => {
  const [openExperienceId, setOpenExperienceId] = useState<number | null>(1);
  const [hoveredExperienceId, setHoveredExperienceId] = useState<number | null>(null);
  const [hoveredEduId, setHoveredEduId] = useState<number | null>(null);
  const { currentTheme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const expListRef = useRef<HTMLDivElement>(null);
  const eduListRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.38, ease: 'power2.out', clearProps: 'transform,opacity' }
        );
      }

      // Experience cards stagger
      if (expListRef.current) {
        gsap.fromTo(
          expListRef.current.children,
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

      // Education cards stagger
      if (eduListRef.current) {
        gsap.fromTo(
          eduListRef.current.children,
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

      // Technical skills section & progress bar fill animation
      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: 'transform,opacity' }
        );

        const bars = skillsRef.current.querySelectorAll('.skill-bar-progress');
        gsap.fromTo(
          bars,
          { width: '0%' },
          {
            width: (i) => `${skillsData[i].level}%`,
            duration: 0.8,
            stagger: 0.04,
            ease: 'power2.out',
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (id: number) => {
    setOpenExperienceId(openExperienceId === id ? null : id);
  };

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 lg:p-10 pb-28 sm:pb-32 lg:pb-10 space-y-8 sm:space-y-10 font-jakarta">
      {/* Header */}
      <div ref={headerRef} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <span className="text-slate-400 font-semibold text-xs sm:text-sm uppercase tracking-wider block mb-1">
            Career Journey
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit">
            Resume & Experience
          </h1>
        </div>

        {/* Flat, clean Download Resume button (zero shadow) */}
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm sm:text-base tracking-wide transition-all active:scale-95 cursor-pointer hover:opacity-90 shadow-sm"
          style={{ backgroundColor: currentTheme.primary }}
        >
          <LuDownload size={16} />
          Download Resume
        </a>
      </div>

      {/* Experience Section (Zero shadows, flat clean modern styling) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
            style={{ backgroundColor: currentTheme.primary }}
          >
            <LuBriefcase size={18} />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-outfit">Work Experience</h2>
        </div>

        <div ref={expListRef} className="space-y-3">
          {experienceData.map((item) => {
            const isOpen = openExperienceId === item.id;
            const isHovered = hoveredExperienceId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredExperienceId(item.id)}
                onMouseLeave={() => setHoveredExperienceId(null)}
                className="rounded-2xl overflow-hidden transition-colors duration-200"
                style={{
                  backgroundColor: isOpen
                    ? currentTheme.lightBg
                    : isHovered
                    ? '#f1f5f9'
                    : '#f8fafc',
                }}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-3.5 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between text-left cursor-pointer transition-colors gap-2.5 sm:gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0 flex-1 w-full">
                    <span
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors duration-200 shrink-0 mt-0.5 sm:mt-0"
                      style={{
                        backgroundColor: isOpen ? currentTheme.primary : '#ffffff',
                        color: isOpen ? '#ffffff' : currentTheme.primary,
                      }}
                    >
                      {isOpen ? <LuMinus size={15} /> : <LuPlus size={15} />}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className="font-bold text-base sm:text-lg font-outfit transition-colors duration-200 leading-snug"
                        style={{
                          color: isOpen ? currentTheme.primary : '#0f172a',
                        }}
                      >
                        {item.company}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-light mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="pl-11 sm:pl-0 shrink-0 flex items-center">
                    <span
                      className="px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap inline-block"
                      style={{
                        backgroundColor: isOpen ? '#ffffff' : currentTheme.lightBg,
                        color: currentTheme.primary,
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-3.5 sm:px-5 pb-4 sm:pb-5 pt-0 sm:pt-1 space-y-3 sm:space-y-3.5 animate-in fade-in">
                    <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed pl-11 sm:pl-12 font-light">
                      {item.description}
                    </p>

                    <div className="flex items-start sm:items-center gap-2 text-slate-500 text-xs sm:text-sm pl-11 sm:pl-12">
                      <LuMapPin size={14} className="shrink-0 text-slate-400 mt-0.5 sm:mt-0" />
                      <span className="leading-snug">{item.address}</span>
                    </div>

                    <div className="pl-11 sm:pl-12 pt-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white text-slate-700 border border-slate-200/60">
                        <LuCircleCheck size={13} style={{ color: currentTheme.primary }} />
                        {item.position}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Education Section (Clean flat cards, zero shadows) */}
      <section className="space-y-4 pt-1">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
            style={{ backgroundColor: currentTheme.primary }}
          >
            <LuGraduationCap size={18} />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-outfit">Education</h2>
        </div>

        <div ref={eduListRef} className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {educationData.map((edu) => {
            const isHovered = hoveredEduId === edu.id;

            return (
              <div
                key={edu.id}
                onMouseEnter={() => setHoveredEduId(edu.id)}
                onMouseLeave={() => setHoveredEduId(null)}
                className="p-4 sm:p-6 rounded-2xl transition-colors duration-200 cursor-default"
                style={{
                  backgroundColor: isHovered ? currentTheme.lightBg : '#f8fafc',
                }}
              >
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-2.5 bg-white text-slate-700 border border-slate-200/60"
                >
                  {edu.period}
                </span>

                <h3
                  className="font-bold text-base sm:text-lg font-outfit transition-colors duration-200"
                  style={{
                    color: isHovered ? currentTheme.primary : '#0f172a',
                  }}
                >
                  {edu.degree}
                </h3>

                <p className="text-slate-500 text-sm sm:text-base font-medium mt-0.5 mb-2">
                  {edu.institution}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {edu.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills Matrix Section (Clean, flat modern bar design) */}
      <section ref={skillsRef} className="space-y-4 pt-1">
        <div className="flex items-center gap-2">
          <LuSparkles size={18} style={{ color: currentTheme.primary }} />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-outfit">Technical Skills</h2>
        </div>

        <div className="bg-[#f8fafc] p-4 sm:p-6 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4">
          {skillsData.map((skill, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between items-center text-sm sm:text-base font-semibold text-slate-700">
                <span>{skill.name}</span>
                <span className="text-slate-400 font-mono text-xs sm:text-sm">{skill.level}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200/80 overflow-hidden">
                <div
                  className="skill-bar-progress h-full rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: currentTheme.primary,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
