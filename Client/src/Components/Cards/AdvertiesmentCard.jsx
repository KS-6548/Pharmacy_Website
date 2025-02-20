import React from 'react'
import { TbUpload } from "react-icons/tb";
import {advertisment} from '../../Utils/Advertisment'

function AdvertiesmentCard({slice, first}) {
  return (
    <>
    {
      advertisment.slice(first,slice).map((ads)=>(
      <div className={`relative md:w-[590px] h-[369px] m-1 border rounded-[40px] font-popies ${ads.bg} ${ads.text}`} key={ads.id}>
            {
              ads.tag && ads.tagIcon ?
            <div className={`flex items-center absolute top-6 left-10 p-1 rounded ${ads.texttag} ${ads.bgtag}`}>
              <TbUpload/> <span className='ms-2'>Delivery</span>
            </div>
            :null
            }
            <div className="absolute top-20 left-10 text-3xl font-bold w-60">
              <h1>{ads.title}</h1>
            </div>
            <div className="absolute top-40 left-10 w-72">
              {ads.desc ? 
              <p>{ads.desc}</p>
              : null}
            </div>
            <div className="absolute bottom-10 left-10 flex justify-start items-center mt-5">
                <button className={`${ads.btn} ${ads.btntext} p-3 rounded-full`}>{ads.button}</button>
                <button className={`${ads.btn} ${ads.btntext} p-3 rounded-full`}>{<ads.icon/>}</button>
            </div>
            <div className="hidden md:block absolute bottom-0 left-44 w-[100%]">
              <img src={ads.img} alt="" className='w-[90%] px-5'/>
            </div>
        </div>
      ))
    }
    </>
  )
}

export default AdvertiesmentCard