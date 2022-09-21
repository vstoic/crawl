import { RECEIVE_COMMENTS, RECEIVE_CRAWL_COMMENTS, RECEIVE_NEW_COMMENT } from '../actions/comment_actions';

const CommentReducer = (state = { all: {}, crawl: [], new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            newState.all = action.comments.data;
            return newState;
        case RECEIVE_CRAWL_COMMENTS:
            newState.crawl = action.comments.data;
            return newState;
        case RECEIVE_NEW_COMMENT:
            newState.new = action.comment.data
            return newState;
        default:
            return state;
    }
};

export default CommentReducer;






// import { RECEIVE_COMMENT, RECEIVE_CRAWL_COMMENTS } from "../actions/comment_actions";

// // const _nullState = {
// //     // needs crawl id, need crawl id
// //     commenterId: {},
// //     crawlId: {},
// //     allCommentIds: [],
// //     commentId: []
// // };

// const commentsReducer = (oldState = {}, action) => {
//     Object.freeze(oldState);
//     let nextState = Object.assign({}, oldState);

//     switch (action.type) {
//         case RECEIVE_COMMENT:
//             nextState[action.comment._id] = action.comment
//             return nextState;
//         case RECEIVE_CRAWL_COMMENTS:
//             const comments = action.comments
//             // comments.forEach(comment => {
//             //     nextState[comment._id] = comment
//             // });
//             nextState[comments._id] = action.comments
//             return nextState;
//         default:
//             return oldState;
//     }
// };

// export default commentsReducer;