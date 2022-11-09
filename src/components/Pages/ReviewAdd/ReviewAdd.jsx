import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const ReviewAdd = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const { displayName, email, photoURL } = currentUser;
  const handelreviewClintData = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form?.name?.value;
    const email = form?.email?.value;
    const detailsPara = form?.text?.value;
    console.log(name, email, detailsPara);
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
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full text-start sm:col-span-3 ">
                <label className="text-2xl">
                  User name
                  <input
                    id="username"
                    type="name"
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
                    placeholder="Enter your Review details"
                    className="text_color text-xl w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 mt-4 p-5 h-[300px]"
                  ></textarea>
                </label>
              </div>
              <div className="col-span-full text-end">
                <button
                  type="submit"
                  className="rounded-lg py-2 px-6 btn-secondary"
                >
                  Add now
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default ReviewAdd;
