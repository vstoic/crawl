import { combineReducers } from "redux";
import crawlsReducer from "./crawls_reducer";
import usersReducer from "./users_reducer";
import venueReducer from './venues_reducer'
import commentReducer from './comments_reducer'

const EntitiesReducer = combineReducers({
    users: usersReducer,
    crawls: crawlsReducer,
    venues: venueReducer,
    comments: commentReducer
});

export default EntitiesReducer;