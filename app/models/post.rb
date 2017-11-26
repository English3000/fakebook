# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :body, presence: true

  belongs_to :user#,
    # class_name: :User,
    # primary_key: :id,
    # foreign_key: :user_id
  has_many :comments
end
