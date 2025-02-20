import React from "react";
import { motion } from "framer-motion";
import { GiMedicines } from "react-icons/gi";
import { FaBox } from "react-icons/fa6";
import { TbUpload } from "react-icons/tb";
import { sideDown, sideUp } from "../../../Utils/animation";
import BannerImg from "../../../assets/BannerImg.png";
import UploadFiles from "../../../Components/Cards/UploadFiles";

function Banner() {
  return (
    <>
      <motion.div
        variants={sideUp(0.2,200)}
        initial="hidden"
        whileInView={"visible"}
        className="relative h-[80vh] lg:h-[100vh] m-3 bg-primary rounded-t-[40px] font-popies text-secondary overflow-hidden transition-transform ease-in-out duration-200 select-none"
      >
        {/* Title */}
        <motion.h1
          variants={sideUp(0.6,200)}
          initial="hidden"
          whileInView={"visible"}
          className="absolute top-8 lg:top-0 left-8 lg:left-9 text-[3.5rem] md:text-[8rem] lg:text-[14.5rem] text-center font-bold"
        >
          Pharmacy
        </motion.h1>
        {/* Paragraph */}
        <motion.p
        variants={sideUp(0.6,30)}
        initial="hidden"
        whileInView={"visible"}
        className="absolute text-xs md:text-[16px] top-28 md:top-52 lg:top-80 left-8 lg:left-14 uppercase font-medium">
          online medicine delivery is the process <br /> of ordering medications
          through a <br /> website or app and having them delivered <br /> to
          your doorstep
        </motion.p>
        {/* Icons */}
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"string", stiffness:100, delay:0.5}}
        className="absolute text-xs md:text-[16px] top-52 md:-bottom-52 left-8 lg:left-14 flex items-center">
          <div className="bg-secondary w-fit p-3 rounded-full">
            <FaBox className="text-primary text-xl" />
          </div>
          <span className="ps-3 font-semibold">
            Delivery to <br /> your doorstep
          </span>
        </motion.div>
        <motion.div 
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"string", stiffness:100, delay:0.5}}
        className="absolute text-xs md:text-[16px] top-52 md:-bottom-52 left-52 lg:left-64 flex items-center">
          <div className="bg-secondary w-fit p-3 rounded-full">
            <GiMedicines className="text-primary text-xl" />
          </div>
          <span className="ps-3 font-semibold">
            100% Genuine <br /> Medicines
          </span>
        </motion.div>
        {/* Image of Banner */}
        <div className="absolute bottom-5 lg:top-28 right-0 md:-right-10 lg:left-52 w-[450px] md:w-[560px] lg:w-[800px]">
          <motion.img
            variants={sideUp(1,200)}
            initial="hidden"
            whileInView={"visible"}
            src={BannerImg}
            alt="Banner"
          />
        </div>
        {/* Prescriptions upload */}
        <motion.div 
        variants={sideDown(1,-100)}
        initial="hidden"
        whileInView={"visible"}
        className="hidden sm:block absolute md:right-96 lg:right-10 md:bottom-32 lg:bottom-20 rounded-2xl bg-white md:w-[45%] lg:w-[25%] md:h-[28%] lg:h-[35%] p-3">
          <div className="md:h-[100%] lg:h-[70%]">
            <UploadFiles
              title={"Upload prescriptions"}
              text={"text-xl"}
              size={"size-20"}
            />
          </div>
          <div className="hidden lg:flex justify-start items-center mt-5">
            <button className="btn">
              <TbUpload />
            </button>
            <button className="btn">Order Via Prescription</button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Banner;
