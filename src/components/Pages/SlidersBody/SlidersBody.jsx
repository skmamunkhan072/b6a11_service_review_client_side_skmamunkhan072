import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import "./SlidersBody.css";
const SlidersBody = ({ slid, activ, setActiv }) => {
  const { sliderItem, setSliderItem, selectSliderItem, setSelectSliderItem } =
    useContext(AuthContext);

  const { id, img, next, prev } = slid;
  return (
    <div
      id={`slide${id}`}
      className="slider_content carousel-item relative w-full rounded-lg overflow-hidden	"
    >
      <img src={img} className="w-full rounded-lg" alt="Slider img" />
      <div className="absolute top-10 left-1/3 z-10">
        <h1 className="text-5xl mb-8">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p className="mb-8">
          There are many variations of passages of available, but <br /> the
          majority have suffered alteration in some form
        </p>
        <button className="px-5 py-3 bg-red-600 rounded-lg hover:bg-black">
          Discover More
        </button>

        <button className="ml-5 py-3 px-4 rounded-lg btn-outline hover:bg-red-600 border-red-600 border border-red-600 hover:border-red-600 hover:text-white">
          Latest Project
        </button>
      </div>
      <div className="slider_next_prev_btn absolute flex justify-end transform -translate-y-1/2  left-[45%] bottom-0">
        <a
          onClick={() => {
            setActiv(false);
            setSelectSliderItem(true);
          }}
          href={`#slide${prev}`}
          className={`${
            activ ? "" : "slid_active"
          } slider-btn btn btn-circle text-center mr-10`}
        >
          ❮
        </a>
        <a
          onClick={() => {
            setActiv(true);
            setSelectSliderItem(true);
          }}
          href={`#slide${next}`}
          className={`${activ ? "slid_active" : ""} slider-btn btn btn-circle`}
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default SlidersBody;
