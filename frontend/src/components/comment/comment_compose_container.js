import { connect } from "react-redux";
import { composeComment } from "../../actions/comment_actions";
import CommentCompose from "./comment_compose";

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newComment: state.entities.comments.new
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        composeComment: data => dispatch(composeComment(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentCompose);
