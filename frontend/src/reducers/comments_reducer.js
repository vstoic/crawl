import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, RECEIVE_COMMENT_CRAWL } from "../actions/comment_actions";

const _nullState = {
    // needs user id, need crawl id
    commenterId: {},
    crawlId: {},
    allCommentIds: [],
    commentId: []
};

const commentsReducer = (oldState = _nullState, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            nextState.allCommentIds = action.comments
            return nextState;
        case RECEIVE_COMMENT:
            nextState.commentId = action.comment;
            return nextState;
        case RECEIVE_COMMENT_CRAWL:
            nextState.crawlByUser = action.comment
            return nextState
        default:
            return oldState;
    }
};

export default commentsReducer;