import React, { useState } from 'react'
import { medicines } from '../../../Utils/Medicine.js'
import { FaArrowRight } from "react-icons/fa";
import ProductCard from '../../../Components/Cards/ProductCard.jsx';
import { Link } from 'react-router-dom';


function BabyProduct() {
    const [count, setCount] = useState(4)
  return (
    <>
        <div className="font-popies mx-3 sm:mx-9 lg:mx-16 text-blue-950 my-5 md:my-10">
            <div className="flex justify-between">
                <h1 className='font-extrabold text-2xl sm:text-4xl lg:text-5xl'>Baby Food <br className='hidden sm:block'/> collection</h1>
                <Link to={"/product"} className='uppercase flex items-center mt-5'>see all products <FaArrowRight className='ms-2'/></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <ProductCard Product={medicines} count={count}/>
            </div>  
        </div>
    </>
  )
}

export default BabyProduct