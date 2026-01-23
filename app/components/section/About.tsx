"use client";
import React, { useState } from "react";
import { Download, Briefcase, GraduationCap, Code2, User, Mail, MapPin, Phone, Calendar, Globe } from "lucide-react";

// Types for data
type TabType = "experience" | "education" | "skills";

const About = () => {
    const [activeTab, setActiveTab] = useState<TabType>("experience");

    // Personal Info Data
    const personalInfo = [
        { label: "Name", value: "Hasibul Hasan", icon: User },
        { label: "Birthday", value: "Dec 03, 1998", icon: Calendar },
        { label: "Address", value: "Rajshahi, Bangladesh", icon: MapPin },
        { label: "Phone", value: "+880 1790170749", icon: Phone },
        { label: "Email", value: "hasibulhasan40420@gmail.com", icon: Mail },
        { label: "Whatsapp", value: "+880 1790170749", icon: Globe },
    ];

    // Resume Data
  const experiences = [
  {
    role: "Frontend Developer",
    company: "Advertising For Business - A4B",
    period: "2025 - Present",
    description: "Leading a team to build modern, scalable, and accessible web solutions."
  },
  {
    role: "Frontend Developer",
    company: "Pixelfit",
    period: "2024 - 2025",
    description: "Developed responsive and high-performance user interfaces using React and Next.js."
  }
];


    const education = [
        {
            degree: "B.Sc in Computer Science",
            school: "University of Technology",
            period: "2018 - 2022",
            description: "Focus on Software Engineering and Web Technologies."
        }
    ];

    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
        { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma"] },
        { category: "Tools", items: ["Git", "Figma", "Docker", "VS Code"] }
    ];

    return (
        <section id="biography" className="w-full lg:mt-28 md:mt-20 mt-14">
            <div className="container mx-auto">

                {/* TOP SECTION: BIOGRAPHY */}
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20 space-y-8">
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase rounded-full">
                            About Me
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                            Biography
                        </h2>
                    </div>

                    <p className="text-secondary font-light leading-relaxed text-lg max-w-3xl">
                        I am a passionate web developer with a keen eye for design. My journey starts with a blank screen and ends with a pixel-perfect, interactive experience. I believe in clean code, accessible aesthetics, and user-centric design.
                    </p>

                    {/* Personal Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-4">
                        {personalInfo.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white p-4 border border-secondary/10 rounded-sm shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 text-left group">
                                <div className="w-10 h-10 flex items-center justify-center bg-main-bg text-accent rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    <item.icon size={18} />
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wider text-secondary/60">{item.label}</span>
                                    <span className="block text-primary font-medium">{item.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-6">
                        <button className="group flex items-center gap-3 bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl rounded-sm">
                            <span>Download CV</span>
                            <Download size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>


                {/* BOTTOM SECTION: TABS (Experience, Education, Skills) */}
                <div className="max-w-5xl mx-auto">
                    {/* Tab Buttons centered */}
                    <div className="flex flex-wrap justify-center border-b border-secondary/20 mb-12">
                        {[
                            { id: "experience", label: "Experience", icon: Briefcase },
                            { id: "education", label: "Education", icon: GraduationCap },
                            { id: "skills", label: "Skills", icon: Code2 }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as TabType)}
                                className={`flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 relative
                            ${activeTab === tab.id ? "text-primary" : "text-secondary/60 hover:text-primary"}
                        `}
                            >
                                <tab.icon size={18} />
                                {tab.label}
                                {/* Active Indicator Line */}
                                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transition-transform duration-300 origin-center ${activeTab === tab.id ? "scale-x-100" : "scale-x-0"}`} />
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[300px] animate-in fade-in slide-in-from-bottom-4 duration-500">

                        {/* EXPERIENCE CONTENT */}
                        {activeTab === "experience" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {experiences.map((exp, idx) => (
                                    <div key={idx} className="group relative bg-white p-8 border border-secondary/10 hover:border-accent/40 shadow-sm hover:shadow-lg transition-all duration-300 rounded-sm">
                                        <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">
                                            {exp.period}
                                        </span>
                                        <div className="space-y-3 mt-2">
                                            <h3 className="text-xl font-serif font-bold text-primary">{exp.role}</h3>
                                            <p className="text-sm font-medium text-accent">{exp.company}</p>
                                            <div className="w-12 h-px bg-secondary/10 group-hover:bg-accent/50 transition-colors duration-300" />
                                            <p className="text-secondary font-light leading-relaxed text-sm">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* EDUCATION CONTENT */}
                        {activeTab === "education" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="group relative bg-white p-8 border border-secondary/10 hover:border-accent/40 shadow-sm hover:shadow-lg transition-all duration-300 rounded-sm">
                                        <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">
                                            {edu.period}
                                        </span>
                                        <div className="space-y-3 mt-2">
                                            <h3 className="text-xl font-serif font-bold text-primary">{edu.degree}</h3>
                                            <p className="text-sm font-medium text-accent">{edu.school}</p>
                                            <div className="w-12 h-px bg-secondary/10 group-hover:bg-accent/50 transition-colors duration-300" />
                                            <p className="text-secondary font-light leading-relaxed text-sm">{edu.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* SKILLS CONTENT */}
                        {activeTab === "skills" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {skills.map((skillGroup, idx) => (
                                    <div key={idx} className="bg-white border border-secondary/10 p-6 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-accent/30">
                                        <h4 className="flex items-center gap-3 text-lg font-serif font-bold text-primary mb-6">
                                            <span className="w-2 h-2 rounded-full bg-accent" />
                                            {skillGroup.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill, sIdx) => (
                                                <span key={sIdx} className="px-3 py-1.5 bg-main-bg text-secondary text-xs font-medium rounded-full border border-secondary/10 hover:bg-primary hover:text-white transition-colors duration-300 cursor-default">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
