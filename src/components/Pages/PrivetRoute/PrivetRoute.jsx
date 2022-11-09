import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { loading, currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  const location = useLocation();
  if (loading) {
    return <p>hello .............................</p>;
  }
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivetRoute;
