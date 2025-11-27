
"use client"
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { RxDownload } from "react-icons/rx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hasibul from '@/assets/Anik Image.png';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate the main heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate the subheading
    gsap.fromTo(
      subHeadingRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: subHeadingRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate the paragraph
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate the image
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );

    // Start button animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div
      className="section-gradient-2"
      id="about"
    >
      <div className="max-w-7xl mx-auto md:pt-[100px] pt-16 px-3 md:px-6 lg:px-2">
        <div className="lg:flex flex-row-reverse justify-between">
          <div className="lg:w-[50%] w-full">
            <p
              ref={headingRef}
              className="gradient-text md:text-[20px] text-[16px] font-normal uppercase"
            >
              About Me
            </p>
            <h1
              ref={subHeadingRef}
              className="mt-5 md:text-[46px] text-[28px] font-semibold text-white md:leading-[56px]"
            >
              3+ Years of Experience in This Field
            </h1>
            <h4
              ref={paragraphRef}
              className="text-gray-300 text-[18px] font-normal mt-5"
            >
              Hi, I’m Hasibul Hasan, a passionate front-end web developer
              crafting seamless user experiences with React and Next.js. My
              journey began in 2021, experimenting with custom Tumblr themes,
              and since then, I’ve been dedicated to creating dynamic and
              interactive web applications that thrive on the internet.
            </h4>
            <div className="mt-9">


              <a href="https://docs.google.com/document/d/1tUKL4lyBqdnra6BzwD2LYphEn8_P5cGWA_pPU46aLEA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button ref={buttonRef} className="glass relative group md:px-6 px-6 py-3 md:py-3 rounded-xl text-[16px] font-semibold text-white overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
                  <span className="text-white flex items-center justify-center gap-4 relative z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
                    <p>Download Resume</p>
                    <RxDownload className="size-5" />
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
                    <span className="text-[16px] font-semibold">Download Resume</span>
                    <RxDownload className="size-5" />
                  </div>
                </button>
              </a>
            </div>
          </div>

          <div className="lg:w-[40%] w-full mt-16 relative">
            <div
              ref={imageRef}
              className="lg:mt-[-100px] mt-0"
              style={{ overflow: "hidden" }}
            >
              <Image
                src={hasibul}
                width={500}
                height={500}
                layout="responsive"
                alt="hasibul-portfolio"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

