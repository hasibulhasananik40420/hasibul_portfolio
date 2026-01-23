"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Dribbble } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative w-full flex flex-col items-center justify-center z-10">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Image Section */}
                <div className="relative order-2 lg:order-1 flex justify-center lg:justify-end">

                    {/* 1. Soft Gradient Background Blob */}
                    <div className="absolute top-12 right-12 w-full h-full bg-linear-to-br from-accent/20 to-transparent -z-20 rounded-br-[5rem] rounded-tl-[5rem] blur-2xl opacity-60" />

                    {/* 2. Structured Geometric Accent */}
                    <div className="absolute top-6 right-6 w-full h-full border border-accent/30 -z-10 rounded-br-[4rem] rounded-tl-4xl" />

                    <div className="relative z-10 w-full max-w-[420px] aspect-4/5">

                        {/* 3. Main Image Container with "Smooth" Frame */}
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-br-[4rem] rounded-tl-4xl transform translate-x-3 translate-y-3 -z-10" />

                        <div className="w-full h-full overflow-hidden rounded-br-[4rem] rounded-tl-4xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white border border-white/50 group">
                            <Image
                                src="/images/hero.png"
                                alt="Profile"
                                fill
                                loading="lazy"
                                className="object-cover transition-transform duration-700 ease-in-out"
                            />
                            {/* Inner Glow/Overlay for polish */}
                            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none" />
                        </div>

                        {/* 4. Refined Floating Badge */}
                        <div className="absolute top-[15%] -left-8 bg-white/90 backdrop-blur-xl p-6 shadow-2xl border border-white/60 rounded-sm hidden md:block animate-in fade-in zoom-in duration-700 delay-500">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-4xl font-serif font-bold text-primary leading-none">3+</span>
                                <span className="text-[10px] tracking-[0.25em] text-secondary font-medium uppercase text-center w-max">Years Exp.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
                    {/* Headline Group */}
                    <div className="space-y-2">
                        <h2 className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                            Introduction
                        </h2>
                        <h1 className="text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] font-serif font-bold text-primary animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                            Website <br />
                            <span className="italic text-secondary/80 font-light">Developer</span>
                        </h1>
                    </div>

                    <div className="w-24 h-1 bg-accent mx-auto lg:mx-0 rounded-full animate-in fade-in grow-x duration-700 delay-200" />

                    {/* Description */}
                    <p className="text-secondary text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                        I design and develop intuitive, accessible, and pixel-perfect web experiences.
                        I build modern interfaces that look great, feel fast, and scale beautifully.
                    </p>
                    {/* Signature / Name */}
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                        <p className="font-serif italic text-3xl text-primary">Hasibul Hasan</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
                        {[Facebook, Twitter, Instagram, Linkedin, Dribbble].map((Icon, idx) => (
                            <a key={idx} href="#" className="p-2.5 rounded-full bg-white border border-gray-100 shadow-sm text-secondary hover:text-accent hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <Icon size={18} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;