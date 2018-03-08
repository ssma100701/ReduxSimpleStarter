import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
    componentWillMount(){
        this.props.fetchUsers();
    }

    renderUser(user) {
        return (
            <div className="card card-block">
                <h4 className="car-title">{user.name}</h4>   
                <p className="card-text">Cheese Factory</p> 
                <a className="btn btn-primary" href={user.website}>Website</a>
            </div>
        )
    }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

function mapStateToProp(state) {
    return { users: state.users };
}



export default connect(mapStateToProp, actions)(UserList);