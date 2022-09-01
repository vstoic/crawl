
import * as APIUtil from "../util/create_venue_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_CREATE_VENUE = "RECEIVE_CURRENT_CREATE_VENUE";
export const RECEIVE_CREATE_VENUE_SIGN_IN = "RECEIVE_CREATE_VENUE_SIGN_IN";
export const RECEIVE_CREATE_VENUE_LOGOUT = "RECEIVE_CREATE_VENUE_LOGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const CREATE_SINGLE_VENUE = "CREATE_SINGLE_VENUE";


const receiveVenue = (venue) => ({
  type: CREATE_SINGLE_VENUE,
  venue,
});

export const create_venue = (create_venue) => (dispatch) =>
  APIUtil.createVenue(create_venue)
    // .then((create_venue) => (dispatch(receiveCreate_VenueSignIn(create_venue))),
    // err => (dispatch(receiveErrors(err.response.data))))
    // .then(() => login(create_venue))
    .then((res) => {
      dispatch(receiveVenue(res.data));
    })
    // .catch((err) => dispatch(receiveErrors(err.response.data)));

