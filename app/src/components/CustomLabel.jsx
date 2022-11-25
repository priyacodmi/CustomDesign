import React from "react";

export const FormLabel=({children, className})=>{
    return(
      <>
        <p className={className}>{children}</p>
      </>
    )
}