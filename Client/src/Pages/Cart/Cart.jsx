import React, { useContext, useEffect, useState } from 'react'
import CartItem from './CartItem'
import {motion,AnimatePresence} from 'framer-motion'
import { cartContext } from '../../App'

function Cart() {
    const {cart,setCart} = useContext(cartContext)
    const [total, setTotal] = useState(0)
    const [count, setCount] = useState(1)
    const gst = (total*0.05)/100
    const discount = (total*0.02)/100

    useEffect(() => {
        handlePrice()
    })
    
    const handlePrice = () => {
        let ans = 0
        cart.map((item)=>(
            ans += count * item.price
        ))
        setTotal(ans)
    }
    
  return (
    <>
        <div className="md:flex w-full font-popies">
            <div className="md:mr-52 ms-2">
            <h1 className='ms-5 text-2xl font-semibold text-secondary'>Cart</h1>
            <AnimatePresence>
                <CartItem count={count} setCount={setCount}/>
            </AnimatePresence>
            </div>
            <div className="border-t md:border-s md:border-t-0 p-5 m-5 ">
                <h1 className='text-2xl font-semibold text-secondary'>Total Price</h1>
                <div className="flex justify-between">
                    <h1 className='font-bold'>Total:</h1>
                    <span>{total}</span>
                </div>
                <div className="flex justify-between">
                    <h1 className='font-bold'>GST:</h1>
                    <span>{gst}</span>
                </div>
                <div className="flex justify-between">
                    <h1 className='font-bold'>Discount:</h1>
                    <span>{discount}</span>
                </div>
                <div className="flex justify-between">
                    <h1 className='font-bold'>Grand Total:</h1>
                    <span>{total+gst-discount}</span>
                </div>
                <motion.button 
                whileTap={{scale: 0.9}}
                transition={{type: "spring"}}
                className='bg-primary px-6 p-2 rounded-lg text-white my-5'
                >
                    Checkout
                </motion.button>
            </div>
        </div>
    </>
  )
}

export default Cart