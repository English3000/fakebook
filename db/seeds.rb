# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Comment.destroy_all

user1 = User.create({username: 'Alexander_Marks-Katz', password: '12345678',
  profile_pic: File.new('app/assets/images/AMK-profile-pic.jpg'),
  custom_link: 'https://www.linkedin.com/in/alexander-marks-katz-78a09a20/'})
user2 = User.create({username: 'demoUser', password: 'demoUser',
  cover_photo: File.new('app/assets/images/israel-cover-photo.jpg')})

post1 = Post.create({user_id: user1.id, body: "Don't delete me! :("})
post2 = Post.create({user_id: user2.id, body: 'long post.............................................................'})
post3 = Post.create({user_id: user1.id, body: "fyi, welcome!"})

comment1 = Comment.create({user_id: user2.id, post_id: post1.id, body: "I won't."})
comment2 = Comment.create({user_id: user1.id, post_id: post1.id, body: "You can't!"})
comment3 = Comment.create({user_id: user1.id, post_id: post2.id, body: "I've seen longer..."})
