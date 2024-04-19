import { useState } from "react";
import {
  //createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, BtnContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      // Call the signInWithGooglePopup function to initiate the Google sign-in process
      await signInWithGooglePopup();
      // Optionally, you can handle any additional logic here after successful sign-in
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      resetFormFields();
      //add a welcome or you have been sign up here maybe
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for this email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
          autoComplete="email"
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          autoComplete="password"
        />
        <BtnContainer>
          <Button type="submit">Sign In</Button>
          {/* type button prevents "submit" */}
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </BtnContainer>
      </form>
    </SignInContainer>
  );
}

export default SignInForm;
