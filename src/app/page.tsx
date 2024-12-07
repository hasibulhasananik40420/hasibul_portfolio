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
       <div className="bg-custom-image bg-no-repeat bg-cover min-h-screen">
       <Navbar/>
       <Banner/>
       </div>
      <AboutMe/>
    
      <Service/>
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