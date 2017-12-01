import { combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer';
import sessionReducer from './sessionReducer';
import loadingReducer from './loadingReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  ui: loadingReducer,
  errors: errorsReducer
});
