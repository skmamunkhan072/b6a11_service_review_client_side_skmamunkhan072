import React, { useContext } from "react";
import img from "../../Assets/imessage/SliderImg/1.jpg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./ServiceDetailsPage.css";

const ServiceDetailsPage = () => {
  const { thim } = useContext(AuthContext);

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
          <h1 className="card-title">sdffdfsd</h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores
            cumque, molestias nostrum voluptate soluta quis itaque esse eum
            illum velit ratione. Dicta quaerat provident, placeat nostrum vel
            maiores tempore iste accusantium molestiae repudiandae eaque quis
            recusandae harum, commodi nesciunt.
          </p>
          <div className="flex justify-start items-center">
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
            <p className={`ml-2 ${thim ? "text-black" : ""}`}>( 2.5 )</p>
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
