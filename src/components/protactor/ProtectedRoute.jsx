import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  if (token === null) {
    return <Navigate to="/register" />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
