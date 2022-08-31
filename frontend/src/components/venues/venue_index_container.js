import { connect } from "react-redux";
import VenueSection from "./venue_show";
import { fetchVenue } from "../../actions/venue_actions";
const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    venueReducer: state.venueReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVenue: (id) => dispatch(fetchVenue(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueSection);