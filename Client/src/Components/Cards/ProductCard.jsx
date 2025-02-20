import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { cartContext } from "../../App";
import { AnimatePresence } from "framer-motion";
import Model from "./Model";

function ProductCard({ Product, count }) {
  const { cart, setCart } = useContext(cartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null)

  const addCart = (med) => {
    setCart([...cart, med]);
  };
  const removeCart = (med) => {
    setCart(cart.filter((c) => c.id !== med.id));
  };
  return (
    <>
      {Product.slice(0, count).map((med, index) => (
        <>
          <div className="grid grid-rows-1" key={index}>
            <div
              className="w-[285px] h-[450px] border rounded-3xl text-blue-950 m-5 bg-[#f5f7f9] cursor-pointer "
              onClick={() => {setIsOpen(true); setSelectProduct(med)}}
            >
              <div className="h-2/3 p-5">
                <img src={med.image} alt={med.name} className="w-full h-full hover:scale-105 transition-all" />
              </div>
              <div className="rounded-3xl h-1/3 bg-white p-4">
                <div className="flex justify-between opacity-60 font-medium">
                  <span>{med.category}</span>
                  <span className="flex justify-center items-center">
                    <FaStar className="me-1 text-orange-500" />
                    (4.5)
                  </span>
                </div>
                <div className="">
                  <h1 className="text-2xl text-start font-bold">{med.name}</h1>
                </div>
                <div className="flex justify-between items-center pt-3">
                  {cart.includes(med) ? (
                    <button
                      className="transition ease-in-out delay-100 duration-300 border border-white-950 text-red-900 hover:text-white rounded-3xl p-2 hover:bg-red-950 "
                      onClick={() => removeCart(med)}
                    >
                      - Remove To Cart
                    </button>
                  ) : (
                    <button
                      className="transition ease-in-out delay-100 duration-300 border border-blue-950 text-blue-900 hover:text-white rounded-3xl p-2 hover:bg-blue-950 "
                      onClick={() => addCart(med)}
                    >
                      + Add To Cart
                    </button>
                  )}
                  <span className="text-xl font-semibold">${med.price}</span>
                </div>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && <Model onClose={() => setIsOpen(false)} Product={selectProduct}/>}
          </AnimatePresence>
        </>
      ))}
    </>
  );
}

export default ProductCard;
