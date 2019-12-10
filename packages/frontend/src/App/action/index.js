import * as fetchStudentAction from './fetchStudentAction';
import * as fetchStudentsAction from './fetchStudentsAction';

const actions = {
  ...fetchStudentAction,
  ...fetchStudentsAction,
};

export default actions;
