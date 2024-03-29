//import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
import {
  //auth,
  signInWithGooglePopup,
  //signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

function SignIn() {
  // Function to handle signing in with Google using popup
  const logGooglePopupUser = async () => {
    try {
      // Call the signInWithGooglePopup function to initiate the Google sign-in process
      const { user } = await signInWithGooglePopup();
      // Once the user is authenticated, create a user document in the database
      const userDocRef = await createUserDocumentFromAuth(user);
      // Optionally, you can handle any additional logic here after successful sign-in
      console.log("User signed in successfully:", user);
    } catch (error) {
      // Handle any errors that might occur during the sign-in process
      console.error("Error signing in:", error.message);
    }
  };

  // Render the sign-in component
  return (
    <>
      <h1>Sign In Page</h1>
      {/* Render a button that triggers the logGoogleUser function when clicked */}
      <button onClick={logGooglePopupUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </>
  );
}

// Export the SignIn component as default
export default SignIn;

/*
  // useEffect hook to handle redirect result when component mounts
  useEffect(() => {
    // Define an asynchronous function to handle redirect result
    const handleRedirectResult = async () => {
      try {
        // Retrieve redirect result from Firebase authentication
        const response = await getRedirectResult(auth);
        // If there is a valid response from the redirect
        if (response) {
          // Create a user document in the database using the response user data
          const userDocRef = await createUserDocumentFromAuth(response.user);
          // Log the response data
          console.log(response);
        }
      } catch (error) {
        // Handle any errors that occur during the redirect result handling
        console.error("Error handling redirect result:", error.message);
      }
    };
    // Call the function to handle redirect result when component mounts
    handleRedirectResult();
  }, []); // Empty dependency array to ensure this effect runs only once when component mounts



      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
*/
