@posts.each do |post|
  json.set! post.id do
    json.extract! post
  end
end
