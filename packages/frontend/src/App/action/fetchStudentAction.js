import { RequestHandler } from '../services/RequestHandler';
import ActionType from './actionType';

/* fetching single student by id */
export function fetchStudent(id) {
  return dispatch => {
    dispatch({
      type: ActionType.STUDENT_DETAIL,
      payload: RequestHandler.fetchStudent(id),
    });
  };
}
