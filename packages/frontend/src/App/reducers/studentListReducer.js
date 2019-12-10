import { ActionType } from 'redux-promise-middleware';
import ACTION_TYPE from '../action/actionType';

const { Pending, Fulfilled, Rejected } = ActionType;
const defaultState = {
  isLoading: true,
  studentList: [],
};

export default function studentListReducer(state = defaultState, action) {
  switch (action.type) {
    case `${ACTION_TYPE.STUDENT_LIST}_${Pending}`:
      return {
        ...state,
        isLoading: true,
      };

    case `${ACTION_TYPE.STUDENT_LIST}_${Fulfilled}`:
      return {
        ...state,
        isLoading: false,
        studentList: action.payload.data,
      };

    case `${ACTION_TYPE.STUDENT_LIST}_${Rejected}`:
    default:
      return state;
  }
}
