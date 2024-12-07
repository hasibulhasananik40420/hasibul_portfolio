import Image from "next/image"
import hasibul from '@/assets/hasibul image.jpg'
import { RxDownload } from "react-icons/rx";


const AboutMe = () => {
  return (
    <div className="bg-white" id="about">
        <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2">
               <div className="flex justify-between">
               <div className="lg:w-[50%] w-full">
                    <p className=" text-[#5B77F5] md:text-[20px] text-[16px] font-normal uppercase">About Me</p>
                     <h1 className="mt-5 md:text-[46px] text-[32px] font-semibold text-black leading-[56px]">3+ Years of Experience
                      in This Field</h1>

                      <h4 className="text-[#666] text-[18px] font-normal mt-5">Hi, I’m Hasibul Hasan, a passionate front-end web developer crafting seamless user experiences with React and Next.js. My journey began in 2021, experimenting with custom Tumblr themes, and since then, I’ve been dedicated to creating dynamic and interactive web applications that thrive on the internet.</h4>
              
              
              
                       {/* <div className="w-40 h-40 rounded-full border flex justify-center items-center mt-10">
                           <h3 className="text-[#666] font-normal text-[18px] uppercase leading-7 ">hire me now.hire me now</h3>
                         <div className="size-20 bg-[#5B77F5] rounded-full flex justify-center items-center group cursor-pointer">
                         <HiArrowUpRight className="size-9 text-white group-hover:rotate-45 duration-300"/>

                         </div>

                       </div> */}


                        <div className="mt-9">
                        <button className="px-6 py-4 rounded-md bg-[#5B77F5] text-white text-[18px] font-normal flex justify-center items-center gap-4 ">
      <span>Download Resume</span>
      <RxDownload className="size-5" />
        </button>
                        </div>

                        
              
              
              
              
                </div>


                 <div className="lg:w-[40%] w-full lg:ml-52 ml-0 mt-16 relative rotate-12 hover:rotate-0 duration-500">
                 {/* rotate-12 */}
                    <div className="border-[40px] border-[#5B77F5] rounded w-[450px] h-[500px] ">
                    </div>
                    <Image className="w-[450px] h-[500px] absolute right-12 top-7 rounded" src={hasibul} alt="hasibul-portfolio-image"/>

                 </div>
               </div>
        </div>
    </div>
  )
}

export default AboutMe