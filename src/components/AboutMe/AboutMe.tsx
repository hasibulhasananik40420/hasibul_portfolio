import Image from "next/image"
// import hasibul from '@/assets/hasibul image.jpg'
import { RxDownload } from "react-icons/rx";
import hasibul from '@/assets/Anik Image.png'



const AboutMe = () => {
  return (
    <div className="bg-[#F9F9F9]" style={{background:"linear-gradient(180deg, #E3F8FF 0%, #FFFFFF 100%)"}} id="about">
        <div className="max-w-7xl mx-auto md:pt-[100px] pt-16 px-3 md:px-6 lg:px-2">
               <div className="lg:flex flex-row-reverse justify-between">
               <div className="lg:w-[50%] w-full">
                    <p className=" text-[#5B77F5] md:text-[20px] text-[16px] font-normal uppercase">About Me</p>
                     <h1 className="mt-5 md:text-[46px] text-[32px] font-semibold text-black leading-[56px]">2+ Years of Experience
                      in This Field</h1>

                      <h4 className="text-[#666] text-[18px] font-normal mt-5">Hi, I’m Hasibul Hasan, a passionate front-end web developer crafting seamless user experiences with React and Next.js. My journey began in 2021, experimenting with custom Tumblr themes, and since then, I’ve been dedicated to creating dynamic and interactive web applications that thrive on the internet.</h4>
              
              
              
                      


                        <div className="mt-9">
                        <button className="px-6 py-4 rounded-md bg-gradient-to-r from-[#5B77F5] to-[#4A90E2] text-white text-[18px] font-normal flex justify-center items-center gap-4 ">
      <span>Download Resume</span>
      <RxDownload className="size-5" />
        </button>
                        </div>

                        
              
              
              
              
                </div>


                 <div className="lg:w-[40%] w-full mt-16 relative">
               
                    {/* <div className="border-[40px] border-[#5B77F5] rounded w-[450px] h-[500px] ">
                    </div>
                    <Image className="w-[450px] h-[500px] absolute right-12 top-7 rounded" src={hasibul} alt="hasibul-portfolio-image"/> */}
                     <Image src={hasibul} className="lg:mt-[-100px] mt-0" width={500} height={500} layout='responsive' alt='hasibul-porfolio'/>

                 </div>
               </div>
        </div>
    </div>
  )
}

export default AboutMe