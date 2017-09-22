import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const LOGIN_ERRORS = {
  MISSING_USERNAME: 'Username must not be empty.',
  MISSING_PASSWORD: 'Password must not be empty.',
};

export default class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    session: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      validationFailure: false,
      username: undefined,
      password: undefined
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderError = this.renderError.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { username, password } = this.state;

    if (!username) {
      this.setState((prevState) => ({
        ...prevState,
        error: LOGIN_ERRORS.MISSING_USERNAME,
        validationFailure: true }));
    } else if (!password) {
      this.setState((prevState) => ({
        ...prevState,
        error: LOGIN_ERRORS.MISSING_PASSWORD,
        validationFailure: true
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        error: '',
        failed: false }));

      this.props.login(username, password);
    }
  }

  renderError() {
    const { error } = this.state;
    const { loginError } = this.props.session;

    return (error || loginError) ?
      (
        <div className="alert alert-danger">
          <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"/> An error ocurred:
          <p>{error || loginError}</p>
        </div>
      )
      : undefined;
  }

  handleUsername(username) {
    this.setState((prevState) => ({ ...prevState, username: username }));
  }

  handlePassword(password) {
    this.setState((prevState) => ({ ...prevState, password }));
  }

  render() {
    const { handleSubmit, renderError, handleUsername, handlePassword } = this;
    const { loginError } = this.props.session;
    const errorClass = (this.state.validationFailure || !!loginError) ? 'error' : '';

    return (
      <div className="boxed-view">
        <div className="boxed-view__form boxed-view__form--transparent boxed-view__form--small boxed-view__form--small">
          <h1 className="analitico-logo analitico-logo--flat">Analitico</h1>
          <form onSubmit={handleSubmit} className={errorClass}>
            <div className="boxed-view__row">
              <div className=" boxed-view__field">
                <legend hidden>Username</legend>
                <label htmlFor="user[username]" hidden>Username</label>
                <span className="user-icon"/>
                <input type="email" onChange={(evt) => handleUsername(evt.target.value)} placeholder="Username" className="input--glyph" id="user[username]"/>
              </div>
            </div>
            <div className="boxed-view__row">
              <div className="boxed-view__field">
                <legend hidden>Password</legend>
                <label htmlFor="user[password]" hidden>Password</label>
                <span className="lock-icon"/>
                <input type="password" onChange={(evt) => handlePassword(evt.target.value)} placeholder="Password" className="input--glyph" id="user[password]"/>
              </div>
            </div>
            {renderError()}
            <div className="boxed-view__submit">
              <button type="submit" className="anlt-btn anlt-btn--primary anlt-btn--shadow">Log In</button>
            </div>
            <div className="boxed-view__help">
              <NavLink to="/auth/lost" className="link--white">Forgot your password?</NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
