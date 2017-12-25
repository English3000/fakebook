import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendsGrid extends React.Component {
  render() {
    const { users, currentUser } = this.props.users;
    return (<div>
      <h1>Friends</h1>
      {/* <div class='flex' id='friends-grid'>
        {users[currentUser].friend_ids.map(
          friend => (<div class='friend' style={`background-image: ${friend.profile_pic}`}>
            <Link to={`/users/${friend.id}`}>{friend.username}</Link>
          </div>)
        )}
      </div> */}
    </div>);
  }
}
