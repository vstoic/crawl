import { connect } from "react-redux";
// import VenueSection from "./venue_show";
import { fetchCrawl } from "../../actions/crawl_actions";
const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    // venueReducer: state.venueReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCrawl: (id) => dispatch(fetchCrawl(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueSection);
