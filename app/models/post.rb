# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  PRIVACIES = %w(PUBLIC FRIENDS PRIVATE)
  validates :body, :audience, presence: true
  validates :audience, inclusion: PRIVACIES

  belongs_to :user
  has_many :comments, dependent: :destroy
end
