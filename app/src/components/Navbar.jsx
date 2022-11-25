import React from "react";
import { Link } from "react-router-dom";
import "./Styles/navbar.css";

export const Navbar = () => {
  return (
    <div className="mainContainer">
      <ul className="navContainer">
        <li>
          <Link className="link"><h3 className="appLogo">MyApp</h3></Link>
        </li>
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/login">SignIn</Link>
        </li>
        <li>
          <Link className="link" to="/register">SignUp</Link>
        </li>
        <li>
          <Link className="link" to="/admin">Admin</Link>
        </li>
      </ul>   
    </div>
  )
}