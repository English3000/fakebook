# debugger
json.by_id do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :user_id, :body, :image_url, :updated_at
    end
  end
end

json.all_ids do
  json.array! @posts.pluck(:id)
end
