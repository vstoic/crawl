// src/components/nav/navbar_container.js

import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from "./navbar";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
 return {
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  history: ownProps
}};


export default connect(mapStateToProps, { logout })(NavBar);
