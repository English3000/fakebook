import { RECEIVE_POSTS,
         RECEIVE_POST,
         REMOVE_POST } from '../all_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};
