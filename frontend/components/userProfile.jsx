import React from 'react';
import merge from 'lodash/merge';
//bug: when switch to another page, cover photo & profile pic don't change
export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.users[this.props.match.params.id] ?
                  this.props.users[this.props.match.params.id] :
                  {'username': '', 'profile_pic': '',
                  'cover_photo': '', 'custom_link': '' };

    this.select = this.select.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.users).length < 2) {
      this.props.getUsers();
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.users[newProps.match.params.id]);
  }

  select(field) {
    //hack from https://stackoverflow.com/questions/5138719/change-default-text-in-input-type-file (Sony Santos)
    return () => document.getElementById(field).click();
  }

  handleSubmit(field) {
    return event => {
      event.preventDefault();
      if (field === 'custom_link') {
        // console.log(this.state);
        // console.log(this.props.users[this.props.match.params.id]);
        this.setState({ [field]: $('#custom-link-input').val() }, () => this.props.updateUser(this.state));
      } else {
        this.setState({ [field]: event.target.value }, () => this.props.updateUser(this.state));
      }
    };
  }

  render() {
    const { users, match } = this.props;
    const user = users[match.params.id];

    if (this.props.currentUser - match.params.id === 0) {
      return (<div>
        <section>
          <div className='cover-photo' onClick={this.select('select-cover-photo')}>

            {user && user.cover_photo ? <div>
              <img className='cover-photo' src={user.cover_photo}/>
              <i className='fa fa-pencil-square-o fa-2x palegreen' id='cover-edit'></i>
            </div> : <div>
              <button className='cover-photo-button plus-button'>+ cover photo</button>
            </div>}

           <input type="file"
                   id="select-cover-photo"
                    onChange={this.handleSubmit('cover_photo')}/>
          </div>

          <div className='flex-bottom user-info-div'>
            <div className='profile-pic' onClick={this.select('select-profile-pic')}>
              {user && user.profile_pic ? <div>
                  <img className='profile-pic' src={user.profile_pic}/>
                  <i className='fa fa-pencil-square-o fa-2x palegreen' id='profile-edit'></i>
              </div> : <button className='plus-button'>+ profile photo</button>}

              <input type="file" id="select-profile-pic" onChange={this.handleSubmit('profile_pic')}/>
            </div>

            <div id='username'>{user && user.custom_link ?
              <a href={user.custom_link} target='_blank'>
                {user.username}
              </a> : user ? user.username : ''}&nbsp;
              <i className='fa fa-link' onClick={() => $('.fa-link').toggleClass('visible')}>
                &nbsp;<form id='custom-link-form' onSubmit={this.handleSubmit('custom_link')}>
                  <input type='url' id='custom-link-input' placeholder='http://Set-Custom-Link' defaultValue={this.state.custom_link} />
                  <input type='submit' value='save'/>
                </form>
              </i>
            </div>
          </div>
        </section>
      </div>);
    } else {
      return (<div>
        <section>
          <div className='cover-photo'>
            {user && user.cover_photo ? <div>
              <img className='cover-photo' src={user.cover_photo}/>
            </div> : ''}
          </div>

          <div className='flex-bottom user-info-div'>
            <div className='profile-pic no-pointer'>
              {user && user.profile_pic ? <div>
                <img className='profile-pic no-pointer' src={user.profile_pic}/>
              </div> : ''}
            </div>

            <div id='username'>{user && user.custom_link ?
              <a href={user.custom_link} target='_blank'>
                {user.username}
              </a> : user ? user.username : ''}
            </div>

            <button className='plus-button friend-button'>+ friend</button>
          </div>
        </section>
      </div>);
    }
  }
}
