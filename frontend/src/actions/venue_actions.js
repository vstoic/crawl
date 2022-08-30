import * as VenueApiUtil from "../util/venue_api_util";

export const RECEIVE_ALL_VENUES = "RECEIVE_ALL_VENUES";
export const RECEIVE_VENUE = "RECEIVE_VENUE";

const receiveAllVenues = (venues) => ({
  type: RECEIVE_ALL_VENUES,
  venues,
});

const receiveVenue = (venue) => ({
  type: RECEIVE_VENUE,
  venue,
});

export const fetchAllVenues = () => (dispatch) =>
  VenueApiUtil.fetchAllVenues().then((venuesResponse) => 
    dispatch(receiveAllVenues(venuesResponse.data))
  );

export const fetchVenue = (venueId) => (dispatch) =>
  VenueApiUtil.fetchVenue(venueId).then((venue) =>
    dispatch(receiveVenue(venue))
  );
