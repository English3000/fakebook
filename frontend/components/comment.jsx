import React from 'react';
import CommentReplyForm from './commentReplyForm';

export default ({ comment, author }) => (
  <li>
    <div className='post flex'>
      <Link className='profile-pic-mini' to={`/users/${author.id}`}>
        {author.profile_pic ?
          <img className='profile-pic-mini' src={author.profile_pic}/> : ''}
      </Link>
      <p>
        <Link className='green' to={`/users/${author.id}`}>
          {author.username}
        </Link>&nbsp;{comment.body}
      </p>
    </div>
    <div className='comment-details-row'></div>
    {/* <CommentReplyForm /> */}
  </li>
);
