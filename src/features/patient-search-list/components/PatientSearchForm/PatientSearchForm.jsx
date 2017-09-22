import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PatientSearchForm extends Component {

  static propTypes = {
    searchPatient: PropTypes.func.isRequired,
    selectedNode: PropTypes.object.isRequired,
    setDropdownTableInfo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  getPatientList(first_name, last_name, mrn, dob){
    this.props.searchPatient(first_name, last_name, mrn, dob);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" className="form-control" id="patientFirstName" placeholder="First Name" />
        </div>
        <div>
          <input type="text" className="form-control" id="patientLastName" placeholder="Last Name" />
        </div>
        <div>
          <input type="text" className="form-control" id="MRN" placeholder="MRN" />
        </div>
        <div>
          <input type="text" className="form-control" id="DOB" placeholder="DOB" />
        </div>
        <button type="submit" className="btn btn-default" >Search</button>
      </div>

    );
  }

}

//onClick={()=> this.getPatientList(patientFirstName.value, patientLastName.value, MRN.value, DOB.value, this.props.selectedNode)}