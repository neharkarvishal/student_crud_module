import { RequestHandler } from '../services/RequestHandler';
import ActionType from './actionType';

/* fetching all students */
export function fetchStudents() {
  return dispatch => {
    dispatch({
      type: ActionType.STUDENT_LIST,
      payload: RequestHandler.fetchStudents(),
    });
  };
}
