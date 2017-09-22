import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../dashboard';
import DashBoardLayout from './DashboardLayout';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const mapStateToProps = (state) => ({
  session: state.session,
});

class DashboardView extends Component {
  render() {
    return (
      <DashBoardLayout {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
