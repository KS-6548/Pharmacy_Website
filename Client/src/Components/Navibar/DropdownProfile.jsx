import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getInitial } from "../../Utils/Helper";
import { isAuthentication, logout } from "../../Utils/service/Auth";
import { cartContext } from "../../App";

function DropdownProfile() {
  const navigate = useNavigate();
  const [dropDownProfile, setDropDownProfile] = useState(false)
    const { isAuth, setIsAuth } = useContext(cartContext);
  

  const onLogout = () => {
    logout();
    navigate("/auth/signin")
  }
  
  if (!isAuthentication()) {
    setIsAuth(false);
    return <Navigate to={"/auth/signin"}/>
  }

  return (
    <>
      <button
        className="flex justify-center items-center p-2"
        onClick={() => setDropDownProfile(!dropDownProfile)}
      >
        <div className="p-3 me-3 rounded-full border">
          <span className=" font-bold">{getInitial("karthik sundaram")}</span>
        </div>
      </button>
      {dropDownProfile && <div className="flex flex-col dropDownProfile z-10">
        <ul className="flex flex-col gap-4">
          <li>
            <Link>Profile</Link>
          </li>
          <li>
            <Link>Setting</Link>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </div>}
    </>
  );
}

export default DropdownProfile;
