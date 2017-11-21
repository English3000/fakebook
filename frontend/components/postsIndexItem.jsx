import React from 'react';

export default class PostsIndexItem {
  componentDidMount() {
    //AJAX req. to get post's comments
  }

  render() {
    return (
      <li>
        <p>{this.props.post.body}</p>
        {/* <p>{post.likes}</p> */}
        {/* 3 most recent comments chron'ly */}
      </li>
    );
  }
}
