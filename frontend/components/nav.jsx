import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser);
    // console.log(this.props);
  }

  signOut(event) {
    event.preventDefault();
    this.props.signOut();
  }

  render() {
    return (<header className='flex-between nav'>
      <div className='header-logo'>
        <Link to='/posts' className='logo-font'>f</Link>
      </div>
      <nav className='flex-middle'>
        <Link to={`/users/${this.props.currentUser}`} className='flex-middle'>
          <img src={this.props.users.profile_pic ? this.props.users.profile_pic : 'http://3.bp.blogspot.com/-qUH2sD4GWB0/UUn5xBphLjI/AAAAAAAAA2o/MMYWv7n8sNw/s1600/thumb-up-terminator+pablo+M+R.jpg'}/>&nbsp;&nbsp;
          {this.props.users.username}
        </Link>&nbsp;&nbsp;|
        &nbsp;<Link to='/posts'>Home</Link>&emsp;&emsp;
        <i className='fa fa-users fa-lg pointer darkblue'></i>&emsp;
        <i className='fa fa-sign-out fa-lg pointer darkblue' onClick={this.signOut}></i>
      </nav>
    </header>);
  }
}
