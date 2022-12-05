import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Styles/navbar.css";

export const Navbar = () => {
  const { isAuthorized, handleAuth}=useContext(AuthContext);

  const logOut=()=>{
    localStorage.clear();
    handleAuth(false)
  }
  return (
    <div className="mainContainer">
      <ul className="navContainer">
        <li>
          <Link className="link" to="/"><h3 className="appLogo">MyApp</h3></Link>
        </li>
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/admin">Admin</Link>
        </li>
        <li>
          <Link className="link" to="/login" onClick={logOut}>{isAuthorized?"LogOut":"SignIn"}</Link>
        </li>
        <li>
          <Link className="link" to="/register">{isAuthorized?null:"SignUp"}</Link>
        </li>
        
      </ul>   
    </div>
  )
}