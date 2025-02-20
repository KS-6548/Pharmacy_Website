import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { medicines } from '../../../Utils/Medicine';
import ProductCard from '../../../Components/Cards/ProductCard';
import { Link } from 'react-router-dom';

function TrendingProduct() {
    const [count, setCount] = useState(8)

  return (
    <>
        <div className="font-popies mx-3 sm:mx-9 lg:mx-16 text-blue-950 my-5 md:my-16">
            <div className="flex justify-between">
                <h1 className='font-extrabold text-2xl sm:text-4xl lg:text-5xl'>Trending products <br className='hidden md:block'/> for you! </h1>
                <Link to={"/product"} className='uppercase flex items-center mt-5'>see all products<FaArrowRight className='ms-2'/></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <ProductCard Product={medicines} count={count}/>
            </div>  
        </div>
    </>
  )
}

export default TrendingProduct