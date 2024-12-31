"use client"
import Image from "next/image"
import { CiUser } from "react-icons/ci"
import { FaRegComments } from "react-icons/fa"
import { MdOutlineArrowOutward } from "react-icons/md"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Blogs = () => {
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
    <div className="bg-white" id="blog">
        <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2">
            <div className="md:flex justify-between items-center">
                <div ref={containerRef}>
                    <p ref={(el) => {if (el) { lineRefs.current[0] = el}}}  className="text-[#5B77F5] md:text-[20px] text-[16px] font-normal uppercase">Our Blog</p>
                     <h1 ref={(el) => {if (el) { lineRefs.current[1] = el}}} className="md:text-[46px] text-[32px] font-bold text-black">Our Latest Blog</h1>
                </div>

                 <div className="flex items-center gap-3 md:hidden lg:block">
                      <button className="md:size-14 size-10 bg-[#5B77F5] rounded-full flex justify-center items-center text-white"><MdOutlineArrowOutward className="size-6" />
                      </button>
                     <h3 className="text-[20px] font-medium text-black">View All News</h3>
                 </div>
            </div>


             <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
             <div className="bg-[#F9FAFF] w-full rounded-md shadow">
                 <div className="relative">
                 <Image className="" src='https://img.freepik.com/premium-photo/teamwork-concept_700248-21418.jpg?w=740' width={500} height={500} layout="responsive"
               priority
                  alt=''/>
 
                  <div className="px-4 py-2 rounded bg-white absolute top-4 left-4 border-l-[4px] border-l-[#5B77F5] shadow-sm">
                    <p>31 Dec,2024</p>
                  </div>
                   
                 </div>

                  <div className="p-4">
                  <div className="flex justify-between items-center pt-2">
                     <span className="flex gap-1 items-center">
                     <CiUser className="size-5 text-[#5B77F5]" />
                        <p className="text-[14px] font-normal text-[#5B77F5]">By Author</p>
                     </span>
                     
                      <span className="flex gap-1 items-center">
                     <FaRegComments className="size-5 text-[#5B77F5]" />
                        <p className="text-[14px] font-normal text-[#5B77F5]">Comments(08)</p>
                     </span>
                  </div>

                    <h2 className=" text-[18px] font-medium text-black mt-4">How To Make Simple HTML Email Coding</h2>

                    <div className="flex items-center gap-3 mt-4">
                      <button className="size-6 bg-[#5B77F5] rounded-md flex justify-center items-center text-white"><MdOutlineArrowOutward className="size-5" />
                      </button>
                     <h3 className="text-[16px] font-medium text-black">Read More</h3>
                 </div>
                  </div>

              </div>  
              
              
                <div className="flex flex-col gap-[30px]">
                <div className="bg-[#F9FAFF] w-full rounded-md shadow h-full">
                

                <div className="px-4 py-7">
                <div className="flex justify-between items-center pt-2">
                   <span className="flex gap-1 items-center">
                   <CiUser className="size-5 text-[#5B77F5]" />
                      <p className="text-[14px] font-normal text-[#5B77F5]">By Author</p>
                   </span>
                   
                    <span className="flex gap-1 items-center">
                   <FaRegComments className="size-5 text-[#5B77F5]" />
                      <p className="text-[14px] font-normal text-[#5B77F5]">Comments(08)</p>
                   </span>
                </div>

                  <h2 className=" text-[18px] font-medium text-black mt-4">Building A Node.js Express API To Convert</h2>

                  <div className="flex items-center gap-3 mt-4">
                    <button className="size-6 bg-[#5B77F5] rounded-md flex justify-center items-center text-white"><MdOutlineArrowOutward className="size-5" />
                    </button>
                   <h3 className="text-[16px] font-medium text-black">Read More</h3>
               </div>
                </div>

            </div> 
             

            <div className="bg-[#F9FAFF] w-full rounded-md shadow h-full">
                

                <div className="px-4 py-7">
                <div className="flex justify-between items-center pt-2">
                   <span className="flex gap-1 items-center">
                   <CiUser className="size-5 text-[#5B77F5]" />
                      <p className="text-[14px] font-normal text-[#5B77F5]">By Author</p>
                   </span>
                   
                    <span className="flex gap-1 items-center">
                   <FaRegComments className="size-5 text-[#5B77F5]" />
                      <p className="text-[14px] font-normal text-[#5B77F5]">Comments(08)</p>
                   </span>
                </div>

                  <h2 className=" text-[18px] font-medium text-black mt-4">Building a seamless conversion API with Next.js</h2>

                  <div className="flex items-center gap-3 mt-4">
                    <button className="size-6 bg-[#5B77F5] rounded-md flex justify-center items-center text-white"><MdOutlineArrowOutward className="size-5" />
                    </button>
                   <h3 className="text-[16px] font-medium text-black">Read More</h3>
               </div>
                </div>

            </div> 


                </div>
              
              
               <div className="bg-[#F9FAFF] w-full rounded-md shadow">
                 <div className="relative">
                 <Image className="" src='https://img.freepik.com/free-photo/front-view-young-beautiful-businesswoman-black-shirt-black-jacket-along-with-young-man-using-her-silver-laptop-discussing-issues-inside-her-office-work-job-building_140725-16293.jpg?ga=GA1.1.1166836568.1647150580&semt=ais_hybrid' width={500} height={500} layout="responsive"
               priority
                  alt=''/>
 
                  <div className="px-4 py-2 rounded bg-white absolute top-4 left-4 border-l-[4px] border-l-[#5B77F5] shadow-sm">
                    <p>31 Dec,2024</p>
                  </div>
                   
                 </div>

                  <div className="p-4">
                  <div className="flex justify-between items-center pt-2">
                     <span className="flex gap-1 items-center">
                     <CiUser className="size-5 text-[#5B77F5]" />
                        <p className="text-[14px] font-normal text-[#5B77F5]">By Author</p>
                     </span>
                     
                      <span className="flex gap-1 items-center">
                     <FaRegComments className="size-5 text-[#5B77F5]" />
                        <p className="text-[14px] font-normal text-[#5B77F5]">Comments(08)</p>
                     </span>
                  </div>

                    <h2 className=" text-[18px] font-medium text-black mt-4">Five Powerful Tips And Tricks For Web</h2>

                    <div className="flex items-center gap-3 mt-4">
                      <button className="size-6 bg-[#5B77F5] rounded-md flex justify-center items-center text-white"><MdOutlineArrowOutward className="size-5" />
                      </button>
                     <h3 className="text-[16px] font-medium text-black">Read More</h3>
                 </div>
                  </div>

              </div>

             </div>




             
        </div>
    </div>
  )
}

export default Blogs