import React from 'react'
import ProductCard from '../../Components/Cards/ProductCard'
import { medicines } from '../../Utils/Medicine'

function Products() {
  return (
    <>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden">
            <ProductCard Product={medicines}/>
        </div>
    </>
  )
}

export default Products