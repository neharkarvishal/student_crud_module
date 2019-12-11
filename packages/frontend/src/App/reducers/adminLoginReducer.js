import { ActionType } from 'redux-promise-middleware';
import ACTION_TYPE from '../action/actionType';

const { Pending, Fulfilled, Rejected } = ActionType;

const initState = {
  loginStatus: 'init',
  authenticating: false,
  isLoggedIn: false,
  userData: null,
  error: null,
  accessToken: null,
};

export default function adminLoginReducer(state = initState, action) {
  switch (action.type) {
    case ActionType.INIT:
      return initState;
    case `${ACTION_TYPE.ADMIN_LOGIN}_${Pending}`:
      return {
        ...state,
        loginStatus: 'authenticationPending',
        authenticating: true,
      };

    case `${ACTION_TYPE.ADMIN_LOGIN}_${Rejected}`:
      return {
        ...state,
        loginStatus: 'error',
        authenticating: false,
        isLoggedIn: false,
        error: action.payload,
      };

    case `${ACTION_TYPE.ADMIN_LOGIN}_${Fulfilled}`: {
      const updatedState = {
        ...state,
        loginStatus: 'authenticated',
        authenticating: false,
        isLoggedIn: true,
        accessToken: action.payload.data,
        error: null,
      };
      try {
        if (updatedState) {
          localStorage.setItem('userAuthStorage', JSON.stringify(updatedState));
        }
      } catch (error) {
        // ignore error
        console.error('Failed to persist store to disk.');
      }
      return updatedState;
    }
    default:
  }
  return state;
}
