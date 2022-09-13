import { connect } from "react-redux";
import { fetchAllComments, createComment, deleteComment } from "../../actions/comment_actions";
import CrawlForm from "./crawl_create";

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        comments: state.entities.comments.comments
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllComments: () => dispatch(fetchAllComments()),
        createComment: (comment) => dispatch(createComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrawlForm);
