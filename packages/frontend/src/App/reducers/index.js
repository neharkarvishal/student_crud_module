import { combineReducers } from 'redux';
import studentListReducer from './studentListReducer';
import studentDetailsReducer from './studentDetailsReducer';
import adminLoginReducer from './adminLoginReducer';

const AppReducer = combineReducers({
  studentListStoreState: studentListReducer,
  studentDetailsStoreState: studentDetailsReducer,
  authentication: adminLoginReducer,
});

export default AppReducer;
