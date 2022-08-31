import { RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS, RECEIVE_USER, UPDATE_CURRENT_USER } from "../actions/user_actions";

const defaultState = {};

const UserErrorsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case RECEIVE_USER:
            return defaultState;
        case CLEAR_USER_ERRORS:
            return defaultState;
        case UPDATE_CURRENT_USER:
            return defaultState;
        default:
            return state;
    }
};

export default UserErrorsReducer;