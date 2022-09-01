import { connect } from "react-redux";
import { create_venue, } from "../../actions/create_venue_actions";
import CreateVenue from "./venue_create";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    create_venue: (venue) => dispatch(create_venue(venue)),
    // login: (user) => dispatch(login(user)),
    // clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateVenue);
