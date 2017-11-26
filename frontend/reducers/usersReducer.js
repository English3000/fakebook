import React from 'react';
import { RECEIVE_USERS, RECEIVE_USER } from '../all_actions';
import merge from 'lodash/merge';
//how do I make this work properly?
const _nullUser = {
  null: {profile_pic: '', cover_photo: '', custom_link: ''}
};

export default (state = _nullUser, action) => {
  Object.freeze(state);
  // console.log("State @ UsersReducer: ", state);

  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      let newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};
