/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Image from "next/image"
import { BsArrowUpRight } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { GoPlus } from "react-icons/go";



const Banner = () => {
 
  return (
    <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2 flex gap-20">
       <div className='lg:w-[50%] w-full'>
           <h1 className='text-[62px] text-[#05100B] font-bold leading-[85PX]'>I'm Hasibul Hasan <span className='font-extrabold text-[72px]'>Web  <span className='text-[#5B77F5] text-[72px]'>Developer</span></span>
</h1>

    <p className="text-[#666] text-[22px] font-normal mt-5 leading-9">I build fast, responsive websites with React.js and Next.js, focusing on performance and SEO optimization.</p>
     
       <div className='flex items-center gap-8 mt-9'>
       <button className="px-6 py-4 rounded-md bg-[#5B77F5] text-white text-[16px] font-normal flex justify-center items-center gap-4 group">
      <span>Hire Me Now</span>
      <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
        </button>


        <div className="flex items-center gap-4">
                   <div>
                   <span className="size-9 rounded-md bg-white shadow-lg border text-[#5B77F5] hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaFacebookF className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#5B77F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                    </span>
                   </div>
                   <div>
                   <span className="size-9 rounded-md bg-white shadow-lg border text-[#5B77F5] hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaXTwitter className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#5B77F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                    </span>
                   </div>
                   <div>
                   <span className="size-9 rounded-md bg-white shadow-lg border text-[#5B77F5] hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaInstagram className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#5B77F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                    </span>
                   </div>
                   <div>
                   <span className=" size-9 rounded-md bg-white shadow-lg border text-[#5B77F5] hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaSlack className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#5B77F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>
                    </span>
                    
                   </div>
                   <div>
                  
                    <span className=" size-9 rounded-md bg-white shadow-lg border text-[#5B77F5] hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                 <FaTelegramPlane className="size-5 z-10" />
                <span className="absolute inset-0 bg-[#5B77F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>
                </span>
                   </div>
                   </div>
       </div>


        <div className="mt-12 flex items-center gap-5">
        <div>
        <div className="flex -space-x-2 overflow-hidden">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block size-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block size-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          className="inline-block size-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block size-10 rounded-full ring-2 ring-white"
        />

         <div className="size-10 relative ring-2 ring-white rounded-full">
         <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block size-10 rounded-full brightness-50"
        />
          <GoPlus className="size-5 text-white absolute top-[10px] left-[10px]"/>

         </div>
         </div>
        </div>

       <div>
        <h3 className="text-[18px] text-[#05100B] font-semibold leading-7">
Trusted By 5000+ Worldwide <br />
Brand & Customers</h3>
       </div>
        </div>

     
       </div>


       <div className='lg:w-[50%] w-full'>
          <Image src={'https://flixta.rstheme.com/wp-content/uploads/2024/05/slide-01.png'} width={500} height={500} layout='responsive' alt='hasibul-porfolio'/>
       </div>
    </div>

  )
}

export default Banner