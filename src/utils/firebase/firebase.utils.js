// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  //signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATb7Hf-sYsbsITL-0MNaGyomjpG355U2I",
  authDomain: "crwn-clothing-db-8849c.firebaseapp.com",
  projectId: "crwn-clothing-db-8849c",
  storageBucket: "crwn-clothing-db-8849c.appspot.com",
  messagingSenderId: "1056094538558",
  appId: "1:1056094538558:web:b1f4a4d48cbec8ec473a6f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  //console.log(userDocRef);

  try {
    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot.data());
    // check if userSnapshot exists. If not write to db
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    }
  } catch (error) {
    console.log("Error creating the user:", error.message);
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; // Ensure both email and password are provided

  try {
    // Create a new user account with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Optionally, you can handle any additional logic here after successful user creation
    console.log("User created successfully:", userCredential.user);
    return userCredential; // Return the user credential if needed
  } catch (error) {
    // Handle any errors that might occur during user creation
    console.error("Error creating user:", error.message);
    throw error; // Throw the error for further handling if needed
  }
};
