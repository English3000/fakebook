import * as SessionAPIUtil from './session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUserId => ({
  type: RECEIVE_CURRENT_USER,
  currentUserId
});
export const receiveErrors = errors => {
  // console.log(errors);
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};

export const signUp = user => dispatch => (
  SessionAPIUtil.signUp(user)
    .then(u => (dispatch(receiveCurrentUser(u.id))),
          err => dispatch(receiveErrors(err.responseJSON)))
);
export const signIn = user => dispatch => (
  SessionAPIUtil.signIn(user)
    .then(u => (dispatch(receiveCurrentUser(u.id))),
          err => dispatch(receiveErrors(err.responseJSON)))
);
export const signOut = () => dispatch => (
  SessionAPIUtil.signOut().then( user => dispatch(receiveCurrentUser(null)) )
);
