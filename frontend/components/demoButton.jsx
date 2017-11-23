import React from 'react';

export default class DemoButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.signIn({'username':'AMK', 'password':'12345678'});
  }

  render() {
    return <button onClick={this.handleClick}  className='max-size gray-button white center-text'>DEMO</button>;
  }
}