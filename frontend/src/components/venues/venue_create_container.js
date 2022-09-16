import { connect } from "react-redux";
import { createVenue } from "../../actions/venue_actions";
import VenueForm from "./venue_create";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    errors: state.errors.venues
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createVenue: (venue) => dispatch(createVenue(venue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueForm);
