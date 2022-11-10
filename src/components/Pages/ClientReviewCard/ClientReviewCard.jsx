import React, { useContext } from "react";
import { BsStopwatch } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import Rating from "../Share/Rating/Rating";
const ClientReviewCard = ({
  reviewCard,
  handelClientReviewDelete,
  handelClientReviewEdite,
}) => {
  const { detailsPara, email, name, _id, photoURL } = reviewCard;

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
              <div className="flex justify-end items-start text-3xl">
                <MdDelete
                  onClick={() => handelClientReviewDelete(_id)}
                  className="mr-4 cursor-pointer"
                />
                <FiEdit
                  onClick={() => handelClientReviewEdite(_id)}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-5">{name}</h1>
              </div>
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

export default ClientReviewCard;
