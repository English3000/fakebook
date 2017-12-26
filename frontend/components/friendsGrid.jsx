import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendsGrid extends React.Component {
  render() {
    const { users, pageId } = this.props;
    console.log(users);
    if (Object.keys(users).length < 2) {
      return null;
    }
    return (<div id='friends-grid'>
      <h3>Friends</h3>
      <div className='flex-center'>
        {users[pageId].friend_ids.map(
          friendId => (<div className='friend'>
            <Link style={`background-image: ${users[friendId].profile_pic} object-fit:contain`}
              to={`/users/${friendId}`}>{users[friendId].username}</Link>
          </div>)
        )}
      </div>
    </div>);
  }
}
