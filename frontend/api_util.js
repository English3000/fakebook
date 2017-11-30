export const getUsers = () => $.ajax({
  method: 'GET',
  url: 'api/users'
});
export const updateUser = user => $.ajax({
  method: 'PATCH',
  url: `api/users/${user.id}`,
  data: {user}
});

export const getUserPosts = id => $.ajax({
  method: 'GET',
  url: `api/users/${id}/posts`
});
export const getPosts = () => $.ajax({
  method: 'GET',
  url: 'api/posts'
});
export const createPost = post => $.ajax({
  method: 'POST',
  url: 'api/posts',
  data: {post}
});
export const updatePost = post => $.ajax({
  method: 'PATCH',
  url: `api/posts/${post.id}`,
  data: {post}
});
export const deletePost = id => $.ajax({
  method: 'DELETE',
  url: `api/posts/${id}`
});

export const createComment = comment => $.ajax({
  method: 'POST',
  url: 'api/comments',
  data: {comment}
});
export const updateComment = comment => $.ajax({
  method: 'PATCH',
  url: `api/comments/${comment.id}`,
  data: {comment}
});
export const deleteComment = id => $.ajax({
  method: 'DELETE',
  url: `api/comments/${id}`
});

export const createFriendship = friendship => $.ajax({
  method: 'POST',
  url: 'api/friendships',
  data: {friendship}
});
export const updateFriendship = friendship => $.ajax({
  method: 'PATCH',
  url: 'api/friendships',
  data: {friendship}
});
export const deleteFriendship = friendship => $.ajax({
  method: 'DELETE',
  url: 'api/friendships',
  data: {friendship}
});

//---

// export const likePost = post => $.ajax({
//   method: 'POST',
//   url: `api/posts/${post.id}/likes`
// });
// export const likeComment = comment => $.ajax({
//   method: 'POST',
//   url: `api/comments/${comment.id}/likes`
// });

// export const unlikePost = post => $.ajax({
//   method: 'DELETE',
//   url: `api/posts/${post.id}/likes`
// });
// export const unlikeComment = comment => $.ajax({
//   method: 'DELETE',
//   url: `api/comments/${comment.id}/likes`
// });
