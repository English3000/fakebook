import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from './commentForm';
import Comment from './comment';

export default class PostsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  //
  // componentWillMount() {
  //   this.props.parentProps.getPostComments(this.props.post.id); //n-query;
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   if (this.props.parentProps.location.pathname !== newProps.parentProps.location.pathname) {
  //     this.props.parentProps.getPostComments(this.props.post.id);
  //   }
  // }

  delete(event) {
    event.preventDefault();
    const {match, deletePost} = this.props.parentProps;
    const post = this.props.post;
    if (match.params.id) {
      deletePost(post.id, match.params.id);
    } else {
      deletePost(post.id);
    }
  }

  render() {
    console.log("Post props:", this.props);
    const {post, author} = this.props;
    const {users, currentUser, comments, deleteComment} = this.props.parentProps;
    const date = new Date();
    return (
      <li>
        <article className='post'>
          <div className='post-author'>{author ? <div className='flex-middle'>
            <Link className='profile-pic-mini' to={`/users/${author.id}`}>
              {author.profile_pic ?
                <img className='profile-pic-mini' src={author.profile_pic}/> : ''}
            </Link>&ensp;
            <Link className='green' to={`/users/${author.id}`}>
              {author.username}
            </Link>&nbsp;{
              new Date(Date.now()).getDate() === new Date(post.updated_at).getDate() ?
              <span className='gray'>at&nbsp;<em>{new Date(post.updated_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})}</em></span> :
              <span className='gray'>on&nbsp;<em>{new Date(post.updated_at).toLocaleDateString([], {month: 'short', day: 'numeric'})}</em></span>
            }
          </div> : ''}</div>
          &nbsp;{author ? currentUser === author.id ?
            <i className='delete-button fa fa-trash fa-lg palegreen' onClick={this.delete}></i> :
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> : <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
          <p className='post-body'>{post.body}</p>
          {/* <p>{post.likes}</p> */}
          {/* 3 most recent comments chron'ly */}
        </article>
        <ul>
          {post.comment_ids.map(id => {
            const comment = comments[id];
            if (comment.post_id === post.id) {
              return <Comment key={comment.id} currentUser={currentUser}
                              comment={comment} author={users[comment.user_id]}
                              deleteComment={deleteComment}/>;
            }
          })}
          {/* <CommentForm /> */}
        </ul>
      </li>
    );
  }
}
