import React from "react";
import './Styles/input.css';

export const Input = ({ type,name,value,onChange,defaultValue,className,id,onReset,onKeyUp,onSearch,onInput,onFocus,onBlur, placeholder }) => {
  return (

    <div>
      <input className={`input ${className}`} id={id} type={type} defaultValue={defaultValue} name={name} onReset={onReset} onSearch={onSearch} onChange={onChange} onFocus={onFocus} onInput={onInput} onKeyUp={onKeyUp} onBlur={onBlur} value={value} placeholder={placeholder} />
    </div>
  )
}