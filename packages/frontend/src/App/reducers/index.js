import { combineReducers } from 'redux';
import studentListReducer from './studentListReducer';
import studentDetailsReducer from './studentDetailsReducer';

const AppReducer = combineReducers({
  studentListStoreState: studentListReducer,
  studentDetailsStoreState: studentDetailsReducer,
});

export default AppReducer;
