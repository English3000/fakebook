import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendRequestItem extends React.Component {
  render() {
    const { requestId } = this.props;
    const { users, currentUser,
            acceptFriendship, rejectFriendship } = this.props.parentProps;
    return (
      <li className='flex-middle flex-between friend-request-item'>
        <Link to={`/users/${requestId}`} className='flex-middle'>
          <img className='profile-pic-mini' src={users[requestId] ? users[requestId].profile_pic : ''}/>
          &ensp;
          <span className='max-px80'>{users[requestId] ? users[requestId].username : ''}</span>
        </Link>
        <div className='flex-middle'>
          <button className='accept-friend-button notif-button accept-mini' onClick={this.accept(requestId)}>&#10004;</button>
          <button className='reject-friend-button notif-button reject-mini' onClick={this.reject(requestId)}><span>&times;</span></button>
        </div>
      </li>
    );
  }

  accept(requestId) {
    return event => {
      event.preventDefault();
      const { acceptFriendship, currentUser } = this.props.parentProps;
      acceptFriendship({ friend_id: currentUser, user_id: requestId, status: 'APPROVED' });
    };
  }

  reject(requestId) {
    return event => {
      event.preventDefault();
      const { rejectFriendship, currentUser } = this.props.parentProps;
      rejectFriendship({ unfriender_id: currentUser, unfriended_id: requestId });
    };
  }
}
