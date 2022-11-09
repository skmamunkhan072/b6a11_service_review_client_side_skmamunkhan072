import React, { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import "./Services.css";
import ServicesCard from "../Share/ServicesCard/ServicesCard";
import SectionTaitle from "../Share/SectionTaitle/SectionTaitle";

const Services = () => {
  const { thim, servicesdata, setServicesdata } = useContext(AuthContext);
  const servicesData = useLoaderData();
  useEffect(() => {
    setServicesdata(servicesData);
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
        <div className="mt-10">
          <div className="svg-wrapper">
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
              <rect id="shape" height="40" width="150" />
            </svg>
            <div id="text">
              <Link to="/services">See All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
