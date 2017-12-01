json.post do
  json.extract! @post, :id, :user_id, :body, :audience, :updated_at
  json.likes @post.likes.count
  json.comment_ids do
    json.array! @post.comment_ids
  end
end

json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :user_id, :post_id, :body, :updated_at
      json.likes comment.likes.count
    end
  end
end
