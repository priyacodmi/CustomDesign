import React from "react";
import './Styles/input.css';

export const Input = ({ type,name,value,onChange,onKeyUp,onBlur, placeholder }) => {
  return (

    <div>
      <input className="input" type={type} name={name} onChange={onChange} onKeyUp={onKeyUp} onBlur={onBlur} value={value} placeholder={placeholder} />
    </div>


  )
}