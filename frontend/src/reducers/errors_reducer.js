// src/reducers/errors_reducer.js

import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
// import UserErrorsReducer from "./user_errors_reducer";
import CrawlErrorsReducer from "./crawls_errors_reducer";
import CommentErrorsReducer from "./comments_errors_reducer";
import VenueErrorsReducer from "./venue_errors_reducer";

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  // user: UserErrorsReducer
  crawl: CrawlErrorsReducer,
  comment: CommentErrorsReducer,
  venues: VenueErrorsReducer
});
export default ErrorsReducer;