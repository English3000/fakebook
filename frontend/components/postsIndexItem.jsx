import React from 'react';
import { Link } from 'react-router-dom';

export default class PostsIndexItem extends React.Component {
  constructor(props) {
    super(props);
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
    console.log("Post props:", this.props);
    const {post, author} = this.props;
    return (
      <li>
        <article className='post'>
          <p className='post-author'>{author ? <span>
            <Link className='green' to={`/users/${author.id}`}>{author.username}</Link>
            &nbsp;on <em>{new Date(post.updated_at).toDateString()}</em></span> : ''}</p>
          <i className='delete-button fa fa-trash fa-lg palegreen' onClick={this.delete}></i>&ensp;<p className='post-body'>{post.body}</p>
          {/* <p>{post.likes}</p> */}
          {/* 3 most recent comments chron'ly */}
        </article>
      </li>
    );
  }
}
