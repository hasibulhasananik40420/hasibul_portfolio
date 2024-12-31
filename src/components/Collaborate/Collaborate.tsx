

/* eslint-disable react/no-unescaped-entities */
"use client"
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Collaborate = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.3,  
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );

      // Paragraph animation
      gsap.fromTo(
        paragraphRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.6,  // Added delay for better sequence
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Button animation (with stagger effect for smooth entrance)
      gsap.fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 1,  // Delay for the button animation to come last
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#5675E3] lg:py-[100px] md:py-[100px] py-[60px] px-3 md:px-10 lg:px-0">
      <div className="bg-[#DFE7FF] max-w-5xl mx-auto md:py-[64px] py-10 px-5 md:px-0 md:rounded-[30px] rounded-lg">
        <h2 ref={textRef} className="md:text-[36px] text-[24px] font-semibold text-[#111827] text-center">
          Ready to Collaborate?
        </h2>

        <h5 ref={paragraphRef} className="md:text-[18px] text-[14px] font-normal text-center text-[#111827] mt-5 lg:w-[760px] md:px-10 lg:px-0 px-0 w-full mx-auto">
          Join me on a journey where creativity knows no bounds. Let's explore the limits of digital art together.
        </h5>

        <div ref={buttonRef} className="flex justify-center items-center gap-5 mt-8">
           <a href="https://wa.me/qr/SYZJMRDCTMOBP1"target="_blank" rel="noopener noreferrer">
           <button className="bg-[#3730A3] md:px-6 px-4 py-3 md:py-3 rounded text-[14px] font-medium text-white">
            Start a Project
          </button></a>
           <a href="https://github.com/hasibulhasananik40420" target="_blank" rel="noopener noreferrer">
           <button className="bg-transparent md:px-6 px-4 py-[10px] md:py-[10px] rounded text-[14px] font-medium text-[#322E87] border-[2px] border-[#4338CA]">
            Explore my Art
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;