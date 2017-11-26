import React from 'react';

export default class DemoButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.signIn({username: 'Alexander_Marks-Katz', password: '12345678'});
  }

  render() {
    return <button onClick={this.handleClick}  className='gray-button'>DEMO</button>;
  }
}
