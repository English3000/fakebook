import React from 'react';
//renders at top of <Route exact path='/'... /> w/in <header>
//below it is description of platform functionality
export default class GatewayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'username': '', 'password': ''};
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    // this.signOut = this.signOut.bind(this); //MOVE to diff. component
  }

  update(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  signUp(event) {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  signIn(event) {
    event.preventDefault();
    this.props.signIn(this.state);
  }

  // MOVE to diff. component
  // signOut(event) {
  //   event.preventDefault();
  //   this.props.signOut(this.state);
  // }

  render() {
    return (<div>
      <form>
        <button onClick={this.signUp} className='lightcyan-button'>Sign Up</button>&emsp;
        <input type='text'
          onChange={this.update('username')}
          value={this.state.username}
          placeholder='Username'
          autoFocus/>&emsp;
        <input type='password'
          onChange={this.update('password')}
          value={this.state.password}
          placeholder='Password'/>&emsp;
        <button onClick={this.signIn} className='lightcyan-button'>Sign In</button>
      </form>
      {/*this.props.errors*/}
      {/* MOVE to diff. component */}
      {/* <button onClick={this.signOut}>Sign Out</button> */}
    </div>);
  }
}
