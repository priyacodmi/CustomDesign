import React, { useState } from "react";
import { Input } from "../components/CustomInput";
import { Button } from "../components/CustomButton";
import { Form } from "../components/CustomForm";
import { FormLabel } from "../components/CustomLabel";
import "./signup.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";


export const SignIn = () => {
  const initialState={
    email:"",
    password:""
  }
  const [user,setUser]=useState(initialState);
  const [emailErr,setEmailErr]=useState("");
  const [passErr,setPassErr]=useState("");
  const { handleAuth } = useContext(AuthContext);
  const navigate=useNavigate();


  const handleChange=(e)=>{
    const {value,name}=e.target;
    setUser({
      ...user,
      [name]:value
    });
  }

  const { email, password }= user;

    
    //email validation
  const emailValidation=()=>{
    const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if(!email){
      setEmailErr("Email is required!");
    }
    else if(!email.match(emailRegex)){
      setEmailErr("Please enter a valid email!");
    }
    else{
      setEmailErr("");
    }
    return true;
  }


    //password validation
  const passValidation=()=>{
    const passRegex="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$";
    if(!password){
      setPassErr("Please fill your password!");
    }
    else if(!password.match(passRegex)){
      setPassErr("Password must contain one special character, one lowercse character, one upercase character, and it should be of 6-10 characters long!");
    }
    else{
      setPassErr("");
    }
    return true;
  }

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    emailValidation();
    passValidation();
    if(email!=="" && password!==""){
      console.log("user",user);
      localStorage.setItem("user",JSON.stringify(user));
    }
    handleAuth(true);
    navigate("/admin", { replace:true});
  }


  return (
    <div className="signContainer">
      <h3>Welcome To SignIn Page &#x1F60D;</h3>
      <Form onSubmit={handleSubmit} className="formContainer">
        <FormLabel className="formLabel">Email :</FormLabel>
        <Input type="email" name="email" value={user.email} onChange={handleChange} onKeyUp={emailValidation} onBlur={emailValidation} placeholder="Enter your email...*" />
        {emailErr && <p style={{color:"red"}}>{emailErr}</p>}
        <FormLabel className="formLabel">Password :</FormLabel>
        <Input type="password" name="password" value={user.password} onChange={handleChange} onKeyUp={passValidation} onBlur={passValidation} placeholder="Enter your password...*" />
        {passErr && <p style={{color:"red"}}>{passErr}</p>}
        <Button>Sign In</Button>
      </Form>
    </div>
  )
}