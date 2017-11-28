import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: null,
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
    this.props.createPost(this.state) //upon success, errors not cleared
      .then(this.setState({ body: null }))
      .then(() => $('.gateway-errors').addClass('hidden'),
      () => $('.gateway-errors').removeClass('hidden'));
  }
//this.update doesn't work on refresh
  render() {
    console.log("Post Form Errors: ", this.props.errors);
    return (<form className='post post-form flex-middle' onSubmit={this.makePost}>
      <ul className='gateway-errors absolute hidden' onClick={() => $('.gateway-errors').addClass('hidden')}>
        {this.props.errors.session.length > 0 ? this.props.errors.session.map(err => <li key={err}>{err}</li>) : ''}
      </ul>
      <textarea className='post-input' type='text' value={this.state.body ? this.state.body : ''}
        placeholder="What's up?" onChange={this.update}/>
      <i className='fa fa-paper-plane post-button' onClick={this.makePost}></i>
    </form>);
  }
}
