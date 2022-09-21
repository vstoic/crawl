import { getComments, getCrawlComments, writeComment } from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_CRAWL_COMMENTS = "RECEIVE_CRAWL_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS"; 

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

export const receiveCrawlComments = comments => ({
    type: RECEIVE_CRAWL_COMMENTS,
    comments
});

export const receiveNewComment = comment => ({
    type: RECEIVE_NEW_COMMENT,
    comment
})

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
});




export const fetchComments = () => dispatch => (
    getComments()
        .then(comments => dispatch(receiveComments(comments)))
        .catch(err => dispatch(receiveCommentErrors(err.response.data)))
);

export const fetchCrawlComments = crawlId => dispatch => (
    getCrawlComments(crawlId)
        .then(comments => dispatch(receiveCrawlComments(comments)))
        .catch(err => dispatch(receiveCommentErrors(err.response.data)))
);

export const composeComment = data => dispatch => (
    writeComment(data)
        .then(comment => dispatch(receiveNewComment(comment)))
        .catch(err => dispatch(receiveCommentErrors(err.response.data)))
);





// import * as CommentApiUtil from "../util/comment_util.js";


// export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
// export const RECEIVE_CRAWL_COMMENTS = "RECEIVE_CRAWL_COMMENTS";
// export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
// export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS'



// const receiveComment = (comment) => ({
//     type: RECEIVE_COMMENT,
//     comment,
// });
// const receiveCrawlComments = (comments) => ({
//     type: RECEIVE_CRAWL_COMMENTS,
//     comments,
// });
// const receiveCommentErrors = errors => ({
//     type: RECEIVE_COMMENT_ERRORS,
//     errors,
// });
// export const clearCommentErrors = () => ({
//     type: CLEAR_COMMENT_ERRORS,
// });



// export const fetchComment = (commentId) => (dispatch) =>
//     CommentApiUtil.fetchComment(commentId).then((comment) =>
//         dispatch(receiveComment(comment))
//     );

// export const updateComment = (comment) => (dispatch) => (
//     CommentApiUtil.updateComment(comment)
//         .then(payload => dispatch(receiveComment(payload.data)))
//         .catch(err => dispatch(receiveCommentErrors(err.response.data)))
// );

// export const createComment = (comment) => (dispatch) => {
//     return CommentApiUtil.createComment(comment)
//         .then((comment) => dispatch(receiveComment(comment)))
//         .catch (err => dispatch(receiveCommentErrors(err.response.data)))
// };

// export const deleteComment = commentId => dispatch => (
//     CommentApiUtil.deleteComment(commentId).then(() => dispatch(deleteComment(commentId)))
// );

// export const fetchCommentByCrawl = (crawlId) => (dispatch) => {
//     CommentApiUtil.getCommentByCrawl(crawlId)
//         .then((comments) => { dispatch(receiveCrawlComments(comments))
//     })
// };