"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    image: string;
    link: string;
    description: string;
}

// Real Project Data
const portfolioItems: PortfolioItem[] = [
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
        title: "Growee Creative Digital Agency",
        category: "Agency",
        image: "/images/growee.png",
        link: "https://growee-react.vercel.app",
        description: "Growee - Creative Digital Agency React Template"
    },
    {
        id: 7,
        title: "Sasly Landing Page",
        category: "UI/UX Design",
        image: "/images/sasly.png",
        link: "https://sasly-react.vercel.app",
        description: "Multipurpose Landing Page"
    },

    {
        id: 8,
        title: "Chad Smith Portfolio",
        category: "Portfolio",
        image: "/images/chad.png",
        link: "https://chad-smith.vercel.app/",
        description: "Personal Web Application"
    },
    {
        id: 9,
        title: "Ai Langing Page",
        category: "Landing Page",
        image: "/images/ai.png",
        link: "https://startling-boba-daa0dd.netlify.app/",
        description: "Ai Sass Langing Page"
    },
    {
        id: 10,
        title: "Chad's Tutoring",
        category: "Education",
        image: "/images/chad-tutoring.png",
        link: "#",
        description: "Math, Reading & Writing Tutor"
    }
];

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleCount, setVisibleCount] = useState(9);
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleSeeMore = () => {
        setVisibleCount((prevCount) => prevCount + 9);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="portfolio" className="w-full bg-[#F4F4F4] py-16 mt-16">
            <div className="portfolio-container">
                {/* Section Header */}
                <div className="relative mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary inline-block">
                        Portfolio
                    </h2>
                    {/* Accent Underline */}
                    <div className="absolute -bottom-2 left-0 w-24 h-1 md:h-1.5 bg-secondary rounded-full"></div>
                </div>

                {/* Simple & Clean Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.slice(0, visibleCount).map((item, index) => (
                        <div
                            key={item.id}
                            className={`opacity-0 ${isVisible ? "animate-reveal" : ""}`}
                            style={{
                                animationDelay: `${index * 0.15}s`,
                                animationFillMode: 'forwards'
                            }}
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block overflow-hidden rounded-xl transition-all duration-500 shadow-sm aspect-4/3 bg-white border border-secondary/5"
                            >
                                {/* Project Image */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 text-center">
                                    <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        View Project
                                    </span>
                                    <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 italic">
                                        {item.category}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {visibleCount < portfolioItems.length && (
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={handleSeeMore}
                        className="px-6 py-3 rounded-md bg-primary text-white text-base font-medium hover:bg-secondary duration-300 ease-in-out cursor-pointer"
                    >
                        See More projects
                    </button>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
