import React from 'react'
import { IoClose } from "react-icons/io5"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Separator } from '../ui/separator'

interface BannerProps {
  isOpen: boolean
  onClose: () => void
}


const Sidebar = ({isOpen,onClose}:BannerProps) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
   
    <DrawerContent className="relative">
      <div className="mx-auto w-full max-w-6xl h-[400px]">
        <DrawerHeader>
          <DrawerTitle className="text-[24px] font-semibold text-black">Get in touch</DrawerTitle>
         
           <Separator className="my-2 max-w-[600px] bg-[#6E4EF2]" />
          <DrawerDescription className="text-[18px] max-w-[600px] font-normal text-black">Excited by innovation, I enjoy working on diverse projects and teaming up with passionate individuals to create something extraordinary.</DrawerDescription>
        </DrawerHeader>
        
          
          <div className="lg:flex gap-5 px-4 items-center">

            <div>
               <h4 className="text-[18px] font-medium text-black">Phone Number</h4>
                <p className="text-[16px] font-normal text-black">01790170749</p>
            </div> 

            <div className="h-[45px] bg-[#6E4EF2] w-[1px] lg:block hidden">

            </div>
            
             <div>
               <h4 className="text-[18px] font-medium text-black">Email</h4>
                <p className="text-[16px] font-normal text-black">hasibulhasan40420@gmail.com</p>
            </div>

            <div className="h-[45px] bg-[#6E4EF2] w-[1px] lg:block hidden">

            </div>
            
             <div>
               <h4 className="text-[18px] font-medium text-black">Linkedin</h4>
                <a href="https://www.linkedin.com/in/hasibul-hasan-06a987229/" target="_blank" className="text-[16px] font-normal text-black">hasibul-hasan-06a987229/</a>
            </div>
            
             <div className="h-[45px] bg-[#6E4EF2] w-[1px] lg:block hidden">

            </div>
            
             <div>
               <h4 className="text-[18px] font-medium text-black">Address</h4>
                <p className="text-[16px] font-normal text-black">Rajshahi, Bangladesh</p>
            </div>

          </div>
          
      
        <DrawerFooter>
        
          <DrawerClose asChild>
            <IoClose className="size-7 cursor-pointer text-red-600 absolute top-3 right-6" />
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
  )
}

export default Sidebar