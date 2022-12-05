import React from "react";
import "./table.css";


export const CustomTableRow = ({ rowData }) => {
  return (
    <tr className="tableRow">
      {rowData.map((col,index)=>(
        <td className="tableData" key={index}>{col.value}</td>
      ))}  
    </tr>
  )
}