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
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

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
        },{
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
    <div className="bg-[#F9FAFF]">
        <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2">
        <div className="md:flex justify-between items-center w-full">
                <div ref={containerRef}>
                    <p ref={(el) => {if (el) { lineRefs.current[0] = el}}} className="text-[#5B77F5] md:text-[20px] text-[16px] font-normal uppercase">Testmonials</p>
                     <h1 ref={(el) => {if (el) { lineRefs.current[1] = el}}} className="md:text-[46px] text-[32px] font-bold text-black">My Clients Feedback</h1>
                </div>

                 <div className="md:block hidden">
                 <div className="flex items-center gap-6">

<button onClick={handlePrevClick} className="size-10 bg-white rounded-md flex justify-center items-center text-[#5B77F5]">
    <IoIosArrowBack className="size-6" />
    </button>
     
    <button onClick={handleNextClick} className="size-10 bg-[#5B77F5] rounded-md flex justify-center items-center text-white">
    <IoIosArrowForward className="size-6" />
    </button>

      

</div>
                 </div>

                  
            </div>

            <Slider className="w-[100%] mt-10" {...settings} ref={sliderRef}>
         
          
            <div className="lg:w-[50%] w-full p-6 bg-white shadow  rounded md:!flex gap-6">
                <div className="lg:w-[40%] md:w-[50%] w-full">
                  <Image className="w-full lg:h-[260px] md:h-[400px] h-[260px] rounded" src={review} alt=""/>
                </div>

                <div className="md:w-[60%] w-full md:pt-0 pt-5">
                  <h2 className="lg:text-[24px] md:text-[32px] text-[20px] font-medium text-black">Web App Development                  </h2>
                   <h5 className="text-[14px] md:text-[18px] lg:text-[14px] font-normal text-[#C0C2C3] mt-1">Via review: 12 Mar 2024 - 20 May 2024 </h5>
                   <p className="text-[14px] md:text-[18px] lg:text-[14px] font-normal text-[#C0C2C3] mt-4 line-clamp-4">
                   Hasibul delivered an exceptional web app for our business. His expertise in React.js and Node.js ensured a seamless user experience. The project was completed on time, with clean code and great communication throughout.
                   </p>
                   <div className="flex items-center justify-between pt-5">
                      <div>
                        <h2 className="text-[18px] text-black font-medium">- Sarah Lee   </h2>
                         <h5 className="text-[14px] font-normal text-[#C0C2C3]">CTO at Webify</h5>
                     
                      </div>
                      <div className="flex items-center gap-2 pt-3 md:pt-0">
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>

                      </div>
                   </div>
                </div>

            </div>


            <div className="lg:w-[50%] w-full p-6 bg-white shadow  rounded md:!flex gap-6">
                <div className="lg:w-[40%] md:w-[50%] w-full">
                  <Image className="w-full lg:h-[260px] md:h-[400px] h-[260px] rounded" src={review3} alt=""/>
                </div>

                <div className="md:w-[60%] w-full md:pt-0 pt-5">
                  <h2 className="lg:text-[24px] md:text-[32px] text-[20px] font-medium text-black">SaaS Development                  </h2>
                   <h5 className="text-[14px] md:text-[18px] lg:text-[14px] font-normal text-[#C0C2C3] mt-1">Via review: 10 Sep 2024 - 18 Nov 2024                   </h5>
                   <p className="line-clamp-4 text-[14px] md:text-[18px] lg:text-[14px] font-normal text-[#C0C2C3] mt-4"> Hasibul created a powerful SaaS dashboard that transformed the way we manage our business operations. The design was not only visually appealing but also highly intuitive, making it easy for our team to navigate and use effectively from day one.</p>
               
                   <div className="flex items-center justify-between pt-5">
                      <div>
                        <h2 className="text-[18px] text-black font-medium">- John Carter                        </h2>
                         <h5 className="text-[14px] font-normal text-[#C0C2C3]">COO at Cloud</h5>
                     
                      </div>
                      <div className="flex items-center gap-2 pt-3 md:pt-0">
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>

                      </div>
                   </div>
                </div>

            </div>

        
            <div className="lg:w-[50%] w-full p-6 bg-white shadow  rounded md:!flex gap-6">
                <div className="lg:w-[40%] md:w-[50%] w-full">
                  <Image className="w-full lg:h-[260px] md:h-[400px] h-[260px] rounded" src={'https://img.freepik.com/premium-photo/man-plain-clothes_160672-13632.jpg?ga=GA1.1.1614087858.1731598115&semt=ais_hybrid'} width={200} height={200} alt=""/>
                </div>

                <div className="md:w-[60%] w-full md:pt-0 pt-5">
                  <h2 className="lg:text-[24px] md:text-[32px] text-[20px] font-medium text-black">Chat Application               </h2>
                   <h5 className="text-[14px] md:text-[18px] lg:text-[14px] font-normal text-[#C0C2C3] mt-1">Via review: 05 Aug 2024 - 15 Sep 2024                   </h5>
                   <p className=" line-clamp-4 text-[14px] md:text-[18px] lg:text-[14px] font-normal text-[#C0C2C3] mt-4"> Hasibul created a responsive and efficient real-time chat application using the MERN stack. His integration of WebSockets for instant messaging and a sleek UI made the project stand out.</p>
               
                   <div className="flex items-center justify-between pt-5">
                      <div>
                        <h2 className="text-[18px] text-black font-medium">- Sarah Lee</h2>
                         <h5 className="text-[14px] font-normal text-[#C0C2C3]">COO at pixzo.</h5>
                     
                      </div>
                      <div className="flex items-center gap-2 pt-3 md:pt-0">
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>
                      <FaStar className="size-5 text-yellow-700"/>

                      </div>
                   </div>
                </div>

            </div>

        
            </Slider>

            <div className="flex justify-center items-center gap-6 md:hidden block mt-8">

<button onClick={handlePrevClick} className="size-10 bg-white rounded-md flex justify-center items-center text-[#5B77F5]">
    <IoIosArrowBack className="size-6" />
    </button>
     
    <button onClick={handleNextClick} className="size-10 bg-[#5B77F5] rounded-md flex justify-center items-center text-white">
    <IoIosArrowForward className="size-6" />
    </button>

      

</div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-16">
                <div ref={card1Ref} className="bg-white w-full shadow rounded px-14 py-8 flex flex-col justify-center items-center hover:bg-[#5B77F5] duration-300 cursor-pointer group">
                  <h3 className="md:text-[40px] text-[32px] font-bold text-black group-hover:text-white">150+</h3>
                   <h5 className="text-[18px] font-normal text-[#C0C2C3] mt-3 group-hover:text-white">Compleated Project</h5>
                </div>
                
                <div ref={card2Ref} className="bg-white w-full shadow rounded px-14 py-8 flex flex-col justify-center items-center hover:bg-[#5B77F5] duration-300 cursor-pointer group">
                  <h3 className="md:text-[40px] text-[32px] font-bold text-black group-hover:text-white">130+</h3>
                   <h5 className="text-[18px] font-normal text-[#C0C2C3] mt-3 group-hover:text-white">Cup of Tea</h5>
                </div>

                <div ref={card3Ref} className="w-full shadow rounded px-14 py-8 flex flex-col justify-center items-center bg-[#5B77F5] duration-300 cursor-pointer group">
                  <h3 className="md:text-[40px] text-[32px] font-bold text-white">48</h3>
                   <h5 className="text-[18px] font-normal  mt-3 text-white">Satisfied Customers</h5>
                </div>

                <div ref={card4Ref} className="bg-white w-full shadow rounded px-14 py-8 flex flex-col justify-center items-center hover:bg-[#5B77F5] duration-300 cursor-pointer group">
                  <h3 className="md:text-[40px] text-[32px] font-bold text-black group-hover:text-white">10</h3>
                   <h5 className="text-[18px] font-normal text-[#C0C2C3] mt-3 group-hover:text-white">Running Projects</h5>
                </div>

            </div>
          


        </div>
    </div>
  )
}

export default ClientReview