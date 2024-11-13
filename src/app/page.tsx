import Blogs from "@/components/Blogs/Blogs"
import ClientReview from "@/components/ClientReview/ClientReview"
import Navbar from "@/components/Shared/Navbar"
import Banner from "@/components/ui/Banner"

const HomePage = () => {
  return (
    <div className="">
      <Navbar/>
      <Banner/>
      <ClientReview/>
      <Blogs/>
    
    </div>
  )
}

export default HomePage