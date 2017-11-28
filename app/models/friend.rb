# == Schema Information
#
# Table name: friends
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friend < ApplicationRecord
  STATUSES = %w(TRUE PENDING FALSE).freeze #friend, pending, unfriend
  validates :user_id, :friend_id, :status, presence: true
  validates :status, inclusion: STATUSES

  belongs_to :requester,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :receiver,
    class_name: :User,
    primary_key: :id,
    foreign_key: :friend_id

  #need method to find any relationship
end
