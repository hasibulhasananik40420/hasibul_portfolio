/* eslint-disable react/no-unescaped-entities */

/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import logo from "@/assets/photo_2024-12-06_21-40-58-removebg-preview (1).png"
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import MobileSidebar from "../MobileSidebar/MobileSidebar";


const Navbar = () => {
    
  const [isFixed, setIsFixed] = useState(false);

  const [activeLink, setActiveLink] = useState("home");

  const navItems = [
    { to: "home", label: "Home" },
   
    { to: "service", label: "Services" },
    { to: "about", label: "About" },
    { to: "portfolio", label: "Portfolio" },
    { to: "blog", label: "Blog" },
    { to: "contact", label: "Contact" },
  ];



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
     <div className={`w-full bg-transparent`}>
       <div className="lg:block hidden">
     
        <div className={`!z-[9999999] w-full transition-all duration-300 ease-in-out ${isFixed ? 'bg-white fixed top-0 shadow-navShadow' : ''}`}>
        <div className={`max-w-7xl mx-auto  flex justify-between items-center px-4 md:h-[16vh] h-[10vh] w-full`}>
        <div className=" -ml-8">
          
         <Image className=" w-[100px] h-[100px]" src={logo} alt="hasibul portfilo"/>

        </div>

       

<div className="flex items-center gap-[38px]">
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



        <div className="flex items-center gap-5">
         
       
        
        <button className="px-6 py-4 rounded-[6px] bg-gradient-to-r from-[#5B77F5] to-[#4A90E2] text-white text-[16px] font-normal flex justify-center items-center gap-4 group">
      <span>Let's Talk</span>
      <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
        </button>

    


          
        </div>
      </div>
        </div>


    
       </div>
        
       

       <div className='lg:hidden block'>
         <MobileSidebar/>
       </div>
     </div>
  );
};

export default Navbar;