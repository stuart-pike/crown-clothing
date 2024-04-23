/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  console.log("dispatched");
  console.log(action);
  // only two possible properties, type and an optional payload.
  const { type, payload } = action;
  // conditionally return back values depending on the type
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        // returning an object except the ones being modified
        ...state, //provide all the previous values
        currentUser: payload, // overwrite curentUser with payload value
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

// the provider is the actual component that wraps around the other components which require access to the data stored in context.
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  // want to store user object
  // const [currentUser, setCurrentUser] = useState(null); no longer using useState, instead using a Reducer
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };
  // pass object to children: the actual value and the setter function
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
