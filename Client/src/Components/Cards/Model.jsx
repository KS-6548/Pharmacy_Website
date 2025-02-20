import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cartContext } from "../../App";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

function Model({ onClose, Product }) {
  const { cart, setCart } = useContext(cartContext);

  const addCart = (med) => {
    setCart([...cart, med]);
  };

  const removeCart = (med) => {
    setCart(cart.filter((c) => c.id !== med.id));
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 flex justify-center items-center z-10"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full relative max-w-[80%] h-[450px] shadow-2xl rounded-xl bg-white overflow-hidden m-5 text-center border flex"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <img
            src={Product.image}
            alt={Product.name}
            className="m-5 rounded-2xl shadow-inner border-[3px] w-1/2"
          />
          <div className="p-5 text-start">
            <h1 className="text-2xl font-semibold tracking-widest">
              {Product.name}
            </h1>
            <h2 className="text-2xl font-semibold tracking-widest">
              {Product.manufacturer}
            </h2>
            <h2 className="font-bold text-gray-400 my-5">${Product.price}</h2>
            <h2 className="">{Product.description}</h2>
            <div className="my-2 ">
                <h1 className="font-semibold">Stock</h1>
                <h2 className="">{Product.stock}</h2>
            </div>
            <div className="">
              <h1 className="my-2 font-semibold">QTY</h1>
              <motion.button
                whileHover={{ scale: 1.6}}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring" }}
                onClick={() => setCount(count - 1)}
                className="p-1 rounded-full shadow-2xl text-gray-400 hover:text-blue-600 bg-white"
              >
                <TiMinus />
              </motion.button>
              <span className="px-3 py-2">1</span>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring" }}
                onClick={() => setCount(count + 1)}
                className="p-1 rounded-full shadow-2xl text-gray-400 hover:text-blue-600 bg-white"
              >
                <TiPlus />
              </motion.button>
            </div>
            <div className="absolute bottom-10">
              {cart.includes(Product) ? (
                <button
                  className="transition ease-in-out delay-100 duration-300 border border-white-950 text-red-900 hover:text-white rounded-3xl p-2 hover:bg-red-950 "
                  onClick={() => removeCart(Product)}
                >
                  - Remove To Cart
                </button>
              ) : (
                <button
                  className="transition ease-in-out delay-100 duration-300 border border-blue-950 text-blue-900 hover:text-white rounded-3xl p-2 hover:bg-blue-950 "
                  onClick={() => addCart(Product)}
                >
                  + Add To Cart
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Model;
