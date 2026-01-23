"use client";
import React from "react";
import { Monitor, Smartphone, Layout, Gem, Code, Search } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Frontend Development",
        icon: Monitor,
        description: "Building fast, responsive, and interactive user interfaces using modern frameworks like React and Next.js. I specialize in pixel-perfect implementation and smooth UX.",
        features: ["React & Next.js Expert", "Tailwind CSS Styling", "Responsive Design", "State Management"]
    },
    {
        id: "02",
        title: "Backend & API Development",
        icon: Code,
        description: "Developing robust server-side logic and database architectures. I focus on creating secure, scalable APIs that power complex web applications.",
        features: ["Node.js & Express", "Database Design", "REST & GraphQL APIs", "Serverless Functions"]
    },
    {
        id: "03",
        title: "Full Stack Solutions",
        icon: Layout,
        description: "Holistic web application development from concept to deployment. I manage both client and server-side to ensure seamless performance and integration.",
        features: ["End-to-End Development", "Deployment & Hosting", "Database Integration", "User Authentication"]
    },
    {
        id: "04",
        title: "E-Commerce Development",
        icon: Gem,
        description: "Creating high-converting online stores with secure checkout processes and inventory management. Integrated with popular payment gateways.",
        features: ["Stripe/PayPal Integration", "Custom Shop Features", "Order Management", "Product Discovery"]
    },
    {
        id: "05",
        title: "Performance & SEO",
        icon: Search,
        description: "Optimizing web applications for maximum speed and search engine visibility. I focus on Core Web Vitals and best practices for technical SEO.",
        features: ["Load Time Optimization", "SEO Best Practices", "Core Web Vitals Fixes", "Efficient Bundling"]
    },
    {
        id: "06",
        title: "Clean Code Audit",
        icon: Code,
        description: "Reviewing and refactoring legacy codebases to improve maintainability, reduce technical debt, and implement modern development standards.",
        features: ["Code Reviews", "System Refactoring", "Security Audits", "Unit Testing Setup"]
    }
];

const Serrvice = () => {
    return (
        <section id="services" className="w-full lg:mt-28 md:mt-20 mt-14">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-24 space-y-4">
                   
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase rounded-full">
                        My Services
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight">
                        Crafting High-Performance <span className="italic text-secondary">Web Solutions.</span>
                    </h2>
                    <p className="text-secondary/70 font-light max-w-2xl mx-auto leading-relaxed pt-4">
                        Helping brands and businesses stand out through strategic design and high-end development solutions.
                        I bring technical expertise to every creative challenge.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                    {services.map((service, idx) => (
                        <div
                            key={service.id}
                            className={`group p-10 lg:p-14 border-secondary/10 transition-all duration-500 hover:bg-main-bg relative overflow-hidden
                ${idx % 3 !== 2 ? 'lg:border-r' : ''} 
                ${idx < 3 ? 'lg:border-b' : ''}
                ${idx % 2 !== 1 ? 'md:border-r lg:md:border-r-inherit' : ''}
                ${idx < 4 ? 'md:border-b lg:md:border-b-inherit' : ''}
                border-b md:border-b-0
              `}
                        >
                            {/* Service Number - Minimalist */}
                            <span className="absolute top-8 right-8 text-4xl font-serif font-bold text-secondary/5 group-hover:text-accent/10 transition-colors duration-500">
                                {service.id}
                            </span>

                            <div className="space-y-8 relative z-10">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-12 h-12 text-primary group-hover:text-accent transition-colors duration-500">
                                    <service.icon size={32} strokeWidth={1} />
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-secondary/80 font-light text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Features List - Informative Element */}
                                <ul className="space-y-3 pt-4">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-secondary/50 group-hover:text-secondary transition-colors duration-500">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Subtle hover background accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </div>
                    ))}
                </div>

                {/* Call to Action - Minimalist */}
                <div className="mt-12 text-center">
                    <p className="text-secondary/60 text-sm font-light mb-6 uppercase tracking-widest">Interested in working together?</p>
                    <a
                        href="#contact"
                        className="inline-block text-primary text-lg font-serif font-bold border-b border-primary/20 hover:border-accent hover:text-accent transition-all duration-300 pb-1"
                    >
                        Let's start a project
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Serrvice;