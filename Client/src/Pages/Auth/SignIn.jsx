import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AccountContext } from "./Container";
import { isValid } from "../../Utils/Helper";
import { LoginApi } from "../../Utils/service/Api";
import { storageUserData } from "../../Utils/service/storage";
import { isAuthentication } from "../../Utils/service/Auth";
import { cartContext } from "../../App";

function SignIn() {
  const { switchToSignup } = useContext(AccountContext);
  const { isAuth, setIsAuth } = useContext(cartContext);


  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState(initialStateErrors);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = initialStateErrors;
    let hasError = false;
    if (inputs.email == "" && !isValid(inputs.email)) {
      errors.email.required = true;
      hasError = true;
    }
    if (inputs.password == "") {
      errors.password.required = true;
      hasError = true;
    }
    if (!hasError) {
      setLoading(true);
      setTimeout(()=>{

        LoginApi(inputs)
          .then((response) => {
            storageUserData(response.data);
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      },1000)
    }

    setErrors({ ...errors });
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  
  if (isAuthentication()) {
    setIsAuth(true)
    return <Navigate to={"/"} />
  }

  return (
    <>
      <div className="w-full flex flex-col items-center mt-2.5">
        <form className="w-full flex flex-col">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputs}
            className={
              errors.email.required
                ? "w-full h-[42px] outline-none border border-red-500 px-2.5 text-xs rounded-lg mb-1 placeholder:text-red-500 focus:outline-none focus:border-b-2 focus:border-b-primary"
                : "w-full h-[42px] outline-none border border-[#c8c8c84d] px-2.5 text-xs rounded-lg mb-1 placeholder:text-[#c8c8c8] focus:outline-none focus:border-b-2 focus:border-b-primary"
            }
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInputs}
            className={
              errors.password.required
                ? "w-full h-[42px] outline-none border border-red-500 px-2.5 text-xs rounded-lg mb-1 placeholder:text-red-500 focus:outline-none focus:border-b-2 focus:border-b-primary"
                : "w-full h-[42px] outline-none border border-[#c8c8c84d] px-2.5 text-xs rounded-lg mb-1 placeholder:text-[#c8c8c8] focus:outline-none focus:border-b-2 focus:border-b-primary"
            }
          />
        </form>
        <a className="text-xs font-medium decoration-0 my-1 text-[#c8c8c8cc] cursor-pointer">
          Forget Password?
        </a>
        {
        errors.custom_error ? (<p className="text-red-600 mt-1">{errors.custom_error}</p>) : null
        }
        {loading ? (
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring" }}
            disabled
            className="w-full mt-10 py-2.5 px-[40%] text-white font-semibold text-[12px] rounded-lg bg-primary bg-gradient-to-r from-primary from-20% to-[#87b061] to-100% hover:brightness-[1.03] "
          >
            <div role="status">
              <svg
                aria-hidden="true"
                class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </motion.button>
        ) : (
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring" }}
            onClick={handleSubmit}
            className="w-full mt-10 py-2.5 px-[40%] text-white font-semibold text-[12px] rounded-lg bg-primary bg-gradient-to-r from-primary from-20% to-[#87b061] to-100% hover:brightness-[1.03] "
          >
            Sign in
          </motion.button>
        )}
        <a className="text-xs font-medium decoration-0 my-1 text-[#c8c8c8cc] cursor-pointer">
          Don't have an account?
          <Link 
            // to={"/auth/signup"}
            className="text-[12px] text-primary font-medium mx-1"
            onClick={switchToSignup}

          >
            Signup
          </Link>
        </a>
      </div>
    </>
  );
}

export default SignIn;
