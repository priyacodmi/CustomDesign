import React from "react";
import './Styles/input.css';

export const Input = ({ type,name,value,onChange, placeholder }) => {
  return (

    <div>
      <input className="input" type={type} name={name} onChange={onChange} value={value} placeholder={placeholder} />
    </div>


  )
}