import type { PersonalInfo, ServiceItem, ExperienceItem, EducationItem, SkillItem, PortfolioItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Hasibul Hasan",
  role: "Frontend-Focused Full-Stack Developer",
  avatar: "/images/hero.png",
  avatarSecondary: "/images/hero.png",
  bio: "I am a Frontend-Focused Full-Stack Developer based in Bangladesh, working worldwide. I specialize in building responsive, high-performance web applications with clean frontend architecture and scalable backend integrations. I bring deep expertise in React, Next.js, TypeScript, and modern APIs to deliver seamless, production-ready digital products.",
  shortBio: "Frontend-Focused Full-Stack Developer passionate about engineering clean, performant, and user-centric web applications with end-to-end reliability.",
  email: "hasibulhasan40420@gmail.com",
  phone: "+880 1790 170 749",
  location: "Rajshahi, Bangladesh",
  dateOfBirth: "03 Dec 1998",
  languages: "English - Bangla",
  nationality: "Bangladeshi",
  interests: "Music, Reading, Traveling",
  resumeUrl: "https://docs.google.com/document/d/1tUKL4lyBqdnra6BzwD2LYphEn8_P5cGWA_pPU46aLEA/edit?usp=sharing",
  socials: {
    linkedin: "https://www.linkedin.com/in/hasibul-hasan-06a987229/?isSelfProfile=true",
    facebook: "https://www.facebook.com/share/1RfXmoe5qv/",
    twitter: "https://x.com/Hasibul89641710",
    github: "https://github.com/hasibulhasananik40420"
  }
};

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    title: "Frontend Development",
    iconName: "Monitor",
    description: "Building fast, responsive, and interactive user interfaces using modern frameworks like React and Next.js. I specialize in pixel-perfect implementation and smooth UX.",
    features: ["React & Next.js Expert", "Tailwind CSS Styling", "Responsive Design", "State Management"]
  },
  {
    id: "02",
    title: "Backend & API Development",
    iconName: "Code",
    description: "Developing robust server-side logic and database architectures. I focus on creating secure, scalable APIs that power complex web applications.",
    features: ["Node.js & Express", "Database Design", "REST & GraphQL APIs", "Serverless Functions"]
  },
  {
    id: "03",
    title: "Full Stack Solutions",
    iconName: "Layout",
    description: "Holistic web application development from concept to deployment. I manage both client and server-side to ensure seamless performance and integration.",
    features: ["End-to-End Development", "Deployment & Hosting", "Database Integration", "User Authentication"]
  },
  {
    id: "04",
    title: "E-Commerce Development",
    iconName: "Gem",
    description: "Creating high-converting online stores with secure checkout processes and inventory management. Integrated with popular payment gateways.",
    features: ["Stripe/PayPal Integration", "Custom Shop Features", "Order Management", "Product Discovery"]
  },
  {
    id: "05",
    title: "Performance & SEO",
    iconName: "Search",
    description: "Optimizing web applications for maximum speed and search engine visibility. I focus on Core Web Vitals and best practices for technical SEO.",
    features: ["Load Time Optimization", "SEO Best Practices", "Core Web Vitals Fixes", "Efficient Bundling"]
  },
  {
    id: "06",
    title: "Clean Code Audit",
    iconName: "Shield",
    description: "Reviewing and refactoring legacy codebases to improve maintainability, reduce technical debt, and implement modern development standards.",
    features: ["Code Reviews", "System Refactoring", "Security Audits", "Unit Testing Setup"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Advertising For Business - A4B",
    role: "Web & App IT Company",
    period: "2025 - Present",
    description: "Built responsive mobile and web layouts for various clients, implementing state-of-the-art animations, API integrations, and robust user interfaces.",
    address: "25/2 Lake Circus Road, Kalabagan, Dhaka, Bangladesh, 1205",
    position: "Frontend developer"
  },
  {
    id: 2,
    company: "Pixelfit",
    role: "Creative full stack web design & development",
    period: "2023 - 2024",
    description: "Designed and developed scalable web applications using modern technologies with focus on design fidelity and component architecture.",
    address: "Block -A Rd No. 6, Pabna 6600, Bangladesh",
    position: "Frontend developer"
  },
  {
    id: 3,
    company: "Aniya Network Solutions Inc.",
    role: "Web Design IT Company",
    period: "2022 - 2023",
    description: "Delivered quality code by applying best development practices, cross-browser compatibility, and client requirement analysis.",
    address: "Suite 701, 555 Burrard Street, Vancouver, BC V7X 1M8, Canada",
    position: "Frontend developer"
  }
];

export const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Varendra University",
    period: "2018 - 2022",
    description: "Acquired in-depth fundamentals of software engineering, algorithms, data structures, and computer networks."
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (Science)",
    institution: "Rajshahi Model School & College",
    period: "2016 - 2018",
    description: "Focused on Higher Mathematics, Physics, and ICT foundations."
  }
];

export const skillsData: SkillItem[] = [
  { name: "React.js / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript / JavaScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS / CSS3", level: 95, category: "Frontend" },
  { name: "Redux / Zustand", level: 85, category: "Frontend" },
  { name: "HTML5 / Semantic UI", level: 98, category: "Frontend" },
  { name: "Node.js & Express", level: 80, category: "Backend" },
  { name: "RESTful APIs / GraphQL", level: 85, category: "Backend" },
  { name: "MongoDB / Mongoose", level: 75, category: "Backend" },
  { name: "Git & GitHub", level: 92, category: "Tools & Methods" },
  { name: "Figma to Code", level: 95, category: "Tools & Methods" },
  { name: "Vercel / Netlify Deployment", level: 90, category: "Tools & Methods" },
  { name: "Performance & SEO", level: 88, category: "Tools & Methods" }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Tailor Shop Management",
    category: "Web Application",
    image: "/images/tailorfit.png",
    link: "https://tailorfitapp.com",
    description: "Digital solution for modern tailor shops to handle measurements, orders, and customer management.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"]
  },
  {
    id: 11,
    title: "Your Cab Exeter",
    category: "Mobile App",
    image: "/images/cab.jpg",
    link: "https://play.google.com/store/apps/details?id=com.yourcabexeter",
    description: "Booking and dispatching app for taxi services in Exeter, UK, with real-time tracking and payment integration.",
    tags: ["Next.js", "Tailwind CSS", "SEO"]
  },
  {
    id: 2,
    title: "Nextify Homes",
    category: "Real Estate",
    image: "/images/nextify.png",
    link: "https://nextify-homes.netlify.app/",
    description: "Modern real estate platform turning property hunting and management dreams into reality.",
    tags: ["Next.js", "Tailwind CSS", "SEO"]
  },
  {
    id: 3,
    title: "SkillionTech",
    category: "EdTech Platform",
    image: "/images/skillion.png",
    link: "https://skilliontech.com",
    description: "Interactive online learning hub helping students master essential IT and programming skills.",
    tags: ["React", "Next.js", "Interactive UI"]
  },
  {
    id: 12,
    title: "Amiya Fashion",
    category: "Ecommerce",
    image: "/images/ecommerce.png",
    link: "https://amiya-fashion.netlify.app/",
    description: "E-commerce platform for fashion enthusiasts, offering a seamless shopping experience with curated collections.",
    tags: ["React", "Tailwind CSS", "Interactive UI"]
  },
  {
    id: 4,
    title: "Cartzy Store",
    category: "Ecommerce",
    image: "/images/cartzy.png",
    link: "https://cartzy-henna.vercel.app/",
    description: "High-converting online store with seamless cart flows, dynamic catalog, and fast checkout.",
    tags: ["React", "Redux", "E-commerce"]
  },
  {
    id: 5,
    title: "Business & IT Solutions",
    category: "Landing Page",
    image: "/images/putech.jpg",
    link: "https://putech-nextjs.vercel.app/",
    description: "High-end corporate IT solutions landing page with elegant animations and corporate layout.",
    tags: ["Next.js", "Tailwind CSS", "Corporate"]
  },
  {
    id: 6,
    title: "Growee Creative Digital Agency",
    category: "Agency",
    image: "/images/growee.png",
    link: "https://growee-react.vercel.app",
    description: "Creative digital agency template featuring sleek micro-interactions and contemporary aesthetics.",
    tags: ["React", "Tailwind CSS", "Creative"]
  },
  {
    id: 7,
    title: "Sasly Landing Page",
    category: "UI/UX Design",
    image: "/images/sasly.png",
    link: "https://sasly-react.vercel.app",
    description: "Multipurpose SaaS landing page built with clean design language and conversion-focused sections.",
    tags: ["UI/UX", "React", "SaaS"]
  },
  {
    id: 8,
    title: "Chad Smith Portfolio",
    category: "Portfolio",
    image: "/images/chad.png",
    link: "https://chad-smith.vercel.app/",
    description: "Personal web application portfolio showcasing projects and career achievements.",
    tags: ["React", "CSS Animation", "Portfolio"]
  },
  {
    id: 9,
    title: "AI Landing Page",
    category: "Landing Page",
    image: "/images/ai.png",
    link: "https://startling-boba-daa0dd.netlify.app/",
    description: "Modern AI SaaS landing page with dark futuristic visual aesthetic and dynamic components.",
    tags: ["AI SaaS", "Tailwind CSS", "React"]
  },
  {
    id: 10,
    title: "Chad's Tutoring",
    category: "Education",
    image: "/images/chad-tutoring.png",
    link: "https://chad-smith.vercel.app/",
    description: "Educational platform for math, reading, and writing tutoring with scheduling features.",
    tags: ["Education", "React", "Responsive"]
  }
];
