import React from 'react';
import { Link } from 'react-router-dom';
import { FriendRequestItem } from './friendRequestItem';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.accept = this.accept.bind(this);
    this.reject = this.reject.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signOut(event) {
    event.preventDefault();
    this.props.signOut();
  }

  render() {
    const { users, currentUser, match } = this.props;

    return (<header className='nav-bar'>
      <div className='center-900px flex-between'>
        <div className='header-logo'>
          {match.path === '/posts' ?
          <Link to={`/users/${currentUser}`} className='logo-font'>fyi</Link> :
          <Link to='/posts' className='logo-font'>fyi</Link>}
        </div>
        <nav className='flex-middle'>
          <Link to={`/users/${currentUser}`} className='flex-middle'>
            <img className='profile-pic-mini' src={users[currentUser] ? users[currentUser].profile_pic : ''}/>
            &ensp;
            {users[currentUser] ? users[currentUser].username : ''}
          </Link>
          <span className='darkgreen'>&ensp;&nbsp;|&ensp;&nbsp;</span>
          <Link to='/posts'>Home</Link>
          <i className='fa fa-users fa-lg pointer darkgreen' onClick={() => $('.friend-requests-list').toggleClass('hidden')}>
            {users[currentUser] ? <span className='palegreen'>{users[currentUser].request_ids.length}</span> : ''}
            {users[currentUser] ? <ul className='friend-requests-list hidden'>
              {users[currentUser].request_ids.map(requestId => (
                <FriendRequestItem key={requestId} requestId={requestId} parentProps={this.props}/>) )}
            </ul> : ''}
          </i>
          <i className='fa fa-sign-out fa-lg pointer darkgreen' onClick={this.signOut}></i>
        </nav>
      </div>
    </header>);
  }
}
