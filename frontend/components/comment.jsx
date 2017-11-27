import React from 'react';
import { Link } from 'react-router-dom';
import CommentReplyForm from './commentReplyForm';

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
      <div className='comment flex-middle'>
        <Link className='profile-pic-mini' to={`/users/${author.id}`}>
          {author.profile_pic ?
            <img className='profile-pic-mini' src={author.profile_pic}/> : ''}
        </Link>
        <p className='comment-body'>
          <Link className='green' to={`/users/${author.id}`}>
            {author.username}
          </Link>&ensp;{comment.body}
          &ensp;{currentUser === comment.user_id ?
            <i className='delete-button fa fa-trash fa-lg palegreen' onClick={this.delete}></i> :
          ''}
        </p>
      </div>
      <div className='comment-details-row'></div>
      {/* <CommentReplyForm /> */}
    </li>);
  }
}
