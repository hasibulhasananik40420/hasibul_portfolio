/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="mt-16 portfolio-container">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Side: Personal Details Text & Resume Button */}
        <div className="w-full lg:w-[48%]">
          <div className="relative mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary inline-block">
              Personal Details
            </h2>
            {/* Accent Underline */}
            <div className="absolute -bottom-2 left-0 w-24 h-1 md:h-1.5 bg-secondary rounded-full"></div>
          </div>

          <p className="text-primary/80 text-lg leading-relaxed mb-10 max-w-lg">
            Hi, I'm Hasibul Hasan, a passionate web developer who loves creating
            interactive and user-friendly websites. I enjoy turning ideas into
            beautifully functional digital experiences.
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

        {/* Right Side: Detailed Table-like List */}
        <div className="w-full lg:w-[45%] space-y-3 pt-0 lg:pt-14">
          <div className="flex items-center gap-4 md:gap-10 py-1">
            <span className="text-primary font-bold w-36 shrink-0 text-base md:text-lg">Date of birth</span>
            <span className="text-primary font-medium text-lg">:</span>
            <span className="text-[#6366f1] font-semibold text-base md:text-lg">03 dec 1998</span>
          </div>

          <div className="flex items-center gap-4 md:gap-10 py-1">
            <span className="text-primary font-bold w-36 shrink-0 text-base md:text-lg">Languages</span>
            <span className="text-primary font-medium text-lg">:</span>
            <span className="text-[#6366f1] font-semibold text-base md:text-lg">English - Bangla</span>
          </div>

          <div className="flex items-center gap-4 md:gap-10 py-1">
            <span className="text-primary font-bold w-36 shrink-0 text-base md:text-lg">Nationality</span>
            <span className="text-primary font-medium text-lg">:</span>
            <span className="text-[#6366f1] font-semibold text-base md:text-lg">Bangladeshi</span>
          </div>

          <div className="flex items-center gap-4 md:gap-10 py-1">
            <span className="text-primary font-bold w-36 shrink-0 text-base md:text-lg">Interest</span>
            <span className="text-primary font-medium text-lg">:</span>
            <span className="text-[#6366f1] font-semibold text-base md:text-lg">Music, Reading, Traveling</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;