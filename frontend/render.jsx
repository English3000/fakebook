import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Connection from './components/connection';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      entities: {users: { [window.currentUser.id]: window.currentUser }},
      session: {currentUserId: window.currentUser.id}
    };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);
  // window.getState = store.getState;
  ReactDOM.render(<Connection store={store}/>, document.getElementById('app-display'));
});
