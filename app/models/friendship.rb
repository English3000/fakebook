# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord
  STATUSES = %w(APPROVED PENDING).freeze
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

  def self.find_friendship(id1, id2) #users' ids
    self.where(user_id: id1, friend_id: id2).or(
      self.where(user_id: id2, friend_id: id1)
    ).first
  end
end
