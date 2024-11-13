import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const ClientReview = () => {
  return (
    <div className="bg-[#ECF0F3]">
        <div className="max-w-7xl mx-auto md:py-[100px] py-16 px-3 md:px-6 lg:px-2">
        <div className="md:flex justify-between items-center">
                <div>
                    <p className="text-[#5B77F5] md:text-[20px] text-[16px] font-normal uppercase">Testmonials</p>
                     <h1 className="md:text-[46px] text-[32px] font-bold text-black">My Clients Feedback</h1>
                </div>

                 <div className="flex items-center gap-6">

                 <button className="size-10 bg-white rounded-md flex justify-center items-center text-[#5B77F5]">
                     <IoIosArrowBack className="size-6" />
                     </button>
                      
                     <button className="size-10 bg-[#5B77F5] rounded-md flex justify-center items-center text-white">
                     <IoIosArrowForward className="size-6" />
                     </button>

                       

                 </div>
            </div>
        </div>
    </div>
  )
}

export default ClientReview