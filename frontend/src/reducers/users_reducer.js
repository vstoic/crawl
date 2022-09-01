import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN
} from "../actions/session_actions";

import { RECEIVE_USER, RECEIVE_USERS, REMOVE_USER, UPDATE_CURRENT_USER } from "../actions/user_actions";

const _nullSession = {
    id: null
};

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USER_SIGN_IN:
            nextState[action.user.data._id] = action.user.data;
            return nextState;
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        case RECEIVE_USER_LOGOUT:
            return _nullSession;
        case RECEIVE_USER:
            const otherUser = { [action.user.data._id]: action.user.data };
            return Object.assign(nextState, otherUser);
        case RECEIVE_USERS:
            return action.users
        case UPDATE_CURRENT_USER:
            const currUser = { [action.user.data._id]: action.user.data };
            return Object.assign(nextState, currUser);
        case REMOVE_USER:
            delete nextState[action.userId];
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;