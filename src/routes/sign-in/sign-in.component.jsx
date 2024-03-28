import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    try {
      // Call the signInWithGooglePopup function to initiate the Google sign-in process
      const { user } = await signInWithGooglePopup();
      // Once the user is authenticated, create a user document in the database
      // eslint-disable-next-line no-unused-vars
      const userDocRef = await createUserDocumentFromAuth(user);
      // Optionally, you can handle any additional logic here after successful sign-in
      console.log("User signed in successfully:", user);
    } catch (error) {
      // Handle any errors that might occur during the sign-in process
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <>
      <h1>Sign In Page</h1>
      {/* Render a button that triggers the logGoogleUser function when clicked */}
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  );
}

export default SignIn;
