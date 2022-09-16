import { connect } from "react-redux";
import { fetchVenue, updateVenue } from "../../actions/venue_actions";
import VenueEditForm from "./venue_edit";

const mapStateToProps = (state, ownProps) => {
  return {
    venue: state.entities.venues[ownProps.match.params.id],
    currentUser: state.session.user,
    errors: state.errors.venues
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVenue: (venueId) => dispatch(fetchVenue(venueId)),
    updateVenue: (venue) => dispatch(updateVenue(venue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueEditForm);