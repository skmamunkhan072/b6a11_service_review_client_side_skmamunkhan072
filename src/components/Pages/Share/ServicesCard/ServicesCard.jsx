import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ServicesCard.css";
import { BsStopwatch } from "react-icons/bs";
import Rating from "../Rating/Rating";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ServicesCard = ({ card }) => {
  const { _id, rating, details, title, img, time } = card;
  const { Nodata } = useContext(AuthContext);
  return (
    <div className="card card-side bg-slate-900 shadow-xl overflow-hidden	">
      <div className="services_card_wraper flex justify-between items-start">
        <div className="services_card_img_wrap w-1/3 h-full cursor-pointer">
          <img
            src={img ? img : "https://placeimg.com/400/225/arch"}
            className="rounded-l-lg w-full h-full"
            alt="img"
          />
        </div>
        <div className="services_card_text-Wrap pt-10 px-4 w-2/3 text-start">
          <h1 className="card-title mb-2 text-2xl">{title ? title : Nodata}</h1>
          <p>{details.length > 100 ? details.slice(0, 100) : "no"}</p>
          <div className="mt-2">
            <div className="flex justify-between items-center">
              <div>
                <Rating />
                <span className="mt-2 text-sm ml-3">{`( ${
                  rating ? rating : Nodata
                } )`}</span>
              </div>
              <div className="flex justify-center items-center">
                <BsStopwatch className="mr-1" />
                <span>{time} d...</span>
              </div>
            </div>
          </div>

          <div className="my-4 flex justify-end items-end">
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
