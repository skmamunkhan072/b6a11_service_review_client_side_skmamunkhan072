import React, { useContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Footer from "../../Pages/Share/Footer/Footer";
import Header from "../../Pages/Share/Header/Header";

const MainLayout = () => {
  const { thim, setServicesdata } = useContext(AuthContext);
  const servicesData = useLoaderData();
  useEffect(() => {
    if (servicesData) {
      return setServicesdata(servicesData);
    } else {
      return;
    }
  }, [servicesData]);
  return (
    <>
      <Header />
      <div className={` bg-${thim ? "white" : "gray"}`}>
        <div className="w-10/12 mx-auto">
          <Outlet />
        </div>
        <div className="bg-base-200">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
