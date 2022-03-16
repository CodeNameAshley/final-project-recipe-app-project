import React from "react";
import { Link } from "react-router-dom";
import "../sass-styles/navbar.scss";
import logo from "../images/foodle-logo.png";
import backButton from "../images/back-button.png";

export default function NavBar() {
  return (
    <div className="navBar__main">
      <Link to="/">
        <img src={backButton} className="back" alt="back button" />
      </Link>
      <Link to="/">
        <img src={logo} alt="foodle logo" />
      </Link>
    </div>
  );
}
