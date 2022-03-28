import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthentication } from "../providers/Authentication";

function PrivateRoute({ children }) {
  const { currentUser } = useAuthentication();

  return currentUser ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
