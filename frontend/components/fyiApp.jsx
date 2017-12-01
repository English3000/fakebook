import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GatewayPage from './gatewayPage';
import UserShowPageContainer from './userShowPageContainer';
import PostsIndexPage from './postsIndexPage';
import { ProtectedRoute, AuthRoute } from '../routes_util';

export default () => (
  <div>
    <Switch>
      <AuthRoute exact path='/' component={GatewayPage}/>
      <ProtectedRoute exact path='/users/:id' component={UserShowPageContainer}/>
      <ProtectedRoute exact path='/posts' component={PostsIndexPage}/>
    </Switch>
  </div>
);
