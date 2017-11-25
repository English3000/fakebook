# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_pic     :string
#  cover_photo     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}

  has_attached_file :profile_pic, default_url: ""
  has_attached_file :cover_photo, default_url: ""
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  has_many :posts
  has_many :comments
  has_many :friendships
  has_many :friend_requests

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
