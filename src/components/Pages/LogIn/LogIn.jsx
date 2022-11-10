import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import LoginImg from "../../Assets/imessage/LoginImg/4.png";
import { toast } from "react-toastify";

const LogIn = () => {
  const {
    thim,
    handelLoginUser,
    handelGoogleSingIn,
    handelFacebookLogin,
    handelGitHubLogin,
  } = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // login email adn password
  const handelLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form?.email?.value;
    const password = form?.password?.value;

    // Login function
    handelLoginUser(email, password)
      .then((currentUser) => {
        const user = currentUser.user;
        // console.log(user.email);
        if (user.uid) {
          fetch("http://localhost:5000/jwt", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Good ${localStorage.getItem("home_kitchen")}`,
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              // local storage is the easiest but not the best place to store jwt token
              localStorage.setItem("home_kitchen", data.token);
              navigate(from, { replace: true });
            });

          toast.success("🦄 Login is successful !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate(from, { replace: true });
        }
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message.split("/")[1];
        const eororMesssagetext = errorMessage.split(")")[0];
        setError(eororMesssagetext);
      });
  };

  // Google sing in function
  const handelGoogleSingInPovid = () => {
    handelGoogleSingIn()
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        if (user.uid) {
          toast.success("🦄 Login is successful !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.log(error));
  };

  // Facebook Login function
  const handelFacebookLoginUser = () => {
    handelFacebookLogin()
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          toast.success("🦄 Login is successful !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Git Hub Login function
  const handelGitHubLoginuser = () => {
    handelGitHubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        if (user.uid) {
          toast.success("🦄 Login is successful !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={`${thim ? "bg-white" : "bg-black"} my-20 `}>
      <section className="h-full gradient-form bg-gray-200 rounded-lg">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  {/* right  */}
                  <div className="lg:w-6/12 flex items-center lg:rounded-l-lg rounded-b-lg lg:rounded-br-none login_bg_color">
                    <div className="text-white md:mx-6">
                      <img src={LoginImg} alt="" />
                    </div>
                  </div>

                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-start">
                        <img
                          className="mx-auto w-48"
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                        <h4 className="text-2xl font-semibold mt-1 mb-12 pb-1">
                          Login
                        </h4>
                      </div>
                      <form onSubmit={handelLogIn}>
                        <p className="mb-4 text-start">
                          Please login to your account
                        </p>

                        <div className="relative mb-4">
                          <label
                            htmlFor="email"
                            className="text-gray-500 text-start flex justify-between cursor-pointer	"
                          >
                            <p> Enter email</p>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            className="mt-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email"
                            placeholder="Enter your Password"
                          />
                          <p className="absolute bottom-1 right-1 text-gray-600 z-3 bg-white w-8 h-8 flex justify-center items-center">
                            <FaUserAlt />
                          </p>
                        </div>
                        <div className="relative">
                          <label
                            htmlFor="password"
                            className="text-gray-500 text-start flex justify-between cursor-pointer	"
                          >
                            <p> Enter Password</p>
                            <Link
                              to="/"
                              className="text-sm text-cyan-500 hover:text-cyan-700 font-bold"
                            >
                              Forgot password?
                            </Link>
                          </label>
                          <input
                            type={`${show ? "password" : "text"}`}
                            required
                            name="password"
                            className="mt-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password"
                            placeholder="Enter your Password"
                          />
                          <p
                            onClick={() => setShow(!show)}
                            className="absolute bottom-1 right-1 text-gray-600 z-3 bg-white w-8 h-8 flex justify-center items-center"
                          >
                            {show ? <FaLock /> : <FaLockOpen />}
                          </p>
                        </div>
                        <p className="text-start mb-2 text-red-600">
                          <small>{error}</small>
                        </p>
                        <div className="text-center pt-1 mb-4 pb-1">
                          <button
                            className="login_btn inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 login_bg_color"
                            type="submit"
                          >
                            Log in
                          </button>
                        </div>
                        <div className="mb-8 flex justify-center items-center">
                          <div className="cursor-pointer text-2xl ">
                            <button
                              onClick={handelGoogleSingInPovid}
                              className="btn btn-two bg-white mr-4"
                            >
                              <AiOutlineGooglePlus />
                            </button>
                          </div>
                          <div className="cursor-pointer text-2xl mr-4">
                            <button
                              onClick={handelGitHubLoginuser}
                              className="btn btn-two bg-white"
                            >
                              <AiOutlineGithub />
                            </button>
                          </div>
                          <div className="cursor-pointer text-2xl mr-4">
                            <button
                              onClick={handelFacebookLoginUser}
                              className="btn btn-two bg-white"
                            >
                              <FaFacebookF />
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <Link
                            to="/singin"
                            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          >
                            Sing Up
                          </Link>
                        </div>
                        <span className="text-xs">
                          ----------------------Login
                          Account---------------------
                        </span>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default LogIn;
