import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import BrandsCard from '../../../Components/Cards/BrandsCard';

function Brand() {
  return (
    <>
        <div className="font-popies mx-3 sm:mx-9 lg:mx-16 text-blue-950 my-5 md:my-10">
            <div className="flex justify-between">
                <h1 className='font-extrabold text-2xl sm:text-4xl lg:text-5xl'>Featured Brands </h1>
                <button className='uppercase flex items-center mt-5'>see all<FaArrowRight className='ms-2'/></button>
            </div>
            <div className="relative bg-white m-3 overflow-hidden flex group ">
                <div className="flex justify-center items-center pt-10 animate-infinite-scroll group-hover:paused">
                    <BrandsCard/>
                </div>
            </div>  
        </div>
    </>
  )
}

export default Brand