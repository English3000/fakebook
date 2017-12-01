import { RECEIVE_POSTS,
         RECEIVE_POST, RECEIVE_COMMENT,
         UPDATE_POST, UPDATE_COMMENT,
         REMOVE_POST, REMOVE_COMMENT,
         LIKE_POST, LIKE_COMMENT,
         UNLIKE_POST, UNLIKE_COMMENT } from '../all_actions';
import merge from 'lodash/merge';

const _defaultState = {
  posts: {
    all_ids: [],
    by_id: {}
  },
  comments: {}
};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log("State @ PostsReducer: ", state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.content;
    case RECEIVE_POST:
      newState.posts.by_id[action.content.post.id] = action.content.post;
      newState.posts.all_ids.unshift(action.content.post.id);
      newState.comments = merge(action.content.comments, newState.comments);
      return newState;
    case UPDATE_POST:
      newState.posts.by_id[action.content.post.id] = action.content.post;
      return newState;
    case LIKE_POST:
    case UNLIKE_POST:
      newState.posts.by_id[action.details.postId].likes = action.details.post_likes;
      return newState;
    case REMOVE_POST:
      delete newState.posts.by_id[action.postId];
      newState.posts.all_ids.splice(newState.posts.all_ids.indexOf(action.postId), 1);
      return newState;
    case RECEIVE_COMMENT:
      newState.comments[action.comment.id] = action.comment;
      newState.posts.by_id[action.comment.post_id].comment_ids.push(action.comment.id);
      return newState;
    case UPDATE_COMMENT:
      newState.comments[action.comment.id] = action.comment;
      return newState;
    case LIKE_COMMENT:
    case UNLIKE_COMMENT:
      newState.comments[action.details.commentId].likes = action.details.comment_likes;
      return newState;
    case REMOVE_COMMENT:
      delete newState.comments[action.comment.id];
      newState.posts.by_id[action.comment.post_id].comment_ids
        .splice(newState.posts.by_id[action.comment.post_id].comment_ids
          .indexOf(action.comment.id), 1);
      return newState;
    default:
      return state;
  }
};
