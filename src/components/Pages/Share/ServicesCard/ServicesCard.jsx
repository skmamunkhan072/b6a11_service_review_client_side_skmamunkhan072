import React from "react";
import { Link } from "react-router-dom";
import "./ServicesCard.css";
import { BsStopwatch } from "react-icons/bs";

const ServicesCard = ({ card }) => {
  const { _id, rating, details, taitle, imessage, time } = card;
  return (
    <div className="card card-side bg-slate-900 shadow-xl overflow-hidden	">
      <div className="flex justify-between items-start">
        <div className="w-1/3 h-full cursor-pointer">
          <img
            src={imessage}
            className="rounded-l-lg w-full h-full"
            alt="img"
          />
        </div>
        <div className="pt-5 px-4 w-2/3 text-start">
          <h1 className="card-title mb-2 text-2xl">{taitle}</h1>
          <p>{details.length > 100 ? details.slice(0, 100) : "no"}</p>
          <div className="mt-2">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <span className="ml-2">( {rating} )</span>
          </div>

          <div className="my-4 flex justify-between items-end">
            <div className="flex justify-center items-center">
              <BsStopwatch />
              <span>{time} d...</span>
            </div>
            <div className="svg-wrapper">
              <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150" />
              </svg>
              <div id="text">
                <Link to={`/services/${_id}`}>Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
