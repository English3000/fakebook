import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS } from '../session_actions';
import { RECEIVE_POST } from '../all_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_POST:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
