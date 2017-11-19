import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  ReactDOM.render(<h1>app component</h1>, document.getElementById('app-display'));
});
