/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tailorfit from "@/assets/tailorfit.png"
import skillion from "@/assets/skillion.png"
import chad from "@/assets/chad-tutoring.png"
import chad2 from "@/assets/chad.png"
import sasly from "@/assets/sasly.png"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const containerRef = useRef(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);

  useEffect(() => {
    const lines = lineRefs.current;
    const cards = [
      card1Ref.current,
      card2Ref.current,
      card3Ref.current,
      card4Ref.current,
      card5Ref.current,
      card6Ref.current,
    ];

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

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
          },
        }
      );
  }, []);
  
  return (
    <div className='bg' id="portfolio">
        <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2">
        <div ref={containerRef}>
                    <p ref={(el) => {if (el) { lineRefs.current[0] = el}}} className="text-[#5B77F5] md:text-[20px] text-[16px] font-normal uppercase">RECENT PROJECTS</p>
                     <h1 ref={(el) => {if (el) { lineRefs.current[1] = el}}} className="md:text-[46px] text-[32px] font-bold text-black">My Recent Works </h1>
                </div>



                 <div className="flex flex-col gap-10 mt-10">

                  <div ref={card1Ref} className="bg-[#FEEFB5] rounded md:px-20 px-10 md:pt-20 pt-10 lg:h-[500px]">
                     <div className="lg:flex justify-between items-center">
                         <div className="lg:w-[30%] w-full">
                            <h1 className="md:text-[48px] text-[36px] md:w-[400px] w-full md:leading-[52px] leading-[40px]">Tailor Shop Management Software
                            </h1>
                             <p className="text-[16px] font-normal text-[#060A11] mt-6">Digital Solution for Tailor Shops</p>
        

             <a href="https://tailorfitapp.com" target="_blank" rel="noopener noreferrer">
             <button style={{background:"rgba(7, 12, 19, 0.04)"}} className="relative group  md:mt-20 mt-10 md:px-6 px-6 py-3 md:py-3 rounded text-[16px] font-semibold text-[#060A11] overflow-hidden">
  <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
    View Project
  </span>
  
  <div className="absolute inset-0 flex items-center justify-center bg-[#060A11] scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
    <span className="text-white text-[16px] font-semibold">View Project</span>
  </div>
</button></a>


                         </div>

                          <div className="lg:w-[50%] w-full mt-10 lg:mt-0">
                            <Image className="md:h-[420px] h-[200px] rounded w-full" src={tailorfit} width={500} height={200} alt=" hasibul hasan own project"/>
                          </div>
                     </div>
                  </div>



                   <div className="lg:flex gap-10">
                   <div ref={card2Ref} className="lg:w-[70%] w-full bg-[#E6F1FF] rounded md:px-10 px-5 md:pt-10 pt-5 lg:h-[400px]">
                     <div className="lg:flex justify-between items-center">
                         <div className="lg:w-[30%] w-full">
                            <h1 className="md:text-[30px] text-[24px] md:w-[400px] w-[270px] font-semibold leading-9"> SkillionTech build <br /> career in the IT sector
                            </h1>
                             <p className="text-[16px] font-normal text-[#060A11] mt-6">Master the essential IT skills</p>
        

    <a href="https://skilliontech.com" target="_blank" rel="noopener noreferrer">
    <button style={{background:"rgba(7, 12, 19, 0.04)"}} className="relative group  md:mt-20 mt-10 md:px-6 px-6 py-3 md:py-3 rounded text-[16px] font-semibold text-[#060A11] overflow-hidden">
  <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
    View Project
  </span>
  
  <div className="absolute inset-0 flex items-center justify-center bg-[#060A11] scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
    <span className="text-white text-[16px] font-semibold">View Project</span>
  </div>
</button>
    </a>
 


                         </div>

                          <div className="lg:w-[50%] w-full mt-10 lg:mt-5">
                            <Image className="md:h-[340px] h-[200px] w-full" src={skillion} width={500} height={200} alt=""/>
                          </div>
                     </div>
                  </div>



                       <div ref={card3Ref} className="lg:w-[30%] w-full relative mt-10 lg:mt-0">
                           <Image className="w-full h-[400px] rounded" src={chad} width={300} height={300} alt=""/>
                           
                            
                          
                           <div className="absolute top-0 left-0 w-full h-full bg-[#004aff] opacity-[0.7] rounded"></div>
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <h3 className="text-[22px] font-semibold text-white w-full text-center">
        Chad's Tutoring
        </h3>
        <p className="text-[16px] font-normal text-white text-center mt-6">Math, Reading & Writing Tutor</p>

         
  <div className="flex justify-center md:mt-10 mt-5 ">
  <button style={{background:"rgba(7, 12, 19, 0.04)"}} className="relative group  md:px-6 px-6 py-3 md:py-3 rounded text-[16px] font-semibold text-white overflow-hidden">
  <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
    View Project
  </span>
  
  <div style={{background:"rgba(7, 12, 19, 0.04)"}} className="absolute inset-0 flex items-center justify-center scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
    <span className="text-white text-[16px] font-semibold">View Project</span>
  </div>
</button>
  </div>

    </div>
                       </div>
                   </div>



                   <div className="lg:flex flex-row-reverse gap-10">
                   <div ref={card4Ref} className="lg:w-[70%] w-full bg-[#565EF9] rounded md:px-10 px-5 md:pt-10 pt-5 lg:h-[400px]">
                     <div className="lg:flex justify-between items-center">
                         <div className="lg:w-[30%] w-full">
                            <h1 className="md:text-[30px] text-[24px] md:w-[400px] w-[270px] text-white font-semibold">Chad Smith Web Application Design
                            </h1>
                             <p className="text-[16px] font-normal text-white mt-6">Personal portfolio</p>
        
  <a href="https://chad-smith.vercel.app/" target="_blank" rel="noopener noreferrer">
  <button style={{background:"rgba(7, 12, 19, 0.04)"}} className="relative group  md:mt-20 mt-10 md:px-6 px-6 py-3 md:py-3 rounded text-[16px] font-semibold text-white overflow-hidden">
  <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
    View Project
  </span>
  
  <div className="absolute inset-0 flex items-center justify-center bg-[#060A11] scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
    <span className="text-white text-[16px] font-semibold">View Project</span>
  </div>
</button>
</a>


                         </div>

                          <div className="lg:w-[50%] w-full mt-10 lg:mt-5">
                            <Image className="md:h-[340px] h-[200px] w-full" src={chad2} width={500} height={200} alt=""/>
                          </div>
                     </div>
                  </div>



                       <div ref={card5Ref} className="lg:w-[30%] w-full relative mt-10 lg:mt-0">
                           <Image className="w-full h-[400px] rounded" src={sasly} width={300} height={300} alt=""/>
                           
                            
                          
                           <div className="absolute top-0 left-0 w-full h-full bg-[#004aff] opacity-[0.7] rounded"></div>
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <h3 className="text-[22px] font-semibold text-white w-full text-center">
        Sasly - Multipurpose <br /> Landing Page Design
        </h3>
        <p className="text-[16px] font-normal text-white text-center mt-6">Landing page design</p>

         
  <div className="flex justify-center md:mt-10 mt-5 ">
   <a href="https://sasly-react.vercel.app" target="_blank" rel="noopener noreferrer">
  <button className=" bg-[#0e244a] relative group  md:px-6 px-6 py-3 md:py-3 rounded text-[16px] font-semibold text-white overflow-hidden">
  <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
    View Project
  </span>
  
  <div className="bg-[#060A11] absolute inset-0 flex items-center justify-center scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
    <span className="text-white text-[16px] font-semibold">View Project</span>
  </div>
</button>
</a>
  </div>

    </div>
                       </div>
                   </div>



                   
                 </div>



 






        </div>

        
    </div>
  )
}

export default Projects