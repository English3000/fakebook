import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from './commentFormContainer';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  update(event) {
    event.preventDefault();
    const { parentProps, post } = this.props;
    parentProps.updatePost(post);
  }

  delete(event) {
    event.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    const { comment, author, currentUser } = this.props;
    // console.log("Comment props: ", this.props);
    return (<li>
      {author ? <div className='comment flex-top flex-between'>
        <div className='flex-top'>
          <Link className='profile-pic-mini' to={`/users/${author.id}`}>
            {author.profile_pic ?
              <img className='profile-pic-mini' src={author.profile_pic}/> : ''}
          </Link>
          <p className='comment-body'>
            <Link className='green' to={`/users/${author.id}`}>
              {author.username}
            </Link>&ensp;{comment.body}
          </p>
        </div>
        &ensp;{currentUser === comment.user_id ? <div>
          {/* <i className='delete-button fa fa-pencil fa-lg springgreen' onClick={this.update}></i>
          &emsp;*/}<i className='delete-button fa fa-trash shift-down fa-lg springgreen' onClick={this.delete}></i>
        </div> : ''}
      </div> : ''}
      <div className='comment-details-row'></div>
      {/* <CommentFormContainer postId={comment.post_id} commentId={comment.id}
                            errors={this.props.errors.session} /> */}
    </li>);
  }
}
