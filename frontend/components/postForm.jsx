import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      user_id: this.props.currentUser
    };

    this.update = this.update.bind(this);
    this.makePost = this.makePost.bind(this);
  }

  update(event) {
    this.setState({ body: event.target.value });
  }

  makePost(event) {
    event.preventDefault();
    this.props.createPost(this.state);
    this.setState({ body: '' });
  }

  render() {
    return (<form className='post flex-middle' onSubmit={this.makePost}>
      <textarea className='post-input' type='text' value={this.state.body}
        placeholder="What's on your mind?" onChange={this.update}/>
      <i className='fa fa-paper-plane post-button' onClick={this.makePost}></i>
    </form>);
  }
}
