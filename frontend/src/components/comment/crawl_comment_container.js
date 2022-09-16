import { connect } from "react-redux";
import { fetchCommentByCrawl } from "../../actions/comment_actions";
import CommentForm from "./crawl_comments";

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        comments: Object.values(state.entities.comments),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCommentByCrawl: (crawlId) => dispatch(fetchCommentByCrawl(crawlId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
