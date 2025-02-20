import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { motion } from 'framer-motion'
import ReviewCard from "../../../Components/Cards/ReviewCard";
import AdvertiesmentCard from "../../../Components/Cards/AdvertiesmentCard";
import { sideLeft } from "../../../Utils/animation";

function Review() {
  const [first, setfirst] = useState(1);
  const [slice, setSlice] = useState(3);
  return (
    <>
      <div className="font-popies mx-3 sm:mx-9 lg:mx-16 text-blue-950 my-5 md:my-10">
        <div className="flex justify-between">
          <div className="">
            <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-5xl">
              What our Customers say
            </h1>
            <h1 className="font-bold flex items-center text-sm sm:text-4xl lg:text-2xl">
              <span className="text-yellow-400 flex">
                <TiStarFullOutline /> <TiStarFullOutline />{" "}
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
              </span>
              460 Reviews on{" "}
              <TiStarFullOutline className="text-yellow-400 hidden md:block" />{" "}
              Trustpilot
            </h1>
          </div>
          <button className="uppercase flex items-center mt-5">
            see all products <FaArrowRight className="ms-2" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>

      <motion.div
        variants={sideLeft(0.5)}
        initial="hidden"
        whileInView={"visible"}
        className="my-5 md:flex flex-col lg:flex-row gap-8 justify-center items-center  overflow-hidden"
      >
        <AdvertiesmentCard slice={slice} first={first} />
      </motion.div>
    </>
  );
}

export default Review;
