/* eslint-disable react/no-unescaped-entities */
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

      <div className="lg:w-[50%] w-full relative z-10">
        <h1
          ref={textRef}
          className="md:text-[62px] text-[28px] text-center md:text-left text-white font-bold lg:leading-[85px] md:leading-[95px] text-shadow"
        >
          I'm Hasibul Hasan <br />

          <span className="font-extrabold md:text-[72px] text-[34px]">
            Web <span ref={wordRef} className="gradient-text md:text-[72px] text-[34px]">
              {isDeveloper ? "Designer" : "Developer"}
            </span>
          </span>
        </h1>

        <p ref={paragraphRef} className="text-gray-300 md:text-[22px] text-[18px] text-center md:text-left font-normal mt-5 md:leading-9 leading-7">
          I build fast, responsive websites with React.js and Next.js, focusing on performance and SEO optimization.
        </p>

        <div className="md:flex items-center gap-8 mt-9">

          <div className="flex justify-center md:flex md:justify-start">

            <a href="https://wa.me/qr/SYZJMRDCTMOBP1" target="_blank" rel="noopener noreferrer">
              <button ref={buttonRef} className="glass relative group md:px-8 px-6 py-4 md:py-4 rounded-xl text-[16px] font-semibold overflow-hidden hover:scale-105 transition-transform duration-300">
                <span className="text-white flex items-center justify-center gap-4 relative z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
                  <p>Hire Me Now</p>
                  <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
                </span>

                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
                  <span className="text-[16px] font-semibold">Hire Me Now</span>
                  <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
                </div>
              </button>
            </a>
          </div>


          <div
            ref={socialIconsRef}
            className="flex items-center justify-center md:justify-start gap-4 md:mt-0 mt-6"
          >
            {[
              { Icon: FaFacebookF, link: "https://www.facebook.com/share/18KaV2U6oK/" },
              { Icon: FaGithub, link: "https://github.com/hasibulhasananik40420" },
              { Icon: FaInstagram, link: "https://instagram.com" },
              { Icon: FaSlack, link: "https://websitedesign-cs04486.slack.com/team/U066CK7Q0TD" },
              { Icon: FaTelegramPlane, link: "https://t.me/hasibul40420" },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-lg glass text-white hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group hover:scale-110 transition-all duration-300"
              >
                <span className="flex items-center justify-center relative z-10">
                  <Icon className="size-5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>
              </a>
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
              className="text-[18px] text-white font-semibold leading-7 text-center md:text-left"
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
