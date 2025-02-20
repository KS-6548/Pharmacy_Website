import React from 'react'
import { motion } from "framer-motion";
import { TiStarFullOutline } from "react-icons/ti";

function ReviewCard() {
  return (
    <>
      <div className="grid grid-rows-1">
        <motion.div 
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.8,stiffness:100,type:"string"}}
        className="w-[285px] h-[350px] border rounded-3xl p-5 m-5 bg-[#f5f7f9]">
          <h1 className='mt-5 text-blue-950 font-semibold'>I had a great check-up at Medicare Health Service.</h1>
          <p className='mt-5 text-blue-850 text-sm tracking-wide'>"I have been a patient at your Medicare healthcare service for over a year now, and I must say that I am extremely satisfied with the level."</p>
          <div className="mt-16">
            <span className='flex text-yellow-300 text-xl'>
              <TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/>
            </span>
            Darlene Robertson
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default ReviewCard