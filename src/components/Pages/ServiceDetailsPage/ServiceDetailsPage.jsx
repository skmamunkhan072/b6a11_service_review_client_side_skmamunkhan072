import React, { useContext } from "react";
import { BsStopwatch } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ReviewCard from "../ReviewCard/ReviewCard";
import Rating from "../Share/Rating/Rating";
import "./ServiceDetailsPage.css";

const ServiceDetailsPage = () => {
  const { thim } = useContext(AuthContext);
  const servicesDetailsData = useLoaderData();
  console.log(servicesDetailsData);
  const { details, img, rating, time, title, _id } = servicesDetailsData;
  return (
    <div className="py-20 ">
      <section className="mb-20">
        <div className="w-full lg:w-3/4 mx-auto h-[500px]">
          <div
            className={` rounded-lg w-full h-full shadow-lg ${
              thim ? "shadow-black-500" : ""
            }`}
          >
            <img
              src={img}
              alt="service img"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="my-5 text-start w-3/4 mx-auto">
          <h1 className="card-title text-3xl">{title}</h1>
          <p className="my-5">{details}</p>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <Rating />
              <p className={`ml-2 mt-2 ${thim ? "text-black" : ""}`}>
                ( {rating} )
              </p>
            </div>
            <div className="flex items-center justify-center">
              <BsStopwatch className="mr-1 mt-1" />
              <span>{time}d...</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 w-full lg:w-3/4 mx-auto">
        <ReviewCard />
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
