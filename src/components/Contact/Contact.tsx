/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-[#F5F3FC]">
        <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2">
        <h1 className="max-w-[250px] md:text-[46px] text-[32px] font-bold text-black leading-[58px]">Let’s work together!        </h1>
          <h3 className="text-[18px] text-black font-normal mt-3 max-w-[600px]">I design and code beautifully simple things and i love what i do. Just simple like that!
</h3>
          <div className="flex justify-between items-center">
              <div className="w-[50%] flex flex-col gap-10 mt-10">

              <input className="w-full bg-transparent pb-4 outline-0 border-b-[1px] border-b-black text-[16px] font-normal focus:boorder-b-[1px] focus:border-b-[#8650F7]" type="text" placeholder="First Name"/>
              <input className="w-full bg-transparent pb-4 outline-0 border-b-[1px] border-b-black text-[16px] font-normal focus:boorder-b-[1px] focus:border-b-[#8650F7]" type="text" placeholder="Last Name"/>
              <input className="w-full bg-transparent pb-4 outline-0 border-b-[1px] border-b-black text-[16px] font-normal focus:boorder-b-[1px] focus:border-b-[#8650F7]" type="email" placeholder="Email Address"/>
              <input className="w-full bg-transparent pb-4 outline-0 border-b-[1px] border-b-black text-[16px] font-normal focus:boorder-b-[1px] focus:border-b-[#8650F7]" type="text" placeholder="Phone Number"/>
              <input className="w-full bg-transparent pb-32 outline-0 border-b-[1px] border-b-black text-[16px] font-normal focus:boorder-b-[1px] focus:border-b-[#8650F7]" type="text" placeholder="Message"/>

               <button className="bg-[#8650F7] rounded-md w-[220px] h-[50px] px-6 text-white text-[18px] font-medium flex items-center gap-3">

                 Send Message
                 <MdArrowOutward className="size-5" />

               </button>
                
              </div>

              <div className="w-[40%] flex flex-col gap-6">
                 <h3 className="text-[18px] font-normal text-black">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.
</h3>

 <h3 className="text-[20px] font-normal text-black underline hover:text-[#8650F7] duration-300 cursor-pointer">01790170749</h3>
 <h3 className="text-[20px] font-normal text-black underline hover:text-[#8650F7] duration-300 cursor-pointer">hasibulhasan40420@gmail.com</h3>
 <h3 className="text-[20px] font-normal text-black underline hover:text-[#8650F7] duration-300 cursor-pointer">Lalpur Upazila in Natore District, <br /> Rajshahi, Bangladesh</h3>


 <div className="flex items-center gap-6">
                   <div>
                   <span className="size-9 rounded-md bg-white shadow-lg border text-black hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaFacebookF className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#8650F7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                    </span>
                   </div>
                   <div>
                   <span className="size-9 rounded-md bg-white shadow-lg border text-black hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaXTwitter className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#8650F7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                    </span>
                   </div>
                   <div>
                   <span className="size-9 rounded-md bg-white shadow-lg border text-black hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaInstagram className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#8650F7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                    </span>
                   </div>
                   <div>
                   <span className=" size-9 rounded-md bg-white shadow-lg border text-black hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaSlack className="size-5 z-10"/>
                    <span className="absolute inset-0 bg-[#8650F7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>
                    </span>
                    
                   </div>
                   <div>
                  
                    <span className=" size-9 rounded-md bg-white shadow-lg border text-black hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                 <FaTelegramPlane className="size-5 z-10" />
                <span className="absolute inset-0 bg-[#8650F7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>
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