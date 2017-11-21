import { combineReducers } from 'react-redux';
// import usersReducer from './usersReducer';
// import friendshipsReducer from './friendshipsReducer';
// import friendRequestsReducer from './friendRequestsReducer';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  // users: usersReducer,
  // friendships: friendshipsReducer,
  // friendRequests: friendRequestsReducer,
  posts: postsReducer,
  comments: commentsReducer
});
