import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
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
          <span className='palegreen'>&ensp;&nbsp;|&ensp;&nbsp;</span>
          <Link to='/posts'>Home</Link>
          <i className='fa fa-users fa-lg pointer palegreen'></i>
          <i className='fa fa-sign-out fa-lg pointer palegreen' onClick={this.signOut}></i>
        </nav>
      </div>
    </header>);
  }
}
