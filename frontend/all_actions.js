import * as FakebookAPIUtil from './api_util';
import { receiveErrors, RECEIVE_ERRORS } from './session_actions';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const getUsers = () => dispatch => FakebookAPIUtil.getUsers().then(users => dispatch(receiveUsers(users)));

export const updateUser = user => async (dispatch) => dispatch(receiveUser( await FakebookAPIUtil.updateUser(user) ));

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePosts = content => ({
  type: RECEIVE_POSTS,
  content
});
export const receivePost = content => ({
  type: RECEIVE_POST,
  content
});
export const patchPost = content => ({
  type: UPDATE_POST,
  content
});
export const removePost = content => ({
  type: REMOVE_POST,
  postId: content.post.id
});
export const getPosts = () => async (dispatch) => dispatch(receivePosts(await FakebookAPIUtil.getPosts()));
export const getUserPosts = id => async (dispatch) => dispatch( receivePosts(await FakebookAPIUtil.getUserPosts(id)) );
export const createPost = post => dispatch => (
  FakebookAPIUtil.createPost(post)
    .then(newPost => dispatch(receivePost(newPost)),
          err => dispatch(receiveErrors(err.responseJSON)))
);
export const updatePost = post => async (dispatch) => dispatch(patchPost(await FakebookAPIUtil.updatePost(post)));
export const deletePost = id => async (dispatch) => dispatch(removePost(await FakebookAPIUtil.deletePost(id)));

// export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

// export const receiveComments = comments => ({
//   type: RECEIVE_COMMENTS,
//   comments
// });
export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});
export const patchComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});
export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const createComment = comment => dispatch => (
  FakebookAPIUtil.createComment(comment)
    .then(newComment => dispatch(receiveComment(newComment)),
          err => dispatch(receiveErrors(err.responseJSON)))
);
export const updateComment = comment => async (dispatch) => dispatch(patchComment(await FakebookAPIUtil.updateComment(comment)));
export const deleteComment = id => async (dispatch) => dispatch(removeComment(await FakebookAPIUtil.deleteComment(id)));

//usersReducer will receive this:
export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';

export const receiveFriendRequest = relp => ({
  type: RECEIVE_FRIEND_REQUEST,
  relp
});
export const receiveFriendship = relp => ({
  type: RECEIVE_FRIENDSHIP,
  relp
});
export const removeFriendship = relp => ({
  type: REMOVE_FRIENDSHIP,
  relp
});

export const requestFriendship = relp => async (dispatch) => dispatch(receiveFriendRequest(await FakebookAPIUtil.createFriendship(relp)));
export const rejectFriendship = relp => async (dispatch) => dispatch(removeFriendship(await FakebookAPIUtil.deleteFriendship(relp)));
export const acceptFriendship = relp => async (dispatch) => dispatch(receiveFriendship(await FakebookAPIUtil.updateFriendship(relp)));
