import { connect } from "react-redux";
import VenueIndex from "./venue_index";
import { fetchAllVenues } from "../../actions/venue_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    venues: Object.values(state.entities.venues),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllVenues: () => dispatch(fetchAllVenues()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueIndex);
