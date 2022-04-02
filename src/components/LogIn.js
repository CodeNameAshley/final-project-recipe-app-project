import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useAuthentication } from "../providers/Authentication";
import NavBar from "./NavBar";

function LogIn() {
  const { login } = useAuthentication();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, handler, resetForm] = useForm({
    email: "",
    password: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(data.email, data.password);
      navigate("/foodleprofile");
      console.log("You logged in!")
      resetForm();
    } catch {
      console.log(error);
      setLoading(false);
      setError(true);
    };
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Log In</h1>
      {error && <p>something went wrong</p>}
      <form onSubmit={submitHandler}>
        <input type="text" name="email" value={data.email} onChange={handler} />
        <input type="password" name="password" value={data.password} onChange={handler} />
        <button disabled={loading} type="submit">log in</button>
      </form>
      <Link to="/signup">
        Sign Up
      </Link>
      <Link to="/">
        Go Home
      </Link>
    </div>
  );
}

export default LogIn;
