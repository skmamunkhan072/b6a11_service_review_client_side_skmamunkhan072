import React, { useContext, useEffect } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import "./Services.css";
import ServicesCard from "../Share/ServicesCard/ServicesCard";
import SectionTaitle from "../Share/SectionTaitle/SectionTaitle";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  const { thim, servicesdata, setServicesdata } = useContext(AuthContext);
  const servicesData = useLoaderData();
  const { pathname } = useLocation();
  console.log(servicesdata.length);

  useEffect(() => {
    if (servicesData) {
      return setServicesdata(servicesData);
    } else {
      return;
    }
  }, [servicesData]);

  return (
    <div className="py-20 text-gray-500">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <SectionTaitle taitle={"Services"} />
        <div className="grid gap-4 row-gap-5 sm:grid-cols-1 lg:grid-cols-2 my-20">
          {servicesdata.map((card) => (
            <ServicesCard key={card._id} card={card} />
          ))}
        </div>
        <div
          className={`mt-10 ${
            pathname === "/home" || pathname === "/" ? "" : "hidden"
          }`}
        >
          <div className="svg-wrapper">
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
              <rect id="shape" height="40" width="150" />
            </svg>
            <div className="text" id="see_all_btn">
              <Link to="/services" className="flex justify-center items-center">
                See All
                <BsArrowRight className="ml-2 mt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
