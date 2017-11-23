import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId
});

const Auth = ({ currentUserId, path, component: Component }) => (
  <Route path={path} render={props => (
    currentUserId ? <Redirect to={`/users/${currentUserId}`}/> :
      <Component {...props}/>
  )} />
);

const Protected = ({ currentUserId, path, component: Component }) => (
  <Route path={path} render={props => (
    currentUserId ? <Component {...props}/> :
      <Redirect to='/'/>
  )} />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
