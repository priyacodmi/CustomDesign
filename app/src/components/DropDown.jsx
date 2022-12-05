import React from 'react';
import "./Styles/button.css";

export const DropDown = ({name,options}) => {
  return (
    <div className='dropdown'>
      <select name={name} id="">
        {options.map((option,index)=>(
          <option key={index} value={option.value}>{option.value}</option>
        ))}
      </select>
    </div>
  )
}
