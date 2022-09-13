import { connect } from "react-redux";
import { fetchUser, fetchUsers ,updateUserData } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import Profile from "./profile";
import { fetchAllCrawls ,fetchCrawlByUser } from "../../actions/crawl_actions";


const mSTP = (state, ownProps) => ({
  currentUser: state.session.user,
  viewedUser: state.entities.users[ownProps.match.params.id],
  crawlsReducer: state.entities.crawls,
  userFetch: state.entities.users
});

const mDTP = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAllCrawls: () => dispatch(fetchAllCrawls),
  fetchCrawlByUser: (userId) => dispatch(fetchCrawlByUser(userId)),
  updateImage: (userData) => dispatch(updateUserData(userData)),
});

export default withRouter(connect(mSTP, mDTP)(Profile));