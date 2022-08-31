// import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

// const initialState = {
//   isAuthenticated: false,
//   user: {},
// };

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case RECEIVE_USER_LOGOUT:
//       return {
//         isAuthenticated: false,
//         user: undefined,
//       };
//     default:
//       return state;
//   }
// }

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';
import { REMOVE_USER, UPDATE_CURRENT_USER } from "../actions/user_actions";

const initialState = {
  isAuthenticated: false,
  user: undefined
};

const SessionReducer = function (state = initialState, action) {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        isAuthenticated: true,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case REMOVE_USER:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      const signInData = action.user.data;
      const fixId = { id: signInData._id };
      const fixedData = Object.assign(signInData, fixId);
      return {
        isAuthenticated: true,
        user: fixedData
      }
    case UPDATE_CURRENT_USER:
      const userData = action.user.data;
      const actionValues = { email: userData.email, username: userData.username };
      const updatedUser = Object.assign(nextState.user, actionValues)
      return {
        isAuthenticated: true,
        user: updatedUser
      }
    default:
      return state;
  }
}

export default SessionReducer;