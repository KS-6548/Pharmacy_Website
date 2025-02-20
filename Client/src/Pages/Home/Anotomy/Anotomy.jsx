import React from 'react'
import { motion } from "framer-motion";
import AnotomyCard from '../../../Components/Cards/AnotomyCard'
import { sideUp } from '../../../Utils/animation';

function Anotomy() {
  return (
    <>
        <motion.div 
        variants={sideUp(0.5,60)}
        initial="hidden"
        whileInView={"visible"}
        className="relative -top-14 bg-white m-3 rounded-t-[50px] overflow-hidden flex group ">
            <div className="flex justify-center items-center pt-10 animate-infinite-scroll group-hover:paused">
                <AnotomyCard/>
            </div>
        </motion.div>
    </>
  )
}

export default Anotomy