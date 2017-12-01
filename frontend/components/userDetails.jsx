import React from 'react';

export default class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.users[this.props.match.params.id] ?
                  this.props.users[this.props.match.params.id] :
                  {'intro': '', 'school': '', 'job': '', 'location': '', 'partnership': ''};
    this.update = this.update.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.users[newProps.match.params.id]);
  }

  update(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  render() {
    const {currentUser, match} = this.props;
    const user = this.props.users[match.params.id];

    return (currentUser - match.params.id === 0 ?
      <form key={match.params.id} className='user-details-form' onSubmit={event => {event.preventDefault(); this.props.updateUser(this.state);}}>
      <h2 className='details-title flex-top flex-between'>
        <span>About Me</span>
        {currentUser - match.params.id === 0 ? <input className='submit-button' type='submit' value='update'></input> : ''}
      </h2>
      <textarea className='details-intro' placeholder={currentUser - match.params.id === 0 ? "What you'd like everyone to know about you..." : ''}
                value={user.intro} onChange={this.update('intro')}></textarea>
      <div className='flex-center detail-inputs'>
        <div className="flex-column flex-middle darkgreen">
          <i className="fa fa-map-marker"></i>
          <i className="fa fa-suitcase"></i>
          <i className="fa fa-graduation-cap"></i>
          <i className="fa fa-heart"></i>
        </div>
        <div>
          <input defaultValue={user.location} placeholder={'Location'} onChange={this.update('location')}/>
          <input defaultValue={user.job} placeholder={'Your Job'} onChange={this.update('job')}/>
          <input defaultValue={user.school} placeholder={'School & Degree'} onChange={this.update('school')}/>
          <input defaultValue={user.partnership} placeholder={'Relationship Status'} onChange={this.update('partnership')}/>
        </div>
      </div>
    </form> : <form key={match.params.id} className='user-details-form' readOnly onSubmit={event => event.preventDefault()}>
      <h2 className='details-title flex-top flex-between'>
        <span>About Me</span>
      </h2>
      <textarea className='details-intro' placeholder={currentUser - match.params.id === 0 ? "What you'd like everyone to know about you..." : ''}
                value={user ? user.intro : ''} readOnly></textarea>
      <div className='flex-center detail-inputs'>
        <div className="flex-column flex-middle darkgreen">
          <i className="fa fa-map-marker"></i>
          <i className="fa fa-suitcase"></i>
          <i className="fa fa-graduation-cap"></i>
          <i className="fa fa-heart"></i>
        </div>
        <div>
          <input defaultValue={user ? user.location : ''} placeholder={'Location'} readOnly />
          <input defaultValue={user ? user.job : ''} placeholder={'Your Job'} readOnly />
          <input defaultValue={user ? user.school : ''} placeholder={'School & Degree'} readOnly />
          <input defaultValue={user ? user.partnership : ''} placeholder={'Relationship Status'} readOnly />
        </div>
      </div>
    </form>);
  }
}
