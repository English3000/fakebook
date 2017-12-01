json.extract! @comment, :id, :user_id, :post_id, :comment_id, :body#, :updated_at
json.likes @comment.likes.count
