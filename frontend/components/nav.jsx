import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.signOut = this.signOut.bind(this);
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
        <i className='fa fa-sign-out fa-lg pointer' onClick={this.signOut}></i>
      </nav>
    </header>);
  }
}
