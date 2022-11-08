import React from "react";
import img from "../../Assets/imessage/SliderImg/1.jpg";

const ServiceDetailsPage = () => {
  return (
    <div className="py-20">
      <h1>hello ServiceDetailsPage</h1>
      <div>
        <div className="w-3/4 mx-auto h-[500px]">
          <div className="w-full h-full">
            <img
              src={img}
              alt="service img"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="my-5 text-start">
            <h1 className="card-title">sdffdfsd</h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              maiores cumque, molestias nostrum voluptate soluta quis itaque
              esse eum illum velit ratione. Dicta quaerat provident, placeat
              nostrum vel maiores tempore iste accusantium molestiae repudiandae
              eaque quis recusandae harum, commodi nesciunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
