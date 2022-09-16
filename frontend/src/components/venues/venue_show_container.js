import { connect } from "react-redux";
import VenueShow from "./venue_show";
import { fetchVenue } from "../../actions/venue_actions";

const mapStateToProps = (state, ownProps) => {
 
  return {
    venue: state.entities.venues[ownProps.match.params.id],
    errors: state.errors.session,
    venueReducer: state.entities.venues,
    createVenueReducer: state.createVenueReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVenue: (id) => dispatch(fetchVenue(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueShow);
