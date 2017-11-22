import React from 'react';
import { Route } from 'react-router-dom';
import GatewayPage from './gatewayPage';

export default () => (
  <div>
    <Route exact path='/' component={GatewayPage}/>
  </div>
);
