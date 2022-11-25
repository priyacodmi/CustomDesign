import React, { useState } from "react";
import { Input } from "../components/CustomInput";
import { Button } from "../components/CustomButton";
import { Form } from "../components/CustomForm";
import { FormLabel } from "../components/CustomLabel";
import "./signup.css";


export const SignUp = () => {
  const initialState={
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  }
  const [user,setUser]=useState(initialState);
  const [nameErr,setNameErr]=useState("");
  const [emailErr,setEmailErr]=useState("");
  const [passErr,setPassErr]=useState("");
  const [conPassErr,setConPassErr]=useState("");

  const handleChange=(e)=>{
    const {value,name}=e.target;
    setUser({
      ...user,
      [name]:value
    });
  }

  const { name, email, password, confirmPassword}= user;


  // name validation
  const nameValidation=()=>{
    const nameRegex="[a-zA-Z][a-zA-Z ]+[a-zA-Z]$";
    if(!name){
      setNameErr("User name is required!");
    }
    else if(name.length<3 || name.length>20){
      setNameErr("User name must be 3 to 20 characters long!");
    }
    else if(!name.match(nameRegex)){
      setNameErr("Please enter a valid name, name should contains only alphabate characters!");
    }
    else{
      setNameErr("");
    }
    return true;
  }

    
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
    


    //confirm password validation
  const confPassValidation=()=>{
    const confPassRegex=password;
    if(!confirmPassword){
      setConPassErr("Please confirm your password!");
    }
    else if(!confirmPassword.match(confPassRegex)){
      setConPassErr("Password did not match!");
    }
    else{
      setConPassErr("");
    }
    
    return true;
  }

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    nameValidation();
    emailValidation();
    passValidation();
    confPassValidation();
    if(name!=="" && email!=="" && password!=="" && confirmPassword!==""){
      console.log("user",user);
    }
  }


  return (
    <div className="signContainer">
      <h3>Welcome To SignUp Page &#x1F60D;</h3>
      <Form onSubmit={handleSubmit} className="formContainer">
        <FormLabel className="formLabel">User Name :</FormLabel>
        <Input type="text" name="name" value={user.name} onChange={handleChange} onKeyUp={nameValidation} onBlur={nameValidation} placeholder="Enter your name...*" />
        {nameErr && <p style={{color:"red"}}>{nameErr}</p>}
        <FormLabel className="formLabel">Email :</FormLabel>
        <Input type="email" name="email" value={user.email} onChange={handleChange} onKeyUp={emailValidation} onBlur={emailValidation} placeholder="Enter your email...*" />
        {emailErr && <p style={{color:"red"}}>{emailErr}</p>}
        <FormLabel className="formLabel">Password :</FormLabel>
        <Input type="password" name="password" value={user.password} onChange={handleChange} onKeyUp={passValidation} onBlur={passValidation} placeholder="Enter your password...*" />
        {passErr && <p style={{color:"red"}}>{passErr}</p>}
        <FormLabel className="formLabel">Confirm Password :</FormLabel>
        <Input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} onKeyUp={confPassValidation} onBlur={confPassValidation} placeholder="Confirm your password...*" />
        {conPassErr && <p style={{color:"red"}}>{conPassErr}</p>}
        <Button>Sign Up</Button>
      </Form>
    </div>
  )
}