import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as nodeActionCreators } from '../../selected-node/selected-node';
import PatientContextLayout from './PatientContextLayout/PatientContextLayout';
import { NAME as patientSearchListName } from '../../patient-search-list';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const mappedActions = { ...nodeActionCreators };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mappedActions, dispatch)
});

const mapStateToProps = (state) => ({
  patientSearchList: state[patientSearchListName].patientSearchList,
  dropwdownTableInfo: state[patientSearchListName].dropwdownTableInfo
});

class PatientContextView extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    return (
      <PatientContextLayout {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientContextView);
