import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GatewayPage from './gatewayPage';
import UserShowPage from './userShowPage';
import PostsIndexPage from './postsIndexPage';
import { ProtectedRoute, AuthRoute } from '../routes_util';

export default () => (
  <div>
    <Switch>
      <AuthRoute exact path='/' component={GatewayPage}/>
      <ProtectedRoute exact path='/users/:id' component={UserShowPage}/>
      <ProtectedRoute exact path='/posts' component={PostsIndexPage}/>
    </Switch>
  </div>
);
