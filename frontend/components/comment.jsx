import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from './commentFormContainer';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(event) {
    event.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    const { comment, author, currentUser } = this.props;
    // console.log("Comment props: ", this.props);
    return (<li>
      {author ? <div className='comment flex-top'>
        <Link className='profile-pic-mini' to={`/users/${author.id}`}>
          {author.profile_pic ?
            <img className='profile-pic-mini' src={author.profile_pic}/> : ''}
        </Link>
        <p className='comment-body'>
          <Link className='green' to={`/users/${author.id}`}>
            {author.username}
          </Link>&ensp;{comment.body}
        </p>
        &ensp;{currentUser === comment.user_id ?
          <i className='delete-button fa fa-trash shift-down fa-lg springgreen' onClick={this.delete}></i> :
          ''}
      </div> : ''}
      <div className='comment-details-row'></div>
      {/* <CommentFormContainer postId={comment.post_id} commentId={comment.id}
                            errors={this.props.errors.session} /> */}
    </li>);
  }
}
