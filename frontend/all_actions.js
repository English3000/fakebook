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

export const getUsers = () => dispatch => (
  FakebookAPIUtil.getUsers().then(users => dispatch(receiveUsers(users)))
);

export const updateUser = user => async (dispatch) => dispatch(receiveUser( await FakebookAPIUtil.updateUser(user) ));

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePosts = content => ({
  type: RECEIVE_POSTS,
  content
});
export const receivePost = content => ({
  type: RECEIVE_POST,
  content
});
export const removePost = content => ({
  type: REMOVE_POST,
  postId: content.post.id
});
export const getPosts = () => async (dispatch) => {
  return dispatch(receivePosts(await FakebookAPIUtil.getPosts()));
};

export const getUserPosts = id => async (dispatch) => {
  return dispatch( receivePosts(await FakebookAPIUtil.getUserPosts(id)) );
};
export const createPost = post => dispatch => (
  FakebookAPIUtil.createPost(post)
    .then(newPost => dispatch(receivePost(newPost)),
          err => dispatch(receiveErrors(err.responseJSON)))
);
export const deletePost = id => async (dispatch) => {
  return dispatch(removePost(await FakebookAPIUtil.deletePost(id)));
};
export const updatePost = post => async (dispatch) => {
  return dispatch(receivePost(await FakebookAPIUtil.updatePost(post)));
};

// export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

// export const receiveComments = comments => ({
//   type: RECEIVE_COMMENTS,
//   comments
// });
export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});
export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});
// export const getPostComments = postId => async (dispatch) => {
//   return dispatch(receiveComments(await FakebookAPIUtil.getPostComments(postId)));
// };
export const createComment = comment => dispatch => (
  FakebookAPIUtil.createComment(comment)
    .then(newComment => dispatch(receiveComment(newComment)),
          err => dispatch(receiveErrors(err.responseJSON)))
);
export const deleteComment = id => async (dispatch) => {
  return await dispatch(removeComment(await FakebookAPIUtil.deleteComment(id)));
};
export const updateComment = comment => async (dispatch) => {
  return dispatch(receiveComment(await FakebookAPIUtil.updateComment(comment)));
};
