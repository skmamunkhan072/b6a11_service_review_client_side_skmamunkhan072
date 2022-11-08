import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import "./Services.css";
import ServicesData from "../../../Data/data.json";
import ServicesCard from "../Share/ServicesCard/ServicesCard";

const Services = () => {
  const { thim } = useContext(AuthContext);

  return (
    <div className="py-20 text-gray-500">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div>
          <h2
            className={`${
              thim ? "section_header" : ""
            } relative mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-500 sm:text-4xl md:mx-auto`}
          >
            <span className="inline-block">
              {thim ? (
                ""
              ) : (
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute bottom-0 sm:right-[38%] md:right-[40%] lg:right-[42%]  xl:right-[45%] hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                    width="52"
                    height="24"
                  />
                </svg>
              )}
            </span>
            Services
          </h2>
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-1 lg:grid-cols-2 my-20">
          {ServicesData.map((card) => (
            <ServicesCard key={card._id} card={card} />
          ))}
        </div>
        <div className="mt-10">
          <button className="px-5 py-2 rounded-lg btn-accent">See All</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
