import React, {useState} from "react";
import { useAuthentication } from "../providers/Authentication";
import { Link, useNavigate } from "react-router-dom";

export default function FoodleProfile() {
  const [error, setError] = useState("");
  const {currentUser, logout} = useAuthentication();
  const navigate = useNavigate

  const handleLogout = async () => {
    setError('')

    try {
      await logout();
      navigate('/login')

    } catch {
      setError('failed to log out')

    }

  }

  return (
    <div>
      <h1>Foodle Profile Component</h1>
      <Link to="/">homepage</Link>
      <button onClick={handleLogout}>log out</button>
    </div>
  );
}
