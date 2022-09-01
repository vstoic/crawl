import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import Profile from "./profile";

const mSTP = (state, ownProps) => ({
  currentUser: state.session.user,
});

const mDTP = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default withRouter(connect(mSTP, mDTP)(Profile));