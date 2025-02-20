import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Accordion() {
    const [accordionOpen,setAccordionOpen] = useState(false)
  return (
    <>
        <div className={`p-7 text-blue-950 ${accordionOpen ? "bg-primary" :"bg-[#f5f7f9]"} rounded-2xl`}>
            <button onClick={()=> setAccordionOpen(!accordionOpen)} className='flex justify-between w-full'>
                <span className='text-xl font-bold'>How do I start online consultation with doctor on Medcare?</span>
                {accordionOpen ? <span className='flex justify-center items-center mt-5 md:mt-0 ms-5'><IoIosArrowUp/></span> : <span className='flex justify-center items-center mt-5 md:mt-0 ms-5'><IoIosArrowDown/></span>}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className={`overflow-hidden ${accordionOpen ? "mt-10" : ""}`}>
                    Online doctor consultation or online medical consultation is a method to connect patients and doctor virtually.
                    it is a convenient and easy way to get online doctor advice using doctor appa or telemedicine apps or platforms, and the internet.
                </div>
            </div>
        </div>
    </>
  )
}

export default Accordion