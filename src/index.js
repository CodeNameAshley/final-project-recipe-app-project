import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import AuthenticationProvider from "./providers/Authentication";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
