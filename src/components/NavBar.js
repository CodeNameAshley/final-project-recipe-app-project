import React from "react";
import { Link } from "react-router-dom";
import "../sassstyles/navbar.scss";
import leftArrow from "../images/left-arrow.png";

export default function NavBar() {
  return (
    <div className="navBar__main">
      <Link className="nav-link__back" to="/">
        <img src={leftArrow} className="back" alt="back button" />
      </Link>
      <Link className="nav-link__foodle" to="/">
        <div className="foodle">foodle</div>
      </Link>
    </div>
  );
}
