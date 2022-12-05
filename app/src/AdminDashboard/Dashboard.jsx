import React from "react";
import { Button } from "../components/CustomButton";
import { Input } from "../components/CustomInput";
import { CustomTable } from "../components/CustomTable/CustomTable";
import { DropDown } from "../components/DropDown";
import "./dashboard.css";


export const Dashboard=()=>{
    const options=[{value:"Grade A"},{value:"Grade B"},{value:"Grade C"}]
    const headerData=[[{value:<Input type="checkbox"/>},{value:"Roll_Number"},{value:"Student_Name"}, {value:"Course"}, {value:"Marks"}, 
    {value:"Remove"}, {value:"Update"},{value:"Dropdown"}
]];
  const tableData=[[{value:<Input type="checkbox"/>},{value:101},{value:"Ajay Kumar"},{value:"Btech"},{value:"86%"},
   {value:<Button>Remove</Button>},{value:<Button>Update</Button>},{value:<DropDown name="dropdown" options={options}/>}
],
[{value:<Input type="checkbox"/>},{value:102},{value:"Ramesh Kumar"},{value:"BCA"},{value:"80%"},
   {value:<Button>Remove</Button>},{value:<Button>Update</Button>},{value:<DropDown name="dropdown" options={options}/>}
],
[{value:<Input type="checkbox"/>},{value:103},{value:"Vinay Kumar"},{value:"Mtech"},{value:"79%"},
   {value:<Button>Remove</Button>},{value:<Button>Update</Button>},{value:<DropDown name="dropdown" options={options}/>}
],
[{value:<Input type="checkbox"/>},{value:104},{value:"Vikash Kumar"},{value:"MCA"},{value:"76%"},
   {value:<Button>Remove</Button>},{value:<Button>Update</Button>},{value:<DropDown name="dropdown" options={options}/>}
]]
  return(
    <div className="tableContainer">
    <h1 style={{textAlign:"center", padding:"5px",color:"teal"}}>Custom Table</h1>
    <CustomTable headerData={headerData} data={tableData}/>
    </div>
    
  )
}