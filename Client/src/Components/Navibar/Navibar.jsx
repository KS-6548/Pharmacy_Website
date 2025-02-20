import React, { useContext, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import ResopnsiveMenu from "./ResopnsiveMenu";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import DropdownProfile from "./DropdownProfile";
import { isAuthentication } from "../../Utils/service/Auth";
import { cartContext } from "../../App";

function Navibar() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const { isAuth, setIsAuth } = useContext(cartContext);
  

  return (
    <>
      <nav className="bg-[#f5f7f9] h-16 rounded-[10px] m-3 flex items-center justify-between px-5 py-10 text-secondary font-popies">
        {/* LOGO */}
        <Link
          to={"/"}
          className="ms-2 pe-3 ps-3 text-secondary font-bold md:border-r-2 border-r-gray-400"
        >
          MEDCARE
        </Link>

        {/* Dropdown of location */}
        <Dropdown />

        {/* Searach Engine*/}
        <div className="w-100 relative hidden lg:block">
          <input
            type="text"
            placeholder="Medicine and healthcare items"
            className="absolute -top-5 h-10 w-[270px] rounded-full ms-10 focus:outline-none ps-12 pe-2 text-xs "
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="absolute -top-[18px] left-[43px] bg-primary p-[10px] rounded-full">
            <LuSearch className="text-secondary" />
          </button>
        </div>

        {/* List of Menu */}
        <div className="hidden lg:block ms-[600px] font-semibold">
          <ul className="flex items-center gap-6 ">
            <li>
              <Link href="" className="flex flex-col">
                <span className="text-xs bg-orange-500 w-8 px-1 rounded text-white">
                  New
                </span>
                Healthcare Service
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex justify-center items-center gap-1 text-orange-400"
              >
                <RiDiscountPercentLine />
                Offer
              </Link>
            </li>
            <li>
              <Link
                to={"/cart"}
                className="flex justify-center items-center gap-1"
              >
                <IoCartOutline />
                Cart
              </Link>
            </li>
            {!isAuth ? 
            <li>
              <Link
                to={"/auth/signin"}
                className="flex justify-center items-center gap-1"
              >
                <BsPerson />
                Login
              </Link>
            </li>:
            null}
            {isAuth ?
            <li>
              <DropdownProfile/>             
            </li>:null}
          </ul>
        </div>
        {/* Mobile Hamburger Menu Section */}
        <button
          className="lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MdMenu className="text-4xl" />
        </button>
      </nav>
      
      {/* Mobile Sidebar Section */}
      <ResopnsiveMenu open={open} />
    </>
  );
}

export default Navibar;
