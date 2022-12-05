
import React, { useState } from "react";
import { Input } from "./Input";
import data from "./db.json";
import "./property.css";
import { Card } from "./Card";


export default function Property(){
  const [property,setProperty]=useState(data.property);

  const filterHandler=(location,type,rent)=>{
    console.log(location,type,rent)
    if(location === "Noida" && rent==="six" && type=== "one"){
      setProperty(
        data.property.filter((el)=>el.location === "Noida")
        .filter((el)=>el.type=== "1 BHK")
        .filter((el)=>el.rent>=6000 && el.rent<=16000)
      )
    }
    else if(location === "Noida" && rent==="five" && type=== "one"){
      setProperty(
        data.property.filter((el)=>el.location === "Noida")
        .filter((el)=>el.type=== "1 BHK")
        .filter((el)=>el.rent>=15000)
      )
    }
    else if(location === "Noida" && rent==="six" && type=== "two"){
      setProperty(
        data.property.filter((el)=>el.location === "Noida")
        .filter((el)=>el.type=== "2 BHK")
        .filter((el)=>el.rent>=6000 && el.rent<=16000)
      )
    }
    else if(location === "Noida" && rent==="five" && type=== "two"){
      setProperty(
        data.property.filter((el)=>el.location === "Noida")
        .filter((el)=>el.type=== "2 BHK")
        .filter((el)=>el.rent>=15000)
      )
    }
    else if(location === "Delhi" && rent==="six" && type=== "one"){
      setProperty(
        data.property.filter((el)=>el.location === "Delhi")
        .filter((el)=>el.type=== "1 BHK")
        .filter((el)=>el.rent>=6000 && el.rent<=16000)
      )
    }
    else if(location === "Delhi" && rent==="five" && type=== "one"){
      setProperty(
        data.property.filter((el)=>el.location === "Delhi")
        .filter((el)=>el.type=== "1 BHK")
        .filter((el)=>el.rent>=15000)
      )
    }
    else if(location === "Delhi" && rent==="six" && type=== "two"){
      setProperty(
        data.property.filter((el)=>el.location === "Delhi")
        .filter((el)=>el.type=== "2 BHK")
        .filter((el)=>el.rent>=6000 && el.rent<=16000)
      )
    }
    else if(location === "Delhi" && rent==="five" && type=== "two"){
      setProperty(
        data.property.filter((el)=>el.location === "Delhi")
        .filter((el)=>el.type=== "2 BHK")
        .filter((el)=>el.rent>=15000)
      )
    }
    else{
      setProperty(data.property);
    }
  }
  return(
    <div className="mainContainer">
      <Input filterHandler={filterHandler}/>
      <div className="propertyContainer">
          {
            property.map((item,ind)=>(
              <Card item={item} key={ind}/>
            ))
          }
      </div>
    </div>
  )
}