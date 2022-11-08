import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Header from "../../Pages/Share/Header/Header";

const MainLayout = () => {
  const { thim } = useContext(AuthContext);

  return (
    <>
      <Header />
      <div className={` bg-${thim ? "white" : "gray"}`}>
        <div className="w-10/12 mx-auto">
          <Outlet />
        </div>
        <div className="bg-base-200">
          <h1>foooter</h1>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
