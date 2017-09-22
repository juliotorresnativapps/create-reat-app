import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PatientSearchForm from "../PatientSearchForm/PatientSearchForm";
import PatientList from "../PatientList/PatientList";
import '../_PatientSearchBar.scss';

export default class PatientSearchListLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    patientSearchList: PropTypes.array.isRequired,
    selectedNode: PropTypes.object.isRequired
  }

  render() {
    const { actions, selectedNode, patientSearchList } = this.props;

    return (
      <div className="patient-search-bar">
        <PatientSearchForm selectedNode={selectedNode} searchPatient={actions.setSearchPatientList} />
        <PatientList patientSearchList={patientSearchList}  selectNode={actions.selectNode} setDropdownTableInfo={actions.setDropdownTableInfo} />
      </div>
    );
  }
}
