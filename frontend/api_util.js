export const fetchUser = id => $.ajax({
  method: 'GET',
  url: `api/users/${id}`
});

export const fetchPosts = () => $.ajax({
  method: 'GET',
  url: 'api/posts'
});
export const fetchComments = () => $.ajax({
  method: 'GET',
  url: 'api/comments'
});

// export const fetchPost = id => $.ajax({
//   method: 'GET',
//   url: `api/posts/${id}`
// });
// export const fetchComment = id => $.ajax({
//   method: 'GET',
//   url: `api/comments/${id}`
// });

export const deletePost = id => $.ajax({
  method: 'DELETE',
  url: `api/posts/${id}`
});
export const deleteComment = id => $.ajax({
  method: 'DELETE',
  url: `api/comments/${id}`
});

export const deleteFriendship = () => $.ajax({
  method: 'DELETE',
  url: 'api/friendships'
});
export const deleteFriendRequest = id => $.ajax({
  method: 'DELETE',
  url: `api/friend_requests/${id}`
});

// export const unlikePost = post => $.ajax({
//   method: 'DELETE',
//   url: `api/posts/${post.id}/likes`
// });
// export const unlikeComment = comment => $.ajax({
//   method: 'DELETE',
//   url: `api/comments/${comment.id}/likes`
// });


export const createPost = post => $.ajax({
  method: 'POST',
  url: 'api/posts',
  data: {post}
});
export const createComment = comment => $.ajax({
  method: 'POST',
  url: 'api/comments',
  data: {comment}
});

export const createFriendship = id => $.ajax({
  method: 'POST',
  url: `api/friendships/${id}`
});
export const createFriendRequest = () => $.ajax({
  method: 'POST',
  url: 'api/friend_requests'
});

// export const likePost = post => $.ajax({
//   method: 'POST',
//   url: `api/posts/${post.id}/likes`
// });
// export const likeComment = comment => $.ajax({
//   method: 'POST',
//   url: `api/comments/${comment.id}/likes`
// });


export const updatePost = post => $.ajax({
  method: 'PATCH',
  url: `api/posts/${post.id}`,
  data: {post}
});
export const updateComment = comment => $.ajax({
  method: 'PATCH',
  url: `api/comments/${comment.id}`,
  data: {comment}
});
