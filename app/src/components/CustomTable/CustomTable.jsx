import React from "react";
import { CustomTableRow } from "./CustomTableRow";
import "./table.css";


export const CustomTable=(props)=>{
  const { headerData = [], data = [] } = props;
  

  const tableHead = headerData.length > 0 && headerData.map((row, index) => {
      return (
        <CustomTableRow
          key={index}
          bold
          rowData={row}/>
      );
    });

  const tableBody = data.map((row, index) => {
     console.log("row",row)
    return (
      <CustomTableRow
        key={index}
        rowData={row}
      />
    );
  });

  return(
    <table className="table">
      <thead className="tableHead">{tableHead}</thead>
      <tbody className="tableBody">{tableBody}</tbody> 
    </table>
  )
}