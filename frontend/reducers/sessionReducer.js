import { RECEIVE_CURRENT_USER } from '../session_actions';

const _nullUser = {currentUser: null};

export default (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser};
    default:
      return state;
  }
};
