import { combineReducers } from "redux";
import crawlsReducer from "./crawls_reducer";

const EntitiesReducer = combineReducers({
    crawls: crawlsReducer,
});

export default EntitiesReducer;