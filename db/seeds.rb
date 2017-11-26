# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all

user1 = User.create({username: 'Alexander_Marks-Katz', password: '12345678',
  profile_pic: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/10342995_896213367115931_1224970975051851211_n.jpg?oh=99412f73a28c69f37481e3a59b7ac172&oe=5A8C89E6',
  custom_link: 'https://www.linkedin.com/in/alexander-marks-katz-78a09a20/'})
user2 = User.create({username: 'demoUser', password: 'demoUser',
  cover_photo: 'https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-9/17523368_1372208939516369_1155114120450250589_n.jpg?oh=e752d1c59ae8729b640909a442d113c1&oe=5A9E763C'})

Post.create({user_id: user1.id, body: "Don't delete me! :("})
Post.create({user_id: user2.id, body: 'long post.............................................................'})
Post.create({user_id: user1.id, body: "fyi, welcome!"})
