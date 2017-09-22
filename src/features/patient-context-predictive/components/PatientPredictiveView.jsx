import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as nodeActionCreators } from '../../selected-node/selected-node';
import { actionCreators as patientContextActionCreators } from '../patient-context-predictive.js';
import PatientPredictiveLayout from './PatientPredictiveLayout/PatientPredictiveLayout';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const mappedActions = { ...nodeActionCreators, ...patientContextActionCreators };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mappedActions, dispatch)
});

const mapStateToProps = (state) => ({
  session: state.session
});

class PatientPredictiveView extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    return (
      <PatientPredictiveLayout {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientPredictiveView);
