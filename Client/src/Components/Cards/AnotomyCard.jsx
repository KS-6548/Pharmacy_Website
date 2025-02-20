import React from 'react'
import {anotomy} from '../../Utils/Anotomy'

function AnotomyCard() {
  return (
    <>
        {
            [...anotomy, ...anotomy].map((ano,index)=>(
                <div className="w-fit m-3" key={index}>
                    <div className={`${ano.color} w-[184px] h-[218.7px] overflow-hidden rounded-xl`}>
                        <img src={ano.img} alt={ano.title} className='h-[100%] w-[100%] object-center brightness-105 pt-5'/>
                    </div>
                    <h1 className='text-center font-semibold text-blue-950 mt-3'>{ano.title}</h1>
                </div>
            ))
        }
    </>
  )
}

export default AnotomyCard