import React from 'react';

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
    return <button onClick={this.signOut}>Sign Out</button>;
  }
}
