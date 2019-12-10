import { ActionType } from 'redux-promise-middleware';
import ACTION_TYPE from '../action/actionType';

const { Pending, Fulfilled, Rejected } = ActionType;
const defaultStudentDetailsState = {
  isLoading: true,
  studentDetails: {},
};

export default function studentDetailsReducer(
  state = defaultStudentDetailsState,
  action,
) {
  switch (action.type) {
    case `${ACTION_TYPE.STUDENT_DETAIL}_${Pending}`:
      return {
        ...state,
        isLoading: true,
      };

    case `${ACTION_TYPE.STUDENT_DETAIL}_${Fulfilled}`:
      return {
        ...state,
        isLoading: false,
        studentDetails: action.payload.data,
      };

    case `${ACTION_TYPE.STUDENT_DETAIL}_${Rejected}`:
    default:
      return state;
  }
}
