import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = userCredentials;

    console.log(email, password);

    emailSignInStart(email, password);
  };

  return (
    <div className="sign-in">
      <h2>Already Have an Account?</h2>
      <span>Sign In With Email and Password</span>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          handleChange={handleChange}
          type="email"
          name="email"
          value={email}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
