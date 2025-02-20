import React from 'react'
import { motion } from "framer-motion";
import Accordion from './Accordion'
import { sideDown } from '../../Utils/animation';

function FQA() {
  return (
    <>
        <div className="flex flex-col justify-center items-center my-5">
            <h1 className='font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center p-4 text-blue-950'>Got Questions?</h1>
            <motion.div 
            variants={sideDown(0.5,20)}
            initial="hidden"
            whileInView={"visible"}
            className="p-4 w-fit lg:w-[70%]">
                <Accordion/>
            </motion.div>
            <motion.div
            variants={sideDown(0.7,20)}
            initial="hidden"
            whileInView={"visible"}
            className="p-4 w-fit lg:w-[70%]">
                <Accordion/>
            </motion.div>
            <motion.div 
            variants={sideDown(0.9,20)}
            initial="hidden"
            whileInView={"visible"}
            className="p-4 w-fit lg:w-[70%]">
                <Accordion/>
            </motion.div>
            <motion.div 
            variants={sideDown(1.1,20)}
            initial="hidden"
            whileInView={"visible"}
            className="p-4 w-fit lg:w-[70%]">
                <Accordion/>
            </motion.div>
            <motion.div 
            variants={sideDown(1.3,20)}
            initial="hidden"
            whileInView={"visible"}
            className="p-4 w-fit lg:w-[70%]">
                <Accordion/>
            </motion.div>
            <motion.div 
            variants={sideDown(1.5,20)}
            initial="hidden"
            whileInView={"visible"}
            className="p-4 w-fit lg:w-[70%]">
                <Accordion/>
            </motion.div>
        </div>
    </>
  )
}

export default FQA