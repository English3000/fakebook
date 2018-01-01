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
Friendship.destroy_all


user1 = User.create({username: 'Alexander_Marks-Katz', password: '12345678',
  profile_pic: File.new('app/assets/images/AMK-profile-pic.jpg'),
  custom_link: 'https://www.linkedin.com/in/alexander-marks-katz-78a09a20/',
  intro: "Recent App Academy grad. Originally from MA.",
  location: 'San Francisco', school: "UMass Amherst, Bachelor's in 2.5 yrs!",
  job: 'Software Developer'})

user2 = User.create({username: 'demoUser', password: 'demoUser',
  cover_photo: File.new('app/assets/images/israel-cover-photo.jpg'),
  intro: 'My friend Alexander gave me the fyi.', partnership: 'married'})

user3 = User.create({username: 'friendlyUser', password: 'friendly',
  profile_pic: File.new('app/assets/images/smiley-face.png'),
  cover_photo: File.new('app/assets/images/rainbow-cover-photo.jpg'),
  intro: "Let's be friends!", job: 'Chief Optimist'})

user4 = User.create({username: 'newestUser', password: 'newestUser'})

user5 = User.create({username: 'grumpyUser', password: 'grumpy',
  profile_pic: File.new('app/assets/images/grumpy-cat.jpg'),
  cover_photo: File.new('app/assets/images/rainbow-cat-background.jpg'),
  custom_link: 'https://www.adoptapet.com/cat-adoption',
  intro: "Ssssss.",
  location: '', school: "",
  job: 'pet', partnership: 'single'})

user6 = User.create({username: 'sleepyUser', password: 'sleepy',
  profile_pic: File.new('app/assets/images/sleepy-fox.jpg'),
  cover_photo: File.new('app/assets/images/hollywood-sign.jpg'),
  intro: "Don't send me any friend requests after 9 PM!
  Hard enough to fall asleep as it is.",
  location: 'Los Angeles', school: "",
  job: 'professor', partnership: 'married'})

user7 = User.create({username: 'excitedUser', password: 'excited',
  profile_pic: File.new('app/assets/images/fist-thru-glass.jpg'),
  custom_link: 'https://giphy.com/explore/new-year-2018',
  intro: "Can't believe it's 2018! Time to make some new friends.",
  location: 'San Francisco', school: "City College",
  job: 'VP of Marketing', partnership: 'married'})

user8 = User.create({username: 'determinedUser', password: 'determined',
  profile_pic: File.new('app/assets/images/determination.jpg'),
  cover_photo: File.new('app/assets/images/airplane-in-sky.jpg'),
  custom_link: 'https://www.google.com/search?client=safari&rls=en&q=center+of+usa&ie=UTF-8&oe=UTF-8',
  location: 'Lebanon, KS', job: 'driver', partnership: 'engaged'})


post1 = Post.create({user_id: user1.id, body: "Don't delete me! :(", audience: 'PUBLIC'})
post2 = Post.create({user_id: user2.id, body: 'long post.............................................................', audience: 'FRIENDS'})
post3 = Post.create({user_id: user1.id, body: "fyi, welcome!", audience: 'PRIVATE'})
post4 = Post.create({user_id: user1.id, body: "You're all great friends!", audience: 'FRIENDS'})
post5 = Post.create({user_id: user4.id, body: "fyi, I'm new", audience: 'PUBLIC'})
post6 = Post.create({user_id: user4.id, body: "No friends yet :(", audience: 'FRIENDS'})
post7 = Post.create({user_id: user3.id, body: "Smiling is good for you!", audience: 'PUBLIC'})
post8 = Post.create({user_id: user5.id, body: 'I woke up today to find out I have work!', audience: 'FRIENDS'})

comment1 = Comment.create({user_id: user2.id, post_id: post1.id, body: "I won't."})
comment2 = Comment.create({user_id: user1.id, post_id: post1.id, body: "You can't!"})
comment3 = Comment.create({user_id: user1.id, post_id: post2.id, body: "I've seen longer..."})

Friendship.create({user_id: user1.id, friend_id: user2.id, status: 'APPROVED'})
Friendship.create({user_id: user1.id, friend_id: user5.id, status: 'APPROVED'})
Friendship.create({user_id: user1.id, friend_id: user6.id, status: 'APPROVED'})
Friendship.create({user_id: user1.id, friend_id: user8.id, status: 'APPROVED'})
Friendship.create({user_id: user7.id, friend_id: user1.id, status: 'PENDING'})
Friendship.create({user_id: user3.id, friend_id: user1.id, status: 'PENDING'})
Friendship.create({user_id: user3.id, friend_id: user2.id, status: 'PENDING'})
Friendship.create({user_id: user2.id, friend_id: user3.id, status: 'APPROVED'})
Friendship.create({user_id: user3.id, friend_id: user7.id, status: 'APPROVED'})
Friendship.create({user_id: user3.id, friend_id: user8.id, status: 'APPROVED'})
Friendship.create({user_id: user5.id, friend_id: user8.id, status: 'APPROVED'})
Friendship.create({user_id: user6.id, friend_id: user8.id, status: 'PENDING'})

Like.create({user_id: user2.id, post_id: post4.id})
Like.create({user_id: user1.id, post_id: post7.id})
Like.create({user_id: user2.id, post_id: post7.id})
Like.create({user_id: user4.id, post_id: post7.id})
