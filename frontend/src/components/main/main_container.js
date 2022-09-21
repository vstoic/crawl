import { connect } from "react-redux";
// import { fetchCrawl } from "../../actions/crawl_actions";
import { fetchAllVenues } from "../../actions/venue_actions"; 
import { fetchAllCrawls } from "../../actions/crawl_actions";
import MainPage from "./main";

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        crawls: Object.values(state.entities.crawls.allIds),
        venueReducer: state.entities.venues,
    };
};

const mDTP = (dispatch) => {
    return {
        fetchAllCrawls: () => dispatch(fetchAllCrawls()),
        fetchAllVenues: () => dispatch(fetchAllVenues())
    };
};

export default connect(mSTP, mDTP)(MainPage);