"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Real Project Data
const portfolioItems = [
    {
        id: 1,
        title: "Tailor Shop Management",
        category: "Web Application",
        image: "/images/tailorfit.png",
        link: "https://tailorfitapp.com",
        description: "Digital Solution for Tailor Shops"
    },
    {
        id: 2,
        title: "Nextiyfy Homes",
        category: "Real Estate",
        image: "/images/nextify.png",
        link: "https://nextifyhomes.co.uk",
        description: "Real Estate Dreams A Reality"
    },
    {
        id: 3,
        title: "SkillionTech",
        category: "EdTech Platform",
        image: "/images/skillion.png",
        link: "https://skilliontech.com",
        description: "Master the essential IT skills"
    },
    {
        id: 4,
        title: "Cartzy Store",
        category: "Ecommerce",
        image: "/images/cartzy.png",
        link: "https://cartzy-henna.vercel.app/",
        description: "Your Favorite Online Store"
    },
    {
        id: 5,
        title: "Business & IT Solutions",
        category: "Landing Page",
        image: "/images/putech.jpg",
        link: "https://putech-nextjs.vercel.app/",
        description: "Modern Business Solutions"
    },
    {
        id: 6,
        title: "Sasly Landing Page",
        category: "UI/UX Design",
        image: "/images/sasly.png",
        link: "https://sasly-react.vercel.app",
        description: "Multipurpose Landing Page"
    },
    {
        id: 7,
        title: "Chad Smith Portfolio",
        category: "Portfolio",
        image: "/images/chad.png",
        link: "https://chad-smith.vercel.app/",
        description: "Personal Web Application"
    },
    {
        id: 8,
        title: "Chad's Tutoring",
        category: "Education",
        image: "/images/chad-tutoring.png",
        link: "#",
        description: "Math, Reading & Writing Tutor"
    }
];

const Portfolio = () => {
    const [visibleItems, setVisibleItems] = useState(4);

    const handleLoadMore = () => {
        setVisibleItems((prev) => prev + 4);
    };

    return (
        <section id="portfolio" className="w-full">
            <div className="container mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20 space-y-4">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase rounded-full">
                        My Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                        Featured Portfolio
                    </h2>
                    <p className="text-secondary font-light max-w-2xl mx-auto">
                        A selection of my recent projects, showcasing my expertise in web development and design.
                    </p>
                </div>

                {/* Portfolio Grid - Re-designed as more structured cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioItems.slice(0, visibleItems).map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white border border-secondary/5 hover:border-accent/30 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden block"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-16/10 overflow-hidden bg-main-bg">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                />
                                {/* Glassmorphism Label */}
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-white/70 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary rounded-full border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 md:p-8 space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-secondary/70 text-sm font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="shrink-0 w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center text-secondary/40 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 transform group-hover:rotate-45">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                {/* Tech Indicator / Bottom Bar */}
                                <div className="pt-4 flex items-center gap-3">
                                    <div className="h-px bg-secondary/10 grow" />
                                    <span className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">Case Study</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleItems < portfolioItems.length && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={handleLoadMore}
                            className="bg-primary text-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-accent hover:text-primary shadow-xl hover:shadow-2xl rounded-sm cursor-pointer"
                        >
                            More Case Studies
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Portfolio;
