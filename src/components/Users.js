// arquivo Users.js
import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    return (
      <div>
        <h2>{this.props.match.params.id}</h2>
        <p> { greetingsMessage }, My awesome Users component </p>
      </div>
    );
  }
};

export default Users;

