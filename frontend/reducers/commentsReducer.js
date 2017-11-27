import { RECEIVE_COMMENTS,
         RECEIVE_COMMENT,
       /* REMOVE_COMMENT */ } from '../all_actions';
import merge from 'lodash/merge';

const _defaultState = {
  all_ids: [],
  by_id: {}
};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      console.log("deletion");
      // return merge({}, state, action.comments);
      return action.comments;
    case RECEIVE_COMMENT:
      newState.by_id[action.comment.id] = action.comment;
      newState.all_ids.unshift(action.comment.id);
      return newState;
    // case REMOVE_COMMENT:
    //   delete newState.by_id[action.commentId];
    //   // newState.all_ids.splice(newState.all_ids.indexOf(action.commentId), 1);
    //   return newState;
    default:
      return state;
  }
};
