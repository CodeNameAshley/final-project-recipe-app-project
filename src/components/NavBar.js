import React from "react";
import { Link } from "react-router-dom";
import "../sass-styles/navbar.scss";
import logo from "../images/foodle-logo.png";
import backButton from "../images/back-button.png";
import { useAuthentication } from "../providers/Authentication";

export default function NavBar() {
  const { currentUser } = useAuthentication();
  return (
    <div className="navBar__main">
      <Link to="/" onClick={window.scrollTo(0, 0)}>
        <img src={backButton} className="back" alt="back button" />
      </Link>
      <Link to="/" onClick={window.scrollTo(0, 0)}>
        <img src={logo} alt="foodle logo" />
      </Link>
      {currentUser ? <Link to="/logout" onClick={window.scrollTo(0, 0)}>
        <p>log out</p>
      </Link> : null }
      {currentUser ?
        <Link to="/foodleprofile" onClick={window.scrollTo(0, 0)}>
          <p>profile</p>
        </Link> :
        <Link to="/login" onClick={window.scrollTo(0, 0)}>
          <p>login</p>
        </Link>}
    </div>
  );
}
