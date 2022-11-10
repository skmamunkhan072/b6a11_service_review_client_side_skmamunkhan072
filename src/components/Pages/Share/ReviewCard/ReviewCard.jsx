import React from "react";
import { BsStopwatch } from "react-icons/bs";
import Rating from "../Rating/Rating";

const ReviewCard = ({ reviewCard }) => {
  const { detailsPara, email, name, _id, photoURL } = reviewCard;
  console.log(reviewCard);
  return (
    <div>
      <div className="mt-10">
        <div className="rounded-lg bg-slate-900 shadow-xl overflow-hidden	p-10">
          <div className="review_cad-wraper flex justify-start items-center">
            <div>
              <div className="w-[150px] h-[150px]  mx-auto sm:mb-5">
                <img
                  src={
                    photoURL ? photoURL : "https://placeimg.com/400/225/arch"
                  }
                  alt="review img"
                  className="rounded-full w-full h-full"
                />
              </div>
            </div>

            <div className="review_para text-start ml-10 w-full">
              <h1 className="text-3xl font-bold mb-5">{name}</h1>
              <p>{detailsPara}</p>
              <div className="flex justify-between items-center w-full">
                <div>
                  <Rating />
                  <span className="mt-2 text-sm ml-3">{`( ${4.5} )`}</span>
                </div>
                <div>
                  <div className="flex justify-center items-center">
                    <BsStopwatch className="mr-1" />
                    <span>{34} d...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
