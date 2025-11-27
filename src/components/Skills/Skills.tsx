"use client"
import Image from "next/image"
import nextjs from "@/assets/nextjs.svg"
import redux from "@/assets/redux.svg"
import mongodb from "@/assets/mongodb-plain-wordmark.svg"
import node from "@/assets/nodejs.svg"
import tailwind from "@/assets/tailwindcss-icon.svg"
import bootstrap from "@/assets/bootstrap.svg"
import github from "@/assets/github.svg"
import figma from "@/assets/figma.svg"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: "React", icon: "https://gerold.themejunction.net/wp-content/uploads/2024/05/react.png", percent: "93%" },
  { name: "Javascript", icon: "https://gerold.themejunction.net/wp-content/uploads/2024/05/js.png", percent: "96%" },
  { name: "Next.js", icon: nextjs, percent: "90%" },
  { name: "Redux", icon: redux, percent: "87%" },
  { name: "MongoDB", icon: mongodb, percent: "67%" },
  { name: "Node.js", icon: node, percent: "49%" },
  { name: "Tailwind", icon: tailwind, percent: "98%" },
  { name: "Bootstrap", icon: bootstrap, percent: "85%" },
  { name: "Github", icon: github, percent: "91%" },
  { name: "Figma", icon: figma, percent: "54%" },
];

const Skills = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Grid Animation
      gsap.fromTo(".skill-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          }
        }
      );

      // Experience Animation
      gsap.fromTo(".experience-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-section",
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-[#0f0715]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8750f7]/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#2a1454]/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-[#8750f7] text-lg font-bold uppercase tracking-wider mb-3">My Expertise</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Skills & Experience</h2>
        </div>

        {/* Skills Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card group relative bg-[#140c1c] border border-[#2a1454] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#8750f7] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(135,80,247,0.2)]">
              <div className="w-16 h-16 relative flex items-center justify-center bg-[#1f122b] rounded-xl group-hover:bg-[#2a1454] transition-colors duration-300">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold text-lg mb-1">{skill.name}</h3>
                <p className="text-[#8750f7] font-medium">{skill.percent}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        {/* Experience Section */}
        <div className="experience-section grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <span className="text-[#8750f7] text-4xl">🎓</span> My Education
            </h3>
            <div className="space-y-12">

              <div className="group relative pl-12 transition-all duration-300">
                {/* Timeline Line & Dot */}
                <div className="absolute left-0 top-0 h-full w-[1px] bg-[#2a1454] group-hover:bg-[#8750f7]/50 transition-colors duration-300"></div>
                <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-[#8750f7] ring-4 ring-[#0f0715] group-hover:scale-125 transition-transform duration-300"></div>

                {/* <span className="text-[#8750f7] font-bold text-sm mb-2 block uppercase tracking-wider">2022 - Present</span> */}
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#8750f7] transition-colors duration-300">Bachelor of Science</h4>
                <h5 className="text-white font-medium text-lg mb-4">Varendra University</h5>
                <p className="text-gray-400 text-sm leading-relaxed">Currently pursuing my degree with a focus on Computer Science and Engineering.</p>
              </div>

              <div className="group relative pl-12 transition-all duration-300">
                <div className="absolute left-0 top-0 h-full w-[1px] bg-[#2a1454] group-hover:bg-[#8750f7]/50 transition-colors duration-300"></div>
                <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-[#2a1454] group-hover:bg-[#8750f7] ring-4 ring-[#0f0715] group-hover:scale-125 transition-transform duration-300"></div>

                {/* <span className="text-[#8750f7] font-bold text-sm mb-2 block uppercase tracking-wider">2017 - 2019</span> */}
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#8750f7] transition-colors duration-300">Higher School Graduation</h4>
                <h5 className="text-white font-medium text-lg mb-4">Ishwardi Government College</h5>
                <p className="text-gray-400 text-sm leading-relaxed">Completed Higher Secondary Certificate with a GPA of 4.89/5.00.</p>
              </div>

            </div>
          </div>

          {/* Job Experience */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <span className="text-[#8750f7] text-4xl">💼</span> My Experience
            </h3>
            <div className="space-y-12">

                <div className="group relative pl-12 transition-all duration-300">
                <div className="absolute left-0 top-0 h-full w-[1px] bg-[#2a1454] group-hover:bg-[#8750f7]/50 transition-colors duration-300"></div>
                <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-[#2a1454] group-hover:bg-[#8750f7] ring-4 ring-[#0f0715] group-hover:scale-125 transition-transform duration-300"></div>

                <span className="text-[#8750f7] font-bold text-sm mb-2 block uppercase tracking-wider">2025 - Present</span>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#8750f7] transition-colors duration-300">Frontend Web Developer</h4>
                <h5 className="text-white font-medium text-lg mb-4">Advertising For Business - A4B</h5>
                <p className="text-gray-400 text-sm leading-relaxed">Contributed to the A4B project, delivering high-impact advertising solutions.</p>
              </div>

              <div className="group relative pl-12 transition-all duration-300">
                <div className="absolute left-0 top-0 h-full w-[1px] bg-[#2a1454] group-hover:bg-[#8750f7]/50 transition-colors duration-300"></div>
                <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-[#8750f7] ring-4 ring-[#0f0715] group-hover:scale-125 transition-transform duration-300"></div>

                <span className="text-[#8750f7] font-bold text-sm mb-2 block uppercase tracking-wider">2024 - July 2025</span>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#8750f7] transition-colors duration-300">Frontend Web Developer</h4>
                <h5 className="text-white font-medium text-lg mb-4">Pixelfit - Digital Agency, Pabna</h5>
                <p className="text-gray-400 text-sm leading-relaxed">Building modern web applications and ensuring high-quality user experiences.</p>
              </div>

            

              <div className="group relative pl-12 transition-all duration-300">
                <div className="absolute left-0 top-0 h-full w-[1px] bg-[#2a1454] group-hover:bg-[#8750f7]/50 transition-colors duration-300"></div>
                <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-[#2a1454] group-hover:bg-[#8750f7] ring-4 ring-[#0f0715] group-hover:scale-125 transition-transform duration-300"></div>

                <span className="text-[#8750f7] font-bold text-sm mb-2 block uppercase tracking-wider">2022 - 2023</span>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#8750f7] transition-colors duration-300">Frontend Web Developer</h4>
                <h5 className="text-white font-medium text-lg mb-4">Ayana Network Ltd, Canada</h5>
                <p className="text-gray-400 text-sm leading-relaxed">Worked remotely on various frontend projects, optimizing performance and UI.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;