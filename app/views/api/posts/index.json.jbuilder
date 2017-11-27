# debugger
# @posts.each do |post|
#   json.posts do
#     json.by_id do
#       json.set! post.id do  #OVERWRITING ITSELF
#         json.extract! post, :id, :user_id, :body, :updated_at
#         json.comment_ids do
#           json.array! post.comment_ids
#         end
#       end
#     end
#
#     json.all_ids do
#       json.array! @posts.pluck(:id)
#     end
#   end
#
#   json.comments do
#     post.comments.each do |comment|
#       json.set! comment.id do
#         json.extract! comment, :id, :user_id, :post_id, :body, :updated_at
#       end
#     end
#   end
# end

json.posts do
  json.by_id do
    @posts.each do |post|
      json.set! post.id do
        json.extract! post, :id, :user_id, :body, :updated_at
        json.comment_ids do
          json.array! post.comment_ids
        end
      end
    end
  end

  json.all_ids do
    json.array! @posts.pluck(:id)
  end
end

json.comments do
  @posts.each do |post|
    post.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :user_id, :post_id, :body, :updated_at
      end
    end
  end
end
