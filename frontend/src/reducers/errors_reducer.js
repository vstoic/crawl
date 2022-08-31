// src/reducers/errors_reducer.js

import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
// import UserErrorsReducer from "./user_errors_reducer";

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  // user: UserErrorsReducer
});
export default ErrorsReducer;