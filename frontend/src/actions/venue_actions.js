import * as VenueAPIUtil from "../util/venue_api_util";

export const RECEIVE_ALL_VENUES = "RECEIVE_ALL_VENUES";
export const RECEIVE_VENUE = "RECEIVE_VENUE";
export const RECEIVE_VENUE_ERRORS = 'RECEIVE_VENUE_ERRORS';
export const CLEAR_VENUE_ERRORS = 'CLEAR_VENUE_ERRORS';
export const RECEIVE_VENUE_USER = "RECEIVE_VENUE_USER";

const receiveAllVenues = (venues) => ({
  type: RECEIVE_ALL_VENUES,
  venues,
});

const receiveVenue = (venue) => ({
  type: RECEIVE_VENUE,
  venue,
});

const receiveVenueUser = (venue) =>({
  type: RECEIVE_VENUE_USER,
  venue
});

const receiveVenueErrors = errors => ({
  type: RECEIVE_VENUE_ERRORS,
  errors
});

export const clearVenueErrors = () => ({
  type: CLEAR_VENUE_ERRORS
});


export const fetchAllVenues = () => (dispatch) =>
  VenueAPIUtil.fetchAllVenues().then((venuesResponse) => 
    dispatch(receiveAllVenues(venuesResponse.data))
  );

export const fetchVenue = (venueId) => (dispatch) =>
  VenueAPIUtil.fetchVenue(venueId).then((venue) =>
    dispatch(receiveVenue(venue))
  );

export const createVenue = (venue) => (dispatch) => {
    return VenueAPIUtil.createVenue(venue)
    .then((venue) => dispatch(receiveVenue(venue)))
    .catch(err => dispatch(receiveVenueErrors(err.response.data)))
};
  
export const updateVenue = (venue) => dispatch => (
    VenueAPIUtil.updateVenue(venue)
        .then(payload => dispatch(receiveVenue(payload.data)))
        .catch(err => dispatch(receiveVenueErrors(err.response.data)))
);

export const fetchVenueByUser = (userId) => (dispatch) => {
    VenueAPIUtil.getVenuesByUser(userId).then((venue) => {
      dispatch(receiveVenueUser(venue))
    });
};