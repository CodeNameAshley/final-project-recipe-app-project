import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

function LogIn() {
  const [data, handler, resetForm] = useForm({
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    resetForm();
  };

  return (
    <div>

      <form onSubmit={submitHandler}>
        <input type="text" name="email" value={data.email} onChange={handler} />
        <input type="password" name="password" value={data.password} onChange={handler} />
        <button type="submit">log in</button>
      </form>
      <Link to="/signup">
        Sign Up
      </Link>
    </div>
  );
}

export default LogIn;
