import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import FakebookApp from './fakebookApp';

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <FakebookApp />
    </HashRouter>
  </Provider>
);
