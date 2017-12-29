import React from 'react';
import PostFormContainer from './postFormContainer';
import PostsIndexItem from './postsIndexItem';
import LoadingIcon from './loadingIcon';
import { Link } from 'react-router-dom';

export default class PostsIndex extends React.Component {
  render() {
    // console.log("PostsIndex props: ", this.props);
    const { users, posts, match, currentUser } = this.props;
    let user;
    if (match.params.id) user = users[match.params.id];
    const parentProps = this.props;

    return (this.props.pageLoading ? <LoadingIcon /> :
      <div className='ghostwhite-100pct' style={{display: 'flex', justifyContent: 'center'}}>
        {match.params.id ? null : <div className='hover-dark'
          style={{marginTop: 15, marginLeft: 8, marginRight: 15,
                  width: 202, height: 730, fontSize: 18, display: 'flex',
                  justifyContent: 'center', alignItems: 'center'}}>
          Links
        </div> }
        <ul style={{width: 450}}>
          {match.params.id && !users[currentUser].friend_ids.includes(parseInt(match.params.id)) ? '' :
          <div>
            <div className='px15'></div>
            <PostFormContainer errors={this.props.errors.session} />
          </div> }
          {posts && posts.all_ids.length > 0 ? posts.all_ids.map(id => {
            const post = posts.by_id[id];

            return <PostsIndexItem key={id} author={users[post.user_id]}
              post={post} parentProps={parentProps}/>;
            }) : <div>{/* welcome message/pop up for new user */}</div>}
        </ul>
        {match.params.id ? null : <div style={{marginLeft: 15, width: 210}}>
          <div style={{height: 350, fontSize: 18, marginTop: 15,
                       display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                       className='hover-dark'>
            Trending</div>
        </div> }
        {match.params.id ? <div className='hover-dark' id='flush'
          style={{position: 'fixed', marginLeft: 571, marginTop: -285,
                       fontSize: 18, width: 249, height: 786, display: 'flex',
                       justifyContent: 'center', alignItems: 'center', borderTop: 'none'}}>
          Chat</div> :
        <div style={{position: 'fixed', marginLeft: 595, marginTop: -1,
                     fontSize: 18, width: 249, height: 787, display: 'flex',
                     justifyContent: 'center', alignItems: 'center'}}
                     className='hover-dark' id='flush'>
          Chat</div> }
      </div>);
  }
}
