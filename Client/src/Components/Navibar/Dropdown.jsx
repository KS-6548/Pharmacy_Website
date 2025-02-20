import React, { useEffect, useState } from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const [countries, setCountries] = useState(null)
    const [selected, setSelected] = useState("")
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
      fetch("https://restcountries.com/v2/all?field=name")
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
        })
    },[])

  return (
    <div className="hidden md:flex justify-center flex-col ms-4 ">
        <div className='flex items-center gap-1'>
            <HiOutlineLocationMarker/> 
            <span>
              Select Location
            </span>
        </div>
        <button onClick={()=>setIsOpen(!isOpen)} className=' ms-3 flex justify-center  items-center text-secondary font-semibold'>
          {selected ? selected?.length > 25 ? selected?.substring(0,25) + "..." : selected : "Your Location"}
          {!isOpen? 
            <MdKeyboardArrowDown/>
          :
            <MdKeyboardArrowUp/>
          }
        </button>
        {isOpen && 
          <div className="flex flex-col absolute  top-24 md:left-60 lg:left-40 border p-4 rounded-lg bg-white dropDown z-10">
              <ul className='flex flex-col gap-4 overflow-y-auto max-h-60'>
                <div className="flex items-center px-2 sticky top-0 bg-white">
                  <LuSearch/>
                  <input type="text"
                  value={inputValue}
                  onChange={(e)=>setInputValue(e.target.value.toLowerCase())}
                  placeholder='Enter country name'
                  className='placeholder:text-gray-700 p-2 outline-none'
                  />
                </div>
                {countries.map((country) => (
                  <li
                  key={country.name}
                  className={`p-2 text-sm hover:bg-primary hover:text-white${country.name.toLowerCase() === selected.toLowerCase() && "bg-primary text-white"} ${country.name.toLowerCase().startsWith(inputValue)? "block" : "hidden"}`}
                  onClick={()=>{
                    if (country.name.toLowerCase() !== selected.toLowerCase()) {
                      setSelected(country.name);
                      setIsOpen(false);
                      setInputValue("")
                    }
                  }}
                  >
                    {country.name}
                  </li>
                ))}
              </ul>
          </div>
        }
    </div>
  )
}

export default Dropdown