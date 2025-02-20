import React, { useContext, useState } from 'react'
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { TiTrash } from "react-icons/ti";
import { LuTrash2 } from "react-icons/lu";
import {motion} from 'framer-motion'
import { cartContext } from '../../App';

function CartItem({count,setCount}) {
    const {cart,setCart} = useContext(cartContext)

    const onDelete = (car) => {
        setCart(cart.filter((c)=>c.id!== car.id))
    }
    
  return (
    <>

        {cart.map((cart)=>(
            <motion.div
            layout
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, x:-100}}
            transition={{type: "spring", stiffness: 500, damping: 10}}
            className='flex items-center justify-between rounded-lg p-3 m-2 md:w-96'
            style={{
                background: 'linear-gradient(135deg, #a0e870 22%, #a0e870 52%)',
                borderLeft: '6px solid #143400'
            }}
            >
                <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shadow-2xl">
                        <img src={cart.image} alt="" className='w-full h-full '/>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">{cart.name}</h3>
                        <p className='text-gray-600 font-medium'>${cart.price}</p>
                        <div className="flex items-center">
                            {count <= 1 ? 
                            <motion.button
                            whileHover={{scale:1.1, rotate:10}}
                            whileTap={{scale: 0.9}}
                            onClick={()=>onDelete(cart)}
                            className='p-1 rounded-full shadow-2xl text-gray-400 hover:text-red-600 bg-white'
                            >
                            <TiTrash/>
                            </motion.button> 
                            :
                            <motion.button
                            whileHover={{scale: 1.1, rotate: 360}}
                            whileTap={{scale: 0.9}}
                            transition={{type: "spring"}}
                            onClick={()=>setCount(count-1)}
                            className='p-1 rounded-full shadow-2xl text-gray-400 hover:text-blue-600 bg-white'
                            >
                            <TiMinus/>
                            </motion.button>
                            }
                            <span className='px-3 py-2'>{count}</span>
                            <motion.button
                            whileHover={{scale: 1.1, rotate: 360}}
                            whileTap={{scale: 0.9}}
                            transition={{type: "spring"}}
                            onClick={()=>setCount(count+1)}
                            className='p-1 rounded-full shadow-2xl text-gray-400 hover:text-blue-600 bg-white'
                            >
                                <TiPlus/>
                            </motion.button>
                        </div>
                    </div>
                </div>
                <motion.button
                whileHover={{scale:1.1, rotate:10}}
                whileTap={{scale: 0.9}}
                onClick={()=> onDelete(cart)}
                className='text-gray-400 hover:text-red-500 bg-white p-2 shadow-xl rounded-[50px]'
                >
                    <LuTrash2 size={20}/>
                </motion.button>
            </motion.div>
        ))}
    </>
  )
}

export default CartItem