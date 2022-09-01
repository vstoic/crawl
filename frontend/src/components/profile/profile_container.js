import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import Profile from "./profile";

const mSTP = (state, ownProps) => ({
  currentUser: state.session.user,
  viewedUser: state.entities.users[ownProps.match.params.id] 
});

const mDTP = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(mSTP, mDTP)(Profile));