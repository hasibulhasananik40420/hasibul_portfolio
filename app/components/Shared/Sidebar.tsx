"use client"
import React, { useState, useEffect } from "react";

import { X } from "lucide-react";

interface SidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
    const [activeSection, setActiveSection] = useState("home");

    const menuItems = [
        { label: "Home", id: "home" },
        { label: "About Me", id: "biography" },
        { label: "Portfolio", id: "portfolio" },
        { label: "Services", id: "services" },
        { label: "News & Tips", id: "blog" },
        { label: "Contact", id: "contact" },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -50% 0px',
            threshold: 0.1
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        menuItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            if (window.innerWidth < 1280) {
                toggleSidebar();
            }
        }
    };

    return (
        <div className="relative h-full flex flex-col px-10 py-12 bg-sidebar-bg border-r border-sidebar-border overflow-y-auto">
            {/* Close Button */}
            <button
                onClick={toggleSidebar}
                className="absolute top-6 right-6 p-2 text-secondary hover:text-primary transition-colors duration-300"
            >
                <X size={24} strokeWidth={1.5} />
            </button>

            {/* Logo */}
            <div className="mb-20 mt-4">
                <h1 className="text-3xl font-serif font-bold text-primary tracking-tight">
                    Hasibul<span className="text-accent">.</span>
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1">
                <ul className="space-y-6">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(e, item.id)}
                                className={`group flex items-center text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${activeSection === item.id
                                    ? "text-primary"
                                    : "text-secondary hover:text-primary"
                                    }`}
                            >
                                <span className={`inline-block w-8 h-px mr-4 transition-all duration-300 ${activeSection === item.id ? "bg-accent w-12" : "bg-transparent group-hover:bg-primary/30 group-hover:w-8"}`}></span>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer */}
            <div className="mt-auto">
                <p className="text-xs text-secondary/60 font-light tracking-wider uppercase">
                    © {new Date().getFullYear()} Hasibul Hasan Portfolio
                </p>
            </div>
        </div>
    );
};

export default Sidebar;