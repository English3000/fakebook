json.id user.id
json.username user.username
json.custom_link user.custom_link
json.profile_pic asset_path(user.profile_pic.url(:original))
json.cover_photo asset_path(user.cover_photo.url(:original))
json.intro user.intro
json.location user.location
json.job user.job
json.school user.school
json.partnership user.partnership
json.friend_ids do
  json.array! user.friends
end
json.request_ids do
  json.array! user.requests
end
json.liked_post_ids do
  json.array! user.likes.pluck(:post_id)
end
json.liked_comment_ids do
  json.array! user.likes.pluck(:comment_id)
end
