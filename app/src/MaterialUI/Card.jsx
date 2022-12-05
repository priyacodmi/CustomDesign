import React from "react";
import "./property.css";

export const Card=({item})=>{
  return(
    <div className="card">
        <div className="imageDiv">
          <img src={item.image} alt="pic" />
        </div>
        <div>
          <h4>{item.title}</h4>
          <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <span>Rs. {item.rent}/ month</span>
            <span>❤️</span>
          </div>
          <p>{item.description}</p>
          <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <span>{item.type}</span>
            <span>Location <strong> : {item.location}</strong></span>
          </div>
        </div>
    </div>
  )
}