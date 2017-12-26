import React from 'react';
import { Link } from 'react-router-dom';
import FriendRequestItem from './friendRequestItem';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [] };
    this.signOut = this.signOut.bind(this);
    this.search = this.search.bind(this);
  }

  signOut(event) {
    event.preventDefault();
    this.props.signOut();
  }

  search(event) {
    // this.setState({ searchResults: /* query to db, searches by event.target.value */ });
  }

  render() {
    const { users, currentUser, match } = this.props;

    return (<header className='nav-bar'>
      <div className='center-900px flex-between'>
        <div>
          <div className='header-logo'>
            {match.path === '/posts' ?
            <Link to={`/users/${currentUser}`} className='logo-font'>fyi</Link> :
            <Link to='/posts' className='logo-font'>fyi</Link>}
          </div>
          <input type='text' placeholder='search' onChange={event => this.search(event)}/>
          <ul style={{position: 'absolute', listStyle: 'none'}}>
            {this.state.searchResults.map(
              user => (<li key={`result-${user.id}`}>
                <Link to={`/users/${user.id}`}>{user.username}</Link>
              </li>)
            )}
          </ul>
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
