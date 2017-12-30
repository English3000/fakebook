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
    const { parentProps, comment } = this.props;
    parentProps.updateComment(comment);
  }

  delete(event) {
    event.preventDefault();
    this.props.parentProps.deleteComment(this.props.comment.id);
  }

  render() {
    const { comment, author, parentProps } = this.props;
    // console.log("Comment props: ", this.props);
    return (<li>
      {author ? <div className='comment flex-top flex-between'>
        <div className='flex-top'>
          {parentProps.users[parentProps.currentUser] ?
            parentProps.users[parentProps.currentUser].liked_comment_ids
              .includes(comment.id) ?
          <div className='flex-middle'>
            <span className='likes' style={{fontWeight: 700}}>{comment.likes}</span>
            <i className="fa fa-thumbs-up fa-lg green hover-red"
               onClick={() => parentProps.unlikeComment(comment)}></i>
          </div> : <div className='flex-middle'>
            <span className='likes'}>{comment.likes}</span>
            <i className="fa fa-thumbs-up fa-lg green"
               onClick={() => parentProps.likeComment(comment)}></i>
          </div> : ''}
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
        &ensp;{parentProps.currentUser === comment.user_id ? <div>
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
