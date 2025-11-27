"use client"
import Image from "next/image"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import review from "@/assets/1.png"
import review3 from "@/assets/3.png"
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const ClientReview = () => {


  const containerRef = useRef(null);
  const statsContainerRef = useRef(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const stat3Ref = useRef<HTMLSpanElement>(null);
  const stat4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const lines = lineRefs.current;

    const cards = [
      card1Ref.current,
      card2Ref.current,
      card3Ref.current,
      card4Ref.current,

    ];

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        markers: false,
      },
    })
      .fromTo(
        lines,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.4,
          ease: "power3.out",
        }
      );


    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: cards,
          start: "top 80%",
        },
      }
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        markers: false,
      },
    })
      .fromTo(
        lines,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.4,
          ease: "power3.out",
        }
      );

    // Stats Counter Animation
    // Stats Counter Animation
    // Stats Counter Animation
    const stats = [
      { ref: stat1Ref, end: 150 },
      { ref: stat2Ref, end: 130 },
      { ref: stat3Ref, end: 48 },
      { ref: stat4Ref, end: 10 },
    ];

    stats.forEach((stat) => {
      const element = stat.ref.current;
      const endValue = stat.end;

      if (element) {
        element.textContent = "0"; // Initialize to 0
      }

      const counter = { val: 0 };

      gsap.to(counter, {
        val: endValue,
        duration: 2.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: statsContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          if (element) {
            element.textContent = Math.floor(counter.val).toString();
          }
        },
      });
    });

  }, []);

  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Safely call slickPrev
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Safely call slickNext
    }
  };


  return (
    <div className="section-gradient-2">
      <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2">
        <div className="md:flex justify-between items-center w-full">
          <div ref={containerRef}>
            <p ref={(el) => { if (el) { lineRefs.current[0] = el } }} className="gradient-text md:text-[20px] text-[16px] font-normal uppercase">Testmonials</p>
            <h1 ref={(el) => { if (el) { lineRefs.current[1] = el } }} className="md:text-[46px] text-[32px] font-bold text-white">My Clients Feedback</h1>
          </div>

          <div className="md:block hidden">
            <div className="flex items-center gap-6">

              <button onClick={handlePrevClick} className="size-10 bg-white/10 rounded-md flex justify-center items-center text-white hover:bg-[#8750f7] transition-all duration-300">
                <IoIosArrowBack className="size-6" />
              </button>

              <button onClick={handleNextClick} className="size-10 bg-[#8750f7] rounded-md flex justify-center items-center text-white hover:bg-[#2a1454] transition-all duration-300">
                <IoIosArrowForward className="size-6" />
              </button>



            </div>
          </div>


        </div>

        <Slider className="w-[100%] mt-10" {...settings} ref={sliderRef}>


          <div className="lg:w-[50%] w-full p-6 glass-card shadow rounded-xl md:!flex gap-6 border border-white/10">
            <div className="lg:w-[40%] md:w-[50%] w-full">
              <Image className="w-full lg:h-[260px] md:h-[400px] h-[260px] rounded" src={review} alt="" />
            </div>

            <div className="md:w-[60%] w-full md:pt-0 pt-5">
              <h2 className="lg:text-[24px] md:text-[32px] text-[20px] font-medium text-white">Web App Development                  </h2>
              <h5 className="text-[14px] md:text-[18px] lg:text-[14px] font-normal text-gray-400 mt-1">Via review: 12 Mar 2024 - 20 May 2024 </h5>
              <p className="text-[14px] md:text-[18px] lg:text-[14px] font-normal text-gray-300 mt-4 line-clamp-4">
                Hasibul delivered an exceptional web app for our business. His expertise in React.js and Node.js ensured a seamless user experience. The project was completed on time, with clean code and great communication throughout.
              </p>
              <div className="flex items-center justify-between pt-5">
                <div>
                  <h2 className="text-[18px] text-white font-medium">- Sarah Lee   </h2>
                  <h5 className="text-[14px] font-normal text-gray-400">CTO at Webify</h5>

                </div>
                <div className="flex items-center gap-1 pt-3 md:pt-0">
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />


                </div>
              </div>
            </div>

          </div>


          <div className="lg:w-[50%] w-full p-6 glass-card shadow rounded-xl md:!flex gap-6 border border-white/10">
            <div className="lg:w-[40%] md:w-[50%] w-full">
              <Image className="w-full lg:h-[260px] md:h-[400px] h-[260px] rounded" src={review3} alt="" />
            </div>

            <div className="md:w-[60%] w-full md:pt-0 pt-5">
              <h2 className="lg:text-[24px] md:text-[32px] text-[20px] font-medium text-white">SaaS Development                  </h2>
              <h5 className="text-[14px] md:text-[18px] lg:text-[14px] font-normal text-gray-400 mt-1">Via review: 10 Sep 2024 - 18 Nov 2024                   </h5>
              <p className="line-clamp-4 text-[14px] md:text-[18px] lg:text-[14px] font-normal text-gray-300 mt-4"> Hasibul created a powerful SaaS dashboard that transformed the way we manage our business operations. The design was not only visually appealing but also highly intuitive, making it easy for our team to navigate and use effectively from day one.</p>

              <div className="flex items-center justify-between pt-5">
                <div>
                  <h2 className="text-[18px] text-white font-medium">- John Carter                        </h2>
                  <h5 className="text-[14px] font-normal text-gray-400">COO at Cloud</h5>

                </div>
                <div className="flex items-center gap-1 pt-3 md:pt-0">
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />

                </div>
              </div>
            </div>

          </div>


          <div className="lg:w-[50%] w-full p-6 glass-card shadow rounded-xl md:!flex gap-6 border border-white/10">
            <div className="lg:w-[40%] md:w-[50%] w-full">
              <Image className="w-full lg:h-[260px] md:h-[400px] h-[260px] rounded" src={'https://img.freepik.com/premium-photo/man-plain-clothes_160672-13632.jpg?ga=GA1.1.1614087858.1731598115&semt=ais_hybrid'} width={200} height={200} alt="" />
            </div>

            <div className="md:w-[60%] w-full md:pt-0 pt-5">
              <h2 className="lg:text-[24px] md:text-[32px] text-[20px] font-medium text-white">Chat Application               </h2>
              <h5 className="text-[14px] md:text-[18px] lg:text-[14px] font-normal text-gray-400 mt-1">Via review: 05 Aug 2024 - 15 Sep 2024                   </h5>
              <p className=" line-clamp-4 text-[14px] md:text-[18px] lg:text-[14px] font-normal text-gray-300 mt-4"> Hasibul created a responsive and efficient real-time chat application using the MERN stack. His integration of WebSockets for instant messaging and a sleek UI made the project stand out.</p>

              <div className="flex items-center justify-between pt-5">
                <div>
                  <h2 className="text-[18px] text-white font-medium">- Sarah Lee</h2>
                  <h5 className="text-[14px] font-normal text-gray-400">COO at pixzo.</h5>

                </div>
                <div className="flex items-center gap-1 pt-3 md:pt-0">
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />
                  <FaStar className="size-3 text-yellow-400" />

                </div>
              </div>
            </div>

          </div>


        </Slider>

        <div className="flex justify-center items-center gap-6 md:hidden block mt-8">

          <button onClick={handlePrevClick} className="size-10 bg-white/10 rounded-md flex justify-center items-center text-white hover:bg-[#8750f7] transition-all duration-300">
            <IoIosArrowBack className="size-6" />
          </button>

          <button onClick={handleNextClick} className="size-10 bg-[#8750f7] rounded-md flex justify-center items-center text-white hover:bg-[#2a1454] transition-all duration-300">
            <IoIosArrowForward className="size-6" />
          </button>



        </div>



        <div ref={statsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-16">
          <div ref={card1Ref} className="glass-card w-full shadow rounded-xl px-14 py-8 flex flex-col justify-center items-center hover:bg-white/10 duration-300 cursor-pointer group border border-white/10">
            <h3 className="md:text-[40px] text-[32px] font-bold text-white group-hover:text-[#8750f7] flex items-center">
              <span ref={stat1Ref}>150</span>+
            </h3>
            <h5 className="text-[18px] font-normal text-gray-300 mt-3 group-hover:text-white">Completed Projects</h5>
          </div>

          <div ref={card2Ref} className="glass-card w-full shadow rounded-xl px-14 py-8 flex flex-col justify-center items-center hover:bg-white/10 duration-300 cursor-pointer group border border-white/10">
            <h3 className="md:text-[40px] text-[32px] font-bold text-white group-hover:text-[#8750f7] flex items-center">
              <span ref={stat2Ref}>130</span>+
            </h3>
            <h5 className="text-[18px] font-normal text-gray-300 mt-3 group-hover:text-white">Cup of Tea</h5>
          </div>

          <div ref={card3Ref} className="w-full shadow rounded-xl px-14 py-8 flex flex-col justify-center items-center bg-[#8750f7] duration-300 cursor-pointer group">
            <h3 className="md:text-[40px] text-[32px] font-bold text-white flex items-center">
              <span ref={stat3Ref}>48</span>
            </h3>
            <h5 className="text-[18px] font-normal mt-3 text-white">Satisfied Customers</h5>
          </div>

          <div ref={card4Ref} className="glass-card w-full shadow rounded-xl px-14 py-8 flex flex-col justify-center items-center hover:bg-white/10 duration-300 cursor-pointer group border border-white/10">
            <h3 className="md:text-[40px] text-[32px] font-bold text-white group-hover:text-[#8750f7] flex items-center">
              <span ref={stat4Ref}>10</span>
            </h3>
            <h5 className="text-[18px] font-normal text-gray-300 mt-3 group-hover:text-white">Running Projects</h5>
          </div>

        </div>



      </div>
    </div>
  )
}

export default ClientReview