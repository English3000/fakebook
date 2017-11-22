import React from 'react';
//renders at top of <Route exact path='/'... /> w/in <header>
//below it is description of platform functionality
export default class GatewayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'username': '', 'password': ''};
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
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

  handleEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.props.signIn(this.state);
    }
  }

  render() {
    return (<div>
      <form className='flex'>
        <button onClick={this.signUp} id='sign-up'><p>Sign</p><p className='bump-left'>Up</p></button>&emsp;
        <div className='inline-block input-box'>
          <input type='text'
            onChange={this.update('username')}
            onKeyDown={this.handleEnter}
            value={this.state.username}
            placeholder='Username'
            autoFocus/>
          <br/>
          <input type='password'
            onChange={this.update('password')}
            onKeyDown={this.handleEnter}
            value={this.state.password}
            placeholder='Password'/>&emsp;
        </div>
        <button onClick={this.signIn} id='sign-in'><span><p>Sign</p><p className='bump-more-left'>In</p></span></button>
      </form>
      {/*this.props.errors*/}
      {/* MOVE to diff. component */}
      {/* <button onClick={this.signOut}>Sign Out</button> */}
    </div>);
  }
}
