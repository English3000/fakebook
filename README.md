# [For Your Information...](https://fy-io.herokuapp.com/#/)

fyi is a fully functional Facebook clone with the iconic features:
* User auth & demo user
* Newsfeed & Profile
* Upload a profile pic & cover photo
* Give details about yourself
* Like & friend
* Make & delete posts & comments
* Set privacy restrictions on your posts

Built in 11 days with Ruby on Rails & React/Redux.

## Gateway
![gateway](https://github.com/English3000/fyi/blob/master/gateway-screenshot.png)

## Newsfeed
![posts-index](https://github.com/English3000/fyi/blob/master/posts-index-screenshot.png)

## User Profiles
![demo-user](https://github.com/English3000/fyi/blob/master/profile-screenshot.png)

![other-user](https://github.com/English3000/fyi/blob/master/other-user-profile.png)

## Implementation

fyi has `users`, `posts`, `comments`, `likes`, and `friendships` tables.

I started with User Auth. The _Sign In/Up_ form is an original design with [sophisticated CSS](https://github.com/English3000/fyi/blob/master/app/assets/stylesheets/gateway.css). The User Profile allows you to upload photos (with AWS/Paperclip) and a link to your person site. The appearance of the Friend button varies based on whether you are the requester or receiver and whether the friend request is pending (if so, it also appears in the Nav's dropdown by clicking on the Friends icon). The Logo button (when signed in) brings you either to the Newsfeed or your Profile, depending on your current page. And the Newsfeed displays all your friends' posts plus public posts in reverse-chronological order (with comments in chronological order.

### Backend Details
* __Store/Posts:__ Classic _by id-all ids_ delineation for posts to leverage both object `&&` array data structures on frontend
* __Store/Users:__ Use custom SQL queries `&&` two-way associations to identify users’ friendships from only one (friendships) table (architecture fetches user’s id whether they made the request or accepted it)
* __PostsIndex:__ Via helper method in PostsController, after checking for component location by URL, either fire custom SQL query `||` use friend && request ids from state to filter posts by privacy
* __Redux cycle:__ Fetch comments in the posts AJAX request, using complex PostsReducer to handle 11 potential post `||` comment actions, including liking
