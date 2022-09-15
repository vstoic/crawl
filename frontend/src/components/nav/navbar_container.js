import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from "./navbar";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
    history: ownProps
  }
};


export default connect(mapStateToProps, { logout })(NavBar);