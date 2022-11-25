import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const RequiredAuth=({children})=>{
  const { isAuthorized } = useContext(AuthContext);
 
  if(!isAuthorized){
    return <Navigate to="/login" replace={false}/>
  }
  return children;
}

export default RequiredAuth;