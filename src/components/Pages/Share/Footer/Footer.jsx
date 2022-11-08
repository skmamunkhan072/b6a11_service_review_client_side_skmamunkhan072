import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  const { thim } = useContext(AuthContext);
  return (
    <div>
      <footer>
        <div
          className={`relative mt-16 ${thim ? "bg-gray-100 text-black" : ""}`}
        >
          <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
              <div className="md:max-w-md mx-auto lg:col-span-2 lg:text-start">
                <Link to="/" className="inline-flex items-center">
                  <AiOutlineAppstoreAdd className="text-5xl text-gray-500 hover:text-sky-400" />
                  <span
                    className={`ml-2 text-xl font-bold tracking-wide uppercase ${
                      thim ? "text-teal-400" : "text-gray-100"
                    }`}
                  >
                    Company
                  </span>
                </Link>
                <div className="mt-4 lg:max-w-sm">
                  <p className="text-sm ">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                  </p>
                  <p className="mt-4 text-sm">
                    Eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3 lg:text-start">
                <div>
                  <p
                    className={`font-bold font-semibold tracking-wide ${
                      thim ? "text-teal-400" : "text-white"
                    }`}
                  >
                    Category
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        News
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        World
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        Games
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        References
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p
                    className={`font-bold font-semibold tracking-wide ${
                      thim ? "text-teal-400" : "text-white"
                    }`}
                  >
                    Cherry
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        Web
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        eCommerce
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        Portfolio
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p
                    className={`font-bold font-semibold tracking-wide ${
                      thim ? "text-teal-400" : "text-white"
                    }`}
                  >
                    Apples
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        Media
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        Brochure
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        Nonprofit
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        Educational
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`transition-colors duration-300 ${
                          thim ? "text-black" : ""
                        } hover:text-teal-400`}
                      >
                        Projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row ${
                thim ? "border-teal-400" : "border-slate-100"
              }`}
            >
              <p className={`text-sm ${thim ? "text-black" : "text-gray-100"}`}>
                © Copyright 2020 Lorem Inc. All rights reserved.
              </p>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                <Link
                  to="/"
                  className="transition-colors duration-300 border border-teal-400 p-2 rounded-full hover:text-teal-400"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="/"
                  className="transition-colors duration-300 border border-teal-400 p-2 rounded-full hover:text-teal-400"
                >
                  <BsTwitter />
                </Link>
                <Link
                  to="/"
                  className="transition-colors duration-300 border border-teal-400 p-2 rounded-full hover:text-teal-400"
                >
                  <FaGooglePlusG />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
