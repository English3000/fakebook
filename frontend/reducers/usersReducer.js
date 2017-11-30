import React from 'react';
import { RECEIVE_USERS, RECEIVE_USER,
         RECEIVE_FRIEND_REQUEST,
         RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../all_actions';
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
    default:
      return state;
  }
};
