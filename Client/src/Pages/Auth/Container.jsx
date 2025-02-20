import React, { createContext, useState } from 'react'
import { motion } from "framer-motion";
import { Outlet, useNavigate } from 'react-router-dom';

export const AccountContext = createContext()

function Container() {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();
    const [active, setActive] = useState("signin")
    
      const playExpandingAnimation = () => {
        setIsExpanded(true);
        setTimeout(() => {
          setIsExpanded(false);
        }, expandingTransition.duration * 1200 - 1500);
      };
    
      const expandingTransition = {
        type: "string",
        duration: 2.3,
        stiffness: 30,
      };
    
      const backdropVariants = {
        expanded: {
          width: "333%",
          height: "1280px",
          borderRadius: "20%",
          transform: "rotate(60deg)",
        },
        collapsed: {
          width: "160%",
          height: "550px",
          borderRadius: "50%",
          transform: "rotate(60deg)",
        },
      };
      
      const switchToSignin = () => {
        playExpandingAnimation()
        setTimeout(() => {
          navigate("/auth/signin")
          setActive(!active)
        }, 500);
      }

      const switchToSignup = () => {
        playExpandingAnimation()
        setTimeout(() => {
          navigate("/auth/signup")
          setActive(!active)
        }, 500);
      }


  return (
    <>
    <AccountContext.Provider value={{switchToSignin, switchToSignup}}>
        <div className="flex justify-center items-center m-10">
        <div className="flex flex-col w-[280px] min-h-[600px] rounded-lg relative overflow-hidden shadow shadow-[#0f0f0f40] bg-white">
          <div className="w-full h-[250px] flex flex-col justify-end px-7 pb-20">
            <motion.div 
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
            className="w-[160%] h-[550px] absolute flex flex-col rounded-[50%] transform rotate-[60deg] top-[-290px] left-[-70px] bg-primary bg-gradient-to-r from-primary from-20% to-[#87b061] to-100%"></motion.div>
            {active && (
                <div className="w-full flex flex-col">
                <h2 className="text-3xl font-semibold text-white z-10 m-0">
                    Welcome
                </h2>
                <h2 className="text-3xl font-semibold text-white z-10 m-0">
                    Back
                </h2>
                <h5 className="text-white text-[11px] font-medium z-10 m-0 mt-2">
                    Please sign-in to continue!
                </h5>
                </div>
            )}
            {!active && (
                <div className="w-full flex flex-col">
                <h2 className="text-3xl font-semibold text-white z-10 m-0">
                    Create
                </h2>
                <h2 className="text-3xl font-semibold text-white z-10 m-0">
                    Account
                </h2>
                <h5 className="text-white text-[11px] font-medium z-10 m-0 mt-2">
                    Please sign-up to continue!
                </h5>
                </div>
            )}
          </div>
          <div className="w-full flex flex-col px-[1.8em]">
            <Outlet />
          </div>
        </div>
      </div>
    </AccountContext.Provider>
    </>
  )
}

export default Container