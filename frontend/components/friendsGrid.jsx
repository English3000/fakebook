import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendsGrid extends React.Component {
  render() {
    const { users, currentUser } = this.props;
    return (<div id='friends-grid'>
      <h2 style='text-align:center'>Friends</h2>
      <div class='flex-center'>
        {users[currentUser].friend_ids.map(
          friend_id => (<div class='friend'>
            <Link to={`/users/${friend_id}`}>{users[friend_id].username}</Link>
          </div>)
        )}
      </div>
    </div>);
  }
}

// style={`background-image: ${users[friend_id].profile_pic} object-fit:contain`}
