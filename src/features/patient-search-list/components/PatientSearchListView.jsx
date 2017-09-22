import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as patientsActionCreators } from '../patient-search-list';
import { actionCreators as nodeActionCreators } from '../../selected-node/selected-node';
import { NAME as patientSearchListName } from '../../patient-search-list';
import { NAME as selectedNodeName } from '../../selected-node';

import PatientSearchListLayout from './PatientSearchListLayout/PatientSearchListLayout';
import { withRouter } from 'react-router-dom';

const mappedActions = { ...nodeActionCreators, ...patientsActionCreators };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mappedActions, dispatch)
});

const mapStateToProps = (state) => ({
  patientSearchList: state[patientSearchListName].patientSearchList,
  selectedNode: state[selectedNodeName].selectedNode
});

class PatientSearchListView extends Component {
  render() {

    return (
      <PatientSearchListLayout {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientSearchListView);
