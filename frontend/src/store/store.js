import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from "../reducers/root_reducer";
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const configureStore = (preloadedState = {}) =>
  createStore(persistedReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
