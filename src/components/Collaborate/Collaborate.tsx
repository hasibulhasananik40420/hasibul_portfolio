

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
    <div ref={containerRef} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8750f7]/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#2a1454]/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="relative bg-[#140c1c] border border-[#2a1454] rounded-[30px] p-8 md:p-16 text-center overflow-hidden group">
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8750f7]/0 via-[#8750f7]/5 to-[#8750f7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h2 ref={textRef} className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to <span className="text-[#8750f7]">Collaborate?</span>
          </h2>

          <p ref={paragraphRef} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
            Join me on a journey where creativity knows no bounds. Let's explore the limits of digital art together and build something extraordinary.
          </p>

          <div ref={buttonRef} className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a href="https://wa.me/qr/SYZJMRDCTMOBP1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#8750f7] to-[#2a1454] hover:from-[#2a1454] hover:to-[#8750f7] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(135,80,247,0.3)]">
                Start a Project
              </button>
            </a>
            <a href="https://github.com/hasibulhasananik40420" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent border-2 border-[#8750f7] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#8750f7]/10 transition-all duration-300">
                Explore my Art
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;