import { RECEIVE_CURRENT_USER } from '../session_actions';

const _nullUser = {currentUserId: null};

export default (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUserId: action.currentUserId};
    default:
      return state;
  }
};
