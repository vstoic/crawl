import { connect } from "react-redux";
// import VenueSection from "./venue_show";
import crawlShow from "./crawl_show"
import { fetchCrawl } from "../../actions/crawl_actions";
const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    crawlsReducer: state.crawlsReducer,
    venueReducer: state.venueReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCrawl: (id) => dispatch(fetchCrawl("630e5dd9e718e845184bc926")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(crawlShow);
