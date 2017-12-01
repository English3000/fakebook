import React from 'react';
// import merge from 'lodash/merge';
import { PAGE_LOADING, RECEIVE_USERS, RECEIVE_POSTS } from '../all_actions';

const _defaultState = {
  pageLoading: false
};

export default (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case PAGE_LOADING:
      return {pageLoading: true};
    case RECEIVE_USERS:
    case RECEIVE_POSTS:
      return {pageLoading: false};
    default:
      return state;
  }
};
