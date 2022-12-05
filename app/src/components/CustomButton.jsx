import React from "react";
import './Styles/button.css';

export const Button=({children, className,type, id})=>{
  
  return(
    <>
      <button type={type} className={`button ${className}`} id={id}>
        {children}</button>
    </>
  )
}


