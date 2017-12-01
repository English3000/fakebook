import React from 'react';
import { RECEIVE_USERS, RECEIVE_USER,
         RECEIVE_FRIEND_REQUEST,
         RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP,
         LIKE_POST, LIKE_COMMENT,
         UNLIKE_POST, UNLIKE_COMMENT } from '../all_actions';
import merge from 'lodash/merge';

const _nullUser = {
  null: { profile_pic: '', cover_photo: '', custom_link: '',
          friend_ids: [], request_ids: [] }
};

export default (state = _nullUser, action) => {
  Object.freeze(state);
  // console.log("State @ UsersReducer: ", state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_FRIEND_REQUEST: //if statement unnecessary thanks to db validation
      // if (!newState[action.relp.friend_id].request_ids.includes(action.relp.user_id)) {
        newState[action.relp.friend_id].request_ids.push(action.relp.user_id);
      // }
      return newState;
    case RECEIVE_FRIENDSHIP:
      newState[action.relp.user_id].friend_ids.push(action.relp.friend_id);
      newState[action.relp.friend_id].friend_ids.push(action.relp.user_id);
      newState[action.relp.friend_id].request_ids
        .splice(newState[action.relp.friend_id].request_ids
          .indexOf(action.relp.user_id), 1);
      return newState;
    case REMOVE_FRIENDSHIP:
      newState[action.relp.friend_id].request_ids
        .splice(newState[action.relp.friend_id].request_ids
          .indexOf(action.relp.user_id), 1);
      newState[action.relp.user_id].friend_ids
        .splice(newState[action.relp.user_id].friend_ids
          .indexOf(action.relp.friend_id), 1);
      newState[action.relp.friend_id].friend_ids
        .splice(newState[action.relp.friend_id].friend_ids
          .indexOf(action.relp.user_id), 1);
      return newState;
    case LIKE_POST:
      newState[action.details.currentUserId].liked_post_ids
        .push(action.details.postId);
      return newState;
    case LIKE_COMMENT:
      newState[action.details.currentUserId].liked_comment_ids
        .push(action.details.commentId);
      return newState;
    case UNLIKE_POST:
      newState[action.details.currentUserId].liked_post_ids
        .splice(newState[action.details.currentUserId].liked_post_ids
          .indexOf(action.details.postId), 1);
      return newState;
    case UNLIKE_COMMENT:
      newState[action.details.currentUserId].liked_comment_ids
        .splice(newState[action.details.currentUserId].liked_comment_ids
          .indexOf(action.details.commentId), 1);
      return newState;
    default:
      return state;
  }
};
