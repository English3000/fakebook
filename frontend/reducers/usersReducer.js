import React from 'react';
import { RECEIVE_USERS, RECEIVE_USER } from '../all_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);

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
