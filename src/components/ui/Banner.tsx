
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaInstagram, FaSlack, FaTelegramPlane } from "react-icons/fa";
import hasibul from "@/assets/Anik Image.png";
import { GoPlus } from "react-icons/go";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const socialIconsRef = useRef<HTMLDivElement | null>(null);
    const trustedContainerRef = useRef(null);
  const imagesRef = useRef<HTMLDivElement | null>(null);
  const textRef1 = useRef(null);


    const [isDeveloper, setIsDeveloper] = useState(true);
  const wordRef = React.useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(wordRef.current, {
        opacity: 0,
        y: isDeveloper ? -150 : 150,
        duration: 0.5,
        onComplete: () => {
          setIsDeveloper((prev) => !prev);
          gsap.fromTo(
            wordRef.current,
            { y: isDeveloper ? 150 : -150, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
          );
        },
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isDeveloper]);

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
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );


      // Image animation
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Social icons animation
      if (socialIconsRef.current) {
        gsap.fromTo(
          (socialIconsRef.current.children),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: socialIconsRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }



     
      if (imagesRef.current) {
      gsap.fromTo(
        imagesRef.current.children,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "expo.out",
        }
      );
    }
  
      // Text animation (without ScrollTrigger)
      gsap.fromTo(
        textRef1.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          delay: 0.5,
        });



    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-7xl mx-auto py-16 px-3 md:px-6 lg:px-2 lg:flex gap-20"
    >
      
      <div className="lg:w-[50%] w-full">
        <h1
          ref={textRef}
          className="md:text-[62px] text-[28px] text-center md:text-left text-[#05100B] font-bold lg:leading-[85px] md:leading-[95px]"
        >
          I'm Hasibul Hasan <br />
          {/* <span className="font-extrabold md:text-[72px] text-[34px]">
            Web <span className="text-[#5B77F5] md:text-[72px] text-[34px]">Developer</span>
          </span> */}
           <span className="font-extrabold md:text-[72px] text-[34px]">
        Web <span ref={wordRef} className="text-[#5B77F5] md:text-[72px] text-[34px]">
         {isDeveloper ? "Designer" : "Developer"}
         </span>
       </span>
        </h1>

        <p ref={paragraphRef} className="text-[#666] md:text-[22px] text-[18px] text-center md:text-left font-normal mt-5 md:leading-9 leading-7">
          I build fast, responsive websites with React.js and Next.js, focusing on performance and SEO optimization.
        </p>

        <div className="md:flex items-center gap-8 mt-9">
          <button
            ref={buttonRef}
            className="px-6 py-4 rounded-md bg-gradient-to-r from-[#5B77F5] to-[#4A90E2] mx-auto md:mx-0 text-white text-[16px] font-normal flex justify-center items-center gap-4 group"
          >
            <span>Hire Me Now</span>
            <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
          </button>

          <div
            ref={socialIconsRef}
            className="flex items-center justify-center md:justify-start gap-4 md:mt-0 mt-6"
          >
            {[FaFacebookF, FaGithub, FaInstagram, FaSlack, FaTelegramPlane].map((Icon, index) => (
              <div key={index}>
                <span className="size-9 rounded-md bg-white shadow-lg border text-[#5B77F5] hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                  <Icon className="size-5 z-10" />
                  <span className="absolute inset-0 bg-[#5B77F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>
                </span>
              </div>
            ))}
          </div>

           
          


        </div>


        

<div
      ref={trustedContainerRef}
      className="md:mt-12 mt-8 md:flex items-center gap-5"
    >
      <div>
        <div
          ref={imagesRef}
          className="flex justify-center md:justify-start -space-x-2 overflow-hidden"
        >
          {[
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          ].map((src, index) => (
            <Image
              key={index}
              className="inline-block size-10 rounded-full ring-2 ring-white"
              src={src}
              alt="Trusted by user"
              width={40}
              height={40}
            />
          ))}

        
          <div className="size-10 relative ring-2 ring-white rounded-full">
            <Image
              alt="Extra User"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="inline-block size-10 rounded-full brightness-[34%]"
              width={40}
              height={40}
            />
            <GoPlus className="size-5 text-white absolute top-[10px] left-[10px]" />
          </div>
        </div>
      </div>

      <div className="md:mt-0 mt-6">
        <h3
          ref={textRef1}
          className="text-[18px] text-[#05100B] font-semibold leading-7 text-center md:text-left"
        >
          Trusted By 5000+ Worldwide <br />
          Brand & Customers
        </h3>
      </div>
    </div>




      </div>

     

     
       

      
      <div
        ref={imageRef}
        className="lg:w-[50%] w-full mt-10 md:mt-10 lg:mt-0 relative"
      >
        <Image
          src={hasibul}
          className="lg:mt-[-100px] mt-0"
          width={500}
          height={500}
          layout="responsive"
          alt="hasibul-portfolio"
        />
      </div>
    </div>
  );
};

export default Banner;
