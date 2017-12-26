import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendsGrid extends React.Component {
  render() {
    const { users, pageId, currentUser } = this.props;
    return Object.keys(users).length < 2 ? null : (<div id='friends-grid'>
      {pageId - currentUser === 0 ? null : <h3 style={{marginBottom: 8}}>
        {users[pageId].friend_ids.length} Friends</h3>}
      <div className='flex-center'>
        {users[pageId].friend_ids.map(
          friendId => (<div><Link className='friend' to={`/users/${friendId}`}
              style={{backgroundImage: `url(${users[friendId].profile_pic})`,
                      display: 'flex', alignItems: 'flex-end', borderRadius: '100%'}}>
            </Link>
            <Link style={{textAlign: 'center', overflowWrap: 'break-word'}}
                  to={`/users/${friendId}`}>{users[friendId].username}</Link></div>)
        )}
      </div>
    </div>);
  }
}
