"use client";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className="mt-28 lg:mt-32 portfolio-container">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
                <div className="w-full md:w-[45%] text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary font-bold leading-tight">
                        I Build Scalable Digital Experiences
                    </h1>

                    <p className="text-primary font-light text-lg mt-4">
                        Passionate developer focused on crafting clean, performant, and user-centric web applications by blending thoughtful design with solid engineering.
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-4 mt-7">
                        <div className="flex items-center gap-2">
                            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors duration-300">
                                <FaFacebookF size={16} />
                            </span>
                            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors duration-300">
                                <FaTwitter size={16} />
                            </span>
                            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors duration-300">
                                <FaLinkedinIn size={16} />
                            </span>
                            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors duration-300">
                                <FaGithub size={16} />
                            </span>


                        </div>
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