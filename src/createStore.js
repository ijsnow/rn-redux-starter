import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, createLogger());

export default (data = {}) => {
  return createStore(rootReducer, data, middleware);
}
