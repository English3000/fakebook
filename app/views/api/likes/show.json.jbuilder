if @like.post
  json.postId @like.post.id
  json.post_likes @like.post.likes.count
else
  json.commentId @like.comment.id
  json.comment_likes @like.comment.likes.count
end
json.currentUserId @like.user.id #unneeded
