import React from "react";
import './Styles/button.css';

export const Button=({children, className, id})=>{
  
  return(
    <>
      <button className={`button ${className}`} id={id}>
        {children}</button>
    </>
  )
}


