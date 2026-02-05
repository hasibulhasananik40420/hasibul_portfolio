import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#FAFBFD] mt-16 pt-16 pb-8 border-t border-gray-100">
            <div className="portfolio-container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    {/* Brand/Logo */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-primary text-2xl mb-2">Hasibul Hasan</h4>
                        <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
                            Building scalable digital experiences with clean code and modern aesthetics.
                        </p>
                    </div>

                   

                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 text-primary flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 text-primary flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">
                            <FaTwitter size={14} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 text-primary flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">
                            <FaLinkedinIn size={14} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 text-primary flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">
                            <FaGithub size={14} />
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                    <p className="text-gray-400 text-sm text-center">
                        &copy; {currentYear} <span className="text-primary font-semibold">Hasibul Hasan</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;