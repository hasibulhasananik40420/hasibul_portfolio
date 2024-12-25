/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useState } from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image"
import logo from "@/assets/photo_2024-12-06_21-40-58-removebg-preview (1).png"
import { CgMenuRightAlt } from "react-icons/cg";
import { BsArrowUpRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const [activeLink, setActiveLink] = useState("home");

  const navItems = [
    { to: "home", label: "Home" },
   
    { to: "service", label: "Services" },
    { to: "about", label: "About" },
    { to: "portfolio", label: "Portfolio" },
    { to: "blog", label: "Blog" },
    { to: "contact", label: "Contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const [isFixed, setIsFixed] = useState(false);



  const handleScroll = () => {
    const scrollThreshold = 200;
    const scrolled = window.scrollY;

    if (scrolled > scrollThreshold && !isFixed) {
      setIsFixed(true);
    } else if (scrolled <= scrollThreshold && isFixed) {
      setIsFixed(false);
    }

   
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);


  return (
    <div className="relative">
    
     <div className={`flex justify-between items-center h-[10vh] w-full !z-[999999] ${isFixed ? 'bg-white fixed top-0 shadow-navShadow' : ''}`}>

     <div className="-ml-2">
          
          <Image className=" w-[100px] h-[100px]" src={logo} alt="hasibul portfilo"/>
 
         </div>

     <div>
       <div className="flex items-center gap-4">
       <button className="px-4 py-2 rounded-[6px] bg-[#5B77F5] text-white text-[14px] font-normal flex justify-center items-center gap-4 group">
      <span>Let's Talk</span>
      <BsArrowUpRight className="size-4 group-hover:rotate-45 duration-500" />
        </button>
      <div onClick={() => setIsOpen(!isOpen)} className="px-3 py-2 bg-[#5B77F5] flex justify-center items-center rounded  mr-4">
      <CgMenuRightAlt className="size-5 text-white"/>
      </div>

        
       </div>
     </div>

     </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-72 bg-[#F9F9F9] text-white translate-x-full flex flex-col p-4 space-y-4 shadow-lg !z-[99999999]"
      >
         <div className="flex justify-end">
         <div onClick={() => setIsOpen(!isOpen)} className="px-3 py-2 bg-[#5B77F5] flex justify-center items-center rounded">
      <IoClose className="size-5 text-white"/>
      </div>
         </div>


         <div className="flex flex-col gap-6 ml-5 pt-10">
      {navItems.map((item) => (
        <ScrollLink
          key={item.to}
          to={item.to}
          spy={true}
          smooth={true}
          duration={1000}
          onSetActive={() => setActiveLink(item.to)}
        >
          <div
            className={`text-[18px] font-medium relative inline-block cursor-pointer
            ${activeLink === item.to ? "text-[#5B77F5]" : "text-[#333]"}
            after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
            after:bg-[#5B77F5] 
            ${activeLink === item.to ? "after:scale-x-100 after:origin-left" : "after:scale-x-0 after:origin-right"} 
            after:transition-transform after:duration-500
            hover:after:scale-x-100 hover:after:origin-left hover:text-[#5B77F5]`}
          >
            {item.label}
          </div>
        </ScrollLink>
      ))}
    </div>


        
       
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default MobileSidebar;
