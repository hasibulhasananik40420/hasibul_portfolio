"use client";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className="mt-28 lg:mt-32 portfolio-container">
            <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-12">
                <div className="w-full md:w-[45%] text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary font-bold leading-tight">
                        I Build Scalable Digital Experiences
                    </h1>

                    <p className="text-primary font-light text-lg mt-4">
                        Passionate developer focused on crafting clean, performant, and user-centric web applications by blending thoughtful design with solid engineering.
                    </p>

                    
                     <div className="mt-10">
                         <a
                                 href="/images/hasibul-hasan.pdf"
                                 download="hasibul-hasan.pdf"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-secondary transition-all duration-300 active:scale-95 group cursor-pointer"
                               >
                                 <FaDownload className="text-lg group-hover:translate-y-0.5 transition-transform duration-300" />
                                 Download Resume
                               </a>
                     </div>
                </div>




                <div className="w-full md:w-[40%]">
                    <Image
                        src="/images/hero.jpg"
                        alt="Hero"
                        width={832}
                        height={979}
                        className="w-full h-auto max-h-[530px] object-cover rounded-2xl"
                        loading="lazy"
                    />
                </div>


            </div>
        </section>
    );
};

export default Hero;