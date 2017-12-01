import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from './commentFormContainer';
import Comment from './comment';

export default class PostsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.update = this.update.bind(this);
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

  update(event) {
    event.preventDefault();
    const { parentProps, post } = this.props;
    parentProps.updatePost(post);
  }

  delete(event) {
    event.preventDefault();
    const { parentProps, post } = this.props;
    parentProps.deletePost(post.id);
  }

  render() {
    // console.log("Post props:", this.props);
    const {post, author, parentProps} = this.props;
    const date = new Date();
    return (
      <li>
        <article className='post'>
          <div className='post-author'>
            {author ? <div className='flex-between flex-middle'>
              <div className='flex-middle'>
                <Link className='profile-pic-mini' to={`/users/${author.id}`}>
                  {author.profile_pic ?
                    <img className='profile-pic-mini' src={author.profile_pic}/> : ''}
                </Link>&ensp;
                <Link className='green' to={`/users/${author.id}`}>
                  {author.username}
                </Link>&nbsp;
                {new Date(Date.now()).getDate() === new Date(post.updated_at).getDate() ?
                  <span className='gray'>at&nbsp;<em>{new Date(post.updated_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})}</em></span> :
                  <span className='gray'>on&nbsp;<em>{new Date(post.updated_at).toLocaleDateString([], {month: 'short', day: 'numeric'})}</em></span>}
                &ensp;<b>({post.audience})</b>
              </div>
              {parentProps.currentUser === author.id ? <div>
                {/* <i className='delete-button fa fa-pencil fa-lg springgreen' onClick={this.update}></i>
                &emsp;*/}<i className='delete-button fa fa-trash fa-lg springgreen' onClick={this.delete}></i></div> : ''}
            </div> : ''}
          </div>
          <div className='flex'>
            {parentProps.users[parentProps.currentUser] ?
              parentProps.users[parentProps.currentUser].liked_post_ids
                .includes(post.id) ?
            <div className='flex-middle'>
              <span className='likes'>{post.likes}</span>
              <i className="fa fa-thumbs-up fa-lg green hover-red"
                 onClick={() => parentProps.unlikePost(post)}></i>
            </div> : <div className='flex-middle'>
              <span className='likes'>{post.likes}</span>
              <i className="fa fa-thumbs-up fa-lg green"
                 onClick={() => parentProps.likePost(post)}></i>
            </div> : ''}
            <p className='post-body'>{post.body}</p>
          </div>
          {/* <p>{post.likes}</p> */}
          {/* 3 most recent comments chron'ly */}
        </article>
        <ul>
          {post.comment_ids.map(id => {
            const comment = parentProps.comments[id];
            if (comment.post_id === post.id) {
              return <Comment key={comment.id} parentProps={parentProps}
                              comment={comment} author={parentProps.users[comment.user_id]} />;
            }
          })}
          <CommentFormContainer key={post.id} postId={post.id} commentId={null}
                                errors={parentProps.errors} />
        </ul>
      </li>
    );
  }
}
