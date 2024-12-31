"use client"
/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowUpRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const lines = lineRefs.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        markers: false,
      },
    })
      .fromTo(
        lines,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.4,
          ease: "power3.out",
        }
      );
  }, []);
  return (
    <div className="bg-[#F9FAFF]" id="contact">
        <div ref={containerRef} className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2">
        <h1 ref={(el) => {if (el) { lineRefs.current[0] = el}}} className="lg:max-w-[250px] w-full md:text-[46px] text-[32px] font-bold text-black leading-[58px]">Let’s work together!        </h1>
          <h3 ref={(el) => {if (el) { lineRefs.current[1] = el}}} className="text-[18px] text-black font-normal mt-3 lg:max-w-[600px] w-full">I design and code beautifully simple things and i love what i do. Just simple like that!
        </h3>
          <div className="lg:flex justify-between items-center">
              <form action="https://formspree.io/f/mldrnjrz" method="post" className="lg:w-[50%] w-full flex flex-col gap-10 mt-10">

              <input className="w-full bg-transparent pb-4 outline-0 border-b-[1px] border-b-black text-[16px] font-normal focus:boorder-b-[1px] focus:border-b-[#5B77F5]" type="text" name="firstName" id="firstName" placeholder="First Name"/>
              <input className="w-full bg-transparent pb-4 outline-0 border-b-[1px] border-b-black text-[16px] font-normal focus:boorder-b-[1px] focus:border-b-[#5B77F5]" type="text" name="lastName" id="lastName" placeholder="Last Name"/>
              <input className="w-full bg-transparent pb-4 outline-0 border-b-[1px] border-b-black text-[16px] font-normal focus:boorder-b-[1px] focus:border-b-[#5B77F5]" type="email" name="Email" id="email" placeholder="Email Address"/>
              <input className="w-full bg-transparent pb-4 outline-0 border-b-[1px] border-b-black text-[16px] font-normal focus:boorder-b-[1px] focus:border-b-[#5B77F5]" type="text" name="phone" id="phone"  placeholder="Phone Number"/>
              <input className="w-full bg-transparent pb-32 outline-0 border-b-[1px] border-b-black text-[16px] font-normal focus:boorder-b-[1px] focus:border-b-[#5B77F5]" type="text" name="message" id="message" placeholder="Message"/>

              

               <button type="submit" className="bg-gradient-to-r from-[#5B77F5] to-[#4A90E2] relative group md:px-6 px-6 py-3 md:py-3 rounded text-[16px] font-semibold text-[#060A11] overflow-hidden w-[220px]">
  <span className="text-white flex items-center justify-center gap-4 relative z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
   <p>Send Message</p>
  <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
  </span>
  
  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#4d68de] text-white scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
    <span className="text-[16px] font-semibold">Send Message</span>
    <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
  </div>
</button>
                
              </form>

              <div className="lg:w-[40%] w-full flex flex-col gap-6 mt-10 lg:mt-0">
                 <h3 className="text-[18px] font-normal text-black">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.
</h3>

 <h3 className="text-[20px] font-normal text-black underline hover:text-[#5B77F5] duration-300 cursor-pointer">01790170749</h3>
 <h3 className="text-[20px] font-normal text-black underline hover:text-[#5B77F5] duration-300 cursor-pointer">hasibulhasan40420@gmail.com</h3>
 <h3 className="text-[20px] font-normal text-black underline hover:text-[#5B77F5] duration-300 cursor-pointer">Lalpur Upazila in Natore District, <br /> Rajshahi, Bangladesh</h3>


 <div className="flex items-center gap-6">
                   <div>
                   <span className="size-9 rounded-md bg-white shadow-lg border text-black hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaFacebookF className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#5B77F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                    </span>
                   </div>
                   <div>
                   <span className="size-9 rounded-md bg-white shadow-lg border text-black hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaXTwitter className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#5B77F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                    </span>
                   </div>
                   <div>
                   <span className="size-9 rounded-md bg-white shadow-lg border text-black hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaInstagram className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#5B77F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                    </span>
                   </div>
                   <div>
                   <span className=" size-9 rounded-md bg-white shadow-lg border text-black hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaSlack className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#5B77F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>
                    </span>
                    
                   </div>
                   <div>
                  
                    <span className=" size-9 rounded-md bg-white shadow-lg border text-black hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                 <FaTelegramPlane className="size-5 z-10" />
                <span className="absolute inset-0 bg-[#5B77F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>
                </span>
                   </div>
                   </div>



              </div>
          </div>

        </div>
    </div>
  )
}

export default Contact