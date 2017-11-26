import React from 'react';
import { Link } from 'react-router-dom';

export default class PostsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("Post props:", props);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    //AJAX req. to get post's comments
  }

  delete(event) {
    event.preventDefault();
    if (this.props.userShowId) {
      this.props.deletePost(this.props.post.id, this.props.userShowId);
    } else {
      this.props.deletePost(this.props.post.id);
    }
  }

  render() {
    const {post, author, currentUser} = this.props;
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
          &nbsp;{author ? currentUser === author.id ? <i className='delete-button fa fa-trash fa-lg palegreen' onClick={this.delete}></i> : '' : ''}&nbsp;&ensp;<p className='post-body'>{post.body}</p>
          {/* <p>{post.likes}</p> */}
          {/* 3 most recent comments chron'ly */}
        </article>
      </li>
    );
  }
}
