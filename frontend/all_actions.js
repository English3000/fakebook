import * as FakebookAPIUtil from './api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = id => dispatch => (
  FakebookAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);

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
  postId: post.id
});
export const requestPosts = () => async (dispatch) => {
  return dispatch(receivePosts(await FakebookAPIUtil.fetchPosts()));
};
// export const requestPost = id => async (dispatch) => {
//   return await dispatch(receivePost(await FakebookAPIUtil.fetchPost(id)));
// };
export const deletePost = id => async (dispatch) => {
  return await dispatch(removePost(await FakebookAPIUtil.deletePost(id)));
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
