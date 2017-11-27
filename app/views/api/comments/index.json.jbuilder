json.by_id do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :user_id, :post_id, :body, :updated_at#, :comment_id
    end
  end
end

json.all_ids do
  json.array! @comments.pluck(:id)
end

# json.all_replies do
#   json.array! @comments.pluck(:comment_id)
# end
