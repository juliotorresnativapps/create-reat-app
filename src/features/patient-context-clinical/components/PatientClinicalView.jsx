import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as nodeActionCreators } from '../../selected-node/selected-node';
import { actionCreators as patientContextActionCreators } from '../patient-context-clinical';
import PatientClinicalLayout from './PatientClinicalLayout/PatientClinicalLayout';
import PropTypes from 'prop-types';

const mappedActions = { ...nodeActionCreators, ...patientContextActionCreators };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mappedActions, dispatch)
});

const mapStateToProps = (state) => ({
  session: state.session
});


class PatientClinicalView extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    return (
      <PatientClinicalLayout {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientClinicalView);
