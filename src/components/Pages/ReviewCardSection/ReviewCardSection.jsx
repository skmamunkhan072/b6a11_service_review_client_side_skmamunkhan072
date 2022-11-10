import React, { useContext, useEffect } from "react";
import SectionTaitle from "../Share/SectionTaitle/SectionTaitle";
import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import "./ReviewCardSection.css";
import ReviewCard from "../Share/ReviewCard/ReviewCard";
import { toast } from "react-toastify";

const ReviewCardSection = ({ _id }) => {
  const {
    thim,
    setServiceReviewCardId,
    currentUser,
    clintsReviewData,
    setClintsReviewData,
  } = useContext(AuthContext);
  const { email } = currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    const postData = { serviceReviewCardId: _id };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    };
    fetch(`http://localhost:5000/services/${_id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setClintsReviewData(data);
        }
      });
  }, [currentUser]);

  console.log(clintsReviewData);
  return (
    <div>
      <div>
        <SectionTaitle taitle={"Review"} />
        <div
          className={`mt-10 flex justify-end items-center ${
            thim ? "text_color" : ""
          }`}
        >
          <h1 className="mr-5 flex items-center justify-center">
            Please your review add and click the review button !!!!
            <BsArrowRight
              className={`ml-3 text-2xl ${thim ? "text_color" : ""}`}
            />
          </h1>
          <div className="svg-wrapper">
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
              <rect id="shape" height="40" width="150" />
            </svg>
            <div className="text" id="review_add_btn">
              <Link
                onClick={() => setServiceReviewCardId(_id)}
                to="/reviewadd"
                className="flex justify-center items-center"
              >
                Review Add <BsArrowRight className="ml-2 mt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {clintsReviewData.length !== 0 ? (
        <>
          {clintsReviewData.map((reviewCard) => (
            <ReviewCard key={_id} reviewCard={reviewCard} />
          ))}
        </>
      ) : (
        <div className="text-4xl mt-20">
          NOt fount Review Please Review add{" "}
        </div>
      )}
    </div>
  );
};

export default ReviewCardSection;
