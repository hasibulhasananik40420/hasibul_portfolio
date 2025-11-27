/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import tailorfit from "@/assets/tailorfit.png";
import nextify from "@/assets/nextify.png";
import skillion from "@/assets/skillion.png";
import chad from "@/assets/chad-tutoring.png";
import chad2 from "@/assets/chad.png";
import cartzy from "@/assets/cartzy.png";
import putech from "@/assets/putech.jpg";
import sasly from "@/assets/sasly.png";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "Tailor Shop Management",
    category: "Web Application",
    image: tailorfit,
    link: "https://tailorfitapp.com",
    description: "Digital Solution for Tailor Shops"
  },
  {
    id: 2,
    title: "Nextiyfy Homes",
    category: "Real Estate",
    image: nextify,
    link: "https://nextifyhomes.co.uk",
    description: "Real Estate Dreams A Reality"
  },
  {
    id: 3,
    title: "SkillionTech",
    category: "EdTech Platform",
    image: skillion,
    link: "https://skilliontech.com",
    description: "Master the essential IT skills"
  },
  {
    id: 4,
    title: "Cartzy Store",
    category: "Ecommerce",
    image: cartzy,
    link: "https://cartzy-henna.vercel.app/",
    description: "Your Favorite Online Store"
  },
  {
    id: 5,
    title: "Business & IT Solutions",
    category: "Landing Page",
    image: putech,
    link: "https://putech-nextjs.vercel.app/",
    description: "Modern Business Solutions"
  },
  {
    id: 6,
    title: "Sasly Landing Page",
    category: "UI/UX Design",
    image: sasly,
    link: "https://sasly-react.vercel.app",
    description: "Multipurpose Landing Page"
  },
  {
    id: 7,
    title: "Chad Smith Portfolio",
    category: "Portfolio",
    image: chad2,
    link: "https://chad-smith.vercel.app/",
    description: "Personal Web Application"
  },
  {
    id: 8,
    title: "Chad's Tutoring",
    category: "Education",
    image: chad,
    link: "#", // Placeholder as original didn't have a clear link
    description: "Math, Reading & Writing Tutor"
  }
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    // Only animate the initial set or when visibleCount changes significantly if needed
    // For now, we keep the initial animation. New items will just appear.
    gsap.fromTo(
      cards.slice(0, 6), // Animate only the first 6 initially
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleProjects = projectsData.slice(0, visibleCount);

  return (
    <div className="section-gradient-2 relative" id="portfolio">
      <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2 relative z-10">
        <div ref={containerRef} className="mb-16">
          <div ref={headingRef}>
            <p className="gradient-text md:text-[20px] text-[16px] font-normal uppercase tracking-wider mb-2">
              Recent Projects
            </p>
            <h1 className="md:text-[46px] text-[32px] font-bold text-white leading-tight">
              My Recent Works
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="glass-card group rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <button className="size-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#667eea] hover:border-[#667eea] transition-all duration-300">
                      <MdArrowOutward className="size-6" />
                    </button>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-[#667eea] text-sm font-medium mb-1 uppercase tracking-wide">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#667eea] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-medium hover:text-[#667eea] transition-colors flex items-center gap-2"
                  >
                    View Details <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < projectsData.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleSeeMore}
              className="glass relative group md:px-8 px-6 py-4 md:py-4 rounded-xl text-[16px] font-semibold text-white overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-4 relative z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
                <p>See More</p>
                <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
              </span>

              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
                <span className="text-[16px] font-semibold">See More</span>
                <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
