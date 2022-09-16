import { connect } from "react-redux";
// import VenueSection from "./venue_show";
import crawlShow from "./crawl_show"
import { fetchCrawl, updateCrawl} from "../../actions/crawl_actions";
import { fetchAllVenues } from "../../actions/venue_actions";
const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    crawlsReducer: state.entities.crawls,
    venueReducer: state.entities.venues,
    session:state.session,
    victor: state.entities.venues
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCrawl: (id) => dispatch(fetchCrawl(id)),
    fetchAllVenues: () => dispatch(fetchAllVenues()),
    updateCrawl: (crawl) => dispatch(updateCrawl(crawl)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(crawlShow);
