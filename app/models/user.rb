# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  username                 :string           not null
#  password_digest          :string           not null
#  session_token            :string           not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  profile_pic_file_name    :string
#  profile_pic_content_type :string
#  profile_pic_file_size    :integer
#  profile_pic_updated_at   :datetime
#  cover_photo_file_name    :string
#  cover_photo_content_type :string
#  cover_photo_file_size    :integer
#  cover_photo_updated_at   :datetime
#  custom_link              :string
#

class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}

  has_attached_file :profile_pic, default_url: ''
  has_attached_file :cover_photo, default_url: ''
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  has_many :posts
  has_many :comments
  has_many :friendships

  has_many :friendships_inverse,
    class_name: :Friendship,
    primary_key: :id,
    foreign_key: :friend_id

  def friends
    friendships.where(status: 'APPROVED').pluck(:friend_id) +
      friendships_inverse.where(status: 'APPROVED').pluck(:user_id)
  end

  def requests
    friendships_inverse.where(status: 'PENDING').pluck(:user_id)
  end

  after_initialize :ensure_token

  def ensure_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def reset_token
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save
    self.session_token
  end

  attr_reader :password
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_match?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.password_match?(password)
      return user
    else
      return nil
    end
  end
end
