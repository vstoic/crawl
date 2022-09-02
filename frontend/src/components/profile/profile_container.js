import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import Profile from "./profile";
import { fetchAllCrawls } from "../../actions/crawl_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.session.user,
  viewedUser: state.entities.users[ownProps.match.params.id],
  crawlsReducer: state.entities.crawls 
});

const mDTP = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAllCrawls: () => dispatch(fetchAllCrawls)
});

export default withRouter(connect(mSTP, mDTP)(Profile));