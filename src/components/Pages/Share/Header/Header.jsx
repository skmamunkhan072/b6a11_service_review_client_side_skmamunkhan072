import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import "./Header.css";

const Header = () => {
  const { thim, setThim } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);

  return (
    <div
      className={`drop-shadow-xl ${
        thim ? "shadow-slate-200" : "shadow-white"
      } `}
    >
      <nav className={`w-full ${thim ? "bg-white" : "bg-black"} `}>
        <div className="justify-between mx-auto w-10/12 md:w-10/12  lg:items-center lg:flex ">
          <div className="flex items-center justify-between py-2 lg:block">
            <Link to="#">
              <img src="lsjfd" alt="Logo Img" className="w-[70px] h-[70px]" />
            </Link>
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
                  <li className="flex justify-center items-center menu_link px-8 sm:w-[9rem] sm:mx-auto md:w-[9rem] md:mx-auto lg:m-[3px]">
                    <Link to="/home">
                      Home
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li>
                  <li className="flex justify-center items-center menu_link px-8 sm:w-[9rem] sm:mx-auto md:w-[9rem] md:mx-auto lg:m-[3px]">
                    <Link to="/about">
                      About
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li>
                  <li className="flex justify-center items-center menu_link px-8 sm:w-[9rem] sm:mx-auto md:w-[9rem] md:mx-auto lg:m-[3px]">
                    <Link to="/services">
                      Services
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li>
                  <li className="flex justify-center items-center menu_link px-8 sm:w-[9rem] sm:mx-auto md:w-[9rem] md:mx-auto lg:m-[3px]">
                    <Link to="/blog">
                      Blog
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li>
                  {/* <li className="flex justify-center items-center menu_link px-8 sm:w-[9rem] sm:mx-auto md:w-[9rem] md:mx-auto lg:m-[3px]">
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
                  </li> */}

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
