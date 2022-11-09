import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import "./Header.css";

const Header = () => {
  const { thim, setThim, currentUser, userLogOut } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);

  // user logout function
  const handelUserLogOut = () => {
    userLogOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div
      className={`drop-shadow-xl ${
        thim ? "shadow-slate-200" : "shadow-white"
      } sticky top-0 left-0 z-[999]`}
    >
      <nav className={`w-full ${thim ? "bg-white" : "bg-black"} py-2`}>
        <div className="navbar_wraper justify-between mx-auto w-10/12 md:w-10/12  lg:items-center lg:flex ">
          <div className="flex items-center justify-between py-2 lg:block">
            <div className="rounded-full overflow-hidden	">
              <Link className="" to="#">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Logo Img"
                  className="w-[50px] h-[50px]"
                />
              </Link>
            </div>
            <div className="lg:hidden xl:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <MdOutlineClose className="text-3xl" />
                ) : (
                  <AiOutlineMenuUnfold className="text-3xl" />
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="menu_wraper">
                <ul className="items-center justify-between space-y-8 lg:flex ">
                  <li className="flex justify-center items-center menu_link px-2 sm:w-[9rem] sm:mx-auto md:w-[9rem] md:mx-auto lg:m-[3px]">
                    <Link to="/home">
                      Home
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li>
                  <li className="flex justify-center items-center menu_link px-2 sm:w-[9rem] sm:mx-auto md:w-[9rem] md:mx-auto lg:m-[3px]">
                    <Link to="/services ">
                      Services
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li>
                  {/* <li className="flex justify-center items-center menu_link px-2 sm:w-[9rem] sm:mx-auto md:w-[9rem] md:mx-auto lg:m-[3px]">
                    <Link to="/about ">
                      About
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li> */}
                  <li className="flex justify-center items-center menu_link px-2 sm:w-[9rem] sm:mx-auto md:w-[9rem] md:mx-auto lg:m-[3px]">
                    <Link to="/blog">
                      Blog
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li>
                  <li className="flex justify-center items-center menu_link px-2 sm:w-[9rem] sm:mx-auto md:w-[9rem] md:mx-auto lg:m-[3px]">
                    {currentUser ? (
                      <Link onClick={handelUserLogOut} to="/">
                        LogOut
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </Link>
                    ) : (
                      <Link to="/login">
                        Login
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </Link>
                    )}
                  </li>

                  <div
                    className="thim_btn_wraper flex justify-center items-center "
                    onClick={() => setThim(!thim)}
                  >
                    {thim ? (
                      <MdOutlineLightMode className="text-black cursor-pointer" />
                    ) : (
                      <MdOutlineNightlight className="cursor-pointer" />
                    )}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
