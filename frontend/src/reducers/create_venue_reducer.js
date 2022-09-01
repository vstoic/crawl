// import { RECEIVE_ALL_VENUES, RECEIVE_VENUE } from "../actions/venue_actions";
import { CREATE_SINGLE_VENUE} from '../actions/create_venue_actions'
const _nullState = {
  venues: [],
  singleVenue: {},
};

const venuesReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    // case RECEIVE_ALL_VENUES:
    //   nextState.venues = action.venues;

    //   return nextState;
    case CREATE_SINGLE_VENUE:
      nextState.singleVenue = action.venue;
      return nextState;
    default:
      return oldState;
  }
};

export default venuesReducer;
