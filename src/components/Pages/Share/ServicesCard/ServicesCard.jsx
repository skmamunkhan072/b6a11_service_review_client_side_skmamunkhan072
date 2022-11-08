import React from "react";
import { Link } from "react-router-dom";
import "./ServicesCard.css";

const ServicesCard = ({ card }) => {
  const { _id, rating, ditails, taitle, imessage } = card;
  return (
    <div className="card card-side bg-slate-900 shadow-xl overflow-hidden	">
      <div className="flex justify-between items-start">
        <div className="w-1/3 cursor-pointer">
          <img src={imessage} className="rounded-l-lg " alt="Movie" />
        </div>
        <div className="pt-5 px-4 w-2/3 text-start">
          <h1 className="card-title mb-2 text-2xl">{taitle}</h1>
          <p>{ditails}</p>
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
          <div className="mt-2 flex justify-between items-end">
            <p>2 d...</p>
            <Link
              to={`/services/${_id}`}
              className="px-5 py-2 rounded-lg btn-accent"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
