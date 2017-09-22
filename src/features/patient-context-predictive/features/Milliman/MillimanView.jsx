import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../patient-context-predictive.js';
import MillimanLayout from './components/MillimanLayout/MillimanLayout';
import { withRouter } from 'react-router-dom';
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
  extraTable: state.PatientContextPredictive.extraTable,
  score: state.PatientContextPredictive.score,
  selectedColumn: state.PatientContextPredictive.selectedColumn,
  selectedColumnModifier: state.PatientContextPredictive.selectedColumnModifier,
  session: state.session
});

class MillimanView extends Component {

  static propTypes = {
    columns: PropTypes.array.isRequired,
    resource: PropTypes.string.isRequired
  }

  render() {
    return (
      <MillimanLayout {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MillimanView);
