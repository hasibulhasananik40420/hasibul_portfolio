"use client"
import Image from "next/image"
import javascript from "@/assets/internet_10003015.png"
import figma from "@/assets/figma.svg"
import dashboard from "@/assets/dashboard_8515055.png"
import api from "@/assets/api.svg"
import payment from "@/assets/money_14872998.png"
import database from "@/assets/data-server_9698472.png"
import effect from "@/assets/locomotion.svg"
import { MdArrowOutward } from "react-icons/md";
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// const cardData = [
//   {
//     image: javascript,
//     effect: effect,
//     title: "Full-Stack Web Development",
//     description:
//       "Build complete, responsive, and scalable web applications using the MERN stack. From front-end interfaces to backend APIs, I deliver tailored solutions that meet business needs.",
//   },

//   {
//     image: figma,
//     effect: effect,
//     title: "Responsive UI/UX Design",
//     description:
//       "Design modern, user-friendly interfaces using React.js and Tailwind CSS. Build intuitive layouts with animations and responsive designs that look great on any device.",
//   },
//   {
//     image: dashboard,
//     effect: effect,
//     title: "SaaS Application Development",
//     description:
//       "Develop multi-tenant SaaS platforms with subscription plans, payment integrations, and user management. Build scalable applications tailored for businesses of all sizes.",
//   },
//   {
//     image: database,
//     effect: effect,
//     title: "Database Management",
//     description: "Design efficient MongoDB schemas to optimize data storage and retrieval. Implement aggregation pipelines, indexing, and secure database solutions for high-performance applications.",
//   },
//   {
//     image: api,
//     effect: effect,
//     title: "API Development & Integration",
//     description:
//       "Create robust and secure RESTful APIs using Node.js and Express.js. Integrate third-party APIs such as payment gateways, social logins, and external data services seamlessly.",
//   },
//   {
//     image: payment,
//     effect: effect,
//     title: "Payment Gateway Integration",
//     description:
//       "Integrate secure payment gateways like Stripe, PayPal, or Razorpay into your applications. Enable seamless transactions for e-commerce or subscription-based services.",
//   },
// ];


const Service = () => {

 
  const containerRef = useRef(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const startButtonRef = useRef(null);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);

  useEffect(() => {
    const lines = lineRefs.current;
    const cards = [
      card1Ref.current,
      card2Ref.current,
      card3Ref.current,
      card4Ref.current,
      card5Ref.current,
      card6Ref.current,
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

    // Start using button animation
    gsap.fromTo(
      startButtonRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: startButtonRef.current,
          start: "top 80%",
        },
      }
    );

    
  }, []);

  
   
  return (
    <div className="bg2" id="service">
        <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2">
        <div ref={containerRef}>
                    <p  ref={(el) => {if (el) { lineRefs.current[0] = el}}} className="text-[#5B77F5] md:text-[20px] text-[16px] font-normal uppercase">My Specialization</p>
                     <h1 ref={(el) => {if (el) { lineRefs.current[1] = el}}} className="md:text-[46px] text-[32px] font-bold text-black">What My Services</h1>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10">
                
                   <div ref={card1Ref} className="bg-[#F9FAFF] hover:bg-[#5B77F5] duration-300 group md:p-6 p-5 rounded shadow cursor-pointer">
                       <div className="flex justify-between">
                       <Image className="w-16 h-16 object-contain" src={javascript} alt=""/>
                       <Image className="w-10 mt-[-50px]" src={effect} alt=""/>

                       </div>

                        <div className="mt-4">
                            <h2 className="md:text-[22px] text-[18px] font-bold text-black group-hover:text-white">Full-Stack Web Development  </h2>
                             <p className="text-[14px] font-normal text-[#C0C2C3] mt-4 group-hover:text-white">Build complete, responsive, and scalable web applications using the MERN stack. From front-end interfaces to backend APIs, I deliver tailored solutions that meet business needs.</p>
                        </div>
                   </div>

                   <div ref={card2Ref} className="bg-[#5B77F5] duration-300 group md:p-6 p-5 rounded shadow cursor-pointer">
                       <div className="flex justify-between">
                       <Image className="w-16 h-16 object-contain" src={figma} alt=""/>
                       <Image className="w-10 mt-[-50px]" src={effect} alt=""/>

                       </div>

                        <div className="mt-4">
                            <h2 className="md:text-[22px] text-[18px] font-bold text-white">Responsive UI/UX Design                            </h2>
                             <p className="text-[14px] font-normal text-white mt-4">Design modern, user-friendly interfaces using React.js and Tailwind CSS. Build intuitive layouts with animations and responsive designs that look great on any device.</p>
                        </div>
                   </div>


                   <div ref={card3Ref} className="bg-[#F9FAFF] hover:bg-[#5B77F5] duration-300 group md:p-6 p-5 rounded shadow cursor-pointer">
                       <div className="flex justify-between">
                       <Image className="w-16 h-16 object-contain" src={dashboard} alt=""/>
                       <Image className="w-10 mt-[-50px]" src={effect} alt=""/>

                       </div>

                        <div className="mt-4">
                            <h2 className="md:text-[22px] text-[18px] font-bold text-black group-hover:text-white"> SaaS Application Development </h2>
                             <p className="text-[14px] font-normal text-[#C0C2C3] mt-4 group-hover:text-white">Develop multi-tenant SaaS platforms with subscription plans, payment integrations, and user management. Build scalable applications tailored for businesses of all sizes.</p>
                        </div>
                   </div>

                   <div ref={card4Ref} className="bg-[#F9FAFF] hover:bg-[#5B77F5] duration-300 group md:p-6 p-5 rounded shadow cursor-pointer">
                       <div className="flex justify-between">
                       <Image className="w-16 h-16 object-contain" src={database} alt=""/>
                       <Image className="w-10 mt-[-50px]" src={effect} alt=""/>

                       </div>

                        <div className="mt-4">
                            <h2 className="md:text-[22px] text-[18px] font-bold text-black group-hover:text-white"> Database Management </h2>
                             <p className="text-[14px] font-normal text-[#C0C2C3] mt-4 group-hover:text-white">Design efficient MongoDB schemas to optimize data storage and retrieval. Implement aggregation pipelines, indexing, and secure database solutions for high-performance applications.</p>
                        </div>
                   </div>

                   <div ref={card5Ref} className="bg-[#F9FAFF] hover:bg-[#5B77F5] duration-300 group md:p-6 p-5 rounded shadow cursor-pointer">
                       <div className="flex justify-between">
                       <Image className="w-16 h-16 object-contain" src={api} alt=""/>
                       <Image className="w-10 mt-[-50px]" src={effect} alt=""/>

                       </div>

                        <div className="mt-4">
                            <h2 className="md:text-[22px] text-[18px] font-bold text-black group-hover:text-white"> API Development & Integration </h2>
                             <p className="text-[14px] font-normal text-[#C0C2C3] mt-4 group-hover:text-white">Create robust and secure RESTful APIs using Node.js and Express.js. Integrate third-party APIs such as payment gateways, social logins, and external data services seamlessly.</p>
                        </div>
                   </div>


                   <div ref={card6Ref} className="bg-[#F9FAFF] hover:bg-[#5B77F5] duration-300 group md:p-6 p-5 rounded shadow cursor-pointer">
                       <div className="flex justify-between">
                       <Image className="w-16 h-16 object-contain" src={payment} alt=""/>
                       <Image className="w-10 mt-[-50px]" src={effect} alt=""/>

                       </div>

                        <div className="mt-4">
                            <h2 className="md:text-[22px] text-[18px] font-bold text-black group-hover:text-white"> Payment Gateway Integration</h2>
                             <p className="text-[14px] font-normal text-[#C0C2C3] mt-4 group-hover:text-white">Integrate secure payment gateways like Stripe, PayPal, or Razorpay into your applications. Enable seamless transactions for e-commerce or subscription-based services.</p>
                        </div>
                   </div>




                </div>

     {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10">
      {cardData.map((card, index) => (
        <div
       
       
          className="bg-white hover:bg-[#5B77F5] duration-300 group md:p-6 p-5 rounded shadow cursor-pointer transform hover:scale-105"
        >
          <div className="flex justify-between">
            <Image
              className="w-16 h-16 object-contain"
              src={card.image}
              alt=""
              width={64}
              height={64}
            />
            <Image
              className="w-10 mt-[-50px]"
              src={card.effect}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="mt-4">
            <h2 className="md:text-[22px] text-[18px] font-bold text-black group-hover:text-white">
              {card.title}
            </h2>
            <p className="text-[14px] font-normal text-[#C0C2C3] mt-4 group-hover:text-white">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div> */}

                 <div className="flex justify-center mt-10">
                 <button ref={startButtonRef} className="bg-gradient-to-r from-[#5B77F5] to-[#4A90E2] rounded-md py-4 px-6 text-white text-[18px] font-medium flex justify-center items-center gap-3 group">

                See More
               <MdArrowOutward className="size-5 group-hover:rotate-45 duration-500" />

               </button>
                 </div>






 







        </div>
    </div>
  )
}

export default Service