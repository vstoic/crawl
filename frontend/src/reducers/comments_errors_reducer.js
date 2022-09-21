import { RECEIVE_COMMENT_ERRORS, 
    RECEIVE_NEW_COMMENT, 
    CLEAR_COMMENT_ERRORS } from "../actions/comment_actions";

const _nullErrors = [];

const CommentErrorsReducer = (oldState = _nullErrors, action) => {
Object.freeze(oldState);
switch(action.type) {
 case RECEIVE_COMMENT_ERRORS:
   return action.errors;
 case RECEIVE_NEW_COMMENT:
   return _nullErrors;
   case CLEAR_COMMENT_ERRORS:
     return _nullErrors;
 default:
   return oldState;
}
};

export default CommentErrorsReducer