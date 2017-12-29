import React from 'react';
import { Link } from 'react-router-dom';
import FriendRequestItem from './friendRequestItem';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] };
    this.signOut = this.signOut.bind(this);
    this.search = this.search.bind(this);
  }

  signOut(event) {
    event.preventDefault();
    this.props.signOut();
  }

  search(event) {
    const { users } = this.props;
    let matches = [];
    if (event.target.value.length > 0) {
      Object.keys(users).forEach(userId => {
        if (users[userId].username.includes(event.target.value)) {
          matches.push(userId);
        }
      });
    }
    this.setState({ matches });
  }

  render() {
    const { users, currentUser, match } = this.props;

    return (<header className='nav-bar'>
      <div className='center-900px flex-between'>
        <div style={{display: 'flex'}}>
          <div className='header-logo' style={{marginRight: 8.75}}>
            {match.path === '/posts' ?
            <Link to={`/users/${currentUser}`} className='logo-font'>fyi</Link> :
            <Link to='/posts' className='logo-font'>fyi</Link>}
          </div>
          <div><input type='text' placeholder='Search...' id='search'
                      style={{marginTop: 6.5, width: 165, padding: 4.5, borderRadius: 2, border: 'none',
                              paddingLeft: 5.25, paddingRight: 5.25, height: 18, fontSize: 15}}
                      onChange={event => this.search(event)}/></div>
          <ul style={{position: 'absolute', listStyle: 'none', backgroundColor: 'white', color: 'black',
                      marginTop: 31, width: 175.5, overflowWrap: 'break-word', marginLeft: 46}}>
            {this.state.matches.map(
              userId => (<li key={`result-${userId}`} class='search-result'>
                <Link to={`/users/${userId}`}>{users[userId].username}</Link>
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
