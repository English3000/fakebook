import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Connection from './components/connection';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(<Connection store={store}/>, document.getElementById('app-display'));
});
