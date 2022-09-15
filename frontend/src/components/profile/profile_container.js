import { connect } from "react-redux";
import { fetchUser, fetchUsers ,updateUserData } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import Profile from "./profile";
import { fetchAllCrawls ,fetchCrawlByUser, deleteCrawl } from "../../actions/crawl_actions";


const mSTP = (state, ownProps) => ({
  currentUser: state.session.user,
  viewedUser: state.entities.users[ownProps.match.params.id],
  crawlsReducer: state.entities.crawls,
  userFetch: state.entities.users,
  userCrawls: state.entities.crawls.crawlByUser.data,
  
});

const mDTP = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAllCrawls: () => dispatch(fetchAllCrawls),
  fetchCrawlByUser: (userId) => dispatch(fetchCrawlByUser(userId)),
  updateImage: (userData) => dispatch(updateUserData(userData)),
  deleteCrawl: (crawlId) => dispatch(deleteCrawl(crawlId))
});

export default withRouter(connect(mSTP, mDTP)(Profile));