import {motion, AnimatePresence, easeInOut, easeOut } from 'framer-motion'
import React from 'react'
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";


function ResopnsiveMenu({open}) {
  return (
    <AnimatePresence mode='wait'>
        {
            open && (
                <motion.div
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-100, transition:easeOut}}
                className=' top-20 left-0 w-full h-fit z-20'
                >
                    <div className='text-xl font-semibold bg-primary text-secondary py-10 m-6 rounded-3xl'>
                        <ul className='flex flex-col gap-10'>
                        <li>
                        <a href="" className='flex flex-col items-center'>
                            <span className="text-xs bg-orange-500 w-8 px-1 rounded text-white">
                                New    
                            </span>    
                            Healthcare Service
                        </a>
                    </li>
                    <li>
                        <a href="" className='flex justify-center items-center gap-1 text-orange-400'>
                            <RiDiscountPercentLine/>Offer
                        </a>
                    </li>
                    <li>
                        <Link to={"/cart"} className='flex justify-center items-center gap-1'>
                            <IoCartOutline/>Cart
                        </Link>
                    </li>
                    <li>
                        <Link to={"/auth/signin"} className='flex justify-center items-center gap-1'>
                            <BsPerson/>Login
                        </Link>
                    </li>
                        </ul>
                    </div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default ResopnsiveMenu