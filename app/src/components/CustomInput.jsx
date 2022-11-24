import React from "react";
import './Styles/input.css';

export const Input = ({ type, placeholder }) => {
  return (

    <div>
      <input className="input" type={type} placeholder={placeholder} />
    </div>


  )
}