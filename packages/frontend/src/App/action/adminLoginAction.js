import { ActionType } from 'redux-promise-middleware';
import { RequestHandler } from '../services/RequestHandler';
import ACTION_TYPE from './actionType';

const { Pending, Fulfilled, Rejected } = ActionType;

export function adminLoginAction({ email, password }) {
  return (dispatch, getState) => {
    const { authentication } = getState();
    if (authentication && authentication.authenticating) {
      return;
    }
    dispatch({
      type: `${ACTION_TYPE.ADMIN_LOGIN}_${Pending}`,
      payload: null,
    });
    RequestHandler.login({ email, password })
      .then(response => {
        dispatch({
          type: `${ACTION_TYPE.ADMIN_LOGIN}_${Fulfilled}`,
          payload: response,
        });
      })
      .catch(error => {
        dispatch({
          type: `${ACTION_TYPE.ADMIN_LOGIN}_${Rejected}`,
          payload: error,
        });
        // eslint-disable-next-line no-alert
        alert(`${error}`);
        dispatch({
          type: `${ACTION_TYPE.INIT}`,
        });
      });
  };
}
