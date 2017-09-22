import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../patient-context-predictive.js';
import ComplianceLayout from './components/ComplianceLayout/ComplianceLayout';
import PropTypes from 'prop-types';

const mappedActions = { ...actionCreators };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mappedActions, dispatch)
});

const mapStateToProps = (state) => ({
  tableInfo: state.PatientContextPredictive.tableInfo,
  currentPage: state.PatientContextPredictive.currentPage,
  totalNumberOfEntities: state.PatientContextPredictive.totalNumberOfEntities,
  pageSize: state.PatientContextPredictive.pageSize,
  score: state.PatientContextPredictive.score,
  selectedColumn: state.PatientContextPredictive.selectedColumn,
  selectedColumnModifier: state.PatientContextPredictive.selectedColumnModifier,
  session: state.session
});


class ComplianceView extends Component {

  static propTypes = {
    columns: PropTypes.array.isRequired,
    resource: PropTypes.string.isRequired
  }

  render() {
    return (
      <ComplianceLayout {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplianceView);
