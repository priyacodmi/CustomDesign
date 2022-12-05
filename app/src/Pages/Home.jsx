import React from "react";
import "./signup.css";


export const Home = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="container">
      <h3>********User Details********</h3>
      <h4>User-Email : {user.email?user.email:" User is not registered yet"}</h4>
      <img src="https://designwizard.com/blog/inspirational-quotes-for-students/B.B.-King_1650461586440.jpg" alt="pic" />
    </div>
  )
}