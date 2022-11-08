import React, { useContext } from "react";

const SlidersItems = ({ item, handelSliderItems }) => {
  const { id, img, next, prev } = item;
  return (
    <div
      onClick={() => handelSliderItems(id, next, prev, img)}
      className="slider_item flex flex-col justify-between h-[100px]   border overflow-hidden rounded-lg shadow-lg cursor-pointer	"
    >
      <img src={img} className="rounded-lg h-full" alt="Slider img" />
    </div>
  );
};

export default SlidersItems;
