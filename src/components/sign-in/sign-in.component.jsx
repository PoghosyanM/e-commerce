import React, { useState } from "react";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "./../../firebase/firebase.utils";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={formData.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={formData.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign In </CustomButton>
        <CustomButton type="submit" onClick={signInWithGoogle}>
          {" "}
          Sign In With Google{" "}
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
