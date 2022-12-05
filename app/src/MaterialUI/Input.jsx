import React, { useState } from "react";
import "./property.css";


export const Input=({filterHandler})=>{
  const initialState={
    location:"",
    type:"",
    rent:""
  }
  const [filterCat,setFilterCat]=useState(initialState);

  const handleChange=(e)=>{
    const { value, name } = e.target;
    setFilterCat({
      ...filterCat,
      [name]:value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
   // console.log(filterCat.location, filterCat.type , filterCat.rent)
    if(filterCat.location !== "" && filterCat.type !== "" && filterCat.rent !== ""){
      filterHandler(filterCat.location, filterCat.type , filterCat.rent);
    } 
  }
  return(

    <div>
      <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <select name="location" onChange={handleChange}>
              <option value="location">Location</option>
              <option value="Noida">Noida</option>
              <option value="Delhi">Delhi</option>
            </select>
            <select name="type" onChange={handleChange}>
              <option value="location">Property Type</option>
              <option value="one">1 BHK</option>
              <option value="two">2 BHK</option>
            </select>
            <select name="rent" onChange={handleChange}>
              <option value="rent">Price Range</option>
              <option value="six">Rs. 6K to 16K</option>
              <option value="five">Rs. {`>`} 15K</option>
            </select>
            <button>Search</button>
          </div>
      </form>
    </div> 
  )
}