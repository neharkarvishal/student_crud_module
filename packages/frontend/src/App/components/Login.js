import { connect } from 'react-redux';
import React, { Component } from 'react';
import { adminLoginAction } from '../action/adminLoginAction';
import Div, { Button } from '../htmlTags';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const { loginStatus } = this.props.authentication;
    if (loginStatus === 'authenticated') {
      this.props.history.push('/students');
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = this.state;
    if (!email) {
      return this.setState({ error: 'Error: Email is required' });
    }
    if (!password) {
      return this.setState({ error: 'Error: Password is required' });
    }
    this.props.dispatch(adminLoginAction({ email, password }));
    return this.setState({ error: '' });
  }

  handlePhoneChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  }

  handlePasswordChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  dismissError() {
    this.setState({ error: '' });
  }

  render() {
    const { loginStatus } = this.props.authentication;
    if (loginStatus === 'authenticated') this.props.history.push('/students');
    return (
      <Div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Div
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Div className="Login">
            <form onSubmit={this.handleSubmit}>
              {this.state.error && (
                <h3 data-test="error" onClick={this.dismissError}>
                  <Button onClick={this.dismissError}>✖</Button>
                  {this.state.error}
                </h3>
              )}
              <label>email</label>
              <input
                type="text"
                data-test="email"
                value={this.state.username}
                onChange={this.handlePhoneChange}
              />
              <label>Password</label>
              <input
                type="password"
                data-test="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <input type="submit" value="Log In" data-test="submit" />
            </form>
          </Div>
        </Div>
      </Div>
    );
  }
}

export default connect(
  state => ({
    authentication: state.authentication,
  }),
  null,
)(LoginForm);
