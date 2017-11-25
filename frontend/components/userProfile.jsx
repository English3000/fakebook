import React from 'react';
import merge from 'lodash/merge';
//bug: when switch to another page, cover photo & profile pic don't change
export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.users[this.props.match.params.id] ?
      this.props.users[this.props.match.params.id] : '';

    this.select = this.select.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.users).length < 2) {
      this.props.fetchUsers();
    }
  }

  select(field) {
    //hack from https://stackoverflow.com/questions/5138719/change-default-text-in-input-type-file (Sony Santos)
    return () => document.getElementById(field).click();
  }

  handleSubmit(field) {
    return event => {
      event.preventDefault();
      this.setState({ [field]: event.target.value }, () => this.props.updateUser(this.state));
    };
  }

  render() {
    const { users, match } = this.props;

    return (<div>
      <section>
        <div className='cover-photo' onClick={this.select('select-profile-pic')}>

          {users[match.params.id] && users[match.params.id].cover_photo ? <div>
            <img className='cover-photo' src={users[match.params.id].cover_photo}/>
            <i className='fa fa-pencil-square-o fa-2x palegreen' id='cover-edit'></i>
          </div> : <div>
            <button className='cover-photo-button plus-button' onClick={this.select('select-cover-photo')}>+ cover photo</button>
          </div>}

         <input type="file"
                 id="select-cover-photo"
                  onChange={this.handleSubmit('cover_photo')}/>
        </div>

        <div className='flex-bottom flex-between user-info-div'>
          <div className='flex-bottom'>
            <div className='profile-pic' onClick={this.select('select-profile-pic')}>

              {users[match.params.id] && users[match.params.id].profile_pic ? <div>
                  <img className='profile-pic' src={users[match.params.id].profile_pic}/>
                  <i className='fa fa-pencil-square-o fa-2x palegreen' id='profile-edit'></i>
              </div> : <div>
                  <button className='plus-button' onClick={this.select('select-profile-pic')}>+ profile photo</button>
              </div>}

              <input type="file" id="select-profile-pic"
                     onChange={this.handleSubmit('profile_pic')}/>
            </div>
            <p id='username'>{users[match.params.id] ? users[match.params.id].username : ''}</p>
          </div>
          <div>
            {this.props.currentUser - this.props.currentPage !== 0 ?
              <p className='plus-button friend-button'>+ friend</p> : ''}
          </div>
        </div>
      </section>
    </div>);
  }
}
