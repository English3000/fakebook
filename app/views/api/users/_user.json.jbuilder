json.id user.id
json.username user.username
json.custom_link user.custom_link
json.profile_pic asset_path(user.profile_pic.url(:original))
json.cover_photo asset_path(user.cover_photo.url(:original))
