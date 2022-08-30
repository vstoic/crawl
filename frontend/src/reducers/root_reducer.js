// src/reducers/root_reducer.js

import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import userSession from './session_api_reducer'

const RootReducer = combineReducers({
  session,
  errors,
  userSession
});

export default RootReducer;
