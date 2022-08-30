import { connect } from "react-redux";
import { fetchAllCrawls } from "../../actions/crawl_actions";
import MainPage from "./main";

const mSTP = state => ({
    crawls: Object.values(state.entities.crawls.byId),
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    fetchCrawls: () => dispatch(fetchAllCrawls()),
});

export default connect(mSTP, mDTP)(MainPage);