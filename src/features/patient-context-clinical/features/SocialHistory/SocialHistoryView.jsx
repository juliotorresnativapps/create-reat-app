import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../patient-context-clinical.js';
import SocialHistoryLayout from './components/SocialHistoryLayout/SocialHistoryLayout';
import PropTypes from 'prop-types';

const mappedActions = { ...actionCreators };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mappedActions, dispatch)
});

const mapStateToProps = (state) => ({
  tableInfo: state.PatientContextClinical.tableInfo,
  currentPage: state.PatientContextClinical.currentPage,
  totalNumberOfEntities: state.PatientContextClinical.totalNumberOfEntities,
  pageSize: state.PatientContextClinical.pageSize,
  selectedColumn: state.PatientContextClinical.selectedColumn,
  selectedColumnModifier: state.PatientContextClinical.selectedColumnModifier,
  session: state.session
});

class SocialHistoryView extends Component {

  static propTypes = {
    columns: PropTypes.array.isRequired,
    resource: PropTypes.string.isRequired
  }

  render() {
    return (
      <SocialHistoryLayout {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialHistoryView);
