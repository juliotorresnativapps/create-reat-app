import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../patient-context-prevalence.js';
import PatientSectionTableLayout from './components/PatientSectionTableLayout/PatientSectionTableLayout';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const mappedActions = { ...actionCreators };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mappedActions, dispatch)
});

const mapStateToProps = (state) => ({
  tableInfo: state.PatientContextPrevalence.tableInfo,
  currentPage: state.PatientContextPrevalence.currentPage,
  totalNumberOfEntities: state.PatientContextPrevalence.totalNumberOfEntities,
  pageSize: state.PatientContextPrevalence.pageSize,
  selectedColumn: state.PatientContextPrevalence.selectedColumn,
  selectedColumnModifier: state.PatientContextPrevalence.selectedColumnModifier,
  session: state.session
});

class PatientSectionTableView extends Component {

  static propTypes = {
    columns: PropTypes.array.isRequired,
    resource: PropTypes.string.isRequired
  }

  render() {
    return (
      <PatientSectionTableLayout {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientSectionTableView);
