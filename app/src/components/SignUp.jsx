import React from "react";
import { Input } from "./CustomInput";
import { Button } from "./CustomButton";
import { Form } from "./CustomForm";
import { FormLabel } from "./CustomLabel";
import { useState } from "react";

export const SignUp = () => {
  const initialState={
    name:"",
    email:"",
    password:""
  }
  const [user,setUser]=useState(initialState);

  const handleChange=(e)=>{
    const {value,name}=e.target;
    setUser({
      ...user,
      [name]:value
    });
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("user",user);
    setUser(initialState);
  }

  return (
    <>
      <h3>Welcome To SignUp Page &#x1F60D;</h3>
      <Form onSubmit={handleSubmit}>
        <FormLabel>User Name :</FormLabel>
        <Input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your name...*" />
        <FormLabel>Email :</FormLabel>
        <Input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email...*" />
        <FormLabel>Password :</FormLabel>
        <Input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password...*" />
        <Button>Sign Up</Button>
      </Form>
    </>
  )
}