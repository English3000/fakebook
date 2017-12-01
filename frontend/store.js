import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
}

export default (preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, logger)
);
