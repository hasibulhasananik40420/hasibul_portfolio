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

        <div className={`!z-[9999999] w-full transition-all duration-300 ease-in-out ${isFixed ? 'glass fixed top-0 shadow-2xl' : ''}`}>
          <div className={`max-w-7xl mx-auto  flex justify-between items-center px-4 h-[10vh] w-full`}>
            <div className=" -ml-8">

              <Image className=" w-[100px] h-[100px]" src={logo} alt="hasibul portfilo" />

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
            ${activeLink === item.to ? "gradient-text" : "text-gray-300"}
            after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
            after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2]
            ${activeLink === item.to ? "after:scale-x-100 after:origin-left" : "after:scale-x-0 after:origin-right"} 
            after:transition-transform after:duration-500
            hover:after:scale-x-100 hover:after:origin-left hover:text-white`}
                  >
                    {item.label}
                  </div>
                </ScrollLink>
              ))}
            </div>



            <div className="flex items-center gap-5">




              <a href="https://wa.me/qr/SYZJMRDCTMOBP1" target="_blank" rel="noopener noreferrer">
                <button className="glass relative group md:px-6 px-6 py-3 md:py-3 rounded-xl text-[16px] font-semibold text-white overflow-hidden hover:scale-105 transition-all duration-300">
                  <span className="flex items-center justify-center gap-4 relative z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
                    <p>Let's Talk</p>
                    <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
                    <span className="text-[16px] font-semibold">Let's Talk</span>
                    <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
                  </div>
                </button>
              </a>





            </div>
          </div>
        </div>



      </div>



      <div className='lg:hidden block'>
        <MobileSidebar />
      </div>
    </div>
  );
};

export default Navbar;