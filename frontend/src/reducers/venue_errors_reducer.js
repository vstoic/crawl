import { RECEIVE_VENUE_ERRORS, 
    RECEIVE_VENUE, 
    CLEAR_VENUE_ERRORS } from "../actions/venue_actions";

const _nullErrors = [];

const VenueErrorsReducer = (oldState = _nullErrors, action) => {
Object.freeze(oldState);
switch(action.type) {
 case RECEIVE_VENUE_ERRORS:
   return action.errors;
 case RECEIVE_VENUE:
   return _nullErrors;
   case CLEAR_VENUE_ERRORS:
     return _nullErrors;
 default:
   return oldState;
}
};

export default VenueErrorsReducer