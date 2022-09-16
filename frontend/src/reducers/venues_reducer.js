import { RECEIVE_ALL_VENUES, RECEIVE_VENUE } from "../actions/venue_actions";

const venuesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_VENUES:
      const venues = action.venues 
      venues.forEach(venue => {
        nextState[venue._id] = venue
      });
      return nextState;
      // return action.venues;
    case RECEIVE_VENUE:
      nextState[action.venue._id] = action.venue
      return nextState;
    default:
      return oldState;
  }
};

export default venuesReducer;
