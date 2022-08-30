import { connect } from "react-redux";
import VenueSection from "./venue";
import { fetchAllVenues } from "../../actions/venue_actions";
const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    venueReducer: state.venueReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllVenues: () => dispatch(fetchAllVenues()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueSection);
