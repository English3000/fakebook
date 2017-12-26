import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendsGrid extends React.Component {
  render() {
    const { users, currentUser } = this.props;
    return (<div id='friends-grid'>
      <h2 style='text-align:center'>Friends</h2>
      <div class='flex-center'>
        {users[currentUser].friend_ids.map(
          friend => (<div class='friend'>
            <Link to={`/users/${friend.id}`}>{friend.username}</Link>
          </div>)
        )}
      </div>
    </div>);
  }
}

/*  style={`background-image: ${friend.profile_pic} object-fit:contain`} */
