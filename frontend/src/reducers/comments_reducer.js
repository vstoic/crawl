import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, RECEIVE_COMMENT_CRAWL } from "../actions/comment_actions";

// const _nullState = {
//     // needs user id, need crawl id
//     commenterId: {},
//     crawlId: {},
//     allCommentIds: [],
//     commentId: []
// };

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            const comments = action.comments
            comments.forEach(comment => {
                nextState[comment._id] = comment
            });
            return nextState;
        case RECEIVE_COMMENT:
            nextState[action.comment._id] = action.comment
            return nextState;
        // case RECEIVE_COMMENT_CRAWL:
        //     // nextState[] = action.comment
        //     comments.forEach
        //     return nextState
        default:
            return oldState;
    }
};

export default commentsReducer;