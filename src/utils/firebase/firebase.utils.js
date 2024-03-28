// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  //signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
      });
    }
  } catch (error) {
    console.log("Error creating the user:", error.message);
  }
  return userDocRef;
};
