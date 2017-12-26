import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendsGrid extends React.Component {
  render() {
    const { users, currentUser } = this.props;
    return (<div id='friends-grid'>
      <h2 style={{textAlign: 'center'}}>Friends</h2>
      <div className='flex-center'>
        {users[currentUser].friend_ids.map(
          friend_id => (<div className='friend'>
            <Link to={`/users/${friend_id}`}>{friend_id}</Link>
          </div>)
        )}
      </div>
    </div>);
  }
}

//{users[friend_id].username}
// style={`background-image: ${users[friend_id].profile_pic} object-fit:contain`}
