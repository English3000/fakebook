import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendsGrid extends React.Component {
  render() {
    const { users, pageId, currentUser } = this.props;
    return Object.keys(users).length < 2 ? null : (<div id='friends-grid'>
      {pageId - currentUser === 0 ? null : <h3 style={{fontWeight: 'bold', marginBottom: 6}}>
        {users[pageId].friend_ids.length} Friend{users[pageId].friend_ids.length - 1 === 0 ? '' : 's'}</h3>}
      <div className='flex-center' style={{flexWrap: 'wrap'}}>
        {users[pageId].friend_ids.map(
          friendId => (<div><Link className='friend' to={`/users/${friendId}`}
              style={{backgroundImage: `url(${users[friendId].profile_pic})`,
                      backgroundSize: 'cover', display: 'flex',
                      alignItems: 'flex-end', borderRadius: '100%'}}>
            </Link>
            <div style={{width: 70, textAlign: 'center', fontSize: 12,
                         overflowWrap: 'break-word', marginBottom: 6}}>
              <Link to={`/users/${friendId}`}>{users[friendId].username}</Link>
            </div>
          </div>)
        )}
      </div>
    </div>);
  }
}
