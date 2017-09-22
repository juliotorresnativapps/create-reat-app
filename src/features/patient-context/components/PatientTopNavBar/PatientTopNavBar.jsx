import React, { Component } from 'react';
import './../../../../styles/components/_TopBar.scss';
import PropTypes from 'prop-types';
import PatientSearchListView from '../../../patient-search-list/components/PatientSearchListView';

export default class PatientTopNavBar extends Component {

  static propTypes = {
    selectedNode: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  getPatientName() {
    const { selectedNode } = this.props;
    var patient = 'Please select a patient';
    if (selectedNode.node_type === 'PAT') {
      patient = selectedNode.first_name + ' ' + selectedNode.last_name;

    }

    return patient;
  }

  render() {

    const patient = this.getPatientName();

    return (
      <div className="nav top-nav-bar">
        <div className="" role="tab" id="collapseAppointmentToggle">
          <i className="top-nav-bar__label">{patient}</i>
          <a role="button" className="top-nav-bar__label" data-toggle="collapse" data-parent="#appointmentTableAccordion" href="#collapseAppointmentTable"
            aria-expanded="true" aria-controls="collapseOne">v
          </a>
        </div>
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Dropdown
          <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <PatientSearchListView />
          </ul>
        </div>
      </div>
    );
  }

}
