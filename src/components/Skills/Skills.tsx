import Image from "next/image"
import nextjs from "@/assets/nextjs.svg"
import redux from "@/assets/redux.svg"
import mongodb from "@/assets/mongodb-plain-wordmark.svg"
import node from "@/assets/nodejs.svg"
import tailwind from "@/assets/tailwindcss-icon.svg"
import bootstrap from "@/assets/bootstrap.svg"
import github from "@/assets/github.svg"
import figma from "@/assets/figma.svg"
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2">
        <div>
                    <p className="text-[#5B77F5] md:text-[20px] text-[16px] font-normal uppercase">My Skills</p>
                     <h1 className="md:text-[46px] text-[32px] font-bold text-black">My awesome Skills</h1>
                </div>

                <Marquee speed={100} gradient={false}>
                <div className="flex flex-wrap gap-6 mt-10">

                <div>
                <div className="bg-[#F5F3FC] hover:bg-[#2A1454] duration-300 shadow rounded-md px-14 py-8 flex flex-col justify-center items-center group cursor-pointer ml-6">
                    <Image className="w-[80px] h-[80px] opacity-30 group-hover:opacity-100 group-hover:scale-105 duration-500 cursor-pointer" width={100} height={100} src="https://gerold.themejunction.net/wp-content/uploads/2024/05/react.png" alt=""/>
                    <h3 className="text-[24px] font-semibold text-black mt-4 group-hover:text-[#5B77F5] duration-300">93%</h3>

                 </div>
 
                 <h3 className="text-[18px] font-normal text-black mt-2 text-center">React</h3>
 
                </div>

                <div>
                <div className="bg-[#F5F3FC] hover:bg-[#2A1454] duration-300 shadow rounded-md px-14 py-8 flex flex-col justify-center items-center group cursor-pointer">
                    <Image className="w-[80px] h-[80px] opacity-30 group-hover:opacity-100 group-hover:scale-105 duration-500 cursor-pointer" width={100} height={100} src="https://gerold.themejunction.net/wp-content/uploads/2024/05/js.png" alt=""/>
                    <h3 className="text-[24px] font-semibold text-black mt-4 group-hover:text-[#5B77F5] duration-300">96%</h3>

                 </div>
 
                 <h3 className="text-[18px] font-normal text-black mt-2 text-center">Javascript</h3>
 
                </div>
                
                <div>
                <div className="bg-[#F5F3FC] hover:bg-[#2A1454] duration-300 shadow rounded-md px-14 py-8 flex flex-col justify-center items-center group cursor-pointer">
                    <Image className="w-[80px] h-[80px] opacity-30 group-hover:opacity-100 group-hover:scale-105 duration-500 cursor-pointer" width={100} height={100} src={nextjs} alt=""/>
                    <h3 className="text-[24px] font-semibold text-black mt-4 group-hover:text-[#5B77F5] duration-300">90%</h3>

                 </div>
 
                 <h3 className="text-[18px] font-normal text-black mt-2 text-center">Next Js</h3>
 
                </div>

                <div>
                <div className="bg-[#F5F3FC] hover:bg-[#2A1454] duration-300 shadow rounded-md px-14 py-8 flex flex-col justify-center items-center group cursor-pointer">
                    <Image className="w-[80px] h-[80px] opacity-30 group-hover:opacity-100 group-hover:scale-105 duration-500 cursor-pointer" width={100} height={100} src={redux} alt=""/>
                    <h3 className="text-[24px] font-semibold text-black mt-4 group-hover:text-[#5B77F5] duration-300">87%</h3>

                 </div>
 
                 <h3 className="text-[18px] font-normal text-black mt-2 text-center">redux</h3>
 
                </div>

                <div>
                <div className="bg-[#F5F3FC] hover:bg-[#2A1454] duration-300 shadow rounded-md px-14 py-8 flex flex-col justify-center items-center group cursor-pointer">
                    <Image className="w-[80px] h-[80px] opacity-30 group-hover:opacity-100 group-hover:scale-105 duration-500 cursor-pointer" width={100} height={100} src={mongodb} alt=""/>
                    <h3 className="text-[24px] font-semibold text-black mt-4 group-hover:text-[#5B77F5] duration-300">67%</h3>

                 </div>
 
                 <h3 className="text-[18px] font-normal text-black mt-2 text-center">Mongodb</h3>
 
                </div>
                <div>
                <div className="bg-[#F5F3FC] hover:bg-[#2A1454] duration-300 shadow rounded-md px-14 py-8 flex flex-col justify-center items-center group cursor-pointer">
                    <Image className="w-[80px] h-[80px] opacity-30 group-hover:opacity-100 group-hover:scale-105 duration-500 cursor-pointer" width={100} height={100} src={node} alt=""/>
                    <h3 className="text-[24px] font-semibold text-black mt-4 group-hover:text-[#5B77F5] duration-300">49%</h3>

                 </div>
 
                 <h3 className="text-[18px] font-normal text-black mt-2 text-center">Node Js</h3>
 
                </div>
                <div>
                <div className="bg-[#F5F3FC] hover:bg-[#2A1454] duration-300 shadow rounded-md px-14 py-8 flex flex-col justify-center items-center group cursor-pointer">
                    <Image className="w-[80px] h-[80px] opacity-30 group-hover:opacity-100 group-hover:scale-105 duration-500 cursor-pointer" width={100} height={100} src={tailwind} alt=""/>
                    <h3 className="text-[24px] font-semibold text-black mt-4 group-hover:text-[#5B77F5] duration-300">98%</h3>

                 </div>
 
                 <h3 className="text-[18px] font-normal text-black mt-2 text-center">Tailwind Css</h3>
 
                </div>

                <div>
                <div className="bg-[#F5F3FC] hover:bg-[#2A1454] duration-300 shadow rounded-md px-14 py-8 flex flex-col justify-center items-center group cursor-pointer">
                    <Image className="w-[80px] h-[80px] opacity-30 group-hover:opacity-100 group-hover:scale-105 duration-500 cursor-pointer" width={100} height={100} src={bootstrap} alt=""/>
                    <h3 className="text-[24px] font-semibold text-black mt-4 group-hover:text-[#5B77F5] duration-300">85%</h3>

                 </div>
 
                 <h3 className="text-[18px] font-normal text-black mt-2 text-center">Bootstrap</h3>
 
                </div>

                <div>
                <div className="bg-[#F5F3FC] hover:bg-[#2A1454] duration-300 shadow rounded-md px-14 py-8 flex flex-col justify-center items-center group cursor-pointer">
                    <Image className="w-[80px] h-[80px] opacity-30 group-hover:opacity-100 group-hover:scale-105 duration-500 cursor-pointer" width={100} height={100} src={github} alt=""/>
                    <h3 className="text-[24px] font-semibold text-black mt-4 group-hover:text-[#5B77F5] duration-300">91%</h3>

                 </div>
 
                 <h3 className="text-[18px] font-normal text-black mt-2 text-center">Github</h3>
 
                </div>

                <div>
                <div className="bg-[#F5F3FC] hover:bg-[#2A1454] duration-300 shadow rounded-md px-14 py-8 flex flex-col justify-center items-center group cursor-pointer">
                    <Image className="w-[80px] h-[80px] opacity-30 group-hover:opacity-100 group-hover:scale-105 duration-500 cursor-pointer" width={100} height={100} src={figma} alt=""/>
                    <h3 className="text-[24px] font-semibold text-black mt-4 group-hover:text-[#5B77F5] duration-300">54%</h3>

                 </div>
 
                 <h3 className="text-[18px] font-normal text-black mt-2 text-center">Figma</h3>
 
                </div>



                

                </div>
                </Marquee>







       <div className="lg:flex gap-20 mt-20">
       <div className="bg-white rounded-md shadow p-6 w-full relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Educational Experience</h2>

        <div className="space-y-6">
          {/* First Education Entry */}
          <div>
            <p className="text-gray-500 text-sm">2022 - 2025</p>
            <h3 className="text-lg font-semibold text-gray-800 mt-1">
            Bachelor of Science
            </h3>
            <p className="text-sm text-gray-400">Varendra University</p>
            <p className="text-right text-blue-500 font-medium text-sm">running/4</p>
          </div>

          <hr className="border-gray-200" />

          <div>
            <p className="text-gray-500 text-sm">2017 - 2019</p>
            <h3 className="text-lg font-semibold text-gray-800 mt-1">
            Higher Schoold Graduation

            </h3>
            <p className="text-sm text-gray-400">Ishwardi Government College</p>
            <p className="text-right text-blue-500 font-medium text-sm">4.89/5</p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-24 h-12 bg-[#5B77F5] md:block hidden">
          <svg
            className="w-full h-full "
            viewBox="0 0 100 50"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0 H100 Q80 50 0 50 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      
      
       <div className="bg-white rounded-md shadow p-6 w-full relative mt-10 md:mt-16 lg:mt-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Job Experience</h2>

        <div className="space-y-6">
          {/* First Education Entry */}
          <div>
            <p className="text-gray-500 text-sm">2022 - 2023</p>
            <h3 className="text-lg font-semibold text-gray-800 mt-1">
            Frontend Web Developer
            </h3>
            <p className="text-sm text-gray-400">Ayana Network Ltd, Canada</p>
            <p className="text-right text-blue-500 font-medium text-sm">7 months</p>
          </div>

          <hr className="border-gray-200" />

          <div>
            <p className="text-gray-500 text-sm">2024 - running</p>
            <h3 className="text-lg font-semibold text-gray-800 mt-1">
            Frontend Web Developer
           
            </h3>
            <p className="text-sm text-gray-400"> Pixelfit - Digital Agency, Pabna</p>
            <p className="text-right text-blue-500 font-medium text-sm">running</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-24 h-12 bg-[#5B77F5] md:block hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 50"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0 H100 Q80 50 0 50 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      

       </div>
    







                
        </div>
    </div>
  )
}

export default Skills