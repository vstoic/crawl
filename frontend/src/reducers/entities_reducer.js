import { combineReducers } from "redux";
import crawlsReducer from "./crawls_reducer";
import usersReducer from "./users_reducer";
import venueReducer from './venues_reducer'


const EntitiesReducer = combineReducers({
    users: usersReducer,
    crawls: crawlsReducer,
    venues: venueReducer
});

export default EntitiesReducer;