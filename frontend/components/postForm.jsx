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
    this.props.createPost(this.state) //upon success, errors not cleared
      .then(this.setState({ body: '' }))
      .then(() => $('.post-form-errors').addClass('hidden'),
      () => $('.post-form-errors').removeClass('hidden'));
  }
//this.update doesn't work on refresh
  render() {
    // console.log("Post Form Errors: ", this.props.errors);
    return (<form className='post post-form flex-middle' onSubmit={this.makePost}>
      <ul className='post-form-errors absolute hidden' onClick={() => $('.post-form-errors').addClass('hidden')}>
        {this.props.errors.length > 0 ? this.props.errors.map(err => <li key={err}>{err}</li>) : ''}
      </ul>
      <textarea className='post-input' type='text' value={this.state.body ? this.state.body : ''}
        placeholder="What's up?" onChange={this.update}/>
      <i className='fa fa-paper-plane post-button' onClick={this.makePost}></i>
    </form>);
  }
}
