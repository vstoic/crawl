import * as CommentApiUtil from "../util/comment_util.js";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_CRAWL = "RECEIVE_COMMENT_CRAWL";
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS'


const receiveAllComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments,
});
const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment,
});
const receiveCommentCrawl = (comments) => ({
    type: RECEIVE_COMMENT_CRAWL,
    comments,
});
const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors,
});
export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS,
});

export const fetchAllComments = () => (dispatch) =>
    CommentApiUtil.fetchAllComments().then((commentsResponse) =>
        dispatch(receiveAllComments(commentsResponse.data))
    );

export const fetchComment = (commentId) => (dispatch) =>
    CommentApiUtil.fetchComment(commentId).then((comment) =>
        dispatch(receiveComment(comment))
    );

export const updateComment = (comment) => (dispatch) => (
    CommentApiUtil.updateComment(comment)
        .then(payload => dispatch(receiveComment(payload.data)))
        .catch(err => dispatch(receiveCommentErrors(err.response.data)))
);

export const createComment = (comment) => (dispatch) => {
    return CommentApiUtil.createComment(comment)
        .then((comment) => dispatch(receiveComment(comment)))
        .catch (err => dispatch(receiveCommentErrors(err.response.data)))
};

export const deleteComment = commentId => dispatch => (
    CommentApiUtil.deleteComment(commentId).then(() => dispatch(deleteComment(commentId)))
);

export const fetchCommentByCrawl = (crawlId) => (dispatch) => {
    CommentApiUtil.getCommentByCrawl(crawlId).then((comments) => {
        dispatch(receiveCommentCrawl(comments))
    })
};