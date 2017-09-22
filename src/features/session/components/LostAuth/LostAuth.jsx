import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import api from '../../../../app/api.js';
import { ENDPOINTS } from '../../endpoints';

const LOST_AUTH_ERRORS = {
  MISSING_EMAIL: 'Email must not be empty.'
};

export default class LostAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      validationFailure: false,
      operationSucceeded: false,
      resettingPassword: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderSuccess = this.renderSuccess.bind(this);
    this.handleInputchange = this.handleInputchange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const email = this.state.email;

    if (!email) {
      this.setState((prevState) => ({
        ...prevState,
        error: LOST_AUTH_ERRORS.MISSING_EMAIL,
        validationFailure: true
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState, error: '',
        validationFailure: false,
        resettingPassword: true
      }));

      api.post(ENDPOINTS.FORGOT_PASSWORD, { email })
        .then(() =>
          this.setState((prevState) => ({
            ...prevState,
            operationSucceeded: true,
            resettingPassword: false
          })
        ))
        .catch((err) =>
          this.setState((prevState) => ({
            ...prevState,
            error: err.response.data.message,
            operationSucceeded: false,
            resettingPassword: false
          }))
        );
    }
  }

  renderError() {
    return this.state.error ?
      (
        <div className="alert alert-danger">
          <div className=""><span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"/> An error ocurred.</div>
          <p>{this.state.error}</p>
        </div>
      )
      : undefined;
  }

  renderSuccess() {
    return this.state.operationSucceeded && !this.state.validationFailure ?
      (
        <div className="alert alert-success">
          <div className="header">
            <strong>Operation Successful</strong>
          </div>
          <p>Check your email in the next few minutes.</p>
        </div>
      )
      : undefined;
  }

  handleInputchange(email) {
    this.setState((prevState) => ({ ...prevState, email }));
  }

  render() {
    const { handleSubmit, renderError, renderSuccess, handleInputchange } = this;
    const { validationFailure, error, operationSucceeded } = this.state;
    const didFail = validationFailure || !!error;

    return (
      <div className="layout">
        <div className="boxed-view">
          <div className="boxed-view__form boxed-view__form--large">
            <h1 className="analitico-logo">Analitico</h1>
            <form onSubmit={handleSubmit} className={`${didFail ? 'error' : ''} ${operationSucceeded ? 'success' : ''} `}>
              <h2 className="boxed-view__title">Password Recovery</h2>
              <div className="boxed-view__row">
                <div className="boxed-view__field">
                  <label htmlFor="user[email]" hidden> Email</label>
                  <input type="text" onChange={(evt) => handleInputchange(evt.target.value)} placeholder="Email" id="user[email]" className="boxed-view__input" />
                </div>
              </div>
              {renderError()}
              {renderSuccess()}
              <div className="boxed-view__submit">
                <button type="submit" className="anlt-btn anlt-btn--primary anlt-btn--large">Recover Password</button>
              </div>
              <div className="boxed-view__help">
                <NavLink to="/auth" className="link--black">Already have an account?</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
