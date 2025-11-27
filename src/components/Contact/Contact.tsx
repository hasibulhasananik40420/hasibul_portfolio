"use client"
/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaSlack, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLocalPhone, MdOutlineLocationOn } from "react-icons/md";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowUpRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Info Animation
      gsap.fromTo(infoRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // Form Animation
      gsap.fromTo(formRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-24 relative overflow-hidden bg-[#0f0715]" id="contact">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#8750f7]/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side: Contact Info */}
          <div ref={infoRef}>
            <h2 className="text-[#8750f7] text-base md:text-lg font-bold uppercase tracking-wider mb-3">Get in Touch</h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Let’s work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] to-white">together!</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-12 max-w-lg leading-relaxed">
              I design and code beautifully simple things and I love what I do. Just simple like that!
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#2a1454] to-[#140c1c] flex items-center justify-center text-[#8750f7] text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300 border border-[#2a1454] group-hover:border-[#8750f7]">
                  <MdOutlineLocalPhone />
                </div>
                <div>
                  <p className="text-gray-400 text-xs md:text-sm mb-1">Phone</p>
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#8750f7] transition-colors duration-300">01790170749</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#2a1454] to-[#140c1c] flex items-center justify-center text-[#8750f7] text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300 border border-[#2a1454] group-hover:border-[#8750f7]">
                  <MdOutlineEmail />
                </div>
                <div>
                  <p className="text-gray-400 text-xs md:text-sm mb-1">Email</p>
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#8750f7] transition-colors duration-300 break-all">hasibulhasan40420@gmail.com</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#2a1454] to-[#140c1c] flex items-center justify-center text-[#8750f7] text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300 border border-[#2a1454] group-hover:border-[#8750f7]">
                  <MdOutlineLocationOn />
                </div>
                <div>
                  <p className="text-gray-400 text-xs md:text-sm mb-1">Address</p>
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#8750f7] transition-colors duration-300">
                    Lalpur Upazila, Natore, <br /> Rajshahi, Bangladesh
                  </h3>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4 mt-8 md:mt-12 flex-wrap">
              {[FaFacebookF, FaXTwitter, FaInstagram, FaSlack, FaTelegramPlane].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#140c1c] border border-[#2a1454] flex items-center justify-center text-white hover:bg-[#8750f7] hover:border-[#8750f7] hover:-translate-y-1 transition-all duration-300">
                  <Icon className="text-base md:text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div ref={formRef} className="bg-[#140c1c] p-6 md:p-10 rounded-2xl md:rounded-3xl border border-[#2a1454] relative group hover:border-[#8750f7]/50 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-[#8750f7]/5 to-transparent rounded-2xl md:rounded-3xl pointer-events-none"></div>

            <form action="https://formspree.io/f/mldrnjrz" method="post" className="relative z-10 flex flex-col gap-4 md:gap-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">First Name</label>
                  <input
                    className="w-full bg-[#0f0715] rounded-xl px-4 py-3 md:py-4 outline-none border border-[#2a1454] text-white focus:border-[#8750f7] transition-colors duration-300 placeholder:text-gray-600"
                    type="text" name="firstName" placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Last Name</label>
                  <input
                    className="w-full bg-[#0f0715] rounded-xl px-4 py-3 md:py-4 outline-none border border-[#2a1454] text-white focus:border-[#8750f7] transition-colors duration-300 placeholder:text-gray-600"
                    type="text" name="lastName" placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                  <input
                    className="w-full bg-[#0f0715] rounded-xl px-4 py-3 md:py-4 outline-none border border-[#2a1454] text-white focus:border-[#8750f7] transition-colors duration-300 placeholder:text-gray-600"
                    type="email" name="Email" placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Phone</label>
                  <input
                    className="w-full bg-[#0f0715] rounded-xl px-4 py-3 md:py-4 outline-none border border-[#2a1454] text-white focus:border-[#8750f7] transition-colors duration-300 placeholder:text-gray-600"
                    type="text" name="phone" placeholder="+880 1..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  className="w-full bg-[#0f0715] rounded-xl px-4 py-3 md:py-4 outline-none border border-[#2a1454] text-white focus:border-[#8750f7] transition-colors duration-300 placeholder:text-gray-600 min-h-[120px] md:min-h-[150px] resize-none"
                  name="message" placeholder="Type your message here..."
                />
              </div>

              <button type="submit" className="mt-2 md:mt-4 w-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white font-bold text-base md:text-lg py-3 md:py-4 rounded-xl hover:shadow-[0_0_30px_rgba(135,80,247,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                Send Message
                <BsArrowUpRight className="text-lg md:text-xl group-hover/btn:rotate-45 transition-transform duration-300" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact