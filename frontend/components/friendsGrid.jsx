import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendsGrid extends React.Component {
  render() {
    const { users, pageId } = this.props;
    return (<div id='friends-grid'>
      <h3>Friends</h3>
      <div className='flex-center'>
        {users[pageId].friend_ids.map(
          friend_id => (<div className='friend'>
            <Link to={`/users/${friend_id}`}>{users[friend_id].username}</Link>
          </div>)
        )}
      </div>
    </div>);
  }
}

//
// style={`background-image: ${users[friend_id].profile_pic} object-fit:contain`}
