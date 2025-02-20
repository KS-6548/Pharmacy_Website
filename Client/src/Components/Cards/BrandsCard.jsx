import React from 'react'
import { brands } from '../../Utils/Brands'

function BrandsCard() {
    return(
    <>
    {
        [...brands, ...brands].map((brand, index)=>(
            <div className="w-fit m-3" key={index}>
                <div className="w-[155px] h-[155px] flex justify-center items-center overflow-hidden rounded-full bg-[#f5f7f9] hover:bg-secondary">
                    <img src={brand.img} alt={brand.title} className='h-[100%] w-[70%] object-contain pt-5 '/>
                </div>
                <h1 className='w-[180px] text-center font-semibold text-blue-950 mt-3'>{brand.name}</h1>
            </div>
        ))
    }
    </>
  )
}

export default BrandsCard