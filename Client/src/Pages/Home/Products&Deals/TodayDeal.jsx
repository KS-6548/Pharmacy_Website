import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import {medicines} from '../../../Utils/Medicine'
import { TbUpload } from "react-icons/tb";
import UploadFiles from '../../../Components/Cards/UploadFiles';
import AdvertiesmentCard from '../../../Components/Cards/AdvertiesmentCard';
import ProductCard from '../../../Components/Cards/ProductCard';
import { Link } from 'react-router-dom';
import { motion, transform } from "framer-motion";
import { sideLeft, sideRight } from '../../../Utils/animation';


function TodayDeal() {
    const [count, setCount] = useState(4)
    const [first, setfirst] = useState(0)
    const [slice, setSlice] = useState(1)
  return (
    <>
        <div className="font-popies mx-3 sm:mx-9 lg:mx-16 text-blue-950 my-5 md:my-10 overflow-hidden">
            <div className="flex justify-between ">
                <motion.h1 
                variants={sideLeft(0.5)}
                initial="hidden"
                whileInView={"visible"}
                className='font-extrabold text-2xl sm:text-4xl lg:text-5xl'>Today best deals <br className='hidden sm:block'/> for you!</motion.h1>
                <motion.div 
                variants={sideRight(0.5)}
                initial="hidden"
                whileInView={"visible"}>
                    <Link to={"/product"} className='uppercase flex items-center mt-5'>see all products <FaArrowRight className='ms-2'/></Link>
                </motion.div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <ProductCard Product={medicines} count={count}/>
            </div>  
        </div>

        <div className="m-1 md:flex flex-col lg:flex-row gap-8 justify-center items-center  overflow-hidden">
            <motion.div 
            variants={sideLeft(0.5)}
            initial="hidden"
            whileInView={"visible"}
            className="relative md:w-[590px] h-[369px] border rounded-[40px] p-5 bg-[#ffeb69]">
                <div className="h-[70%]">
                    <UploadFiles title={"Upload prescriptions to  place order"} desc={"Upload only .jpg .png or .pdf files Size limit is 15 MB"} text={"text-2xl"} size={"size-40"}/>
                </div>
                <div className="absolute bottom-8 flex justify-start items-center mt-5">
                    <button className='btn bg-[#3b341b] text-[#ffeb69]'><TbUpload/></button>
                    <button className='btn bg-[#3b341b] text-[#ffeb69]'>Order Via Prescription</button>
                    <a href="" className='ms-10 underline'>How to order?</a>
                </div>
            </motion.div>
            <motion.div
            variants={sideRight(0.5)}
            initial="hidden"
            whileInView={"visible"}>
                <AdvertiesmentCard slice={slice} first={first}/>
            </motion.div>
        </div>
    
    </>
  )
}

export default TodayDeal