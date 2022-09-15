import { connect } from "react-redux";
import { fetchAllComments, createComment, deleteComment } from "../../actions/comment_actions";
import CommentForm from "./crawl_comments";

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        comments: state.entities.comments.comments,
        commentsReducer: state.entities.comments,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllComments: (comments) => dispatch(fetchAllComments(comments)),
        createComment: (comment) => dispatch(createComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
