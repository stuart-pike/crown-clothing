import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
// logger allows us to see the state b4 an action is dispatched, what the action is, and how the state looks after the action.
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("current sate: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
