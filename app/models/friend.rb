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
  STATUSES = %w(APPROVED PENDING).freeze #friend, pending, unfriend
  validates :user_id, :friend_id, :status, presence: true
  validates :status, inclusion: STATUSES

  belongs_to :friend_inverse,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :friend,
    class_name: :User,
    primary_key: :id,
    foreign_key: :friend_id

  #need method to find any relationship
end
