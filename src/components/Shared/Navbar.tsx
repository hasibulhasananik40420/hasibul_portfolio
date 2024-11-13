
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import logo from "@/assets/logo.webp"
import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    
  const [isFixed, setIsFixed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = () => {
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

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
     <div className={`w-full bg-gray-400`}>
       <div className="lg:block hidden">
     
        <div className={`!z-[9999999] w-full transition-all duration-300 ease-in-out ${isFixed ? 'bg-white fixed top-0 shadow-navShadow' : ''}`}>
        <div className={`max-w-7xl mx-auto  flex justify-between items-center px-4 h-[12vh] w-full`}>
        <div>
          
         <Image className="object-contain w-[50px] h-[50px] rounded-full" src={logo} alt="hasibul portfilo"/>

        </div>

        <div className="flex items-center gap-[38px] 2xl:gap-[48px]">
          
        <ScrollLink 
               to="testmonial"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
          <div
            className="text-[#333] text-[20px] font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8750F7] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left hover:text-secondaryColor cursor-pointer"
          >
            About
          </div>
          </ScrollLink>



           
        


          <ScrollLink 
               to="how-to-use"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
          <div
          
             className="text-[#333] text-[20px] font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8750F7] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left hover:text-secondaryColor cursor-pointer"
          >
           Services
          </div>
          </ScrollLink>

          

          <ScrollLink 
               to="pricing-plan"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
           <div
         
            className="text-[#333] text-[20px] font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8750F7] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left hover:text-secondaryColor cursor-pointer"
          >
            Contact
          </div>
          </ScrollLink>

         
        </div>



        <div className="flex items-center gap-5">
         
        <button onClick={openDrawer}>
        <FiMenu className="size-7 text-black" />
        </button>
        <Sidebar isOpen={isDrawerOpen} onClose={closeDrawer}/>
     
        
        {/* <button className="px-8 py-2 rounded-full bg-[#8750F7] text-white text-[16px] font-normal flex justify-center items-center gap-4 relative overflow-hidden group">
      <span>resume</span>
      <HiOutlineArrowDownTray className="transform transition-transform duration-300 translate-y-0 group-hover:translate-y-full group-hover:opacity-0" />
        <HiOutlineArrowDownTray className="transform transition-transform duration-300 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </button> */}


          
        </div>
      </div>
        </div>


    
       </div>
        
       

       <div className=' lg:hidden block'>
         {/* <MobileSidebar/> */}
       </div>
     </div>
  );
};

export default Navbar;