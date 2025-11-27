"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowUpRight } from "react-icons/bs"
import { FaLaptopCode, FaPalette, FaCloudUploadAlt, FaDatabase, FaServer, FaCreditCard } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: "Full-Stack Web Development",
    description: "Build complete, responsive, and scalable web applications using the MERN stack. From front-end interfaces to backend APIs, I deliver tailored solutions that meet business needs.",
    color: "from-[#667eea] to-[#764ba2]"
  },
  {
    id: 2,
    icon: FaPalette,
    title: "Responsive UI/UX Design",
    description: "Design modern, user-friendly interfaces using React.js and Tailwind CSS. Build intuitive layouts with animations and responsive designs that look great on any device.",
    color: "from-[#f093fb] to-[#f5576c]"
  },
  {
    id: 3,
    icon: FaCloudUploadAlt,
    title: "SaaS Application Development",
    description: "Develop multi-tenant SaaS platforms with subscription plans, payment integrations, and user management. Build scalable applications tailored for businesses of all sizes.",
    color: "from-[#4facfe] to-[#00f2fe]"
  },
  {
    id: 4,
    icon: FaDatabase,
    title: "Database Management",
    description: "Design efficient MongoDB schemas to optimize data storage and retrieval. Implement aggregation pipelines, indexing, and secure database solutions for high-performance applications.",
    color: "from-[#43e97b] to-[#38f9d7]"
  },
  {
    id: 5,
    icon: FaServer,
    title: "API Development & Integration",
    description: "Create robust and secure RESTful APIs using Node.js and Express.js. Integrate third-party APIs such as payment gateways, social logins, and external data services seamlessly.",
    color: "from-[#fa709a] to-[#fee140]"
  },
  {
    id: 6,
    icon: FaCreditCard,
    title: "Payment Gateway Integration",
    description: "Integrate secure payment gateways like Stripe, PayPal, or Razorpay into your applications. Enable seamless transactions for e-commerce or subscription-based services.",
    color: "from-[#89f7fe] to-[#66a6ff]"
  }
];

const Service = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Cards Animation
      gsap.fromTo(".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-[#0f0715]" id="service">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#8750f7]/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2a1454]/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-[#8750f7] text-lg font-bold uppercase tracking-wider mb-3">My Specialization</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What My Services</h2>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-card group relative p-[1px] rounded-2xl bg-gradient-to-br from-[#2a1454] to-transparent hover:from-[#8750f7] hover:to-[#8750f7] transition-all duration-500"
            >
              <div className="bg-[#0f0715] h-full rounded-2xl p-8 relative overflow-hidden group-hover:bg-[#140c1c] transition-colors duration-500">

                {/* Hover Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-[1px]`}>
                    <div className="w-full h-full bg-[#1a1025] rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                      <service.icon className="text-3xl text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#8750f7] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Arrow Icon */}
                <div className="flex items-center gap-2 text-[#8750f7] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Read More</span>
                  <BsArrowUpRight className="text-lg" />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <button className="glass relative group md:px-8 px-6 py-4 md:py-4 rounded-xl text-[16px] font-semibold text-white overflow-hidden hover:scale-105 transition-all duration-300">
            <span className="flex items-center justify-center gap-4 relative z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
              <p>View All Services</p>
              <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
            </span>

            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
              <span className="text-[16px] font-semibold">View All Services</span>
              <BsArrowUpRight className="size-5 group-hover:rotate-45 duration-500" />
            </div>
          </button>
        </div>

      </div>
    </section>
  )
}

export default Service