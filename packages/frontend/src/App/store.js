import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './reducers';
import config from './configAndUtils';

let middlewareList = [promise, thunk];

// adding logger in dev evn only
if (config.reduxLogging) {
  middlewareList = [...middlewareList, logger];
}

// redux store
const store = createStore(reducers, applyMiddleware(...middlewareList));

export default store;
