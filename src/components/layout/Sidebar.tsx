import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LuDownload } from 'react-icons/lu';
import { personalInfo } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

export const Sidebar: React.FC = () => {
  const { currentTheme } = useTheme();

  const sidebarRef = useRef<HTMLElement>(null);
  const avatarWrapperRef = useRef<HTMLDivElement>(null);
  const avatarImgRef = useRef<HTMLDivElement>(null);
  const dashedRingRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sidebarRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Continuous smooth rotation of dashed accent ring
      if (dashedRingRef.current) {
        gsap.to(dashedRingRef.current, {
          rotation: 360,
          duration: 40,
          repeat: -1,
          ease: 'none',
        });
      }

      // 2. High-end entrance sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (avatarWrapperRef.current) {
        tl.fromTo(
          avatarWrapperRef.current,
          { scale: 0.82, opacity: 0, y: 15 },
          { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.5)' }
        );
      }

      if (nameRef.current) {
        tl.fromTo(
          nameRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.45 },
          '-=0.4'
        );
      }

      if (roleRef.current) {
        tl.fromTo(
          roleRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4 },
          '-=0.3'
        );
      }

      if (socialsRef.current) {
        tl.fromTo(
          socialsRef.current.children,
          { scale: 0.7, opacity: 0, y: 10 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: 'back.out(1.8)' },
          '-=0.25'
        );
      }

      if (btnRef.current) {
        tl.fromTo(
          btnRef.current,
          { scale: 0.92, opacity: 0, y: 14 },
          { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.4)' },
          '-=0.2'
        );
      }

      if (footerRef.current) {
        tl.fromTo(
          footerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.3'
        );
      }
    }, sidebarRef);

    return () => ctx.revert();
  }, []);

  // 3D Magnetic cursor tilt for avatar
  const handleAvatarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!avatarImgRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(avatarImgRef.current, {
      x: x * 16,
      y: y * 16,
      rotateX: -y * 14,
      rotateY: x * 14,
      scale: 1.05,
      duration: 0.35,
      ease: 'power2.out',
    });

    if (dashedRingRef.current) {
      gsap.to(dashedRingRef.current, {
        scale: 1.08,
        opacity: 0.65,
        duration: 0.35,
      });
    }
  };

  const handleAvatarMouseLeave = () => {
    if (!avatarImgRef.current) return;
    gsap.to(avatarImgRef.current, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: 'elastic.out(1, 0.4)',
    });

    if (dashedRingRef.current) {
      gsap.to(dashedRingRef.current, {
        scale: 1,
        opacity: 0.35,
        duration: 0.5,
      });
    }
  };

  // Social icon hover bounce
  const handleSocialEnter = (el: HTMLElement) => {
    gsap.to(el, { y: -4, scale: 1.25, duration: 0.25, ease: 'back.out(2.5)' });
  };
  const handleSocialLeave = (el: HTMLElement) => {
    gsap.to(el, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <aside
      ref={sidebarRef}
      className="hidden lg:flex w-[330px] shrink-0 text-white flex-col justify-between items-center text-center p-6 md:p-8 lg:p-9 relative overflow-hidden transition-colors duration-500 rounded-l-[36px] h-full"
      style={{ backgroundColor: currentTheme.primary }}
    >
      {/* Decorative subtle dot matrix background effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Top Section: Avatar and Info */}
      <div className="flex flex-col items-center z-10 w-full mt-2">
        {/* Interactive 3D Tilt Avatar Container */}
        <div
          ref={avatarWrapperRef}
          onMouseMove={handleAvatarMouseMove}
          onMouseLeave={handleAvatarMouseLeave}
          className="relative mb-6 cursor-pointer select-none [perspective:800px]"
        >
          {/* Subtle dotted circular decoration with GSAP continuous spin */}
          <div
            ref={dashedRingRef}
            className="absolute -inset-2.5 rounded-full border border-dashed border-white/35 pointer-events-none transition-transform"
          />

          <div
            ref={avatarImgRef}
            className="w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-white shadow-2xl relative bg-white/20 will-change-transform"
          >
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1
          ref={nameRef}
          className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-1.5 font-outfit"
        >
          {personalInfo.name}
        </h1>
        <p
          ref={roleRef}
          className="text-white/85 text-xs lg:text-sm font-light tracking-wide mb-6 font-jakarta max-w-[250px] leading-snug"
        >
          {personalInfo.role}
        </p>

        {/* Interactive Spring Social Icons */}
        <div ref={socialsRef} className="flex items-center justify-center gap-4 text-white/90 mb-8">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            onMouseEnter={(e) => handleSocialEnter(e.currentTarget)}
            onMouseLeave={(e) => handleSocialLeave(e.currentTarget)}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href={personalInfo.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            onMouseEnter={(e) => handleSocialEnter(e.currentTarget)}
            onMouseLeave={(e) => handleSocialLeave(e.currentTarget)}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
          >
            <FaFacebookF size={15} />
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            onMouseEnter={(e) => handleSocialEnter(e.currentTarget)}
            onMouseLeave={(e) => handleSocialLeave(e.currentTarget)}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
          >
            <FaXTwitter size={15} />
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            onMouseEnter={(e) => handleSocialEnter(e.currentTarget)}
            onMouseLeave={(e) => handleSocialLeave(e.currentTarget)}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
          >
            <FaGithub size={16} />
          </a>
        </div>

        {/* Download CV Outline Button with Shimmer Sweep */}
        <a
          ref={btnRef}
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-full border-2 border-white/90 text-white text-sm font-semibold tracking-wide hover:bg-white transition-all duration-300 active:scale-95 shadow-md font-jakarta cursor-pointer"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = currentTheme.primary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          {/* Subtle light shimmer bar */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
          <LuDownload size={15} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          <span>Download CV</span>
        </a>
      </div>

      {/* Bottom Footer Info */}
      <div ref={footerRef} className="z-10 mt-10 md:mt-auto pt-6 text-white/75 text-xs font-light font-jakarta">
        © 2026 All rights reserved.
      </div>
    </aside>
  );
};


