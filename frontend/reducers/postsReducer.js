import { RECEIVE_POSTS,
         RECEIVE_POST,
         REMOVE_POST } from '../all_actions';
import merge from 'lodash/merge';

const _defaultState = {
  all_ids: [],
  by_id: {}
};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  console.log("State @ PostsReducer: ", state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState.by_id[action.post.id] = action.post;
      newState.all_ids.unshift(action.post.id);
      return newState;
    case REMOVE_POST:
      delete newState.by_id[action.postId];
      return newState;
    default:
      return state;
  }
};
