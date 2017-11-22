# == Schema Information
#
# Table name: friend_requests
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  receiver_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class FriendRequest < ApplicationRecord
  belongs_to :user
  belongs_to :receiver,
    class_name: :User,
    primary_key: :id,
    foreign_key: :receiver_id
end
