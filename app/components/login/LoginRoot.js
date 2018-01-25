import React from 'react';
import LoginForm from './LoginForm';

export default class LoginRoot extends React.Component {
  render() {
    return (
      <div className="container">
        <LoginForm onSubmit={this.submit} />
      </div>
    )
  }
}