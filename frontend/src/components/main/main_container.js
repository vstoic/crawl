import { connect } from "react-redux";
import { fetchCrawl } from "../../actions/crawl_actions";
import { fetchAllVenues } from "../../actions/venue_actions"; 
import MainPage from "./main";

const mSTP = state => ({
    crawls: Object.values(state.entities.crawls.byId),
    currentUser: state.session.user,
    errors: state.errors.session,
    crawlsReducer: state.entities.crawls,
    venueReducer: state.entities.venues,

});

const mDTP = dispatch => ({
    fetchCrawl: (id) => dispatch(fetchCrawl(id)),
    fetchAllVenues: () => dispatch(fetchAllVenues()),

});

export default connect(mSTP, mDTP)(MainPage);