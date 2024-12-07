/* eslint-disable react/no-unescaped-entities */

/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import logo from "@/assets/photo_2024-12-06_21-40-58-removebg-preview (1).png"
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";


const Navbar = () => {
    
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
     <div className={`w-full bg-transparent`}>
       <div className="lg:block hidden">
     
        <div className={`!z-[9999999] w-full transition-all duration-300 ease-in-out ${isFixed ? 'bg-white fixed top-0 shadow-navShadow' : ''}`}>
        <div className={`max-w-7xl mx-auto  flex justify-between items-center px-4 h-[16vh] w-full`}>
        <div className=" -ml-8">
          
         <Image className=" w-[100px] h-[100px]" src={logo} alt="hasibul portfilo"/>

        </div>

        <div className="flex items-center gap-[38px] 2xl:gap-[48px]">
          
        <ScrollLink 
               to="home"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
          <div
            className="text-[#333] text-[18px] font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#5B77F5] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left hover:text-[#5B77F5] cursor-pointer"
          >
            Home
          </div>
          </ScrollLink>


        <ScrollLink 
               to="about"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
          <div
            className="text-[#333] text-[18px] font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#5B77F5] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left hover:text-[#5B77F5] cursor-pointer"
          >
            About
          </div>
          </ScrollLink>



           
        


          <ScrollLink 
               to="service"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
          <div
          
             className="text-[#333] text-[18px] font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#5B77F5] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left hover:text-[#5B77F5] cursor-pointer"
          >
           Services
          </div>
          </ScrollLink>

          
          <ScrollLink 
               to="portfolio"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
          <div
          
             className="text-[#333] text-[18px] font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#5B77F5] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left hover:text-[#5B77F5] cursor-pointer"
          >
           Portfolio
          </div>
          </ScrollLink>

          
          <ScrollLink 
               to="blog"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
          <div
          
             className="text-[#333] text-[18px] font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#5B77F5] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left hover:text-[#5B77F5] cursor-pointer"
          >
          blog
          </div>
          </ScrollLink>

          

          <ScrollLink 
               to="contact"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
           <div
         
            className="text-[#333] text-[18px] font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#5B77F5] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left hover:text-[#5B77F5] cursor-pointer"
          >
            Contact
          </div>
          </ScrollLink>

         
        </div>



        <div className="flex items-center gap-5">
         
       
        
        <button className="px-6 py-4 rounded-[30px] bg-[#5B77F5] text-white text-[16px] font-normal flex justify-center items-center gap-4 group">
      <span>Let's Talk</span>
      <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
        </button>

        {/* <button onClick={openDrawer}>
        <FiMenu className="size-7 text-black" />
        </button>
        <Sidebar isOpen={isDrawerOpen} onClose={closeDrawer}/>
      */}


          
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