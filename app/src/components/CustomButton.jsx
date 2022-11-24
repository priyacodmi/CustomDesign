import React from "react";
import './Styles/button.css';

export const Button=({children})=>{
  
  return(
    <>
      <button className="button">
        {children}</button>
    </>
  )
}


