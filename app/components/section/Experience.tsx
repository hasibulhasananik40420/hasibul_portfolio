"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  address: string;
  position: string;
}

const experienceData: ExperienceItem[] = [

  {
    id: 1,
    company: "Advertising For Business - A4B",
    role: "Web & App IT Company",
    period: "2025 - Present",
    description: "Built responsive mobile and web layouts for various clients.",
    address: "25/2 Lake Circus Road, Kalabagan, Dhaka, Bangladesh, 1205",
    position: "Frontend developer",
  },
  {
    id: 2,
    company: "Pixelfit",
    role: "Creative full stack web design & development",
    period: "2023 - 2024",
    description: "Designed and developed scalable web applications using modern technologies.",
    address: "Block -A Rd No. 6, Pabna 6600, Bangladesh",
    position: "Frontend developer",
  },
  {
    id: 3,
    company: "Aniya Network Solutions Inc.",
    role: "Web Design IT Company",
    period: "2022 - 2023",
    description: "Delivered quality code by applying the best development practices",
    address: "Suite 701, 555 Burrard Street, Vancouver, BC V7X 1M8, Canada",
    position: "Frontend developer",
  },
];

const Experience = () => {
  const [openId, setOpenId] = useState<number | null>(1); // Default first one open

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mt-16 portfolio-container" id="experience">
      <div className="relative mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-primary inline-block">
          Experience
        </h2>
        {/* Accent Underline */}
        <div className="absolute -bottom-2 left-0 w-24 h-1 md:h-1.5 bg-secondary rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Illustration Box */}
        <div className="w-full lg:w-1/3 bg-[#FAFBFD] p-6 flex flex-col items-center justify-center">
          <div className="relative w-full aspect-square max-w-[200px]">
            <Image
              src="/images/job.png"
              alt="Experience Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h4 className="text-xl font-medium text-primary mt-4">Experience</h4>
        </div>

        {/* Right Side: Accordion List */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="divide-y divide-gray-100 border-t border-gray-100">
            {experienceData.map((item) => (
              <div key={item.id} className="group">
                {/* Header Toggle */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-[#2DD4BF] text-lg shrink-0">
                      {openId === item.id ? <FaMinus /> : <FaPlus />}
                    </div>
                    <h4 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                      {item.company} - <span className="font-medium text-gray-500">{item.role}</span>
                    </h4>
                  </div>
                  <span className="text-[#2DD4BF] font-semibold whitespace-nowrap ml-4">
                    {item.period}
                  </span>
                </button>

                {/* Content Grid (Animated) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${openId === item.id
                    ? "grid-rows-[1fr] opacity-100 pb-8"
                    : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-10 space-y-4">
                      <p className="text-gray-500 font-medium flex items-start gap-2">
                        <span className="mt-2.5 w-2 h-px bg-gray-400 shrink-0"></span>
                        {item.description}
                      </p>
                      <p className="text-primary font-semibold text-sm md:text-base pl-4">
                        {item.address}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2 pl-4">

                        <span
                          className="px-4 py-1.5 bg-[#EEF2FF] text-[#6366F1] text-[10px] md:text-xs font-bold rounded-md tracking-wider border border-transparent hover:border-[#6366F1]/20 transition-all"
                        >
                          {item.position}
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;