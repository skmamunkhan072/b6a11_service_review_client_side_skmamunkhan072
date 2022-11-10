import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ClientReviewCard from "../ClientReviewCard/ClientReviewCard";

const ClintReview = () => {
  const {
    currentUser,
    clintReviewData,
    setClintReviewData,
    userLogOut,
    SetUpdetData,
    setReviewPage,
    reviewPage,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      const postData = { email: currentUser.email };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Good ${localStorage.getItem("home_kitchen")}`,
        },
        body: JSON.stringify(postData),
      };
      fetch("https://home-kitchen-server.vercel.app/review", requestOptions)
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            return userLogOut();
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            setClintReviewData(data);
          }
        });
    }
    return;
  }, [currentUser]);

  // console.log(clintReviewData);
  //   client reviewCard delete
  const handelClientReviewDelete = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`https://home-kitchen-server.vercel.app/${id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("🦄 Your Review is Delete successful !!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };
  // updete review data card
  const handelClientReviewEdite = (id) => {
    navigate("/reviewadd");
    SetUpdetData(id);
    setReviewPage(false);
  };

  return (
    <div className="pt-10  w-full lg:w-3/4 mx-auto">
      {clintReviewData.map((reviewCard) => (
        <ClientReviewCard
          key={reviewCard._id}
          reviewCard={reviewCard}
          handelClientReviewDelete={handelClientReviewDelete}
          handelClientReviewEdite={handelClientReviewEdite}
        />
      ))}
    </div>
  );
};

export default ClintReview;
