import React from 'react';

export default class PostsIndexItem extends React.Component {
  componentDidMount() {
    //AJAX req. to get post's comments
  }

  render() {
    console.log("PostIndexItem props: ", this.props);
    return (
      <li>
        <p>{this.props.post.body}</p>
        {/* <p>{post.likes}</p> */}
        {/* 3 most recent comments chron'ly */}
      </li>
    );
  }
}
