import * as CommentApiUtil from "../util/comment_util.js";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveAllComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments,
});

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment,
});

export const fetchAllComments = () => (dispatch) =>
    CommentApiUtil.fetchAllComments().then((commentResponse) =>
        dispatch(receiveAllComments(commentsResponse.data))
    );

export const fetchComment = (commentId) => (dispatch) =>
    CommentApiUtil.fetchComment(commentId).then((comment) =>
        dispatch(receiveComment(comment))
    );

export const updateComment = (comment) => (dispatch) => (
    CommentApiUtil.updateComment(comment)
        .then(payload => dispatch(receiveComment(payload.data)))
);

export const createComment = (comment) => (dispatch) => {
    return CommentApiUtil.createComment(comment)
        .then((comment) => dispatch(receiveComment(comment)));
};

export const deleteComment = commentId => dispatch => (
    commentUtil.deleteComment(commentId).then(() => dispatch(removeComment(commentId)))
);
