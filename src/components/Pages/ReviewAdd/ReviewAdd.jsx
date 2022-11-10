import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const ReviewAdd = () => {
  const {
    currentUser,
    serviceReviewCardId,
    reviewPage,
    clintReviewData,
    setClintReviewData,
    updetData,
    userLogOut,
  } = useContext(AuthContext);
  const { displayName, email, photoURL } = currentUser;
  const navigate = useNavigate();

  //handel review card data adn post data
  const handelreviewClintData = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form?.name?.value;
    const email = form?.email?.value;
    const detailsPara = form?.text?.value;
    if (reviewPage) {
      const postData = {
        serviceReviewCardId,
        name,
        email,
        detailsPara,
        photoURL,
      };

      // post option
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Good ${localStorage.getItem("home_kitchen")}`,
        },
        body: JSON.stringify(postData),
      };
      fetch("http://localhost:5000/reviewadd", requestOptions)
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            return userLogOut();
          }
          return res.json();
        })
        .then((data) => {
          toast.success("🦄 Your Review add success!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate(`/services/${serviceReviewCardId}`);
          console.log(data.insertedId);
        });
      return;
    } else {
      //  updet data client review
      const data = { updetData, name, email, detailsPara };
      const requestOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Good ${localStorage.getItem("home_kitchen")}`,
        },
        body: JSON.stringify(data),
      };
      fetch(`http://localhost:5000/review`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.modifiedCount > 0) {
            const updetDataResult = clintReviewData.filter(
              (clsData) => clsData._id !== updetData
            );
            console.log(updetDataResult);
            const updetData = clintReviewData.find(
              (clsData) => clsData._id === updetData
            );
            updetData.name = updetData.name;
            updetData.email = updetData.email;
            updetData.detailsPara = updetData.detailsPara;
            const newClientReviewData = [updetData, ...updetDataResult];
            console.log(newClientReviewData, updetData, updetDataResult);
            setClintReviewData(newClientReviewData);
          }
        });

      navigate("/review");
      return;
    }
  };
  return (
    <div className="mt-20">
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50 pb-20 pt-10 rounded-lg">
        <form
          onSubmit={handelreviewClintData}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <h1 className="text-2xl">
            Enter your detailed message <br />
            down in the form below and click the Add Now button
          </h1>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900 py-10">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium mb-10">Profile</p>

              <div className="overflow-hidden">
                <div className="flex justify-center items-center space-x-2">
                  <img
                    src={
                      photoURL
                        ? photoURL
                        : "https://source.unsplash.com/30x30/?random"
                    }
                    alt="User profile"
                    className="w-[100px] h-[100px] rounded-full dark:bg-gray-500 dark:bg-gray-700"
                  />
                </div>
                <div className="pt-4">
                  <p>{displayName}</p>
                  <h3>{email}</h3>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full text-start sm:col-span-3 ">
                <label className="text-2xl">
                  User name
                  <input
                    id="username"
                    type="name"
                    name="name"
                    defaultValue={displayName}
                    readOnly
                    placeholder="Username"
                    className="text_color w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 py-2 px-4 text-2xl mt-3"
                  />
                </label>
              </div>
              <div className="col-span-full text-start sm:col-span-3 ">
                <label className="text-2xl">
                  User email
                  <input
                    id="userEmail"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    defaultValue={email}
                    readOnly
                    className="text_color w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 py-2 px-4 text-2xl mt-3"
                  />
                </label>
              </div>
              <div className="col-span-full text-start">
                <label className="text-2xl">
                  Enter review message
                  <textarea
                    id="review_text"
                    type="text"
                    name="text"
                    placeholder="Enter your Review details"
                    className="text_color text-xl w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 mt-4 p-5 h-[300px]"
                  ></textarea>
                </label>
              </div>
              <div className="col-span-full text-end">
                {reviewPage ? (
                  <button
                    type="submit"
                    className="rounded-lg py-2 px-6 btn-secondary"
                  >
                    Add now
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="rounded-lg py-2 px-6 btn-secondary"
                  >
                    submit Now
                  </button>
                )}
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default ReviewAdd;
