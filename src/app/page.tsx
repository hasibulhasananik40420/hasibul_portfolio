import AboutMe from "@/components/AboutMe/AboutMe"
import Blogs from "@/components/Blogs/Blogs"
import ClientReview from "@/components/ClientReview/ClientReview"
import Contact from "@/components/Contact/Contact"
import Projects from "@/components/Projects/Projects"
import Service from "@/components/Service/Service"
import Footer from "@/components/Shared/Footer"
import Navbar from "@/components/Shared/Navbar"
import Skills from "@/components/Skills/Skills"
import Banner from "@/components/ui/Banner"

const HomePage = () => {
  return (
    <div className="">
       <div className="bg-custom-image bg-[#F9F9F9] bg-no-repeat bg-cover bg-center min-h-screen" id="home">
       <Navbar/>
       <Banner/>
       </div>
       <Service/>
      <AboutMe/>
    
     
      <Projects/>
      <Skills/>
      <ClientReview/>
      <Blogs/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default HomePage