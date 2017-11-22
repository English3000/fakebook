import * as SessionAPIUtil from './session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signUp = user => async (dispatch) => (
  dispatch(receiveCurrentUser(await SessionAPIUtil.signUp(user)));
);
export const signIn = user => async (dispatch) => (
  dispatch(receiveCurrentUser(await SessionAPIUtil.signIn(user)));
);
// export const signOut = () => async (dispatch) => (
//   dispatch(receiveCurrentUser(await SessionAPIUtil.signOut()));
// );
export const signOut = () => dispatch => {
  SessionAPIUtil.signOut().then( () => dispatch(receiveCurrentUser(null)) );
};
