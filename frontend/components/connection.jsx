import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import FYIApp from './fyiApp';

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <FYIApp />
    </HashRouter>
  </Provider>
);
