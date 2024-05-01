// in Redux, all the reducers recieve every action. If none of the cases match, return the current state.
import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// give the state an initial value if nothing is passed to it
export const userReducer = (state = INITIAL_STATE, action) => {
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
      // Return the current state so this reducer can indicate no action occured.
      // State is an object, everything in React is referenced by memory. Since it will be the same object in memory no update will occure.
      return state;
  }
};
