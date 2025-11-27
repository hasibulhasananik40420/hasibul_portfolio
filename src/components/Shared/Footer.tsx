import { SiMinutemailer } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="section-gradient-2">
      <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2">
        <div className="flex flex-wrap justify-between justify-items-center w-full">

          <div className="md:w-[300px] w-full">
            <p className="text-[18px] font-medium text-white mb-4">Hasibul Hasan</p>

            <h2 className="text-white font-bold text-[40px] leading-12">Get Ready <span className="font-normal">to Create Grate</span></h2>

            <form action="https://formspree.io/f/mldrnjrz" method="post" className="relative w-full mt-6 ">
              <input className="w-full bg-transparent pb-4 outline-0 border-b-[1px] border-b-white/20 text-[16px] font-normal text-white placeholder:text-gray-500 focus:border-b-[#667eea] transition-colors" type="email" name="email" id="email" placeholder="Email Address" />
              <button type="submit">
                <SiMinutemailer className="size-6 text-white hover:text-[#667eea] duration-300 absolute top-0 right-0 cursor-pointer" />

              </button>
            </form>
          </div>


          <div className="md:w-[150px] w-full mt-10 md:mt-0">
            <h3 className="text-[24px] font-medium text-white">Quick Links</h3>
            <div className="flex flex-col gap-3 mt-5">
              <p className="text-[18px] font-normal text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors">About Us</p>
              <p className="text-[18px] font-normal text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors">Service</p>
              <p className="text-[18px] font-normal text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors">Contact Us</p>
              <p className="text-[18px] font-normal text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors">Blog Post</p>
              <p className="text-[18px] font-normal text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors">Pricing</p>




            </div>
          </div>


          <div className="md:w-[400px] w-full mt-10 md:mt-10 lg:mt-0">
            <h3 className="text-[24px] font-medium text-white">Contact</h3>
            <div className="flex flex-col gap-3 mt-5">
              <div className="flex items-center gap-3">
                <div>
                  <span className="size-9 rounded-md glass flex justify-center items-center cursor-pointer text-white hover:bg-white/10 transition-colors border border-white/10">
                    <MdOutlineMailOutline className="size-5" />
                  </span>
                </div>
                <p className="text-[18px] font-normal text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors">hasibulhasan40420@gmail.com</p>

              </div>

              <div className="flex items-center gap-3">
                <div>
                  <span className="size-9 rounded-md glass flex justify-center items-center cursor-pointer text-white hover:bg-white/10 transition-colors border border-white/10">
                    <CiLocationArrow1 className="size-5" />
                  </span>
                </div>
                <p className="text-[18px] font-normal text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors">Rajshahi-6000
                  Bangladesh</p>

              </div>


              <div className="flex items-center gap-3">
                <div>
                  <span className="size-9 rounded-md glass flex justify-center items-center cursor-pointer text-white hover:bg-white/10 transition-colors border border-white/10">
                    <IoCallOutline className="size-5" />
                  </span>
                </div>
                <p className="text-[18px] font-normal text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors">01790170749, 01516370422</p>

              </div>



              <div className="flex items-center gap-6">
                <div>
                  <span className="size-9 rounded-md glass border border-white/10 text-white hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaFacebookF className="size-5 z-10" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                  </span>
                </div>
                <div>
                  <span className="size-9 rounded-md glass border border-white/10 text-white hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaXTwitter className="size-5 z-10" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                  </span>
                </div>
                <div>
                  <span className="size-9 rounded-md glass border border-white/10 text-white hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaInstagram className="size-5 z-10" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>

                  </span>
                </div>
                <div>
                  <span className=" size-9 rounded-md glass border border-white/10 text-white hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaSlack className="size-5 z-10" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>
                  </span>

                </div>
                <div>

                  <span className=" size-9 rounded-md glass border border-white/10 text-white hover:text-white flex justify-center items-center cursor-pointer relative overflow-hidden group">
                    <FaTelegramPlane className="size-5 z-10" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-0"></span>
                  </span>
                </div>
              </div>





            </div>
          </div>

        </div>

        <div className="w-full h-[1px] bg-white/10 mt-14"></div>

        <div className="flex  flex-wrap justify-between items-center mt-10">
          <div>
            <p className="text-[18px] font-normal text-gray-400 cursor-pointer">Pyrite © Hasibul Hasan | All rights reserved - 2024</p>

          </div>

          <div className="flex flex-wrap gap-4 mt-5 md:mt-0">
            <p className="text-[18px] font-normal text-gray-400 hover:text-white hover:underline cursor-pointer transition-colors">Trams & Conditions</p>
            <p className="text-[18px] font-normal text-gray-400 hover:text-white hover:underline cursor-pointer transition-colors">Privacy Policy</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer