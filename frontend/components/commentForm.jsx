import React from 'react';
import { Link } from 'react-router-dom';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: null,
      user_id: this.props.currentUser.id,
      post_id: this.props.postId,
      comment_id: this.props.commentId
    };

    this.update = this.update.bind(this);
    this.makeComment = this.makeComment.bind(this);
  }

  update(event) {
    this.setState({ body: event.target.value });
  }

  makeComment(event) {
    event.preventDefault();
    this.props.createComment(this.state)
      .then(this.setState({ body: null }))
      .then(() => $('.comment-form-errors').addClass('hidden'),
      () => $('.comment-form-errors').removeClass('hidden'))
      .then(() => $('.post-form-errors').addClass('hidden'));
  }
//this.update doesn't work on refresh
  render() {
    // console.log("Comment Form Props: ", this.props);
    return (<form key={this.props.key} className='comment comment-form flex-middle' onSubmit={this.makeComment}>
      {this.props.errors.session.length > 1 && this.props.errors.session[1] === `Id ${this.state.post_id}` ?
        <ul className='comment-form-errors absolute hidden' onClick={() => $('.comment-form-errors').addClass('hidden')}>
            {this.props.errors.session.slice(0, 1).map(err => <li key={err}>{err}</li>)}
        </ul> : ''}
      <div className='flex'>
        <Link className='profile-pic-mini' to={`/users/${this.props.currentUser.id}`}>
          {this.props.currentUser.profile_pic ?
            <img className='profile-pic-mini' src={this.props.currentUser.profile_pic}/> : ''}
        </Link>
        <div className='flex-middle'>
          <textarea className='comment-input' type='text' value={this.state.body ? this.state.body : ''}
                    placeholder="Respond..." onChange={this.update}/>
          <i className='fa fa-paper-plane post-button' onClick={this.makeComment}></i>
        </div>
      </div>
    </form>);
  }
}
