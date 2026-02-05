"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#portfolio", id: "portfolio" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll Spy & Sticky Navbar Effect
  useEffect(() => {
    const handleScroll = () => {
      // Sticky effect
      setScrolled(window.scrollY > 50);

      // Scroll spy
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
          }`}
      >
        <div className="portfolio-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 transition-transform duration-300 group-hover:rotate-12">
                <Image src="/images/logo-sm.png" alt="Logo" fill className="object-contain" />
              </div>
              <h4 className="font-bold text-primary text-xl md:text-2xl tracking-tight">
                Hasibul <span className="text-secondary">Hasan</span>
              </h4>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setActiveSection(link.id)}
                      className={`text-lg font-medium transition-all duration-300 relative group ${activeSection === link.id ? "text-secondary" : "text-primary hover:text-secondary"
                        }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                      ></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-primary hover:text-secondary transition-colors focus:outline-none cursor-pointer z-[100000]"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer - Outside nav for independent z-index */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-[99999] transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full bg-[#FAFBFD]">
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
            <a href="#home" onClick={toggleMenu} className="flex items-center gap-2">
              <Image src="/images/logo-sm.png" alt="Logo" width={30} height={30} />
              <h4 className="font-bold text-primary text-xl">Hasibul Hasan</h4>
            </a>
            <button onClick={toggleMenu} className="p-2 text-primary focus:outline-none">
              <HiX size={30} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-10 px-6">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.id);
                      toggleMenu();
                    }}
                    className={`text-2xl font-bold transition-all duration-300 flex items-center justify-between group ${activeSection === link.id ? "text-secondary pl-4" : "text-primary hover:text-secondary pl-0"
                      }`}
                  >
                    {link.name}
                    <div className={`w-12 h-0.5 bg-secondary transition-all opacity-0 ${activeSection === link.id ? "opacity-100" : "group-hover:opacity-100 group-hover:translate-x-2"}`}></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 border-t border-gray-100 bg-white mt-auto">
            <p className="text-gray-400 text-sm mb-4">Let's connect</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#FAFBFD] border border-gray-100 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all">
                <HiMenuAlt3 />
              </a>
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;