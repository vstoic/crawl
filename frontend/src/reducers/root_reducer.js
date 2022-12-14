// src/reducers/root_reducer.js

import { combineReducers } from "redux";
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
// import createVenueReducer from './create_venue_reducer'


const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  // createVenueReducer,

});

export default RootReducer;
