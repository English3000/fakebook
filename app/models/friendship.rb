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
end
