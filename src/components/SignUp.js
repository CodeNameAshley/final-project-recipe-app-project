import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
// import { useAuthentication } from "../providers/Authentication";
import { useAuthentication } from "../providers/Authentication";
import NavBar from "./NavBar";

function SignUp() {
  const { signUp } = useAuthentication();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, handler, resetForm] = useForm({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (data.email && data.password &&
       data.password === data.passwordConfirmation) {
      signUp(data.email, data.password)
        .then((response) => {
          console.log(response);
          setError(false);
          setLoading(true);
          navigate("/foodleprofile");
          resetForm();
        }).catch((e) => {
          console.log(e);
          setLoading(false);
          setError(true);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={submitHandler}>
        {error && <p>{JSON.stringify(error.message)}</p>}
        <input type="text" name="email" placeholder="email" value={data.email} onChange={handler} />
        <input type="password" name="password" placeholder="password" value={data.password} onChange={handler} />
        <input type="password" name="passwordConfirmation" placeholder="confirm password" value={data.passwordConfirmation} onChange={handler} />
        <button disabled={loading} type="submit">sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
