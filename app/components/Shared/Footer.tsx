"use client";
import React from "react";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-white border-t border-secondary/5 py-12 lg:py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Logo / Brand */}
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <h3 className="text-2xl font-serif font-bold text-primary italic">Hasibul Hasan</h3>
                        <p className="text-secondary/50 text-[10px] uppercase tracking-[0.3em] font-medium">Crafting Digital Experiences</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-secondary/40 hover:text-accent transition-colors duration-300">
                            <Github size={20} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="text-secondary/40 hover:text-accent transition-colors duration-300">
                            <Twitter size={20} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="text-secondary/40 hover:text-accent transition-colors duration-300">
                            <Linkedin size={20} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="text-secondary/40 hover:text-accent transition-colors duration-300">
                            <Instagram size={20} strokeWidth={1.5} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-secondary/40 text-xs font-light">
                        © {currentYear} Hasibul Hasan. All rights reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;