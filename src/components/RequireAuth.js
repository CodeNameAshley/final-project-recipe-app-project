import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthentication } from "../providers/Authentication";

function RequireAuth() {
  const { currentUser } = useAuthentication();
  const location = useLocation();

  return (
    currentUser
      ? <Outlet />
      : <Navigate
          to="/login"
          state={{
            from: location
          }}
          replace
      />
  );
}

export default RequireAuth;
