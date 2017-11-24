import React from 'react';
//bug: when switch to another page, cover photo & profile pic don't change
export default class UserProfile extends React.Component {
  render() {
    console.log(this.props);
    return (<div>
      <section className='pad-left-12px'>
        <img id='cover-photo' src={this.props.users.cover_photo ? this.props.users.cover_photo : 'http://www.publicdomainpictures.net/pictures/40000/velka/fluffy-clouds.jpg'}/>
        <img id='profile-pic' src={this.props.users.profile_pic ? this.props.users.profile_pic : 'http://3.bp.blogspot.com/-qUH2sD4GWB0/UUn5xBphLjI/AAAAAAAAA2o/MMYWv7n8sNw/s1600/thumb-up-terminator+pablo+M+R.jpg'}/>
        <div className='flex-between row-profile'>
          <p>{this.props.users.username}</p>
          {this.props.currentUser - this.props.currentPage === 0 ? <button className='green-button'>Add Friend</button> : ''}
        </div>
      </section>
    </div>);
  }
}
