import React from "react";


export const Form = ({ children, className,onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  )
}