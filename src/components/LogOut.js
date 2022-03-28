import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../providers/Authentication";

export default function FoodleProfile() {
  const [error, setError] = useState(false);
  const { logout } = useAuthentication();
  const navigate = useNavigate;

  const handleLogout = async () => {
    try {
      await logout();
      console.log("you've been logged out");
      navigate("/");
    } catch {
      setError(true);
      console.log("error");
    }
  };

  return (
    <div>
      {error && <p>your account can't be logged out!</p>}
      <button onClick={handleLogout}>log out</button>
    </div>
  );
}
