import { connect } from "react-redux";
import { composeComment, editComment, deleteCommentFromCrawl, fetchCrawlComments } from "../../actions/comment_actions";
import CommentBox from "./comment_box";

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newComment: state.entities.comments.new
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        composeComment: data => dispatch(composeComment(data)),
        updateComment: data => dispatch(editComment(data)),
        deleteComment: commentId => dispatch(deleteCommentFromCrawl(commentId)),
        getCrawlComments: crawlId => dispatch(fetchCrawlComments(crawlId)),
        fetchCrawlComments: (crawlId) => dispatch(fetchCrawlComments(crawlId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
