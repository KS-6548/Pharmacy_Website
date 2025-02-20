import React from 'react'
import google from '../../assets/en_get.svg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { sideUp } from '../../Utils/animation';

function Footer() {
  return (
    <>
        <motion.footer 
        variants={sideUp(0.5,100)}
        initial="hidden"
        whileInView={"visible"}
        className='w-full bg-secondary rounded-[50px] p-2 sm:p-5 font-popies'>
            <motion.div 
            variants={sideUp(0.8,90)}
            initial="hidden"
            whileInView={"visible"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 sm:p-5 bg-white m-3 rounded-[40px] place-items-start">
                <div className='grid grid-rows-7 gap-2 sm:gap-5'>
                    <h6 className='font-bold sm:text-xl'>Company</h6>
                    <h6>what's New</h6>
                    <h6>About</h6>
                    <h6>Press</h6>
                    <h6>Careers</h6>
                    <h6>Social Good</h6>
                    <h6>Contact</h6>
                </div>
                <div className='grid grid-rows-6 gap-2 sm:gap-5'>
                    <h6 className='font-bold sm:text-xl'>Community</h6> 
                    <h6>Medicine for Business</h6>
                    <h6>2022 Creator Report</h6>
                    <h6>Charities</h6>
                    <h6>Creator Profile</h6>
                    <h6>Explore Templetes</h6>
                </div>
                <div className='grid grid-rows-7 gap-2 sm:gap-5'>
                    <h6 className='font-bold sm:text-xl'>Support</h6>
                    <h6>Help Topics</h6>
                    <h6>Getting Started</h6>
                    <h6>Linktree Pro</h6>
                    <h6>Features & How-Tos</h6>
                    <h6>FAQs</h6>
                    <h6>Report a Violation</h6>
                </div>
                <div className='grid grid-rows-6 gap-1 sm:gap-5'>
                    <h6 className='font-bold sm:text-xl'>Trust & Legal</h6>
                    <h6>Terms and Conditions</h6>
                    <h6>privacy Notics</h6>
                    <h6>Cookie Notics</h6>
                    <h6>Trust Center</h6>
                    <h6>Cookie Preference</h6>
                </div>
                <div className="w-100 p-5 ">
                    <div className="flex justify-between flex-col items-center sm:flex-row">
                      <img src={google} alt="" className=''/>

                        <div className="flex gap-8">
                            <button className='bg-[#f5f7f9] text-[#445362] p-3 text-xl rounded-full'><FaInstagram/></button>
                            <button className='bg-[#f5f7f9] text-[#445362] p-3 text-xl rounded-full'><FaXTwitter/></button>
                            <button className='bg-[#f5f7f9] text-[#445362] p-3 text-xl rounded-full'><FaFacebookF/></button>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="h-32 sm:h-80 text-[2.5rem] sm:text-[8rem] bg-primary rounded-[50px] flex justify-center items-center m-5 font-bold text-secondary ">
                MEDCARE
            </div>
            <div className="text-primary flex flex-col items-center sm:flex-row justify-between mx-8">
                <h6>2022 Medcare</h6>
                <h6>Design & Developed by <span className='font-mono'>Karthik</span></h6>
            </div>
        </motion.footer>
    </>
  )
}

export default Footer