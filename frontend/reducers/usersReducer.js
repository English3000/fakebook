import React from 'react';
import { RECEIVE_USER } from '../all_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      // return { [action.user.id]: action.user };
      return action.user;
    default:
      return state;
  }
};
