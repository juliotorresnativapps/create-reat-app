import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../session';
import LoginLayout from './LoginLayout/LoginLayout';
import { NAME as sessionManagementName } from '../index';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const mapStateToProps = (state) => ({
  session: state[sessionManagementName]
});


class LoginView extends Component {
  render() {
    return (
      <LoginLayout {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
