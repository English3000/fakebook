import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendsGrid extends React.Component {
  render() {
    const { users, pageId, currentUser } = this.props;
    return Object.keys(users).length < 2 ? null : (<div id='friends-grid'>
      {pageId - currentUser === 0 ? null : <h3>
        {users[pageId].friend_ids.length} Friends</h3>}
      <div className='flex-center'>
        {users[pageId].friend_ids.map(
          friendId => (<div className='friend'
            style={{backgroundImage: `url(${users[friendId].profile_pic})`,
                         alignItems: 'flex-end', overflowWrap: 'break-word'}}>
            <Link to={`/users/${friendId}`}>{users[friendId].username}</Link>
          </div>)
        )}
      </div>
    </div>);
  }
}
