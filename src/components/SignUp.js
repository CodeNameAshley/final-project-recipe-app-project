import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useAuthentication } from "../providers/Authentication";

function SignUp() {
  const { signUp } = useAuthentication();
  const [error, setError] = useState(false);
  const [data, handler, resetForm] = useForm({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (data.email && data.password &&
       data.password === data.passwordConfirmation &&
      data.password.length >= 6) {
      signUp(data.email, data.password)
        .then((response) => {
          console.log(response);
          setError(false);
          resetForm();
        }).catch((error) => {
          console.log(error);
          setError(true);
        });
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {error && <p>Something went wrong, check your credentials again</p>}
      <input type="text" name="email" placeholder="email" value={data.email} onChange={handler} />
      <input type="password" name="password" placeholder="password" value={data.password} onChange={handler} />
      <input type="password" name="passwordConfirmation" placeholder="confirm password" value={data.passwordConfirmation} onChange={handler} />
      <button type="submit">sign up</button>
    </form>
  );
}

export default SignUp;
