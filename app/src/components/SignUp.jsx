import React from "react";
import { Input } from "./CustomInput";
import { Button } from "./CustomButton";
import { Form } from "./CustomForm";
import { FormLabel } from "./CustomLabel";

export const SignUp = () => {
  return (
    <>
      <h3>Welcome To SignUp Page &#x1F60D;</h3>
      <Form>
        <FormLabel>User Name :</FormLabel>
        <Input type="text" placeholder="Enter your name...*" />
        <FormLabel>Email :</FormLabel>
        <Input type="email" placeholder="Enter your email...*" />
        <FormLabel>Password :</FormLabel>
        <Input type="password" placeholder="Enter your password...*" />
        <Button>Sign Up</Button>
      </Form>
    </>
  )
}