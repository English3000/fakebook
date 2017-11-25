import * as FakebookAPIUtil from './api_util';

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

export const fetchUsers = () => dispatch => (
  FakebookAPIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
);

export const updateUser = user => async (dispatch) => dispatch(receiveUser( await FakebookAPIUtil.updateUser(user) ));

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});
export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});
export const removePost = post => ({
  type: REMOVE_POST,
  post
});
export const requestPosts = () => async (dispatch) => {
  return dispatch(receivePosts(await FakebookAPIUtil.fetchPosts()));
};

export const getUserPosts = id => dispatch => {
  FakebookAPIUtil.getUserPosts(id).then(posts => dispatch(receivePosts(posts)));
};
// export const requestPost = id => async (dispatch) => {
//   return await dispatch(receivePost(await FakebookAPIUtil.fetchPost(id)));
// };
// export const deletePost = id => async (dispatch) => {
//   return await dispatch(removePost(await FakebookAPIUtil.deletePost(id)));
// };
export const deletePost = (postId, userId) => dispatch => {
  FakebookAPIUtil.deletePost(postId, userId).then(posts => dispatch(receivePosts(posts)));
};
export const createPost = post => async (dispatch) => {
  return dispatch(receivePost(await FakebookAPIUtil.createPost(post)));
};
export const updatePost = post => async (dispatch) => {
  return dispatch(receivePost(await FakebookAPIUtil.updatePost(post)));
};

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});
export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});
export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  commentId: comment.id
});
export const requestComments = () => async (dispatch) => {
  return dispatch(receiveComments(await FakebookAPIUtil.fetchComments()));
};
export const deleteComment = id => async (dispatch) => {
  return await dispatch(removeComment(await FakebookAPIUtil.deleteComment(id)));
};
export const createComment = comment => async (dispatch) => {
  return dispatch(receiveComment(await FakebookAPIUtil.createComment(comment)));
};
export const updateComment = comment => async (dispatch) => {
  return dispatch(receiveComment(await FakebookAPIUtil.updateComment(comment)));
};
