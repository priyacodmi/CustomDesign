import React, { useState } from "react";
import { Input } from "./CustomInput";
import { Button } from "./CustomButton";
import { Form } from "./CustomForm";
import { FormLabel } from "./CustomLabel";


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
    else if(name.length<8 || name.length>20){
      setNameErr("User name must be 8 to 20 characters long!");
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
    const passRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$";
    if(!password){
      setPassErr("Please fill your password!");
    }
    else if(!user.password.match(passRegex)){
      setPassErr("Password must contain one specail character, one lowercse character, one upercase character, and it should be of 8-10 characters long!");
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
    <>
      <h3>Welcome To SignUp Page &#x1F60D;</h3>
      <Form onSubmit={handleSubmit}>
        <FormLabel>User Name :</FormLabel>
        <Input type="text" name="name" value={user.name} onChange={handleChange} onKeyUp={nameValidation} onBlur={nameValidation} placeholder="Enter your name...*" />
        {nameErr && <p style={{color:"red"}}>{nameErr}</p>}
        <FormLabel>Email :</FormLabel>
        <Input type="email" name="email" value={user.email} onChange={handleChange} onKeyUp={emailValidation} onBlur={emailValidation} placeholder="Enter your email...*" />
        {emailErr && <p style={{color:"red"}}>{emailErr}</p>}
        <FormLabel>Password :</FormLabel>
        <Input type="password" name="password" value={user.password} onChange={handleChange} onKeyUp={passValidation} onBlur={passValidation} placeholder="Enter your password...*" />
        {passErr && <p style={{color:"red"}}>{passErr}</p>}
        <FormLabel>Confirm Password :</FormLabel>
        <Input type="password" name="password" value={user.confirmPassword} onChange={handleChange} onKeyUp={confPassValidation} onBlur={confPassValidation} placeholder="Confirm your password...*" />
        {conPassErr && <p style={{color:"red"}}>{conPassErr}</p>}
        <Button>Sign Up</Button>
      </Form>
    </>
  )
}