/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Route>
      <App />
    </Route>
  </React.StrictMode>,
  document.getElementById("root")
);
